import React from "react";

import webDesign from "../assets/web-design.jpg";
import officeInterior1 from "../assets/office-interior1.jpg";
import officeInterior2 from "../assets/office-interior2.jpg";
import officeInterior3 from "../assets/office-interior3.jpg";
import officeInterior4 from "../assets/office-interior4.png";
import { FaArrowRight, FaInstagram } from "react-icons/fa";

function draft() {
  const leftHeroBox1Style = {
    backgroundImage: `linear-gradient(to right, #14012996, #1b285098), url(${officeInterior1})`,
    backgroundPosition: "center center",
    backgroundSize: "cover",
  };

  const leftHeroBox2Style = {
    backgroundImage: `linear-gradient(to right, #14012996, #1b285098), url(${officeInterior2})`,
    backgroundPosition: "center center",
    backgroundSize: "cover",
  };

  const centerHeroBoxStyle = {
    backgroundImage: `linear-gradient(to right, #14012996, #1b285098), url(${webDesign})`,
    backgroundPosition: "center center",
    backgroundSize: "cover",
  };

  const rightHeroBox1Style = {
    backgroundImage: `linear-gradient(to right, #14012996, #1b285098), url(${officeInterior3})`,
    backgroundPosition: "center center",
    backgroundSize: "cover",
  };

  const rightHeroBox2Style = {
    backgroundImage: `linear-gradient(to right, #14012996, #1b285098), url(${officeInterior4})`,
    backgroundPosition: "center center",
    backgroundSize: "cover",
  };

  return (
    <div className="main-home">
      <div className="container">
        <div className="home-hero">
          <div className="row hrow">
            <div className="hero-left vrow col-3">
              <div className="hero-box-wp" style={leftHeroBox1Style}>
                <div className="hero-box-content">
                  <span className="category-title">Service</span>
                  <h5>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aspernatur, perspiciatis. Quis quo porro sint tenetur illo
                    eius cum fugit molestiae.
                  </h5>
                  <span className="other">
                    <FaArrowRight /> learn more
                  </span>
                </div>
              </div>
              <div className="hero-box-wp" style={leftHeroBox2Style}>
                <div className="hero-box-content">
                  <span className="category-title">Service</span>
                  <h5>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aspernatur, perspiciatis. Quis quo porro sint tenetur illo
                    eius cum fugit molestiae.
                  </h5>
                  <span className="other">
                    <FaArrowRight /> learn more
                  </span>
                </div>
              </div>
            </div>
            <div className="hero-main col-6" style={centerHeroBoxStyle}>
              <div className="hero-box-wp">
                <div className="hero-box-content">
                  <span className="category-title">Service</span>
                  <h5>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aspernatur, perspiciatis. Quis quo porro sint tenetur illo
                    eius cum fugit molestiae.
                  </h5>
                  <span className="other">
                    <FaArrowRight /> learn more
                  </span>
                </div>
              </div>
            </div>
            <div className="hero-right vrow col-3">
              <div className="hero-box-wp" style={rightHeroBox1Style}>
                <div className="hero-box-content">
                  <span className="category-title">Service</span>
                  <h5>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aspernatur, perspiciatis. Quis quo porro sint tenetur illo
                    eius cum fugit molestiae.
                  </h5>
                  <span className="other">
                    <FaArrowRight /> learn more
                  </span>
                </div>
              </div>
              <div className="hero-box-wp" style={rightHeroBox2Style}>
                <div className="hero-box-content">
                  <span className="category-title">Service</span>
                  <h5>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aspernatur, perspiciatis. Quis quo porro sint tenetur illo
                    eius cum fugit molestiae.
                  </h5>
                  <span className="other">
                    <FaArrowRight /> learn more
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default draft;
