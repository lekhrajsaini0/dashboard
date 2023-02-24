import React from "react";
import Image from "next/image";
import styles from "./Viewer.module.css";

const Viewer = ({ icon, total, style, percent }) => {
  return (
    <div className={styles.main}>
      <p className={style}>{percent}%</p>
      <div className={styles.viewer}>
        <Image
          priority
          src={icon}
          height={44}
          width={44}
          alt="Follow us on Twitter"
        />
        <div>
          <p className={styles.viewers}>Total Viewers</p>
          <h3 className={styles.total}>{total}</h3>
        </div>
      </div>
    </div>
  );
};

export default Viewer;
