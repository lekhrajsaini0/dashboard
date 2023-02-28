import React from "react";
import Image from "next/image";
import Viewer from "../Viewer/Viewer";
import styles from "./Analytics.module.css";

import iconUp from "../../assets/icons/Frame 1000002323.svg";
import iconDown from "../../assets/icons/Frame 1000002320.svg";
import iconPlus from "../../assets/icons/Group 1000002333.svg";
import Response from "../Response/Response";
import BarChart from "../BarChart/BarChart";
import PieChart from "../Chart/PieChart";

const Analytics = () => {
  return (
    <div className={styles.main}>
      {/* chart and response */}
      <div className={styles.chartRes}>
        {/* chart */}
        <div className={styles.chart}>
          <PieChart />
          {/* views and analytic */}
          <div className={styles.analyticsDiv}>
            {/* viewers */}
            <div className={styles.viewDiv}>
              <Viewer
                icon={iconUp}
                total="123,456"
                style={styles.upPercent}
                percent="+1.23"
              />
              <Viewer
                icon={iconDown}
                total="456,789"
                style={styles.downPercent}
                percent="-1.23"
              />
              <div className={styles.view2}>
                <Image
                  priority
                  src={iconPlus}
                  height={10}
                  width={10}
                  alt="Follow us on Twitter"
                />
              </div>
            </div>
            <BarChart></BarChart>
          </div>
        </div>
        <Response />
      </div>
      <div className={styles.div5}></div>
    </div>
  );
};

export default Analytics;
