import React, { useEffect, useRef } from "react";
import ApexCharts from "apexcharts";

const ChartComponent = ({ n }: { n: number }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const options = {
      chart: {
        width: 180,
        type: "donut",
      },
      legend: {
        show: false, // Hide the default legend
      },
      dataLabels: {
        enabled: false,
      },
      series: [n, 100 - n],
      plotOptions: {
        pie: {
          donut: {
            size: "85%",
            labels: {
              show: false,
              total: {
                show: true,
                fontSize: "20px",
                fontWeight: "bold",
                color: "black",
              },
            },
          },
        },
      },
      colors: ["#fcf85b", "#ffffff"],
      annotations: {
        points: [
          {
            x: "50%",
            y: "50%",
            text: "44%",
            fill: "#000",
            fontSize: "16px",
          },
        ],
      },
    };

    const chart = new ApexCharts(chartRef.current, options);
    chart.render();

    // Clean up the chart when the component unmounts
    return () => {
      chart.destroy();
    };
  }, []);

  return (
    <div className="relative">
      <div ref={chartRef}></div>
      <div className="text-white absolute top-[45%] left-[45%]">{n}</div>
    </div>
  );
};

export default ChartComponent;
