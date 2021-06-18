import GraphQLErrorList from "../components/graphql-error-list";
import React from "react";
import SEO from "../components/seo";
import Container from "../components/container";
import BlogPostPreviewGrid from "../components/blog-post-preview-grid";
import { graphql } from "gatsby";
import { mapEdgesToNodes } from "../lib/helpers";
import { responsiveTitle1 } from "../components/typography.module.css";

export const query = graphql`
  query ArchivePageQuery {
    posts: allSanityPost(
      sort: { fields: [publishedAt], order: DESC }
      filter: { slug: { current: { ne: null } }, publishedAt: { ne: null } }
    ) {
      edges {
        node {
          id
          publishedAt
          mainImage {
            ...SanityImage
            alt
          }
          title
          _rawExcerpt
          slug {
            current
          }
        }
      }
    }
  }
`;

const ArchivePage = (props) => {
  const { data, errors } = props;

  if (errors) {
    return (
      <>
        <GraphQLErrorList errors={errors} />
      </>
    );
  }

  const postNodes = data && data.posts && mapEdgesToNodes(data.posts);

  return (
    <>
      <SEO title="Archive" />
      <Container>
        <h1 className={responsiveTitle1}>Archive</h1>
        {postNodes && postNodes.length > 0 && (
          <BlogPostPreviewGrid nodes={postNodes} />
        )}
      </Container>
    </>
  );
};

export default ArchivePage;
