import { Link } from "gatsby";
import React from "react";

import * as styles from "./header.module.css";

const Header = () => (
  <div className={styles.root}>
    <h1>Find forward-thinking companies</h1>
    <h2>Work from anywhere</h2>
    <p>
      Listed companies have passed our sniff test for providing their teams with
      the freedom and flexibility to do their best work.
    </p>
  </div>
);

export default Header;
