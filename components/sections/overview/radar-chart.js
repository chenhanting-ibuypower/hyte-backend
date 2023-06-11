"use client";

import PropTypes from 'prop-types';
import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import {Box, CardContent, CardHeader} from '@mui/material';

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
    },
    plotOptions: {
      radar: {
        size: 140,
        polygons: {
          strokeColors: ['#e9e9e9', 'transparent', '#ffffff'],
          fill: {
            colors: ['#f8f8f8', '#fff'],
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
      categories: labels,
      labels: {
        style: {
          colors: labels.map (_ => '#FFFFFF'), // Replace with your desired font color
        },
      },
    },
    yaxis: {
      tickAmount: 5,
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
    <Box sx={{ height: '100%', ...sx }}>
      <CardHeader title="Traffic Source" />
      <CardContent>
        <div id="chart">
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
