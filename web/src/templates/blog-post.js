import React from "react";
import GraphQLErrorList from "../components/graphql-error-list";
import Container from "../components/container";
import SEO from "../components/seo";
import BlogPost from "../components/blog-post";
import { toPlainText } from "../lib/helpers";

const BlogPostTemplate = (props) => {
  const { data, errors } = props;
  const post = data && data.post;
  return (
    <>
      {errors && <SEO title="GraphQL Error" />}
      {post && (
        <SEO
          title={post.title || "Untitled"}
          description={toPlainText(post._rawExcerpt)}
          image={post.mainImage}
        />
      )}

      {errors && (
        <Container>
          <GraphQLErrorList errors={errors} />
        </Container>
      )}

      {post && <BlogPost {...post} />}
    </>
  );
};

export default BlogPostTemplate;
