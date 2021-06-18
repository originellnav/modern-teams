import React from "react";
import { graphql } from "gatsby";
import SEO from "../components/seo";
import Container from "../components/container";
import GraphQLErrorList from "../components/graphql-error-list";
import CategoryPage from "../components/categoryPage";

export const query = graphql`
  query CategoryTemplateQuery($id: String!) {
    category: sanityCategory(id: { eq: $id }) {
      companies {
        _id
        companyExcerpt
        companyLogo {
          asset {
            _id
          }
          ...SanityImage
          caption
          alt
        }
        companyName
        slug {
          current
        }
      }
    }
  }
`;

const categoryPageTemplate = (props) => {
  const { data, errors } = props;
  const category = data && data.category;

  return (
    <>
      {errors && <SEO title="GraphQL Error" />}
      {category && (
        <SEO
          title={category.companyName || "Untitled"}
          description={category.description}
        />
      )}

      {errors && (
        <Container>
          <GraphQLErrorList errors={errors} />
        </Container>
      )}

      {category && <CategoryPage {...category} />}
    </>
  );
};

export default categoryPageTemplate;
