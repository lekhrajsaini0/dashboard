import React from "react";
import Viewer from "../Viewer/Viewer";
import styles from "./Analytics.module.css";

import iconUp from "../../assets/icons/Frame 1000002323.svg";
import iconDown from "../../assets/icons/Frame 1000002320.svg";

const Analytics = () => {
  return (
    <div className={styles.main}>
      {/* chart and response */}
      <div className={styles.chartRes}>
        {/* chart */}
        <div className={styles.chart}>
          <div className={styles.pie}></div>
          {/* views and analytic */}
          <div className={styles.analyticsDiv}>
            {/* viewers */}
            <div className={styles.viewDiv}>
              <Viewer
                icon={iconUp}
                total="123,456"
                style={styles.upPercent}
                percent="+1.23"
              ></Viewer>
              <Viewer
                icon={iconDown}
                total="456,789"
                style={styles.downPercent}
                percent="-1.23"
              ></Viewer>
              <div className={styles.view2}></div>
            </div>
            <div className={styles.analytics}></div>
          </div>
        </div>
        <div className={styles.response}></div>
      </div>
      <div className={styles.div5}></div>
    </div>
  );
};

export default Analytics;
