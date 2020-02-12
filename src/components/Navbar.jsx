import React from "react";
import './Navbar.css';

function Navbar(){
  var navbarStyles = {
    height: "60px",
    color: "#FFFCE8",
    backgroundColor: "#697A21",
    padding: "0 16px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  }
  var titleStyles = {
    fontFamily: "'Noto Serif', serif",
    fontWeight: "bold",
  }
  var linkStyles = {
    padding: "0 8px"
  }
  return (
    <div style={navbarStyles}>
      <p style={titleStyles}>Avery's Organics</p>
      <div style={linkStyles}>
        <a href="/">About</a>
        <a href="/">Products</a>
        <a href="/">Contact</a>
      </div>
    </div>
  );
}

export default Navbar;
