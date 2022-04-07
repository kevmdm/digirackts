import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Dapp from "../../cardano/TestingApp";
import { Layout } from "../../components/layouts";
import { Box, Typography, Link, IconButton, Button, Grid } from "@mui/material";
import { styled } from '@mui/material/styles';

import { flexbox } from "@mui/system";

export default function TestPage() {
  return (
    <>
      <Box sx={{ height: "200px" }}></Box>
      <Box
        sx={{
          width: "flex",
          height: 740,
          backgroundColor: "#F9F9F9",
        }}
      >
        <Grid container sx={{ ml: "77px", paddingTop: "4%" }}>
          <Grid item xs={6}>
            <Grid container>
              <Grid item xs={12}>
                <Link href={"/"}>
                  <IconButton
                    size="large"
                    edge="end"
                    aria-label="account of current user"
                    aria-haspopup="true"
                    color="inherit"
                    sx={{'&:hover': {
                      backgroundColor: 'transparent',
                    },}}
                  >
                    <Image
                      src={"/img/navbar/textLogo.png"}
                      width="279px"
                      height={"73px"}
                    ></Image>
                  </IconButton>
                </Link>
              </Grid>

              <Grid item xs={12}>
                <Typography paddingRight={"30%"} paddingTop={"4%"}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Necessitatibus vitae earum provident iste enim quia officiis
                  temporibus, quasi adipisci alias, dolorem ratione laboriosam
                  rem maxime? Earum, veniam distinctio? Quibusdam, dolore?
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={2} sx={{ paddingTop: "30px" }}>
            {" "}
            <Typography variant="h6">Browse</Typography>{" "}
          </Grid>
          <Grid item xs={2} sx={{ paddingTop: "30px" }}>
            <Typography variant="h6">Creators</Typography>{" "}
          </Grid>
          <Grid item xs={2} sx={{ paddingTop: "30px" }}>
            {" "}
            <Link>
              <Typography variant="h6">About us</Typography>
            </Link>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
TestPage.getLayout = function getLayout(page: JSX.Element) {
  return <Layout>{page}</Layout>;
};
