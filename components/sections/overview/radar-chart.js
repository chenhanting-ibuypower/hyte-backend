"use client";

import * as PropTypes from "prop-types";
import ReactApexChart from "react-apexcharts";
import React from "react";
import { Card, CardContent, CardHeader } from "@mui/material";
class ApexChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: "Series 1",
          data: [20, 100, 40, 30, 50, 80, 33],
        },
      ],
      options: {
        chart: {
          height: 350,
          type: "radar",
        },
        dataLabels: {
          enabled: true,
        },
        plotOptions: {
          radar: {
            size: 140,
            polygons: {
              strokeColors: "#e9e9e9",
              fill: {
                colors: ["#f8f8f8", "#fff"],
              },
            },
          },
        },
        title: {
          text: "Radar with Polygon Fill",
        },
        colors: ["#FF4560"],
        markers: {
          size: 4,
          colors: ["#fff"],
          strokeColor: "#FF4560",
          strokeWidth: 2,
        },
        tooltip: {
          y: {
            formatter: function (val) {
              return val;
            },
          },
        },
        xaxis: {
          categories: [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ],
        },
        yaxis: {
          tickAmount: 7,
          labels: {
            formatter: function (val, i) {
              if (i % 2 === 0) {
                return val;
              } else {
                return "";
              }
            },
          },
        },
      },
    };
  }

  render() {
    return (
      <Card sx={{ height: "100%" }}>
        <CardHeader title="Traffic Source" />
        <CardContent>
          <div id="chart">
            <ReactApexChart
              options={this.state.options}
              series={this.state.series}
              type="radar"
              height={350}
            />
          </div>
        </CardContent>
      </Card>
    );
  }
}

export default ApexChart;
