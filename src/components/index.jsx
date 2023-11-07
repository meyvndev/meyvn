import React from "react";

import { FiMenu } from "react-icons/fi";
import { BiChevronRightCircle, BiPhoneCall, BiSolidBus } from "react-icons/bi";
import { GiTeacher } from "react-icons/gi";
import {
  FaArrowCircleRight,
  FaChevronRight,
  FaEnvelope,
  FaLaptopCode,
  FaPhoneAlt,
  FaTasks,
} from "react-icons/fa";
import { MdSupportAgent } from "react-icons/md";
import { FaScrewdriverWrench } from "react-icons/fa6";

import "./../styles/style.css";
import logo from "./../assets/logo/png.png";
import meeting1 from "./../assets/vid-meet.mp4";
import meeting2 from "./../assets/vid-meet1.mp4";
import meeting3 from "./../assets/vid-meet2.mp4";

function Meyvn() {
  return (
    <main className="home">
      <section className="hero">
        <div className="hero-container">
          <div className="container">
            <div className="hero-content">
              <div className="row v-row">
                <div className="hero-text">
                  <h2>We manage your IT, so you can manage your business.</h2>
                  <p>
                    Take charge of your business continuity with innovative IT
                    solutions
                  </p>
                </div>
                <div className="hero-form">
                  <form>
                    <span className="input-box">
                      <input
                        type="search"
                        className="form-input"
                        placeholder="Search for services here ..."
                      />
                      <button type="submit" className="btn">
                        <span>search</span>
                      </button>
                    </span>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-vid-container">
          <div className="hero-video">
            <video muted loop autoPlay>
              <source src={meeting1} type="video/mp4" />
            </video>
          </div>
        </div>
      </section>
      <section className="about">
        <div className="container">
          <div className="about-content">
            <div className="row h-row">
              <div className="about-left about-profile col-4">
                <div className="about-profile-content">
                  <div className="profile-container">
                    <div className="row v-row">
                      <div className="profile-header">
                        <img src={logo} alt="" />
                      </div>
                      <div className="profile-description">
                        <h5>Dedicated to delivering excellence</h5>
                        <span className="subtitle">
                          Everyone has a story. Here is ours ..
                        </span>
                        <p>
                          We understand that business can be chaotic. That’s
                          where we come in. We’re focused on adding some
                          much-needed balance to the mix. We accomplish that by
                          forging real partnerships with our clients. When you
                          work with us, you’re working with a team who
                          understands your pain points and your goals. We’ll
                          help you find order in the midst of the chaos.{" "}
                        </p>
                      </div>
                      <div className="about-cta">
                        <div className="cta-content">
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Eum, minima.
                          </p>
                          <a href="/" className="btn">
                            <span>
                              <BiChevronRightCircle
                                style={{ marginRight: "5px", fontSize: "18px" }}
                              />{" "}
                              Explore more
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="about-right col-7">
                <div className="about-us-title">
                  <h2>who we are</h2>
                  <span>Striving for Excellence and Impact</span>
                </div>
                <div className="about-us-content">
                  <div className="row v-row">
                    <div className="about-begin">
                      <h4 className="about-titles">the beginning</h4>
                      <p className="about-subtitle">
                        The Meyvn journey began in 2021 when two college
                        friends, John Salivan and Kris Klopperman got together
                        and started selling computers and engineering
                        calculators.
                      </p>
                    </div>
                    <div className="about-mission">
                      <h4 className="about-titles">mission</h4>
                      <p className="about-subtitle">
                        At Tecnologia, we’re on a mission to bring together the
                        personal service of local IT providers with the power of
                        a national network. We believe that’s simpler than it
                        sounds. Our offices offer high-touch IT services that
                        clients love from highly experienced local team members.
                      </p>
                    </div>
                    <div className="about-global">
                      <h4 className="about-titles">we are global</h4>
                      <p className="about-subtitle">
                        Our national network allows us to offer best-in-class
                        services like dedicated vCIOs, specialized security and
                        compliance advisory services, a 24/7 help desk, and
                        more.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="service">
        <div className="container">
          <div className="service-content">
            <div className="row h-row">
              <div className="service-description col-3">
                <h1>our services</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
                  cumque placeat, est tenetur eligendi obcaecati impedit, quasi
                  beatae, ab vel quaerat. Eaque saepe minima veniam atque,
                  aperiam molestias ducimus accusamus.
                </p>

                <div className="service-toc v-row">
                  <span>
                    <FaLaptopCode style={{ marginRight: "10px" }} />
                    web development
                  </span>
                  <span>
                    <MdSupportAgent style={{ marginRight: "10px" }} /> IT
                    Support & Maintenance
                  </span>
                  <span>
                    <GiTeacher style={{ marginRight: "10px" }} /> tutoring &
                    training
                  </span>
                  <span>
                    <FaScrewdriverWrench style={{ marginRight: "10px" }} />{" "}
                    device setup & configuration
                  </span>
                  <span>
                    <BiSolidBus style={{ marginRight: "10px" }} />{" "}
                    transportation agency
                  </span>
                  <span>
                    <FaTasks style={{ marginRight: "10px" }} /> handling
                    customers' task
                  </span>
                  <a>
                    <BiPhoneCall /> talk to us
                  </a>
                </div>
              </div>
              <div className="service-list col-8">
                <div className="row h-row">
                  <div className="service-container col-6">
                    <a href="/">
                      <span className="service-icon">
                        <FaLaptopCode />
                      </span>
                      <h5>web development</h5>
                      <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. In placeat at ipsa dolore! Quaerat necessitatibus
                        harum rerum sequi, alias vero ipsam.
                      </p>
                    </a>
                  </div>
                  <div className="service-container col-6">
                    <a href="/">
                      <span className="service-icon">
                        <MdSupportAgent />
                      </span>
                      <h5>IT Support & Maintenance</h5>
                      <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. In placeat at ipsa dolore! Quaerat necessitatibus
                        harum rerum sequi, alias vero ipsam.
                      </p>
                    </a>
                  </div>
                </div>
                <div className="row h-row">
                  <div className="service-container col-6">
                    <a href="/">
                      <span className="service-icon">
                        <GiTeacher />
                      </span>
                      <h5>tutoring & training</h5>
                      <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. In placeat at ipsa dolore! Quaerat necessitatibus
                        harum rerum sequi, alias vero ipsam.
                      </p>
                    </a>
                  </div>
                  <div className="service-container col-6">
                    <a href="/">
                      <span className="service-icon">
                        <FaScrewdriverWrench />
                      </span>
                      <h5>device setup & configuration</h5>
                      <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. In placeat at ipsa dolore! Quaerat necessitatibus
                        harum rerum sequi, alias vero ipsam.
                      </p>
                    </a>
                  </div>
                </div>
                <div className="row h-row">
                  <div className="service-container col-6">
                    <a href="/">
                      <span className="service-icon">
                        <BiSolidBus />
                      </span>
                      <h5>transportation agency</h5>
                      <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. In placeat at ipsa dolore! Quaerat necessitatibus
                        harum rerum sequi, alias vero ipsam.
                      </p>
                    </a>
                  </div>
                  <div className="service-container col-6">
                    <a href="/">
                      <span className="service-icon">
                        <FaTasks />
                      </span>
                      <h5>handling customers' task</h5>
                      <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. In placeat at ipsa dolore! Quaerat necessitatibus
                        harum rerum sequi, alias vero ipsam.
                      </p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta cta1">
        <div className="container">
          <div className="cta-container">
            <div className="row h-row">
              <div className="cta-text col-5">
                <h1>Got a project? Let’s talk</h1>
                <ul>
                  <li>
                    <a href="">
                      <FaPhoneAlt /> : <span>1-800-345-8933</span>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <FaEnvelope /> : <span>office@meyvn.com</span>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="cta-form col-7">
                <form>
                  <div className="row h-row col-12">
                    <span className="input-box col-6">
                      <input
                        type="text"
                        placeholder="your name"
                        className="form-input col-12"
                      />
                    </span>
                    <span className="input-box col-6 no-icon">
                      <input
                        type="email"
                        placeholder="email address"
                        className="form-input col-12"
                      />
                    </span>
                  </div>
                  <div className="row h-row col-12">
                    <span className="input-box col-6">
                      <input
                        type="text"
                        placeholder="phone number"
                        className="form-input col-12"
                      />
                    </span>
                    <span className="input-box col-6 no-icon">
                      <input
                        type="text"
                        placeholder="whats your budget?"
                        className="form-input col-12"
                      />
                    </span>
                  </div>
                  <div className="row col-12">
                    <span className="input-box textarea-form col-12 no-icon">
                      <textarea
                        placeholder="message"
                        cols="30"
                        rows="10"
                        className="form-input"
                      ></textarea>
                    </span>
                  </div>
                  <div className="cta-form-send">
                    <button className="btn">
                      <span>Send a request</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Meyvn;
