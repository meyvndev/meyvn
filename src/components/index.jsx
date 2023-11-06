import React from "react";

import { FiMenu } from "react-icons/fi";
import {BiChevronDown, BiChevronRight, BiChevronRightCircle} from 'react-icons/bi'

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
                          <a href="/" className="btn"><span><BiChevronRightCircle style={{marginRight: '5px', fontSize: '18px'}}/> Explore more</span></a>
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
    </main>
  );
}

export default Meyvn;
