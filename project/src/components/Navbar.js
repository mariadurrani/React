import "./NavbarStyles.css";
import React from "react";
import { MenuItems } from "./Menuitems";

function Navbar() {
  return (
    <nav className="NavbarItems">
      <h1 className="navbar-logo">TRAVL</h1>
      <ul className="nav-menu">
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              {
                <a className={item.cName} href="/">
                  {item.title}
                </a>
              }
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Navbar;
