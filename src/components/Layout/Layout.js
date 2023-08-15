import React from "react";
import "./Layout.css";
import Header from "../Header/Header";
import MainContent from "../MainContent/MainContent";
import Footer from "../Footer/Footer";
import Sidebar from "../Sidebar/Sidebar";
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
