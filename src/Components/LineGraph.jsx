import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Line } from "react-chartjs-2";
import { formatPoints, formatPercentage, getColor } from "../util";

const LineGraph = () => {
  const [points, setPoints] = useState([]);
  const { option } = useSelector((state) => state);

  const data = {
    datasets: [
      {
        data: points,
        backgroundColor: getColor(option),
        pointBackgroundColor: "#fff",
        pointBorderWidth: 0,
        pointRadius: 0,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: getColor(option),
        pointHoverBorderWidth: 0,
      },
    ],
  };

  const options = {
    legend: {
      display: false,
    },
    elements: {
      point: {
        radius: 0,
      },
    },
    maintainAspectRatio: false,
    tooltips: {
      mode: "index",
      intersect: false,
      callbacks: {
        label: (tooltipItem, data) => formatPercentage(tooltipItem.value),
      },
    },
    scales: {
      xAxes: [
        {
          type: "time",
          time: {
            format: "MM/DD/YY",
            tooltipFormat: "ll",
          },
        },
      ],
      yAxes: [
        {
          gridLines: {
            display: false,
          },
          ticks: {
            // Include a dollar sign in the ticks
            callback: (value, index, values) => formatPercentage(value),
          },
        },
      ],
    },
  };

  useEffect(() => {
    fetch("https://www.disease.sh/v3/covid-19/historical/all?lastdays=100")
      .then((response) => response.json())
      .then((data) => {
        const dataToDisplay = data[option];
        setPoints(formatPoints(dataToDisplay));
      });
  }, [option]);

  return (
    <div>
      <Line data={data} options={options} />
    </div>
  );
};

export default LineGraph;
