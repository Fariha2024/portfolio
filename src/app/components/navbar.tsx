/*const NavBar = () => {
  return (
    // Navbar Container
    <div className="relative flex justify-content-end">

  <div className="absolute w-[717px] h-[60px] z-20 flex nav text-zinc-300 hover:text-gray-300"
  style={{ left: '180px', top: '24px' }}>            
  <ul className="flex navigation-menu space-x-8">
  <li><a href="#home" aria-label="Home">Home</a></li>
  <li><a href="#case-studies" aria-label="Case Studies">Case Studies</a></li>
  <li><a href="#testimonials" aria-label="Testimonials">Testimonials</a></li>
  <li><a href="#recent-work" aria-label="Recent Work">Recent Work</a></li>
  <li><a href="#get-in-touch" aria-label="Get in Touch">Get in Touch</a></li>
</ul>
</div>
</div>
)  
}
export default NavBar;*/

import React from "react";
import Link from "next/link";
import styles from "./nav.module.css"; // Import the CSS module
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebookF,
  faYelp,
} from "@fortawesome/free-brands-svg-icons";

const NavBar = () => {
  return (
    
    <div className="flex items-center flex-col">
    <div className={styles.headerContainer1}>
      <div className={styles.navbarContainer2}>
        <div className={styles.nav}>
          <nav>
            <ul className={styles.navigationMenu}>
              <li className={styles.navItem}>
                <Link href="/">Home</Link>
              </li>
              <li className={styles.navItem}>
                <Link href="/casestudies">Case Studies</Link>
              </li>
              <li className={styles.navItem}>
                <Link href="/testimonials">Testimonials</Link>
              </li>
              <li className={styles.navItem}>
                <Link href="/recentwork">Recent Work</Link>
              </li>
              <li className={styles.navItem}>
                <Link href="/getintouch">Get in Touch</Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className={styles.socialMediaaLinks3}>
          <ul className={styles.socialIcon}>
            <li>
              <a
                href="https://www.facebook.com/profile.php?id=100039887306734&ref=page_internal"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialIcon} 
                aria-label="Facebook"
              >
                <FontAwesomeIcon
                  icon={faFacebookF}
                  className={styles.socialIcon}
                />
              </a>
            </li>
            <li>
              <a
                href="https://www.yelp.com/biz/spersch-studio-sydney"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialIcon}
                aria-label="Yelp"
              >
                <FontAwesomeIcon icon={faYelp} className={styles.socialIcon} />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/fariha_ahson/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialIcon} 
                aria-label="Instagram"
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  className={styles.socialIcon}
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    </div>
  );
};
export default NavBar;
