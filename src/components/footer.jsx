import React from "react";
import { FaGithub, FaInstagram, FaLinkedinIn, FaTwitter, FaGreaterThan, FaLocationArrow, FaPhoneAlt, FaEnvelope, FaMobileAlt, FaMapMarkerAlt, FaGlobe, FaPlane } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer-area">
        <div className="waves">
            <div className="wave" id="wave1"></div>
            <div className="wave" id="wave2"></div>
            <div className="wave" id="wave3"></div>
            <div className="wave" id="wave4"></div>
        </div>
      <div className="main-footer">
        <div className="footer">
          <div className="single-footer col-4">
            <h4>about us</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
              corrupti aut reiciendis, sequi necessitatibus dignissimos
              laboriosam corporis molestias excepturi fuga nesciunt officia,
              asperiores, aperiam repellendus iusto quasi! Eius, harum nemo!
            </p>
            <div className="footer-social">
              <a title="Instagram" href="https://ig.com/wearemeyvn">
                  <FaInstagram />
              </a>
              <a title="Twitter" href="https://ig.com/meyvnco">
                  <FaTwitter />
              </a>
              <a title="Github" href="https://github.com/meyvndev/">
                  <FaGithub />
              </a>
              <a title="linkedin" href="https://ig.com/wearemeyvn">
                  <FaLinkedinIn />
              </a>
            </div>
          </div>
          <div className="single-footer col-2">
            <h4>main menu</h4>
            <ul>
                <li><a href=""><FaGreaterThan/> <span>home</span></a></li>
                <li><a href=""><FaGreaterThan/> <span>about us</span></a></li>
                <li><a href=""><FaGreaterThan/> <span>services</span> </a></li>
                <li><a href=""><FaGreaterThan/> <span>contact</span> </a></li>
                <li><a href=""><FaGreaterThan/> <span>blog</span> </a></li>
            </ul>
          </div>
          <div className="single-footer col-2">
            <h4>quick links</h4>
            <ul>
                <li><a href=""><FaGreaterThan/> <span>privacy policy</span></a></li>
                <li><a href=""><FaGreaterThan/> <span>terms & conditions</span></a></li>
                <li><a href=""><FaGreaterThan/> <span>disclaimer</span></a></li>
            </ul>
          </div>
          <div className="single-footer col-4">
            <h4>contact us</h4>
            <ul className="footer-contact">
                <li><a href=""><FaMapMarkerAlt/> <span>Kigali, Rwanda</span></a></li>
                <li><a href="tel:250786969572"><FaMobileAlt/> <span>250786969572</span></a></li>
                <li><a href="mailto:info.meyvn@gmail.com"><FaEnvelope/> <span>info@meyvn.com</span></a></li>
                <li><a href="https://meyvn.netlify.app/"><FaGlobe/> <span>www.meyvn.rw</span></a></li>
            </ul>
            <form className="mail-form">
                <span className="input-box col-12">
                    <input type="email" className="col-8" placeholder="Enter your email" required />
                    <button className="col-4">submit</button>
                </span>
            </form>
          </div>
        </div>
        <div className="copy">
            <p>&copy; 2023 all rights reserved</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
