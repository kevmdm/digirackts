import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

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

export default function MyNftTab() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

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
              justifyContent: "start",
              //color: "black",
              maxWidth: "120px",
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
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Box sx={{ paddingX: "50px" }}>mynft </Box>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Box sx={{ paddingX: "50px" }}>activity</Box>
      </TabPanel>
    </Box>
  );
}
