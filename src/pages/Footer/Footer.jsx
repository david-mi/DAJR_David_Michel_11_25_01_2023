import React from 'react';
import styles from "./footer.module.scss";
import KasaLogo from "../../components/Common/KasaLogo";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <KasaLogo className={styles.logo} />
      <p className={styles.copyright}>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
};

export default Footer;