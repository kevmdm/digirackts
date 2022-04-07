import { createTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";

export const lightTheme = createTheme({
  palette: {
    background: {
      default: "#FFFF",
    },

    primary: {
      main: "#2B97C1",
      dark: "#80C0D9",
      light: "#2B97C1",
      contrastText: "#A2A2A2",
    },
    secondary: {
      main: "#2B97C1",
      dark: "##80C0D9",
      light: "#2B97C1",
      contrastText: "#2B97C1",
    },
    text: {
      secondary: "#ffff",
      disabled: "#A2A2A2",
      //hint: '#A2A2A2',
      primary: "#131313",
    },
    info: {
      main: "#131313",
      contrastText: "#2b97c1",
      light: "#2B97C1",
      dark: "#ffff",
    },
    success: {
      main: "#41BB63",
    },
  },
  components: {
    MuiDialog: {
      styleOverrides: {
        container: {
          //borderRadius: 42,
          //backgroundColor: "white",
        },
        paper: {
          borderRadius: 42,
          maxWidth: 800,

          //backgroundColor: "white",
        },
        root: {
          //borderRadius: 42,
          //backgroundColor: "white",
        },
      },
    },
    MuiTypography: {
      defaultProps: {
        //fontFamily: 'DM Sans'
      },
      styleOverrides: {
        root: {
          // color: "#131313",
        },
      },
    },
    MuiAppBar: {
      defaultProps: {
        elevation: 0,
      },
      styleOverrides: {
        root: {
          backgroundColor: "#0000",
          //boxShadow: "0px 10px 25px rgba(182, 182, 182, 0.25)"
        },
      },
    },
  },
  typography: {
    //fontFamily: 'DM Sans', //'roboto'//
  },
});
