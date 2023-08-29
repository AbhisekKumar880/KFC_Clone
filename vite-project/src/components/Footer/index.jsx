import React from "react";
import footerLogo from "../../assets/img/footer-logo.png";
import appStore from "../../assets/img/app-store.png";
import playStore from "../../assets/img/google-play.png";
import "./footer.css";
const Footer = () => {
  return (
    <div className="footer-wrapper">
      <img className="footer-logo" src={footerLogo} alt="" />
      <div className="row footer-inner">
        <div className="col-md-2">
          <ul>
            <li>
              <a href="">Lorem, ipsum.</a>
            </li>
            <li>
              <a href="">Numquam, porro?</a>
            </li>
            <li>
              <a href="">Voluptatibus, rerum.</a>
            </li>
            <li>
              <a href="">Nihil, ipsam.</a>
            </li>
            <li>
              <a href="">Doloribus, quo?</a>
            </li>
          </ul>
        </div>
        <div className="col-md-2">
          <ul>
            <li>
              <a href="">Lorem, ipsum.</a>
            </li>
          </ul>
        </div>
        <div className="col-md-2">
          <ul>
            <li>
              <a href="">Lorem, ipsum.</a>
            </li>
          </ul>
        </div>
        <div className="col-md-2">
          <ul>
            <li>
              <a href="">Lorem, ipsum.</a>
            </li>
            <li>
              <a href="">Eum, in?</a>
            </li>
          </ul>
        </div>
        <div className="col-md-4">
          <ul className="store-img-wrapper">
            <li>
              <a href="">
                <img src={appStore} alt="" />
              </a>
            </li>
            <li>
              <a href="">
                <img src={playStore} alt="" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="copywrite">
        <p>Copyright © KFC Corporation 2023 All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
