import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { formatPoints, formatPercentage } from "../util";
import numeral from "numeral";

const LineGraph = () => {
  const [points, setPoints] = useState([]);

  const data = {
    datasets: [
      {
        data: points,
        backgroundColor: "rgba(204, 16, 52, 0.5)",
        borderColor: "#CC1034",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 0,
        pointRadius: 0,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(204, 16, 52, 0.5)",
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
        label: (tooltipItem) => formatPercentage(tooltipItem.value),
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
            callback: (value) => formatPercentage(value),
          },
        },
      ],
    },
  };

  useEffect(() => {
    fetch("https://www.disease.sh/v3/covid-19/historical/all?lastdays=100")
      .then((response) => response.json())
      .then((data) => setPoints(formatPoints(data.cases)));
  }, []);

  return (
    <div>
      <Line data={data} options={options} />
    </div>
  );
};

export default LineGraph;
