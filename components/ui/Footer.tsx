import React from "react";
import NextLink from "next/link";
import Image from "next/image";
import { Layout } from "../../components/layouts";
import { Box, Typography, Link, IconButton, Button, Grid } from "@mui/material";

export const Footer = () => {
  return (
    <div>
      <Box
        sx={{
          flexGrow: 1,
          height: 640,
          backgroundColor: "#F9F9F9",
        }}
      >
        <Grid container sx={{ paddingTop: "4%" }}>
          {/* Logo row start  */}
          <Grid item xs={6}>
            <Grid container sx={{ ml: "7%" }}>
              <Grid item xs={12}>
                <Link href={"/"}>
                  <IconButton
                    size="large"
                    edge="end"
                    aria-label="account of current user"
                    aria-haspopup="true"
                    color="inherit"
                    sx={{
                      "&:hover": {
                        backgroundColor: "transparent",
                      },
                    }}
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
                <Typography
                  paddingRight={"25%"}
                  paddingTop={"4%"}
                  paddingLeft={"2%"}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Necessitatibus vitae earum provident iste enim quia officiis
                  temporibus, quasi adipisci alias, dolorem ratione laboriosam
                  rem maxime? Earum, veniam distinctio? Quibusdam, dolore?
                </Typography>
              </Grid>
              <Box sx={{ gridRowStart: "auto" }}>
                <NextLink href={"/"}>
                  <IconButton
                    size="large"
                    edge="end"
                    aria-label="account of current user"
                    aria-haspopup="true"
                    color="inherit"
                    sx={{
                      "&:hover": {
                        backgroundColor: "transparent",
                      },
                      paddingTop: "20%",
                    }}
                  >
                    <Image
                      src={"/img/footerLogos/twitter.png"}
                      width="90px"
                      height={"90px"}
                    ></Image>
                  </IconButton>
                </NextLink>
                <NextLink href={"/"}>
                  <IconButton
                    size="large"
                    edge="end"
                    aria-label="account of current user"
                    aria-haspopup="true"
                    color="inherit"
                    sx={{
                      "&:hover": {
                        backgroundColor: "transparent",
                      },
                      paddingTop: "20%",
                    }}
                  >
                    <Image
                      src="/img/footerLogos/discord.png"
                      width="90px"
                      height={"90px"}
                    ></Image>
                  </IconButton>
                </NextLink>
              </Box>
            </Grid>
          </Grid>
          {/* browse start  */}
          <Grid item xs={2} sx={{ paddingTop: "30px" }}>
            <Grid container>
              <Grid item xs={12}>
                <Typography variant="h6">Browse</Typography>
              </Grid>
              <Grid item xs={12} sx={{ paddingTop: "10%" }}>
                <NextLink href="/explore" passHref>
                  <Link
                    underline="none"
                    sx={{
                      fontWeight: "fontWeightLight",
                      color: "text.primary",
                      fontSize: "1.25rem",
                    }}
                  >
                    Market Place
                  </Link>
                </NextLink>
              </Grid>
            </Grid>
          </Grid>
          {/* creators start  */}
          <Grid item xs={2} sx={{ paddingTop: "30px" }}>
            <Grid container>
              <Grid item xs={12}>
                <Typography variant="h6">Creators</Typography>{" "}
              </Grid>
              <Grid item xs={12} sx={{ paddingTop: "10%" }}>
                <NextLink href="/LaunchPad" passHref>
                  <Link
                    underline="none"
                    sx={{
                      fontWeight: "fontWeightLight",
                      color: "text.primary",
                      fontSize: "1.25rem",
                    }}
                  >
                    Launch Pad
                  </Link>
                </NextLink>
              </Grid>
              <Grid item xs={12} sx={{ paddingTop: "10%" }}>
                <NextLink href="/verify-your-collection" passHref>
                  <Link
                    underline="none"
                    sx={{
                      fontWeight: "fontWeightLight",
                      color: "text.primary",
                      fontSize: "1.25rem",
                    }}
                  >
                    Verify Your Collection
                  </Link>
                </NextLink>
              </Grid>
            </Grid>
          </Grid>
          {/* About us start */}
          <Grid item xs={2} sx={{ paddingTop: "30px" }}>
            <Grid item xs={12}>
              <NextLink href="/about" passHref>
                <Link
                  variant="h6"
                  underline="none"
                  sx={{ color: "text.primary" }}
                >
                  About us
                </Link>
              </NextLink>
            </Grid>
            <Grid item xs={12} sx={{ paddingTop: "10%" }}>
              <NextLink href="/our-team" passHref>
                <Link
                  underline="none"
                  sx={{
                    fontWeight: "fontWeightLight",
                    color: "text.primary",
                    fontSize: "1.25rem",
                  }}
                >
                  Our Team
                </Link>
              </NextLink>
            </Grid>
            <Grid item xs={12} sx={{ paddingTop: "10%" }}>
              <NextLink href="/verify-your-collection" passHref>
                <Link
                  underline="none"
                  sx={{
                    fontWeight: "fontWeightLight",
                    color: "text.primary",
                    fontSize: "1.25rem",
                  }}
                >
                  Terms And Conditions
                </Link>
              </NextLink>
            </Grid>
            <Grid item xs={12} sx={{ paddingTop: "10%" }}>
              <NextLink href="/faq" passHref>
                <Link
                  underline="none"
                  sx={{
                    fontWeight: "fontWeightLight",
                    color: "text.primary",
                    fontSize: "1.25rem",
                  }}
                >
                  FAQ
                </Link>
              </NextLink>
            </Grid>
          </Grid>
        </Grid>
        <Box sx={{ paddingX: "4.8%", paddingTop: "2%" }}>
          <hr />
          <Typography align="center">
            ©Copyright 2022. All rights reserved
          </Typography>
        </Box>
      </Box>
    </div>
  );
};
