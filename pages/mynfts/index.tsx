import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Dapp from "../../cardano/TestingApp";
import { Layout } from "../../components/layouts";
import { Box, Grid, Typography } from "@mui/material";
import MyNftTab from "../../components/Tabs/myNftTab";

export default function MyNftPage() {
  return (
    <>
      <Grid container>
        <Grid item sm={12}>
          <Typography
            fontSize={55}
            fontWeight={700}
            sx={{ paddingTop: "20px", paddingLeft: "80px" }}
          >
            My NFTs
          </Typography>
        </Grid>
        <Grid item sm={12} sx={{ height: 20 }}></Grid>
        <Grid item sm={12}></Grid>
      </Grid>
      <MyNftTab></MyNftTab>
    </>
  );
}
MyNftPage.getLayout = function getLayout(page: JSX.Element) {
  return <Layout>{page}</Layout>;
};
