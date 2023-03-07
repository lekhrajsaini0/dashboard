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
import Link from "next/link";

const navs = [
  {
    name: "Dashboard",
    image: icon,
    navLink: "/",
  },
  {
    name: "Invitation Code",
    image: icon1,
    navLink: "/invitation",
  },
  {
    name: "Subscription",
    image: icon2,
    navLink: "/subscription",
  },
  {
    name: "Notification",
    image: icon3,
    navLink: "/notification",
  },
  {
    name: "Currated",
    image: icon4,
    navLink: "/currated",
  },
  {
    name: "Team",
    image: icon5,
    navLink: "/team",
  },
];

const Sidebar = () => {
  return (
    <div className={styles.main}>
      <nav className={styles.mainMenu}>
        <div className={styles.sideFlex}>
          <div className={styles.imgFlex}>
            {navs.map((nav, i) => (
              <Link href={nav.navLink} key={i}>
                <div className={styles.iconFlex}>
                  <Image
                    priority
                    src={nav.image}
                    height={48}
                    width={48}
                    alt="Follow us on Twitter"
                  />
                  <h4>{nav.name}</h4>
                </div>
              </Link>
            ))}
            <hr className={styles.border} />
            <div className={styles.iconFlex}>
              <Image
                priority
                src={icon6}
                height={48}
                width={48}
                alt="Follow us on Twitter"
              />
              <h4>Dark Mode</h4>
            </div>
          </div>
          <div className={styles.iconFlex}>
            <Image
              priority
              src={icon7}
              height={30}
              width={30}
              alt="Follow us on Twitter"
            />
            <h4>Logout</h4>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
