import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Dapp from '../cardano/TestingApp';
import { Layout } from '../components/layouts';

const Home: NextPage = () => {
  return (
    //<div>hola</div>
    <div>
      <Layout>
        <h1>Home Layout</h1>
      </Layout>

    </div>

  )
}

export default Home
