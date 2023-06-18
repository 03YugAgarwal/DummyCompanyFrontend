import React from "react";
import styles from "./Narvar.module.css";

import settings from "../assets/Settings.svg";
import notification from "../assets/Notification.svg";

import profilePhoto from "../assets/Ellipse 1.png";
import notificationDot from "../assets/Ellipse 2.png";

const Navbar = () => {
  return (
    <>
      <nav className={styles.Nav}>
        <div>
          <div className={styles.NavTitle}>Demo Company</div>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Work</a>
            </li>
            <li>
              <a href="/">Pricing</a>
            </li>
            <li>
              <a href="/" className={styles.blog}>
                Blog
              </a>
            </li>
          </ul>
        </div>
        <div className={styles.NavEndDiv}>
          <img className={styles.NavEndImg} src={settings} alt="Settings" />
          <div>
            <img
              className={styles.NavEndImg}
              src={notification}
              alt="Settings"
            />
            <img
              className={styles.notificationDot}
              src={notificationDot}
              alt="Settings"
            />
          </div>
          <img className={styles.NavEndImg} src={profilePhoto} alt="Settings" />
        </div>
      </nav>
      <hr />
    </>
  );
};

export default Navbar;
