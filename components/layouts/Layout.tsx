import React, { FC } from 'react'
import { Footer, Navbar } from '../ui'
import { ThemeProvider } from '@mui/material/styles';
import { darkTheme, lightTheme } from '../../themes'
import { CssBaseline } from '@mui/material';
import { Box } from '@mui/system';
import Head from 'next/head';
export const Layout: FC<{ title?: string }> = ({ children, title = 'Digirack' }) => {
  return (
    <div>
      <ThemeProvider theme={lightTheme}>
        <CssBaseline></CssBaseline>
        <Box sx={{ flexFlow: 1 }}>
          <Head>
            <title>{title}</title>
          </Head>
          <Navbar></Navbar>
          <Box sx={{ padding: '10px 20px' }}>
            {children}
          </Box>

          <Footer></Footer>
        </Box>

      </ThemeProvider>
    </div>


  )
}
