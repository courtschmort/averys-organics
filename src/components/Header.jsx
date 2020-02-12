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
    marginBottom: "32px",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column"
  }
  return (
    <div style={headerStyles}>
      <h1>Avery's Organics</h1>
    </div>
  );
}

export default Header;
