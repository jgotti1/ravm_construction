import React from "react";
import "./home.css";

function Home() {
  return (
    <div className="home_style">
      <div className="section_style">
        <h1 className="estimates">Free Estimates</h1>
        <h4> All remodeling and construction services inside and out of your home.</h4>
        <div className="services">
          <ul>
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
        <div className="contact_home">
          <h4>Call or text for more details </h4>
          <p>Alberto Viquez</p>
          <p className="phone">(732) 864-6543</p>
          <a className="home_email " href="mailto:RAVMcontruction@gmail.com">
            RAVMcontruction@gmail.com
          </a>
          <p className="referal_home">Referals Available By Request</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
