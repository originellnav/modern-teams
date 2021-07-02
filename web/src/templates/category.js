import React from "react";
import { graphql } from "gatsby";
import Seo from "../components/seo";
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

const CategoryPageTemplate = (props) => {
  const { data, errors } = props;
  const category = data && data.category;

  return (
    <>
      {errors && <Seo title="GraphQL Error" />}
      {category && (
        <Seo
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

export default CategoryPageTemplate;
