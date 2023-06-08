"use client";

import Head from "next/head";
import SignOut from "@/components/sign-out";
import { subDays, subHours } from "date-fns";
import { Box, Container, Unstable_Grid2 as Grid } from "@mui/material";
import { OverviewBudget } from "@/components/sections/overview/overview-budget";
import { OverviewLatestOrders } from "@/components/sections/overview/overview-latest-orders";
import { OverviewLatestProducts } from "@/components/sections/overview/overview-latest-products";
import { OverviewSales } from "@/components/sections/overview/overview-sales";
import { OverviewTasksProgress } from "@/components/sections/overview/overview-tasks-progress";
import { OverviewTotalCustomers } from "@/components/sections/overview/overview-total-customers";
import { OverviewTotalProfit } from "@/components/sections/overview/overview-total-profit";
import { OverviewTraffic } from "@/components/sections/overview/overview-traffic";
import ApexChart from "@/components/sections/overview/radar-chart";

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
          <Grid xs={12} lg={8}>
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
          <Grid xs={12} md={6} lg={4}>
            <OverviewTraffic
              chartSeries={[63, 15, 22]}
              labels={["Desktop", "Tablet", "Phone"]}
              sx={{ height: "100%" }}
            />
          </Grid>
          <Grid xs={12} md={6} lg={4}>
            <ApexChart />
          </Grid>
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
