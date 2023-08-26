import React from "react";
import { Outlet } from "react-router-dom";
import NavbarMenu from "../shared/Header/NavbarMenu";

const Layout = () => {
  return (
    <div>
      <NavbarMenu></NavbarMenu>
      <Outlet></Outlet>
    </div>
  );
};

export default Layout;
