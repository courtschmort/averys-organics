import React from "react";
import './Header.css';

function Header(){
  var headerStyles = {
    backgroundImage: "url('milkovi-mYTr_TZlie8-unsplash.jpg')",
    height: "300px",
    backgroundAttachment: "fixed",
    backgroundPosition: "top",
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    padding: "32px 0px",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column"
  }
  return (
    <div style={headerStyles}>
      <h1>Avery's Organics</h1>
      <p>Avery's Organics is a mid-sized farm in Northern Oregon that grows organic produce.</p>
    </div>
  );
}

export default Header;
