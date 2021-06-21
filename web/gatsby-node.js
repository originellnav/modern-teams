const { isFuture } = require("date-fns");
/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const { format } = require("date-fns");

async function createNewPages(graphql, actions) {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allSanityPost(
        filter: { slug: { current: { ne: null } }, publishedAt: { ne: null } }
      ) {
        edges {
          node {
            id
            publishedAt
            slug {
              current
            }
          }
        }
      }
      allSanityCompany(filter: { slug: { current: { ne: null } } }) {
        edges {
          node {
            id
            slug {
              current
            }
          }
        }
      }
      allSanityCategory {
        edges {
          node {
            slug {
              current
            }
            id
          }
        }
      }
    }
  `);

  if (result.errors) throw result.errors;

  const postEdges = (result.data.allSanityPost || {}).edges || [];
  const companyEdges = (result.data.allSanityCompany || {}).edges || [];
  const categoryEdges = (result.data.allSanityCategory || {}).edges || [];

  postEdges
    .filter((edge) => !isFuture(new Date(edge.node.publishedAt)))
    .forEach((edge) => {
      const { id, slug = {}, publishedAt } = edge.node;
      const dateSegment = format(new Date(publishedAt), "yyyy/MM");
      const path = `/blog/${dateSegment}/${slug.current}/`;

      createPage({
        path,
        component: require.resolve("./src/templates/blog-post.js"),
        context: { id },
      });
    });

  companyEdges.forEach((edge) => {
    const { id, slug = {} } = edge.node;
    const path = `/companies/${slug.current}/`;

    createPage({
      path,
      component: require.resolve("./src/templates/company-page.js"),
      context: { id },
    });
  });

  categoryEdges.forEach((edge) => {
    const { id, slug = {} } = edge.node;
    const path = `/categories/${slug.current}/`;

    createPage({
      path,
      component: require.resolve("./src/templates/category.js"),
      context: { id },
    });
  });
}

exports.createPages = async ({ graphql, actions }) => {
  await createNewPages(graphql, actions);
};

exports.createResolvers = ({ createResolvers }) => {
  const resolvers = {
    SanityCategory: {
      companies: {
        type: ["SanityCompany"],
        resolve(source, args, context, info) {
          return context.nodeModel.runQuery({
            type: "SanityCompany",
            query: {
              filter: {
                categories: {
                  elemMatch: {
                    _id: {
                      eq: source._id,
                    },
                  },
                },
              },
            },
          });
        },
      },
    },
  };
  createResolvers(resolvers);
};

module.exports.onPreInit = () => {
  const carouselSrcFile =
    "node_modules/@brainhubeu/react-carousel/lib/react-carousel.js";

  if (!fs.existsSync(carouselSrcFile)) return;

  fs.writeFileSync(
    carouselSrcFile,
    fs
      .readFileSync(carouselSrcFile, "utf8")
      .replace("(window,", `(typeof window==='undefined'?{}:window,`)
  );
};
