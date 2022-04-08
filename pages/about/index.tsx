import Image from "next/image";
import { Layout } from "../../components/layouts";
import { Box, Typography, Link, IconButton, Grid } from "@mui/material";
import NextLink from "next/link";

export default function AboutPage() {
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
        <Grid container sx={{ ml: "4%", paddingTop: "4%" }}>
          {/* Logo row start  */}

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
                  paddingRight={"30%"}
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
          <Grid item xs={2} sx={{ paddingTop: "30px" }}>
            {/* browse start  */}

            <Grid container>
              <Grid item xs={12}>
                <Typography variant="h6">Browse</Typography>
              </Grid>

              <Grid item xs={12} sx={{ paddingTop: "10%" }}>
                <NextLink href="/explore" passHref>
                  <Link
                    variant="h6"
                    underline="none"
                    sx={{ fontWeight: "fontWeightLight", color: "#131313" }}
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
                    variant="h6"
                    underline="none"
                    sx={{ fontWeight: "fontWeightLight", color: "#131313" }}
                  >
                    Launch Pad
                  </Link>
                </NextLink>
              </Grid>

              <Grid item xs={12} sx={{ paddingTop: "10%" }}>
                <NextLink href="/verify-your-collection" passHref>
                  <Link
                    variant="h6"
                    underline="none"
                    sx={{ fontWeight: "fontWeightLight", color: "#131313" }}
                  >
                    Verify Your Collection
                  </Link>
                </NextLink>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={2} sx={{ paddingTop: "30px" }}>
            {/* About us start */}
            <NextLink href="/about-us">
              <Link variant="h6">About us</Link>
            </NextLink>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
AboutPage.getLayout = function getLayout(page: JSX.Element) {
  return <Layout>{page}</Layout>;
};
