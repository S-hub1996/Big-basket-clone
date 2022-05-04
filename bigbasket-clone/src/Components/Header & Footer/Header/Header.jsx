import React from "react";
import { Nav } from "../Header/HeaderElement";
// import { Link } from "react-router-dom";


const Header = () => {
  return (
    <>
      <div>
        <Nav className="header">
          <div className="big-basket-logo">
            <i className="big-basket-logo"></i>
          </div>
          
        </Nav>
      </div>
    </>
  );
};

export default Header;
