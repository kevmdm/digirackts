import React, { FC } from 'react'
import { Footer, Navbar } from '../ui'
import { ThemeProvider } from '@mui/material/styles';
import { darkTheme, lightTheme } from '../../themes'
import { CssBaseline, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Head from 'next/head';

import {
  NotificationContainer,

} from "react-notifications";
import { Provider } from "react-redux";
import reduxThunk from "redux-thunk";
import reducers from "../../store/reducers";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";


const middleware = [reduxThunk];
const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(...middleware))
);
export const Layout: FC<{ title?: string, type?: string }> = ({ children, title = 'Digirack', type = 'standard' }) => {
  return (
    <div>
      <Provider store={store}>
        <ThemeProvider theme={lightTheme}>

          <CssBaseline>
            <NotificationContainer />
            <Box sx={{ flexFlow: 1 }}>
              <Head>
                <title>{title}</title>
              </Head>
              <>
                {type == 'home' ? (
                  <Box sx={{ height: '570px', position: 'relative', zIndex: '100', backgroundImage: `url('/img/home/bannerGradient.png')` }}>
                    {/* <Image src={'/img/home/bannerGradient.png'} layout='fill'></Image> */}
                    <Typography fontSize={75} fontWeight={700} align={'center'} margin='auto' paddingTop={'200px'}>
                      Discover , Collect and sell
                      extraordinary NFTs
                    </Typography>
                  </Box>) : (<div></div>)}
              </>
              <Navbar type={`${type}`}></Navbar>
              <Box sx={{ padding: '10px 20px' }}>
                {children}
              </Box>

              <Footer></Footer>
            </Box>
          </CssBaseline>
        </ThemeProvider>
      </Provider>
    </div >


  )
}
