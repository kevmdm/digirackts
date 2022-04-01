import React, { FC } from 'react'
import { Footer, Navbar } from '../ui'
import { ThemeProvider } from '@mui/material/styles';
import { darkTheme, lightTheme } from '../../themes'
export const Layout: FC = ({ children }) => {
  return (
    <div>
      <ThemeProvider theme={lightTheme}>
        <Navbar></Navbar>
        {children}
        <Footer></Footer>
      </ThemeProvider>
    </div>


  )
}
