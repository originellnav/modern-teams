import React from "react";
import { graphql } from "gatsby";
import GraphQLErrorList from "../components/graphql-error-list";
import SEO from "../components/seo";
import Container from "../components/container";
import CompanyPage from "../components/companyPage";

export const query = graphql`
  query CompanyPageTemplateQuery($id: String!) {
    company: sanityCompany(id: { eq: $id }) {
      id
      categories {
        _id
        title
      }
      companyLogo {
        ...SanityImage
        alt
        caption
      }
      companyName
      slug {
        current
      }
      companyExcerpt
      _rawCompanyBody(resolveReferences: { maxDepth: 5 })
      _rawCompanyHeadingBody(resolveReferences: { maxDepth: 5 })
      mediaArray {
        icon {
          asset {
            _id
          }
        }
        linkDescriptor
        url
      }
    }
  }
`;

const companyPageTemplate = (props) => {
  const { data, errors } = props;
  const company = data && data.company;

  return (
    <>
      {errors && <SEO title="GraphQL Error" />}
      {company && (
        <SEO
          title={company.companyName || "Untitled"}
          description={company.companyExcerpt}
          image={company.companyLogo}
        />
      )}

      {errors && (
        <Container>
          <GraphQLErrorList errors={errors} />
        </Container>
      )}

      {company && <CompanyPage {...company} />}
    </>
  );
};

export default companyPageTemplate;
