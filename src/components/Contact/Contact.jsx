import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      {/*Icons first*/}
      <ul className={styles.links}>
        <li className={styles.link}>
          <a href="mailto:dulminibhagyasiyalu@gmail.com">
            <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          </a>
        </li>
        <li className={styles.link}>
          <a
            href="https://www.linkedin.com/in/dulmini-bhagya-891013306"
            target="_blank"
            rel="noopener noreferrer">
            <img src={getImageUrl("contact/linkedinIcon.png")} alt="LinkedIn icon" />
          </a>
        </li>
        <li className={styles.link}>
          <a
            href="https://github.com/dulminibhagya"
            target="_blank"
            rel="noopener noreferrer">
            <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          </a>
        </li>
      </ul>

      {/*Name and rights*/}
      <div className={styles.text}>
        <h2>Dulmini Bhagya</h2>
        <p>© 2024 Dulmini Bhagya. All rights reserved.</p>
      </div>

      {/*Additional links*/}
      <div className={styles.terms}>
        <a href="">Terms of Service</a>
        <a href="">Privacy Policy</a>
        <a href="">Connect with me</a>
      </div>
    </footer>
  );
};

