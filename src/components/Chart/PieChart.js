import React from "react";
import styles from "./PieChart.module.css";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  const data = {
    // labels: ["Red", "Blue", "Yellow"],
    datasets: [
      {
        label: "My First Dataset",
        data: [200],
        backgroundColor: [
          // "rgb(255, 99, 132)",
          // "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
        ],
        hoverOffset: 4,
      },
    ],
  };
  return (
    <div className={styles.pieChart}>
      <Doughnut data={data} />
    </div>
  );
};

export default PieChart;
