"use client";

import Head from "next/head";
import SignOut from "@/components/sign-out";
import YocaTitle from "@/components/yoca-title";
import {
  Box,
  Card,
  Container,
  Unstable_Grid2 as Grid,
  Divider,
} from "@mui/material";
import { OverviewTraffic } from "@/components/sections/overview/overview-traffic";
import ApexChart from "@/components/sections/overview/radar-chart";
import SimplePie from "@/components/simple-pie";

const now = new Date();

const Page = () => (
  <div className="bg-[#71856b] h-screen">
    <Head>
      <title>Overview | Devias Kit</title>
    </Head>
    <Box
      component="main"
      sx={{
        backgroundColor: "#71856b",
        flexGrow: 1,
        py: 8,
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={3} className="pt-[100px]">
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
            className="h-[1000px] lg:h-[500px] md:pb-[140px]"
          >
            <Divider
              sx={{
                width: "97%",
                borderBottom: "1px solid #eff1ed",
                paddingTop: "10px",
                margin: "0 auto",
              }}
            />
            <Grid xs={12} md={5.5} sx={{ height: "40vh" }}>
              <OverviewTraffic
                chartSeries={[11, 31, 21, 5, 32]}
                labels={["數學", "動畫", "程式", "設計思考", "物理"]}
                sx={{ height: "100%" }}
              />
            </Grid>
            <Grid xs={12} md={6.5} sx={{ height: "40vh" }}>
              <ApexChart
                chartSeries={[20, 100, 40, 30, 50]}
                labels={["數學", "動畫", "程式", "設計思考", "物理"]}
                sx={{ height: "100%" }}
              />
            </Grid>
          </Card>
        </Grid>
      </Container>
    </Box>
  </div>
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
