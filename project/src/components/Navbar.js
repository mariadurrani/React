import "./NavbarStyles.css";
import React from "react";
import { MenuItems } from "./Menuitems";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="NavbarItems">
      <h1 className="navbar-logo">TRAVL</h1>
      <ul className="nav-menu">
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              {
                <Link className={item.cName} to={item.url}>
                  {item.title}
                </Link>
              }
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Navbar;
