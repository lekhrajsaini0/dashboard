import React from "react";
import Image from "next/image";
import icon from "../../assets/icons/Group 1000002332.svg";
import styles from "./BarChart.module.css";
import ChartBar from "../Chart/ChartBar";

const BarChart = () => {
  return (
    <div className={styles.analytics}>
      <div className={styles.header}>
        <h4>Active Users</h4>
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
      <h2>Analytics</h2>
      <ChartBar />
    </div>
  );
};

export default BarChart;
