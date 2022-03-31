import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Dapp from '../cardano/TestingApp';

const Home: NextPage = () => {
  return (
    //<div>hola</div>
     <Dapp></Dapp>
  )
}

export default Home
