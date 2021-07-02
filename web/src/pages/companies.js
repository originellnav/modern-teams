import React from "react";
import { graphql } from "gatsby";
import GraphQLErrorList from "../components/graphql-error-list";
import Layout from "../containers/layout";
import Seo from "../components/seo";
import HomeHeader from "../components/homeHeader";
import CompanyGrid from "../components/companyGrid";
import CompanyCard from "../components/companyCard";
import { mapEdgesToNodes } from "../lib/helpers";

export const query = graphql`
  query CompaniesPageQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
      description
      keywords
    }
    companies: allSanityCompany(sort: { fields: [companyName], order: ASC }) {
      edges {
        node {
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
  }
`;

const CompaniesPage = (props) => {
  const { data, errors } = props;

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    );
  }

  const site = (data || {}).site;
  const companies = (data || {}).companies
    ? mapEdgesToNodes(data.companies)
    : [];

  if (!site) {
    throw new Error(
      'Missing "Site settings". Open the studio at http://localhost:3333 and add some content to "Site settings" and restart the development server.'
    );
  }

  return (
    <>
      <Seo
        title={site.title}
        description={site.description}
        keywords={site.keywords}
      />
      <HomeHeader />
      <CompanyGrid>
        {companies.map((node) => (
          <CompanyCard
            key={node._id}
            logoSrc={node.companyLogo}
            logoAlt={node.companyLogo.alt}
            logoCap={node.companyLogo.caption}
            companyName={node.companyName}
            companyExcerpt={node.companyExcerpt}
            companyPage={node.slug.current}
          />
        ))}
      </CompanyGrid>
    </>
  );
};

export default CompaniesPage;
