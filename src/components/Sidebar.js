import React from "react";
import Image from "next/image";
import styles from "@/styles/Home.module.css";

import icon from "../assets/icons/Box (6).svg";
import icon1 from "../assets/icons/Box (5).svg";
import icon2 from "../assets/icons/Box (4).svg";
import icon3 from "../assets/icons/Box (3).svg";
import icon4 from "../assets/icons/Box (2).svg";
import icon5 from "../assets/icons/Box (1).svg";
import icon6 from "../assets/icons/Box.svg";

const Sidebar = () => {
  return (
    <div>
      <div className={styles.imgGrid}>
        <Image
          priority
          src={icon}
          height={32}
          width={32}
          alt="Follow us on Twitter"
        />
        <Image
          priority
          src={icon1}
          height={32}
          width={32}
          alt="Follow us on Twitter"
        />
        <Image
          priority
          src={icon2}
          height={32}
          width={32}
          alt="Follow us on Twitter"
        />
        <Image
          priority
          src={icon3}
          height={32}
          width={32}
          alt="Follow us on Twitter"
        />
        <Image
          priority
          src={icon4}
          height={32}
          width={32}
          alt="Follow us on Twitter"
        />
        <Image
          priority
          src={icon5}
          height={32}
          width={32}
          alt="Follow us on Twitter"
        />
        <Image
          priority
          src={icon6}
          height={32}
          width={32}
          alt="Follow us on Twitter"
        />
      </div>
    </div>
  );
};

export default Sidebar;
