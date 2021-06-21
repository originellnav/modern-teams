import React from "react";
import * as styles from "./companyPage.module.css";
import SEO from "./seo";
import { GatsbyImage } from "gatsby-plugin-image";
import { getGatsbyImageData } from "gatsby-source-sanity";
import clientConfig from "../../client-config";
import PortableText from "./portableText";
import { Link } from "gatsby";
import { buildImageObj } from "../lib/helpers";
import { imageUrlFor } from "../lib/image-url";
import JobCard from "./jobCard";
import loadable from "@loadable/component";

const CompanyPageCarousel = loadable(() => import("./companyPageCarousel"));

const companyPage = (props) => {
  const {
    _rawValuesBody,
    _rawPerksBenefitsBody,
    _rawFurtherReadingBody,
    _rawCompanyHeadingBody,
    companyName,
    categories,
    companyLogo,
    mediaArray,
  } = props;
  const gatsbyImageData = getGatsbyImageData(
    companyLogo,
    {
      placeholder: "blurred",
      layout: "constrained",
      width: 150,
    },
    clientConfig.sanity
  );
  return (
    <>
      <SEO title={companyName} />
      <main className={styles.root}>
        <section className={styles.headingRowContainer}>
          <div className={styles.logoBackground}>
            <GatsbyImage
              image={gatsbyImageData}
              alt={companyLogo.alt}
              caption={companyLogo.caption}
            />
          </div>
          <section className={styles.headingWrapper}>
            <section className={styles.innerWrapper}>
              <article className={styles.headingBodyWrapper}>
                {_rawCompanyHeadingBody && (
                  <PortableText blocks={_rawCompanyHeadingBody} />
                )}
              </article>
              <aside className={styles.mediaLinkWrapper}>
                {mediaArray.map((node, index) => (
                  <span key={index}>
                    <Link to={node.url} className={styles.mediaLink}>
                      <img
                        src={imageUrlFor(buildImageObj(node.icon))
                          .width(20)
                          .height(20)
                          .auto("format")}
                        className={styles.mediaIcon}
                      />
                      {node.linkDescriptor}
                    </Link>
                  </span>
                ))}
              </aside>
            </section>
          </section>
        </section>
        <section className={styles.contentRowContainer}>
          <article className={styles.jobCardWrapper}>
            <CompanyPageCarousel>
              <JobCard />
              <JobCard />
              <JobCard />
              <JobCard />
            </CompanyPageCarousel>
          </article>
          <div className={styles.contentRowInnerContainer}>
            <section className={styles.contentWrapper}>
              <div className={styles.contentLabel}>Values</div>
              <article className={styles.body}>
                {_rawValuesBody && <PortableText blocks={_rawValuesBody} />}
              </article>
              <div className={styles.contentLabel}>Perks and Benefits</div>
              <article className={styles.body}>
                {_rawPerksBenefitsBody && (
                  <PortableText blocks={_rawPerksBenefitsBody} />
                )}
              </article>
              <div className={styles.contentLabel}>Further Reading</div>
              <article className={styles.body}>
                {_rawFurtherReadingBody && (
                  <PortableText blocks={_rawFurtherReadingBody} />
                )}
              </article>
            </section>
            <section className={styles.categoryItemWrapper}>
              <div className={styles.contentLabel}>Categories</div>
              <div className={styles.categoryItemBody}>
                <ul>
                  {categories.map((category) => (
                    <li className={styles.categoryItem} key={category._id}>
                      {category.title}
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          </div>
        </section>
      </main>
    </>
  );
};

export default companyPage;
