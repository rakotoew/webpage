import React from 'react'
import ReactPlayer from 'react-player'
import styles from "../../styles/utils.module.css";
import Layout, {siteTitle} from '../../components/layout';
import Head from "next/head";
export default function VideoPlayer(){
    return (
        <Layout>
            <Head>
                <title>{siteTitle}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div>
                <h2>University Project : PEC</h2>
                <p>Private Encrypted cloud is a project of a cloud service using end-to-end encryption</p>
                <ReactPlayer url='https://www.youtube.com/watch?v=tA4RNsqEDdo' />
            </div>
        </Layout>
    )
}