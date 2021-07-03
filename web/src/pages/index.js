import React from "react";
import { graphql } from "gatsby";
import GraphQLErrorList from "../components/graphql-error-list";
import Seo from "../components/seo";
import FeaturedGrid from "../components/featuredGrid";
import CompanyCard from "../components/companyCard";
import Layout from "../containers/layout";
import HomepageHeader from "../components/homepageHeader";
import HomepageCTA from "../components/homepageCTA";

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
    home: sanityHome {
      featured {
        companyName
        companyExcerpt
        _key
        slug {
          current
        }
        companyLogo {
          alt
          caption
          asset {
            _id
          }
        }
      }
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
      <HomepageHeader />
      <FeaturedGrid>
        {home.featured.map((company) => (
          <CompanyCard
            key={company._key}
            logoSrc={company.companyLogo}
            logoAlt={company.companyLogo.alt}
            logoCap={company.companyLogo.caption}
            companyName={company.companyName}
            companyExcerpt={company.companyExcerpt}
            companyPage={company.slug.current}
          />
        ))}
      </FeaturedGrid>
      <HomepageCTA />
    </>
  );
};

export default IndexPage;
