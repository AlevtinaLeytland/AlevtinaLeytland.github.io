import React, { useState, useRef } from "react";

import { Link } from "react-router-dom";
import "./Header.css";
import banner from "../../Assets/banner.jpg";
import { slide as Menu } from "react-burger-menu";

export default function Header() {
  const [isOpen, setOpen] = useState(false);
  const menuRef = useRef(null);

  return (
    <div>
      <nav className="header-container">
        <div className="quote">
          A hero is someone who understands responsibility which comes with his
          freedom. <br />
          <span className="quote-author">Bob Dylan</span>
        </div>
        <img className="banner-img" src={banner} />
        <ul className="nav-menu">
          <li>
            <Link to={"/"}>HOME</Link>
          </li>
          <li>
            <Link to={"aboutUs"}>ABOUT US</Link>
          </li>
          <li onClick={() => setOpen((prev) => !prev)}>
            <span>PERMACULTURE</span>
            <ul className={`permaculture-list ${isOpen ? "active" : ""}`}>
              <li>
                <Link to={"plantLibrary"}>Plant Library</Link>
              </li>
              <li>Disease Library</li>
              <li>FAQ</li>
            </ul>
          </li>
          <li>TECHNOLOGIES</li>
          <li>FARMING</li>
        </ul>
      </nav>
    </div>
  );
}
