import Image from "next/image";
import { Layout } from "../../components/layouts";
import { Box, Typography, Link, IconButton, Grid } from "@mui/material";
import NextLink from "next/link";

export default function VerifyPage() {
  return (
    <div>
      <Typography align="center">Here start the about</Typography>
      <Box sx={{ height: 200 }}>
        <Grid container sx={{margin:"4%", maxWidth:"92%"}}>
          <Grid item>
            <Typography>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque
              dolores vero dolorem, error iste adipisci itaque voluptate sit
              eaque dolore excepturi? Rerum fugiat magnam illo? Eos animi
              tenetur aliquid porro.

              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque
              dolores vero dolorem, error iste adipisci itaque voluptate sit
              eaque dolore excepturi? Rerum fugiat magnam illo? Eos animi
              tenetur aliquid porro.

              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque
              dolores vero dolorem, error iste adipisci itaque voluptate sit
              eaque dolore excepturi? Rerum fugiat magnam illo? Eos animi
              tenetur aliquid porro.

              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque
              dolores vero dolorem, error iste adipisci itaque voluptate sit
              eaque dolore excepturi? Rerum fugiat magnam illo? Eos animi
              tenetur aliquid porro.

              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque
              dolores vero dolorem, error iste adipisci itaque voluptate sit
              eaque dolore excepturi? Rerum fugiat magnam illo? Eos animi
              tenetur aliquid porro.
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque
              dolores vero dolorem, error iste adipisci itaque voluptate sit
              eaque dolore excepturi? Rerum fugiat magnam illo? Eos animi
              tenetur aliquid porro.
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque
              dolores vero dolorem, error iste adipisci itaque voluptate sit
              eaque dolore excepturi? Rerum fugiat magnam illo? Eos animi
              tenetur aliquid porro.
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque
              dolores vero dolorem, error iste adipisci itaque voluptate sit
              eaque dolore excepturi? Rerum fugiat magnam illo? Eos animi
              tenetur aliquid porro.
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
VerifyPage.getLayout = function getLayout(page: JSX.Element) {
  return <Layout>{page}</Layout>;
};