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
  fragment SanityImage on SanityMainImage {
    crop {
      _key
      _type
      top
      bottom
      left
      right
    }
    hotspot {
      _key
      _type
      x
      y
      height
      width
    }
    asset {
      _id
    }
  }

  query IndexPageQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
      description
      keywords
    }
    posts: allSanityPost(
      limit: 6
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
    home: sanityHome {
      homepageHeading
      homepageSubheading
    }
  }
`;

const IndexPage = (props) => {
  const { data, errors } = props;

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    );
  }

  const site = (data || {}).site;
  const home = (data || {}).home;
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
            key={node.id}
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

export default IndexPage;
