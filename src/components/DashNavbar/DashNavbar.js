import React from "react";
import Image from "next/image";
import styles from "./DashNavbar.module.css";

import icon from "../../assets/icons/Group 1000002375.svg";
import icon1 from "../../assets/icons/Group 1000002376.svg";
import icon2 from "../../assets/icons/Group 1000002377.svg";
import icon3 from "../../assets/icons/searchnormal1.svg";

const DashNavbar = () => {
  return (
    <div className={styles.navDiv}>
      <div className={styles.navFlex}>
        <h1 id="navTitle">Dashboard Overview</h1>
        <div className={styles.iconDiv}>
          <div className={styles.inputDiv}>
            <Image
              priority
              height={15}
              src={icon3}
              width={15}
              alt="Follow us on Twitter"
            />
            <input
              type="text"
              className={styles.input}
              placeholder="Search..."
            />
          </div>
          <Image
            priority
            height={44}
            src={icon}
            width={44}
            alt="Follow us on Twitter"
          />
          <Image
            priority
            height={44}
            src={icon1}
            width={44}
            alt="Follow us on Twitter"
          />
          <Image
            priority
            height={44}
            src={icon2}
            width={44}
            alt="Follow us on Twitter"
          />
        </div>
      </div>

      <hr className={styles.border} />
    </div>
  );
};

export default DashNavbar;
