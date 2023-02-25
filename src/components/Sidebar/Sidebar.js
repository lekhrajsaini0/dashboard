import React from "react";
import Image from "next/image";
import styles from "./Sidebar.module.css";

import icon from "../../assets/icons/Box (6).svg";
import icon1 from "../../assets/icons/Box (5).svg";
import icon2 from "../../assets/icons/Box (4).svg";
import icon3 from "../../assets/icons/Box (3).svg";
import icon4 from "../../assets/icons/Box (2).svg";
import icon5 from "../../assets/icons/Box (1).svg";
import icon6 from "../../assets/icons/Box.svg";
import icon7 from "../../assets/icons/Frame 10.svg";

const Sidebar = () => {
  return (
    <div className={styles.sideFix}>
      <div className={styles.sideFlex}>
        <div className={styles.imgFlex}>
          <Image
            priority
            src={icon}
            height={48}
            width={48}
            alt="Follow us on Twitter"
          />
          <Image
            priority
            src={icon1}
            height={48}
            width={48}
            alt="Follow us on Twitter"
          />
          <Image
            priority
            src={icon2}
            height={48}
            width={48}
            alt="Follow us on Twitter"
          />
          <Image
            priority
            src={icon3}
            height={48}
            width={48}
            alt="Follow us on Twitter"
          />
          <Image
            priority
            src={icon4}
            height={48}
            width={48}
            alt="Follow us on Twitter"
          />
          <Image
            priority
            src={icon5}
            height={48}
            width={48}
            alt="Follow us on Twitter"
          />
          <hr className={styles.border} />
          <Image
            priority
            src={icon6}
            height={48}
            width={48}
            alt="Follow us on Twitter"
          />
        </div>
        <div>
          <Image
            priority
            src={icon7}
            height={20}
            width={38}
            alt="Follow us on Twitter"
          />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
