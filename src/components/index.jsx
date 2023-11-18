import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/style.css";

import imgSlider1 from "../assets/team-bg.jpg";
import imgSlider2 from "../assets/table-setup1.jpg";
import imgSlider3 from "../assets/team-a.jpg";
import imgSlider4 from "../assets/team-b.jpg";
import imgSlider5 from "../assets/team-bg.jpg";
import webDesign from "../assets/web-design.jpg";
import officeInterior1 from "../assets/office-interior1.jpg";
import officeInterior2 from "../assets/office-interior2.jpg";
import officeInterior3 from "../assets/office-interior3.jpg";
import officeInterior4 from "../assets/office-interior4.png";
import { FaArrowRight } from "react-icons/fa";

const carouselData = [
  {
    id: 1,
    image: imgSlider1, // Replace with the actual image path
    header: "Blog Post 1",
    timePosted: "2 months ago",
  },
  {
    id: 2,
    image: imgSlider2, // Replace with the actual image path
    header: "Blog Post 2",
    timePosted: "1 month ago",
  },
  {
    id: 3,
    image: imgSlider3, // Replace with the actual image path
    header: "Blog Post 3",
    timePosted: "3 months ago",
  },
  {
    id: 4,
    image: imgSlider4, // Replace with the actual image path
    header: "Blog Post 4",
    timePosted: "1 month ago",
  },
  {
    id: 5,
    image: imgSlider5, // Replace with the actual image path
    header: "Blog Post 5",
    timePosted: "3 months ago",
  },
  {
    id: 6,
    image: imgSlider2, // Replace with the actual image path
    header: "Blog Post 2",
    timePosted: "1 month ago",
  },
  {
    id: 7,
    image: imgSlider3, // Replace with the actual image path
    header: "Blog Post 3",
    timePosted: "3 months ago",
  },
  {
    id: 8,
    image: imgSlider4, // Replace with the actual image path
    header: "Blog Post 4",
    timePosted: "1 month ago",
  },
  // Add more data as needed
];

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 10000, // Set the autoplay speed in milliseconds (e.g., 2000ms = 2 seconds)
  };

  const leftHeroBox1Style = {
    backgroundImage: `url(${officeInterior1})`,
    backgroundPosition: "center center",
    backgroundSize: "cover",
  };

  const leftHeroBox2Style = {
    backgroundImage: `url(${officeInterior2})`,
    backgroundPosition: "center center",
    backgroundSize: "cover",
  };

  const centerHeroBoxStyle = {
    backgroundImage: `url(${webDesign})`,
    backgroundPosition: "center center",
    backgroundSize: "cover",
  };

  const rightHeroBox1Style = {
    backgroundImage: `url(${officeInterior3})`,
    backgroundPosition: "center center",
    backgroundSize: "cover",
  };

  const rightHeroBox2Style = {
    backgroundImage: `url(${officeInterior4})`,
    backgroundPosition: "center center",
    backgroundSize: "cover",
  };

  return (
    <main>
      <div className="slider-blog">
        <div className="carousel-container">
          <Slider {...settings}>
            {carouselData.map((item) => (
              <div key={item.id} className="carousel-item">
                <img
                  src={item.image}
                  className="carousel-image"
                  alt={`Blog Post ${item.id}`}
                />
                <div className="carousel-content">
                  <h5>{item.header}</h5>
                  <p>{item.timePosted}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
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
                      <FaArrowRight/> learn more
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
