import React from "react";
import s from "./Logo.module.css";
import { NavLink } from "react-router-dom";

const Logo = () => {
  return (
    <div className={s.logo}>
      <NavLink to="/home">Бортжурнал</NavLink>
    </div>
  );
};
export default Logo;
