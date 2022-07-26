import React from "react";
import "./header.css";
import ConstructionIcon from "@mui/icons-material/Construction";
function Header() {
  return (
    <>
      <div className="header_style">
        <h1>R.A.V.M Construction LLC</h1>
        <ConstructionIcon sx={{ color: "white", fontSize: 42, marginTop: "2px" }} />
      </div>
      <div className="LLC">
        <h3 className="FLI">Fully Licensed and Insured</h3>
      </div>
    </>
  );
}

export default Header;
