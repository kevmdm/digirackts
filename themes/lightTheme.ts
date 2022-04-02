
import { createTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';

export const lightTheme = createTheme({
    palette: {
        background: {
            default: '#FFFF'
        },

        primary: {
            main: '#2B97C1',
            dark: '#2B97C1',
            light: '#2B97C1',
            contrastText: '#A2A2A2'
        },
        secondary: {
            main: '#2B97C1',
            dark: '#2B97C1',
            light: '#2B97C1',
            contrastText: '#2B97C1'


        },
        text: {

            secondary: '#131313',
            disabled: '#A2A2A2',
            //hint: '#A2A2A2',
            primary: '#131313',


        },
        info: {
            main: '#131313',
            contrastText: '#2b97c1',
            light: '#2B97C1',
            dark: '#ffff'
        },
        success: {
            main: '#41BB63',
        },

    },
    components: {
        MuiTypography: {
            defaultProps: {
                //fontFamily: 'DM Sans'
            },
            styleOverrides: {
                root: {
                    color: "#131313"
                }
            }
        },
        MuiAppBar: {
            defaultProps: {
                elevation: 0,



            },
            styleOverrides: {

                root: {
                    backgroundColor: '#0000',
                    boxShadow: "0px 10px 25px rgba(182, 182, 182, 0.25)"




                }
            }

        }
    },
    typography: {
        fontFamily: 'DM Sans', //'roboto'//
    },
});