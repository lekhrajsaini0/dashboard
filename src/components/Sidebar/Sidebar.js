import React, { useState } from "react";
import Image from "next/image";
import styles from "./Sidebar.module.css";

import icon from "../../assets/icons/Frame 1.svg";
import icon1 from "../../assets/icons/smstracking.svg";
import icon2 from "../../assets/icons/directboxnotif.svg";
import icon3 from "../../assets/icons/notification.svg";
import icon4 from "../../assets/icons/notepad2.svg";
import icon5 from "../../assets/icons/profile2user.svg";
import icon6 from "../../assets/icons/Vector.svg";
import icon7 from "../../assets/icons/Frame 10.svg";
import darkIcon from "../../assets/icons/Group 1000002329 (2).svg";
import lightIcon from "../../assets/icons/Group 1000002329 (1).svg";
import Link from "next/link";
import { useRouter } from "next/router";

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
  const [dark, setDark] = useState(true);
  const router = useRouter();

  return (
    <div className={styles.main}>
      <nav className={styles.mainMenu}>
        <div className={styles.sideFlex}>
          <div className={styles.imgFlex}>
            {navs.map((nav, i) => (
              <Link
                href={nav.navLink}
                key={i}
                className={
                  router.asPath === `${nav.navLink}` ? `${styles.active}` : ""
                }
              >
                <div className={styles.iconFlex}>
                  <Image
                    priority
                    src={nav.image}
                    height={28}
                    width={28}
                    alt="Follow us on Twitter"
                  />
                  <h4>{nav.name}</h4>
                </div>
              </Link>
            ))}
            <hr className={styles.border} />
            <div className={styles.darkMode}>
              <div className={styles.iconFlex}>
                <Image
                  priority
                  src={icon6}
                  height={28}
                  width={28}
                  alt="Follow us on Twitter"
                />
                <h4>Dark Mode</h4>
              </div>
              {dark === true ? (
                <Image
                  priority
                  src={darkIcon}
                  height={48}
                  width={48}
                  alt="Follow us on Twitter"
                  onClick={() => setDark(false)}
                />
              ) : (
                <Image
                  priority
                  src={lightIcon}
                  height={48}
                  width={48}
                  alt="Follow us on Twitter"
                  onClick={() => setDark(true)}
                />
              )}
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
