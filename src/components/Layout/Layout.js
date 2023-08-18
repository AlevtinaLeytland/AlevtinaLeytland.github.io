import React from "react";
import "./Layout.css";
import Header from "../Header/Header";

import Footer from "../Footer/Footer";

import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
      <Header />
      <div className="main-section">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
export default Layout;
