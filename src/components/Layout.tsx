import React from "react";
import Header from "./Header/Header";
import styles from "../styles/Layout.module.css";
import Footer from "./Footer/Footer";
const Layout = ({ children }: any) => {
  return (
    <div className={styles.layout}>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
