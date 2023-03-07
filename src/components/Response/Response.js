import React from "react";
import Image from "next/image";
import styles from "./Response.module.css";
import icon from "../../assets/icons/Group 1000002332.svg";
import ResTable from "./ResTable";

const Response = () => {
  return (
    <div className={styles.response}>
      <div className={styles.header}>
        <h4>Responses</h4>
        <div className={styles.weekly}>
          <h4>Weekly</h4>
          <Image
            priority
            src={icon}
            height={15}
            width={15}
            alt="Follow us on Twitter"
          />
        </div>
      </div>
      <ResTable />
    </div>
  );
};

export default Response;
