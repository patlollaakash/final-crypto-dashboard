import React, { useState } from "react";
import Chart from "react-apexcharts";

const LineChart = () => {
  const [options, setOptions] = useState({
    series: [
      {
        name: "Desktops",
        data: [10, 41, 35, 51, 49, 62],
      },
    ],
    annotations: {
      points: [
        {
          x: "Feb",
          y: 41,
        },
        {
          x: "Mar",
          y: 35,
        },
        {
          x: "May",
          y: 49,
        },
      ],
    },
    chart: {
      height: 350,
      type: "line",
      zoom: {
        enabled: false,
      },
      background: "transparent", // Set background to transparent
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth", // or "straight" if you want straight lines
      colors: ["#0d6efd"], // Set the line color here
    },
    grid: {
      show: false, // Hide grid
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
      ],
      axisBorder: {
        show: false, // Hide x-axis border
      },
      axisTicks: {
        show: false, // Hide x-axis ticks
      },
    },
    yaxis: {
      show: false, // Hide y-axis labels and ticks
    },
    legend: {
      horizontalAlign: "left",
    },
    theme: {
      mode: "dark",
    },
  });

  return (
    <div>
      <Chart
        options={options}
        series={options.series}
        type="line"
        height={95} // Adjust the height as needed
      />
    </div>
  );
};

export default LineChart;
