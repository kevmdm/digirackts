import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import { FC } from "react";
import { Typography, Box, Grid } from "@mui/material";
import Image from "next/image";

type DialogParams = {
  open: boolean;
  title?: string;
  action1Text?: string;
  action2Text?: string;
  action1?: () => void;
  action2?: () => void;
};
export const WalletConnectedDialog: FC<DialogParams> = ({
  open,
  children,
  title,
  action1,
  action2,
  action1Text,
  action2Text,
}) => {
  //const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    //setOpen(true);
  };

  const handleClose = () => {
    //setOpen(false);
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <Grid
        container
        sx={{
          alignContent: "center",
        }}
      >
        <Grid item xs={12} sx={{ alignContent: "center", marginTop:'20px' }}>
          <Typography
            fontSize={44}
            textAlign="center"
            sx={{ marginY: "10px", marginX: "50px", }}
          >
            Wallet Connected
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Box sx={{ margin: "auto", width: "108px", height: "108px" }}>
            <Image
              src={"/img/dialog/walletIconGreen.png"}
              width="108px"
              height={"108px"}
            ></Image>
          </Box>
        </Grid>
        <Grid item xs={12} sx={{ alignContent: "center", marginBottom:'20px' }}>
          <Typography
            color={"primary.contrastText"}
            fontSize={28}
            textAlign="center"
            sx={{ marginTop: "27px", marginBottom: "30px", marginX: "auto" }}
          >
            Welcome your wallet has been connected
          </Typography>
        </Grid>
        <Grid item xs={12} sx={{ alignItems: "center" }}>
          <Grid container sx={{paddingX:'110px'}}>
            <Grid
              item
              xs={12}
              sm={6}
              sx={{ alignContent: "center", margin: "auto" }}
            >
              <Box
                sx={{
                  margin: "auto",
                  width: 230,
                }}
              >
                <Button
                  sx={{
                    color: "text.secondary",
                    marginBottom:'10px',
                    marginLeft:'100',
                    width: 230,
                    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                    borderRadius: "100px",
                  }}
                  variant="contained"
                  onClick={action1}
                >
                  <Box>
                    <Typography
                      sx={{
                        color: "text.secondary",
                        fontSize: 24,
                        paddingY: "8px",
                        fontWeight:500,
                        textTransform: 'none',
                      }}
                    >
                      {action1Text}
                    </Typography>
                  </Box>
                </Button>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              sx={{ alignContent: "center", margin: "auto" }}
            >
              <Box
                sx={{
                  margin: "auto",
                  width: 232,
                }}
              >
                <Button
                  sx={{
                    color: "text.secondary",
                    marginBottom:'10px',
                    width: 232,
                    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                    borderRadius: "100px",
                  }}
                  variant="contained"
                  onClick={action2}
                  autoFocus
                >
                  <Typography
                    sx={{
                      color: "text.secondary",
                      fontSize: 24,
                      paddingY: "8px",
                      fontWeight:500,
                      textTransform: 'none',
                    }}
                  >
                    {action2Text}
                  </Typography>
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Box
        sx={{
          margin: "auto",
          height: 30,
        }}
      ></Box>
    </Dialog>
  );
};
