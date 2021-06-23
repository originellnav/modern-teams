async function createNewPages(graphql, actions) {
  const { createPage } = actions;
  const result = await graphql(`
    {
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

  const companyEdges = (result.data.allSanityCompany || {}).edges || [];
  const categoryEdges = (result.data.allSanityCategory || {}).edges || [];

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
