import React from "react";
import { MdDeveloperBoard, MdSecurity } from "react-icons/md";
import { GiSpeedometer } from "react-icons/gi";
import { FaGears } from "react-icons/fa6";

function draft() {
  return (
    <div className="service-dropdown">
      <div className="container">
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
  );
}

export default draft;
