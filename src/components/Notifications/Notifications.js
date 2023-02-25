import React from "react";
import styles from "./Notifictions.module.css";
import icon from "../../assets/icons/Group 1000002353.svg";
import icon1 from "../../assets/icons/Group 1000002332.svg";
import Image from "next/image";

const notification = [
  "You have received an invitation code request.",
  "You have a new Subscriber for updates.",
  "You have a new Subscriber for Newsletter.",
];

const Notifications = () => {
  return (
    <div className={styles.notificationDiv}>
      <div className={styles.mark}>
        <input type="checkbox" name="approve" id="approve" />
        <h4>Approve</h4>
        <Image
          priority
          src={icon1}
          height={15}
          width={15}
          alt="Follow us on Twitter"
        />
      </div>
      <div>
        {notification.map((not, i) => (
          <div key={i} className={styles.notification}>
            <input type="checkbox" name="" id="" className={styles.dataBox} />
            <h3>{not}</h3>
            <Image
              priority
              height={28}
              src={icon}
              width={28}
              alt="Follow us on Twitter"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notifications;
