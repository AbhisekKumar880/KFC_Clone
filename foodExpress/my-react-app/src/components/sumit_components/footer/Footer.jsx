import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Footer.module.css";
const Footer = () => {
  const navigate = useNavigate();
  const rowone = {
    display: "inline-flex",
    justifyContent: " space-evenly",
    width: "100%",
    fontFamily: "National 2 Regular",
    fontSize: "14px",
    marginTop: "5%",
    marginBottom: "4%",
  };
  return (
    <div className={styles.main}>
      <div style={rowone}>
        <img
          styles={{ marginTop: "-60px" }}
          src="https://foodexpress.app/storage/app/public/business/2023-03-16-6413256d977dd.png"
          alt=""
        />
        <div className={styles.catsec}>
          <div>
            <ul className={styles.ultag}>
              <li className={styles.lis}>foodExpress Food</li>
              <li className={styles.lis}>Menu</li>
              <li className={styles.lis}>Order Lookup</li>
              <li className={styles.lis}>Gift Card</li>
            </ul>
          </div>
          <div>
            <ul className={styles.ultag}>
              <li className={styles.lis}>Support</li>
              <li  className={styles.lis}>Get Help</li>
              <li onClick={()=>navigate("/contactUs")} className={styles.lis}>Contact Us</li>
              <li className={styles.lis}>foodExpress Feedback</li>
            </ul>
          </div>
          <div>
            <ul className={styles.ultag}>
              <li className={styles.lis}>Legal</li>
              <li className={styles.lis}>Terms and Conditions</li>
              <li className={styles.lis}>Privacy Policy</li>
              <li className={styles.lis}>Disclaimer</li>
              <li className={styles.lis}>Caution Notice</li>
            </ul>
          </div>
          <div>
            <ul className={styles.ultag}>
              <li className={styles.lis}>foodExpress India</li>
              <li onClick={()=>navigate("/about")} className={styles.lis}>About foodExpress</li>
              <li className={styles.lis}>foodExpress Care</li>
              <li className={styles.lis}>Careers</li>
              <li className={styles.lis}>Our Golden Past</li>
            </ul>
          </div>
        </div>
        <div className={styles.findstore}>
          <img
            src="//images.ctfassets.net/wtodlh47qxpt/6qgKpWUOIsrIiazhk3cdmF/d60b4c20be69bab1f939bf33348b67e9/Find_KFC.svg"
            alt=""
          />
          <a
            className={styles.link}
            target="#"
            href="https://restaurants.foodExpress.co.in/"
          >
            Find a foodExpress
          </a>
        </div>
        <div className={styles.socialbtns}>
          <img
            src="//images.ctfassets.net/wtodlh47qxpt/6BdZsyjLn64c06uCIE73d1/fb530f5d5231533b049463f6c7e8a2b1/google_play.svg"
            alt="Google Play"
          />
          <img
            src="//images.ctfassets.net/wtodlh47qxpt/em3mcMuAdXWlgucSJiTbS/d3ae7e51ed101d829e459355e255c47f/apple.svg"
            alt="Apple Store"
          ></img>
        </div>
      </div>
     
      <div className={styles.footer2}>
        <div className={styles.f2ch}></div>
        <div className={styles.f22ch}>
          Copyright © foodExpress Corporation 2023 All Rights Reserved
        </div>
        <div className={styles.f2ch}></div>
      </div>
    </div>
  );
};

export default Footer;
