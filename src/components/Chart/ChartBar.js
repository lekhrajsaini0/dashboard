import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const ChartBar = () => {
  const [chartData, setChartData] = useState({
    datasets: [],
  });
  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    setChartData({
      labels: [
        "Jan'23",
        "Feb'23",
        "Mar'23",
        "Apr'23",
        "May'23",
        "Jun'23",
        "Jul'23",
        "Aug'23",
      ],
      datasets: [
        {
          // label: "Brutto",
          borderRadius: 2,
          data: [12, 22, 15, 5, 2, 3,4,7],
          backgroundColor: " #6359E9",
          // borderThickness: 10,
        }
      ],
    });

    setChartOptions({
      plugins: {
        legend: {
          position: "top",
          align: "start",
          lebels: {
            boxWidth: 7,
            usePointStyle: true,
            pointStyle: "circle",
          },
        },
      },
      scales: {
        xAxis: {
          display: false,
        },
        yAxis: {
          // max: 1,
        },
      },
      element: {
        bar: {
          barPercentage: 0.3,
          categoryPercentage: 1,
        },
      },
    });
  }, []);

  return (
    <div>
      <div>
        <Bar data={chartData} width={400} height={100} options={chartOptions} />
      </div>
    </div>
  );
};

export default ChartBar;
