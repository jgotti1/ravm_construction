import React from "react";
import "./header.css";
import ConstructionIcon from "@mui/icons-material/Construction";
function Header() {
  return (
    <div className="header_style">
      <h1>R.A.V.M Construction</h1>
      <ConstructionIcon sx={{ color: "white", fontSize: 42, marginTop: "2px" }} />
    </div>
  );
}

export default Header;
