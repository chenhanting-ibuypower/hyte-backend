"use client";

import PropTypes from 'prop-types';
import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import {Box, CardContent, CardHeader} from '@mui/material';
import YocaTitle from "@/components/yoca-title";

const ApexChart = (props) => {
  const { chartSeries, labels, sx } = props;
  const [showMenu, setShowMenu] = useState(false);
  const seriesData = [
    {
      name: 'Series 1',
      data: chartSeries,
    },
  ];
  const optionsData = {
    chart: {
      background: "transparent",
      height: 350,
      type: 'radar',
      toolbar: {
        show: true,
        tools: {
          download: false,
        },
      },
    },
    dataLabels: {
      enabled: false,
      background: {
        enabled: true,
        borderRadius: 6,
      }
    },
    plotOptions: {
      radar: {
        size: 140,
        polygons: {
          strokeColors: ['#e9e9e9', 'transparent', '#ffffff'],
          fill: {
            colors: ['transparent'],
          },
        },
      },
    },
    title: {},
    colors: ['#b4c3ac'],
    markers: {
      size: 4,
      colors: ['#fff'],
      strokeColor: '#b4c3ac',
      strokeWidth: 4,
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return val;
        },
      },
    },
    xaxis: {
      categories: labels,
      labels: {
        style: {
          colors: labels.map (_ => '#FFFFFF'), // Replace with your desired font color
        },
      },
    },
    yaxis: {
      tickAmount: 7,
      show: false,
      labels: {
        formatter: function (val, i) {
          if (i % 2 === 0) {
            return val;
          } else {
            return '';
          }
        },
      },
    },
  };

  return (
    <Box sx={{ height: '100%', ...sx, padding: "20px"  }}  className="flex md:block xl:flex">
      <YocaTitle
        title="適性分析"
        subtitle="前五項分析評比"
        tree={3}
        className="w-[180px]"
      ></YocaTitle>
      <CardContent>
        <div id="chart" className="min-w-[400px]">
          <ReactApexChart
            options={optionsData}
            series={seriesData}
            type="radar"
            height={350}
          />
        </div>
      </CardContent>
    </Box>
  );
};
export default ApexChart;
