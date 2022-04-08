import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import store from "../../../interfaces/store";
import { compose } from "redux";
import { connect } from "react-redux";
import { loadAssets } from "../../../store/wallet/api";
import { FC, useEffect } from "react";
import StateWallet from "../../../interfaces/stateWallet";
import SearchNFT from "../../SearchBoxes/SearchNFT";
import { Grid } from "@mui/material";
import MenuButton from "../../MenuButton";
import { MyAssetCard } from "../../MyAssetCard";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <>{children}</>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
type MyNftTabParams = {
  state_wallet: StateWallet;
  loadAssets: (
    wallet: StateWallet,
    callback: (res: LoadAssetResp) => void
  ) => any;
};
type LoadAssetResp = {
  success: boolean | undefined;
};

const MyNftTab: FC<MyNftTabParams> = ({ state_wallet, loadAssets }) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  useEffect(() => {
    console.log("useEfect");
    if (
      !state_wallet.loaded_assets &&
      state_wallet.connected &&
      state_wallet.loading != "GETTING_ASSETS"
    ) {
      loadAssets(state_wallet, (res: LoadAssetResp) => {
        if (res.success) {
          console.log(state_wallet.data.assets);
        }
      });
    }

    // return () => {
    //   second;
    // };
  }, [loadAssets, state_wallet]);

  return (
    <Box sx={{ width: "100%" }}>
      <Box
        sx={{ borderBottom: 1, borderColor: "divider", paddingLeft: "60px" }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          sx={{
            "& .MuiTabs-indicator": {
              display: "flex",
              justifyContent: "center",
              //color: "black",
              ///maxWidth: "120px",
              //backgroundColor:'transparent'
            },
          }}
          aria-label="basic tabs example"
        >
          <Tab
            label="My NFTs"
            {...a11yProps(0)}
            sx={{
              textAlign: "start",
              justifyContent: "start",
              textTransform: "none",
              fontSize: 25,
              fontWeight: 500,
              //bgcolor:'red',
              color: "primary.contrastText",

              "&.Mui-selected": {
                color: "text.primary",
              },
              "&.Mui-focusVisible": {
                backgroundColor: "blue",
                width: "100%",
              },
            }}
            iconPosition={"end"}
            icon={
              <>
                <Box
                  sx={{
                    marginLeft: "5px",
                    paddingX: "5px",
                    color: "text.secondary",
                    backgroundColor: "primary.main",
                    borderRadius: 100,
                  }}
                >
                  <Typography paddingX={"5px"}>122</Typography>
                </Box>
              </>
            }
          />
          <Tab
            label="Activity"
            {...a11yProps(1)}
            sx={{
              mx: 1,
              textTransform: "none",
              fontSize: 25,
              fontWeight: 500,
              //bgcolor:'red',
              color: "primary.contrastText",

              "&.Mui-selected": {
                color: "text.primary",
              },
              "&.Mui-focusVisible": {
                backgroundColor: "blue",
                width: "100%",
              },
            }}
            // iconPosition={"end"}
            // icon={
            //   <>
            //     <Box
            //       sx={{
            //         marginLeft: "5px",
            //         color: "text.secondary",
            //         backgroundColor: "primary.main",
            //         borderRadius: 100,
            //       }}
            //     >
            //       <Typography paddingX={"5px"}>122</Typography>
            //     </Box>
            //   </>
            // }
          />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Box sx={{ paddingX: "10px" }}>
          <Grid container>
            <Grid item xs={12} sm={6} md={5}>
              <SearchNFT
                placeholder="Search NFTs"
                onChange={(e) => {
                  console.log(e.target.value);
                }}
              ></SearchNFT>
            </Grid>
            <Grid item xs={3}>
              <MenuButton></MenuButton>
            </Grid>
            <Grid item xs={12}>
              <Grid container>
                <Grid item xs={12} sm={6} md={3}>
                  <MyAssetCard asset={'hola'}>

                  </MyAssetCard>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Box sx={{ paddingX: "50px" }}>activity</Box>
      </TabPanel>
    </Box>
  );
};
function mapStateToProps(state: store) {
  return {
    state_wallet: state.wallet,
  };
}
function mapDispatchToProps(dispatch: any) {
  return {
    loadAssets: (wallet: StateWallet, callback: () => void) =>
      dispatch(loadAssets(wallet, callback)),

    // availableWallets: (callback) => dispatch(availableWallets(callback)),
    // connectWallet: (is_silent, callback) =>
    //   dispatch(connectWallet(is_silent, callback)),
  };
}
export default compose(connect(mapStateToProps, mapDispatchToProps))(MyNftTab);
