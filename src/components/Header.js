import React from "react";
import { Nav, Navbar, NavItem, NavLink } from "reactstrap";

const Header = () => {
  return (
    <>
      <Navbar sticky="top">
        <div className="container">
          <Nav navbar>
            <NavItem>
              <NavLink className="nav-link" to="/home">
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to="/contact">
                Contact
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to="/help">
                Help
              </NavLink>
            </NavItem>
          </Nav>
        </div>
      </Navbar>
    </>
  );
};

export default Header;
