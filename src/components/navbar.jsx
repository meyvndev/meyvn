import React, { useState } from "react";

import { FiMenu } from "react-icons/fi";
import { BiChevronDown, BiChevronUp, BiChevronRight } from "react-icons/bi";
import { MdDeveloperBoard, MdSecurity } from "react-icons/md";
import { GiSpeedometer } from "react-icons/gi";
import { FaGears } from "react-icons/fa6";

import "./../styles/style.css";
import logo from "./../assets/logo.png";
import receptionBg from "./../assets/reception-bg.jpg";
import tableSetup from "./../assets/table-setup.jpg";

function navbar() {
  const [serviceModal, SetServiceModel] = useState(false);
  const [companyModal, SetCompanyModal] = useState(false);

  const openServiceModal = () => {
    SetServiceModel(true);
  };

  const closeModal = () => {
    SetServiceModel(false);
    SetCompanyModal(false);
  };

  const openCompanyModal = () => {
    SetCompanyModal(true);
  };

  return (
    <header className="navbar">
      <div className="top-nav">
        <div className="container">
          <div className="top-nav-content row h-row">
            <div className="brand-nav">
              <a href="#">
                <img src={logo} alt="logo" className="logo" />
              </a>
            </div>
            <div className="main-nav-link">
              <ul>
                <li>
                  <a onClick={openServiceModal}>
                    <span>services</span>
                    <BiChevronDown />
                  </a>
                </li>
                <li>
                  <a onClick={openCompanyModal}>
                    <span>company</span>
                    <BiChevronDown />
                  </a>
                </li>
                <li>
                  <a href="#" onClick={openServiceModal}>
                    about us
                  </a>
                </li>
                <li>
                  <a href="#">contact us</a>
                </li>
              </ul>
            </div>
            <div className="button nav-button">
              <a href="#" className="btn">
                <span>book a call</span>
              </a>
            </div>
            <div className="menu-toggle">
              <button>
                <FiMenu />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="main-nav">
        <div className="main-nav-link">
          <ul>
            <li>
              <a href="#">overview</a>
            </li>
            <li>
              <a href="#">approach</a>
            </li>
            <li>
              <a href="#">expertise</a>
            </li>
            <li>
              <a href="#">work with us</a>
            </li>
          </ul>
        </div>
      </div>

      {serviceModal && (
        <div className="model-overlay">
          <div className="modal">
            <div className="service-dropdown">
              <div className="container">
                <button onClick={closeModal}>
                  <BiChevronUp />
                </button>
                <div className="h-row col-12">
                  <div className="service-list col-3">
                    <h5>services</h5>
                    <ul>
                      <li>
                        <a href="">Managed Services</a>
                      </li>
                      <li>
                        <a href="">IT Consulting & Advisory</a>
                      </li>
                      <li>
                        <a href="">Cyber Security</a>
                      </li>
                      <li>
                        <a href="">Web Development</a>
                      </li>
                      <li>
                        <a href="">Mobile Development</a>
                      </li>
                      <li>
                        <a href="">Cloud Services</a>
                      </li>
                    </ul>
                  </div>
                  <div className="business-challenges col-6">
                    <h5>business challenges</h5>
                    <div className="h-row">
                      <a href="">
                        <span>
                          <i>
                            <MdDeveloperBoard />
                          </i>
                          <span>digital transformation</span>
                        </span>
                      </a>
                      <a href="">
                        <span>
                          <i>
                            <MdSecurity />
                          </i>
                          <span>security</span>
                        </span>
                      </a>
                    </div>
                    <div className="h-row">
                      <a href="">
                        <span>
                          <i>
                            <FaGears />
                          </i>
                          <span>automation</span>
                        </span>
                      </a>
                      <a href="">
                        <span>
                          <i>
                            <GiSpeedometer />
                          </i>
                          <span>gaining efficiency</span>
                        </span>
                      </a>
                    </div>
                  </div>
                  <div className="industry-focus col-3">
                    <h5>industry focus</h5>
                    <ul>
                      <li>
                        <a href="">Industry manufacturing</a>
                      </li>
                      <li>
                        <a href="">transportation logistics</a>
                      </li>
                      <li>
                        <a href="">healthcare</a>
                      </li>
                      <li>
                        <a href="">banks & insurance</a>
                      </li>
                      <li>
                        <a href="">consulting providers</a>
                      </li>
                      <li>
                        <a href="">non profit</a>
                      </li>
                      <span>
                        <a href="">view all</a>
                      </span>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {companyModal && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="company-dropdown">
              <div className="container">
                <button onClick={closeModal}>
                  <BiChevronUp />
                </button>
                <div className="h-row col-12">
                  <div className="company-bio v-row col-4">
                    <h5 className="subtitle">
                      Redefining industries through custom product development
                    </h5>
                    <img src={receptionBg} alt="" />
                  </div>
                  <div className="company-nav-link v-row col-4">
                    <ul>
                      <li>
                        <a href="">
                          <span>
                            <BiChevronRight />
                          </span>
                          about us
                        </a>
                      </li>
                      <li>
                        <a href="">
                          <span>
                            <BiChevronRight />
                          </span>
                          why us
                        </a>
                      </li>
                      <li>
                        <a href="">
                          <span>
                            <BiChevronRight />
                          </span>
                          our team
                        </a>
                      </li>
                      <li>
                        <a href="">
                          <span>
                            <BiChevronRight />
                          </span>
                          partners & certifications
                        </a>
                      </li>
                      <li>
                        <a href="">
                          <span>
                            <BiChevronRight />
                          </span>
                          careers <span className="career">we are hiring</span>
                        </a>
                      </li>
                      <li>
                        <a href="">
                          <span>
                            <BiChevronRight />
                          </span>
                          reviews & awards
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="company-report col-4 v-row">
                    <h5 className="subtitle">
                      Meyvn has been recognized as a Leader in the 2023 Gartner.
                    </h5>
                    <span>
                      <a href="/">View the report</a>
                    </span>
                    <img src={tableSetup} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default navbar;
