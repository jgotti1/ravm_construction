import React from "react";
import "./info.css";

function Info() {
  return (
    <div className="container_info">
      <div className="info_style">
        <h1 className="info_estimates">Free Estimates</h1>
        <p className="info_text"> All remodeling and construction services inside and out of your home.</p>
        <div>
          <ul className="info_services">
            <li>Kitchens</li>
            <li>Bathrooms</li>
            <li>Basements</li>
            <li>Bathrooms</li>
            <li>Doors</li>
            <li>Sheetrock</li>
            <li>Sheetrock</li>
            <li>Trimming</li>
            <li>Painting</li>
            <li>Tiling</li>
            <li>Decks</li>
            <li>Much More</li>
          </ul>
        </div>
        <div className="info_contact_home">
          <h4>Call or text for more details </h4>
          <p>Alberto Viquez</p>
          <p className="info_phone">(732) 864-6543</p>
          <a className="info_home_email " href="mailto:RAVMcontruction@gmail.com">
            RAVMcontruction@gmail.com
          </a>

          <p className="referal">Referals Availible By Request</p>
        </div>
      </div>
    </div>
  );
}

export default Info;
