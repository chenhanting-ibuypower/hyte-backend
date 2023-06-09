import PropTypes from "prop-types";
import ComputerDesktopIcon from "@heroicons/react/24/solid/ComputerDesktopIcon";
import DeviceTabletIcon from "@heroicons/react/24/solid/DeviceTabletIcon";
import PhoneIcon from "@heroicons/react/24/solid/PhoneIcon";
import { Box, CardContent, Stack, SvgIcon, useTheme } from "@mui/material";
import { Chart } from "@/components/chart";
import YocaTitle from "@/components/yoca-title";

const colors = ["#fcf85b", "#ffdf8f", "#fec491", "#efd8ff", "#abdbfb"];

const useChartOptions = (labels) => {
  const theme = useTheme();

  return {
    chart: {
      foreColor: "#ffffff",
      background: "transparent",
    },
    colors,
    dataLabels: {
      enabled: false,
    },
    labels,
    legend: {
      show: false,
    },
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
        expandOnClick: false,
      },
    },
    states: {
      active: {
        filter: {
          type: "none",
        },
      },
      hover: {
        filter: {
          type: "none",
        },
      },
    },
    stroke: {
      width: 2,
      colors: ["#fff"],
    },
    theme: {
      mode: theme.palette.mode,
    },
    tooltip: {
      fillSeriesColor: false,
    },
  };
};

const iconMap = {
  Desktop: (
    <SvgIcon>
      <ComputerDesktopIcon />
    </SvgIcon>
  ),
  Tablet: (
    <SvgIcon>
      <DeviceTabletIcon />
    </SvgIcon>
  ),
  Phone: (
    <SvgIcon>
      <PhoneIcon />
    </SvgIcon>
  ),
};

export const OverviewTraffic = (props) => {
  const { chartSeries, labels, sx } = props;
  const chartOptions = useChartOptions(labels);

  return (
    <Box sx={{ ...sx, padding: "20px" }} className="flex">
      <div className="block">
        <YocaTitle
          title="總時數72"
          subtitle="已學習小時數"
          label="time"
          tree={2}
          className="w-[180px]"
        ></YocaTitle>
        <div className="flex flex-col gap-y-2 mt-4">
          {colors.map((color, key) => (
            <div className="flex gap-x-2" key={key}>
              <div
                class="w-4 h-4 rounded-full"
                style={{ backgroundColor: color }}
              ></div>
              <span className="text-white">{labels[key]}</span>
            </div>
          ))}
        </div>
      </div>

      <CardContent className="min-w-[30vw]">
        <Chart
          height={300}
          options={chartOptions}
          series={chartSeries}
          type="donut"
          width="100%"
        />
        <Stack
          alignItems="center"
          direction="row"
          justifyContent="center"
          spacing={2}
          sx={{ mt: 2 }}
        ></Stack>
      </CardContent>
    </Box>
  );
};

OverviewTraffic.propTypes = {
  chartSeries: PropTypes.array.isRequired,
  labels: PropTypes.array.isRequired,
  sx: PropTypes.object,
};
