import React, { RefObject, useEffect, useRef, useState } from "react";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { Box } from "@mui/material";
import axios from "axios";

interface ChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor: string;
    borderColor: string;
    borderWidth: number;
  }[];
}

const BarChart = ({ sx = {} }: { sx?: React.CSSProperties }) => {
  const chartRef: RefObject<any> = useRef(null);
  const [apiData, setApiData] = useState<ChartData>({
    labels: [],
    datasets: [
      {
        label: "Data fetching with axios library from API",
        data: [],
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  });

  ChartJS.register(BarElement, CategoryScale, LinearScale);

  const options = {
    maintainAspectRatio: false,
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    layout: {
      margin: {
        left: 8,
        right: 8,
        top: 8,
        bottom: 8,
      },
      autoPadding: true,
      padding: {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
      },
    } as CustomLayoutOptions,
  };

  useEffect(() => {
    const destroyChart = () => {
      if (chartRef.current && chartRef.current.chart) {
        chartRef.current.chart.destroy();
      }
    };
    destroyChart();
    return destroyChart;
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        const newData = response.data;

        setApiData({
          labels: newData.map((item: any) => item.userId), // Use title as labels
          datasets: [
            {
              label: "Data from API",
              data: newData.map((item: any) => item.id), // Use id as data
              backgroundColor: "rgba(75, 192, 192, 0.2)",
              borderColor: "rgba(75, 192, 192, 1)",
              borderWidth: 1,
            },
          ],
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  console.log(apiData);

  return (
    <Box sx={{ width: "80%", margin: "auto" }}>
      <Bar ref={chartRef} data={apiData} options={options} />
    </Box>
  );
};

export default BarChart;
