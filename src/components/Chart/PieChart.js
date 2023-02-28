import React from "react";
import styles from "./PieChart.module.css";

const PieChart = () => {
  return (
    <div className={styles.pieChart}>
      <div className={styles.borderPie1}>
        <div className={styles.pie1}> 60%</div>
      </div>
      <div className={styles.borderPie2}>
        <div className={styles.pie2}> 40%</div>
      </div>
      <div className={styles.borderPie3}>
        <div className={styles.pie3}> 20%</div>
      </div>
    </div>
  );
};

export default PieChart;
