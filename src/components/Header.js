import React from "react";
import { Nav, Navbar, NavItem, NavLink } from "reactstrap";


const Header = () => {
  return (
    <>
    <div className="jumbotron">
    <div className="container-fluid">
            <h2>Hey There!</h2>
            <h1>If you never know what's going on with your phone, (or technology in general) we can help
                you out! Reach out and learn more or subscribe now if you're ready!</h1>
        </div>
        </div>
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
