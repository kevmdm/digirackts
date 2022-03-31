import React from 'react'
import { Footer, Navbar } from '../ui'

export const Layout = ({children}) => {
  return (
    <div>
      <Navbar></Navbar>
      {children}
      <Footer></Footer>
    </div>


  )
}
