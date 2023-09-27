import React from "react";
import IntroServices from "./IntroServices";
import FooterMenu from "./FooterMenu";
import FooterEnd from "./FooterEnd";

const Footer = () => {
  return (
    <footer className="footer mt-auto">
      <div className="a-container footer__content">
        <IntroServices />
        <hr className="a-divider mt-6"></hr>
        <FooterMenu />
        <FooterEnd />
      </div>
    </footer>
  );
};

export default Footer;
