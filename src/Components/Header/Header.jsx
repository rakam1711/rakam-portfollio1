/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useState } from "react";
import "./Header.css";

const Header = () => {
  const [toggle, showMenu] = useState(false);
  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav_logo">
          Rakam Nagar
        </a>

        <div className={toggle ? "nav_menu show_menu" : "nav_menu"}>
          <ul className="nav_list grid">
            <li className="nav_item">
              <a href="#home" className="nav_link active-link">
                <i className="uil uil-estate nav_icon"></i> Home
              </a>
            </li>
            <li className="nav_item">
              <a href="#about" className="nav_link">
                <i className="uil uil-user nav_icon"></i> About
              </a>
            </li>
            <li className="nav_item">
              <a href="#skills" className="nav_link">
                <i className="uil uil-file-alt nav_icon"></i> Skills
              </a>
            </li>
            {/* <li className="nav_item">
                        <a href="" className="nav_link">
                            <i className="uil uil- nav_icon"></i>
                        </a>
                    </li> */}
            <li className="nav_item">
              <a href="#contact" className="nav_link">
                <i className="uil uil-message nav_icon"></i> Contact
              </a>
            </li>
          </ul>
          <i
            className="uil uil-times nav_close"
            onClick={() => showMenu(!toggle)}
          ></i>
        </div>
        <div className="nav_toggle" onClick={() => showMenu(!toggle)}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
