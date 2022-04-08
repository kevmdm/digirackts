import Image from "next/image";
import { Layout } from "../../components/layouts";
import { Box, Typography, Link, IconButton, Grid } from "@mui/material";
import NextLink from "next/link";

export default function TestPage() {
  return (
    <div>
      <h1>This is a test</h1>
    </div>
  );
}
TestPage.getLayout = function getLayout(page: JSX.Element) {
  return <Layout>{page}</Layout>;
};
