import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Dapp from '../../cardano/TestingApp';
import { Layout } from '../../components/layouts';

export default function HomePage() {
    return (
        <div>

            {/* <Dapp></Dapp> */}


        </div>

    )
}
HomePage.getLayout = function getLayout(page: JSX.Element) {
    return (
        <Layout>
            {page}
        </Layout>
    )
}
