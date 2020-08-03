import React from "react";
import s from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={s.footer}>
      <div className="container">
        <p className={s.footerTitle}>Бортжурнал 2020</p>
      </div>
    </div>
  );
};

export default Footer;
