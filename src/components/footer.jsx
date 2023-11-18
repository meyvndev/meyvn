import React from "react";

import { FaArrowRight, FaEnvelope, FaGithub, FaInstagram, FaTiktok, FaTwitter, FaWhatsapp } from "react-icons/fa";

import logo from "../assets/brand/logo.png";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col">
            <img src={logo} alt="meyvn" className="logo" />
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint,
              quidem, totam eaque architecto corrupti consequuntur dolorum alias
              tenetur sapiente doloremque quaerat hic dicta tempora delectus
              quasi possimus, quisquam laudantium. Rem!
            </p>
          </div>
          <div className="col">
            <h3>Office <div className="underline"><span></span></div></h3>
            <p>KN 205 ST</p>
            <p>Musanze, Rwanda</p>
            <p>Musanze, Kigali, Rwanda</p>
            <p className="email-id">info.meyvn@gmail.com</p>
            <h4>(+250) 78 6969 572</h4>
          </div>
          <div className="col">
            <h3>Links <div className="underline"><span></span></div></h3>
            <ul>
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">Services</a>
              </li>
              <li>
                <a href="">About us</a>
              </li>
              <li>
                <a href="">Portfolio</a>
              </li>
              <li>
                <a href="">Contact</a>
              </li>
            </ul>
          </div>
          <div className="col">
            <h3>Newsletter <div className="underline"><span></span></div></h3>
            <form>
              <span className="far">
                <FaEnvelope />
              </span>
              <input type="email" placeholder="Enter your email" required />
              <button type="submit">
                <span className="fas">
                  <FaArrowRight />
                </span>
              </button>
            </form>
            <div className="social-icons">
              <span className="fab">
                <FaInstagram />
              </span>
              <span className="fab"><FaTwitter/></span>
              <span className="fab"><FaWhatsapp/></span>
              <span className="fab"><FaTiktok/></span>
              <span className="fab"><FaGithub/></span>
            </div>
          </div>
        </div>
        <hr />
        <p className="copyright">Meyvn IT and Software Agency &copy; {currentYear} - All Rights Reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
