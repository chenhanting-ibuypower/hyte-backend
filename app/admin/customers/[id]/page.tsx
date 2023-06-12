"use client";

import Head from "next/head";
import SignOut from "@/components/sign-out";
import { subDays, subHours } from "date-fns";
import YocaTitle from "@/components/yoca-title";
import {
  Box,
  Card,
  Container,
  Unstable_Grid2 as Grid,
  Divider,
} from "@mui/material";
import { OverviewBudget } from "@/components/sections/overview/overview-budget";
import { OverviewLatestOrders } from "@/components/sections/overview/overview-latest-orders";
import { OverviewLatestProducts } from "@/components/sections/overview/overview-latest-products";
import { OverviewSales } from "@/components/sections/overview/overview-sales";
import { OverviewTasksProgress } from "@/components/sections/overview/overview-tasks-progress";
import { OverviewTotalCustomers } from "@/components/sections/overview/overview-total-customers";
import { OverviewTotalProfit } from "@/components/sections/overview/overview-total-profit";
import { OverviewTraffic } from "@/components/sections/overview/overview-traffic";
import ApexChart from "@/components/sections/overview/radar-chart";
import SimplePie from "@/components/simple-pie";

const now = new Date();

const Page = () => (
  <>
    <Head>
      <title>Overview | Devias Kit</title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8,
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={3}>
          <Grid xs={12} sm={6} lg={3}>
            <OverviewBudget
              difference={12}
              positive
              sx={{ height: "100%" }}
              value="$24k"
            />
          </Grid>
          <Grid xs={12} sm={6} lg={3}>
            <OverviewTotalCustomers
              difference={16}
              positive={false}
              sx={{ height: "100%" }}
              value="1.6k"
            />
          </Grid>
          <Grid xs={12} sm={6} lg={3}>
            <OverviewTasksProgress sx={{ height: "100%" }} value={75.5} />
          </Grid>
          <Grid xs={12} sm={6} lg={3}>
            <OverviewTotalProfit sx={{ height: "100%" }} value="$15k" />
          </Grid>
          <Grid xs={12} lg={8} hidden>
            <OverviewSales
              chartSeries={[
                {
                  name: "This year",
                  data: [18, 16, 5, 8, 3, 14, 14, 16, 17, 19, 18, 20],
                },
                {
                  name: "Last year",
                  data: [12, 11, 4, 6, 2, 9, 9, 10, 11, 12, 13, 13],
                },
              ]}
              sx={{ height: "100%" }}
            />
          </Grid>

          <Card
            sx={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              width: "100%",
              margin: "10px auto",
              backgroundColor: "#829671",
            }}
          >
            <Divider
              sx={{
                width: "97%",
                borderBottom: "1px solid #eff1ed",
                paddingTop: "10px",
                margin: "0 auto",
              }}
            />
            <Grid xs={12} md={4}>
              <div className="flex items-center justify-center">
                <YocaTitle
                  title="單元132"
                  subtitle="已完成數量"
                  label="unit"
                  tree={1}
                ></YocaTitle>
                <SimplePie n={10} />
              </div>
            </Grid>
            <Grid xs={12} md={4}>
              <div className="flex items-center justify-center">
              <YocaTitle
                title="等級6"
                subtitle="已到達等級"
                label="level"
                tree={2}
              ></YocaTitle>
                <SimplePie n={20} />
              </div>
            </Grid>
            <Grid xs={12} md={4}>
              <div className="flex items-center justify-center">
              <YocaTitle
                title="心情9.8"
                subtitle="學習開心指數"
                label="mood"
                tree={2}
              ></YocaTitle>
                <SimplePie n={30} />
              </div>
            </Grid>
          </Card>

          <Card
            sx={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              width: "100%",
              backgroundColor: "#829671",
            }}
          >
            <Divider
              sx={{
                width: "97%",
                borderBottom: "1px solid #eff1ed",
                paddingTop: "10px",
                margin: "0 auto",
              }}
            />
            <Grid xs={12} md={6}>
              <OverviewTraffic
                chartSeries={[63, 15, 22]}
                labels={["Desktop", "Tablet", "Phone"]}
                sx={{ height: "100%" }}
              />
            </Grid>
            <Grid xs={12} md={6}>
              <ApexChart
                chartSeries={[20, 100, 40, 30, 50]}
                labels={["數學", "動畫", "程式", "設計思考", "物理"]}
                sx={{ height: "100%" }}
              />
            </Grid>
          </Card>
          <Grid xs={12} md={6} lg={4}></Grid>
          <Grid xs={12} md={12} lg={8}></Grid>
        </Grid>
      </Container>
    </Box>
  </>
);

export default Page;

async function SignOutComp() {
  return (
    <div className="flex h-screen">
      <div className="w-screen h-screen flex flex-col space-y-5 justify-center items-center">
        <SignOut />
      </div>
    </div>
  );
}
