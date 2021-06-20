import React from "react";
import * as styles from "./companyPage.module.css";
import PortableText from "./portableText";
import { GatsbyImage } from "gatsby-plugin-image";
import { getGatsbyImageData } from "gatsby-source-sanity";
import clientConfig from "../../client-config";
import { Link } from "gatsby";
import { buildImageObj } from "../lib/helpers";
import { imageUrlFor } from "../lib/image-url";

const companyPage = (props) => {
  const {
    _rawCompanyBody,
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
    <article className={styles.root}>
      <div className={styles.headingRowContainer}>
        <div className={styles.headingWrapper}>
          <GatsbyImage
            image={gatsbyImageData}
            alt={companyLogo.alt}
            caption={companyLogo.caption}
          />
          <div className={styles.innerWrapper}>
            <div className={styles.headingBodyWrapper}>
              {_rawCompanyHeadingBody && (
                <PortableText blocks={_rawCompanyHeadingBody} />
              )}
            </div>
            <div className={styles.mediaLinkWrapper}>
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
              <div className={styles.categoryItemWrapper}>
                {categories.map((category) => (
                  <div className={styles.categoryItem} key={category._id}>
                    {category.title}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.contentRowContainer}>
        <div className={styles.contentWrapper}>
          <div className={styles.body}>
            {_rawCompanyBody && <PortableText blocks={_rawCompanyBody} />}
          </div>
        </div>
      </div>
    </article>
  );
};

export default companyPage;
