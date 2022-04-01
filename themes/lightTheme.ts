
import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
    palette: {

        primary: {
            main: '#2B97C1',
            dark: '#2B97C1',

        },
        secondary: {
            main: '#2b97c1',

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
        },
        success: {
            main: '#41BB63',
        },

    },
    typography: {
        fontFamily: 'DM Sans',
    },
});