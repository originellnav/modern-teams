/* eslint-disable react/no-multi-comp, react/no-did-mount-set-state */
import React from "react";
import PropTypes from "prop-types";
import { format } from "date-fns";
import styles from "./IframePreview.module.css";

/**
 * Explore more examples of previews:
 * https://www.sanity.io/blog/evolve-authoring-experiences-with-views-and-split-panes
 */

const assemblePostUrl = ({ displayed, options }) => {
  const { slug, publishedAt } = displayed;
  const { previewURL } = options;
  if (!slug || !previewURL) {
    console.warn("Missing slug or previewURL", { slug, previewURL });
    return "";
  }
  const dateSegment = format(new Date(publishedAt), "yyyy/MM");
  const path = `/${dateSegment}/${slug.current}/`;
  return `${previewURL}/blog${path}`;
};

const assembleCompanyUrl = ({ displayed, options }) => {
  const { slug } = displayed;
  const { previewURL } = options;
  if (!slug || !previewURL) {
    console.warn("Missing slug or previewURL", { slug, previewURL });
    return "";
  }
  const path = `/${slug.current}/`;
  return `${previewURL}/companies${path}`;
};

const IframePreview = (props) => {
  const { options } = props;
  const { displayed } = props.document;

  if (!displayed) {
    return (
      <div className={styles.componentWrapper}>
        <p>There is no document to preview</p>
      </div>
    );
  }

  const blogUrl = assemblePostUrl({ displayed, options });
  const companyUrl = assembleCompanyUrl({ displayed, options });

  if (!blogUrl && !companyUrl) {
    return (
      <div className={styles.componentWrapper}>
        <p>Hmm. Having problems constructing the web front-end URL.</p>
      </div>
    );
  }

  if (displayed._type == "post") {
    return (
      <div className={styles.componentWrapper}>
        <div className={styles.iframeContainer}>
          <iframe src={blogUrl} frameBorder={"0"} />
        </div>
      </div>
    );
  }

  if (displayed._type == "company") {
    return (
      <div className={styles.componentWrapper}>
        <div className={styles.iframeContainer}>
          <iframe src={companyUrl} frameBorder={"0"} />
        </div>
      </div>
    );
  }
};

IframePreview.propTypes = {
  document: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  options: PropTypes.object, // eslint-disable-line react/forbid-prop-types
};

IframePreview.defaultProps = {
  document: null,
};

export default IframePreview;
