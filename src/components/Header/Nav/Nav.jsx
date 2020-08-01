import React from "react";
import s from "./Nav.module.css";
import NavItem from "./NavItem/NavItem";

const Nav = () => {
  return (
    <nav className={s.nav}>
      <NavItem path={"/home"} name={"Главная"} />
      <NavItem path={"/bmw-e46"} name={"BMW e46"} />
    </nav>
  );
};

export default Nav;
