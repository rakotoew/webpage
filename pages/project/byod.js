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
                <h2>University Project : BYOD</h2>
                <ReactPlayer url='https://www.youtube.com/watch?v=5ddYXmOPZTw' />
            </div>
        </Layout>
    )
}