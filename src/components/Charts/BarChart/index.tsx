import React from "react";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(BarElement, CategoryScale, LinearScale);

const data = {
  labels: ["Label 1", "Label 2", "Label 3"],
  datasets: [
    {
      label: "My Bar Chart",
      data: [10, 20, 30],
      backgroundColor: ["red", "blue", "green"],
    },
  ],
};

const options = {
  maintainAspectRatio: false,
  aspectRatio: 0.8,
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

const BarChart = () => {
  return (
    <>
      <Bar data={data} options={options} />
    </>
  );
};

export default BarChart;
