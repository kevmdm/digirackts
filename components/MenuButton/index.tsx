import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Menu, { MenuProps } from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Box, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";

const StyledMenu = styled((props: MenuProps) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "top",
      horizontal: "left",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "left",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 20,
    //marginTop: theme.spacing(1),
    minWidth: 240,
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    // "& .MuiMenuItem-root": {
    //   "& .MuiSvgIcon-root": {
    //     fontSize: 18,
    //     color: theme.palette.text.secondary,
    //     marginRight: theme.spacing(1.5),
    //   },
    //   "&:active": {
    //     backgroundColor: alpha(
    //       theme.palette.primary.main,
    //       theme.palette.action.selectedOpacity
    //     ),
    //   },
    // },
  },
}));

export default function MenuButton() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Box
        onClick={handleClick}
        sx={{
          paddingY: "3px",
          paddingX: "5%",
          marginTop: "3%",
          height: "41px",
          width: "240px",
          textTransform: "none",
          background: "#FFFFFF",
          border: "1px solid rgba(0, 0, 0, 0.15)",
          boxSizing: "border-box",
          boxShadow: "3px 12px 20px rgba(202, 202, 202, 0.25)",
          borderRadius: "100px",
        }}
      >
        <Grid container>
          <Grid item xs={11}>
            <Typography
              sx={{
                paddingLeft: "10px",
                color: "text.primary",
                fontWeight: "300",
                fontSize: "22px",
              }}
            >
              Not for sale
            </Typography>
          </Grid>
          <Grid item xs={1}>
            <KeyboardArrowDownIcon
              sx={{
                marginTop: "5px",
              }}
            />
          </Grid>
        </Grid>
      </Box>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          "aria-labelledby": "demo-customized-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose} disableRipple>
          <Grid container>
            <Grid item xs={11}>
              <Typography
                sx={{
                  paddingLeft: "10px",
                  color: "text.primary",
                  fontWeight: "300",
                  fontSize: "22px",
                }}
              >
                All Items
              </Typography>
            </Grid>
            <Grid item xs={1}>
              <KeyboardArrowUpIcon
                sx={{
                  marginTop: "5px",
                }}
              />
            </Grid>
          </Grid>
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
          <Grid container>
            <Grid item xs={11}>
              <Typography
                sx={{
                  paddingLeft: "10px",
                  color: "text.primary",
                  fontWeight: "300",
                  fontSize: "22px",
                }}
              >
                On sale
              </Typography>
            </Grid>
            <Grid item xs={1}></Grid>
          </Grid>
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
          <Grid container>
            <Grid item xs={11}>
              <Typography
                sx={{
                  paddingLeft: "10px",
                  color: "text.primary",
                  fontWeight: "300",
                  fontSize: "22px",
                }}
              >
                Not for sale
              </Typography>
            </Grid>
            <Grid item xs={1}></Grid>
          </Grid>
        </MenuItem>
      </StyledMenu>
    </div>
  );
}
