import Image from "next/image";
import { Layout } from "../../components/layouts";
import { Box, Typography, Link, IconButton, Grid } from "@mui/material";
import NextLink from "next/link";

export default function VerifyPage() {
  return (
    <div>
      <Typography align="center">Here start the terms and conditions </Typography>
      <Box sx={{ height: 200 }}>
        <Grid container sx={{ margin: "4%", maxWidth: "92%" }}>
          <Grid item xs={12}>
            <Typography variant="h1" align="center">Terms and conditions</Typography>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
VerifyPage.getLayout = function getLayout(page: JSX.Element) {
  return <Layout>{page}</Layout>;
};
