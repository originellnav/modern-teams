import React from "react";
import HomeHeader from "./homeHeader";
import CompanyGrid from "./companyGrid";
import CompanyCard from "./companyCard";

const categoryPage = ({ title, description, companies }) => {
  return (
    <div>
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
    </div>
  );
};

export default categoryPage;
