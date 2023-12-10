import React, { useState } from 'react';
import { Link } from "react-router-dom";
import '../styles/navbar.css';



const Navbar = () => {
  const [selectedLink, setSelectedLink] = useState(null); 

  const handleLinkClick = (link) => {
    setSelectedLink(link); 
  };

  return (
    <div className="navbar">
     
        <div className="navbar-brand">
          <div className="text">Wrench it</div>
        </div>

        <div className="navbar-item">
          <div className="text">
            <Link to="/"  style={{ color: selectedLink === "/" ? "#fff" : "#868e96", textDecoration: "none" }} onClick={() => handleLinkClick("/")}>
              Home
            </Link>
          </div>
        </div>

        <div className="navbar-item">
          <div className="text">
            <Link to="/contact" style={{ color: selectedLink === "/about" ? "#fff" : "#868e96", textDecoration: "none" }}onClick={() => handleLinkClick("/about")}>
              Join
            </Link>
          </div>
        </div>

        <div className="navbar-item">
          <div className="text">
            <Link to="/"  style={{ color: selectedLink === "/" ? "#fff" : "#868e96", textDecoration: "none" }} onClick={() => handleLinkClick("/")}>
              Home
            </Link></div>
        </div>
        <div className="navbar-item">
          <div className="text">
            <Link to="/"  style={{ color: selectedLink === "/" ? "#fff" : "#868e96", textDecoration: "none" }} onClick={() => handleLinkClick("/")}>
              Home
            </Link></div>
        </div>
        <div className="navbar-item">
          <div className="text">
            <Link to="/"  style={{ color: selectedLink === "/" ? "#fff" : "#868e96", textDecoration: "none" }} onClick={() => handleLinkClick("/")}>
              Home
            </Link></div>
        </div>
      
    </div>
  );
};

export default Navbar;