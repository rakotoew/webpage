import React from 'react'
import ReactPlayer from 'react-player'
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
                <p>BYOD : Bring Your Own Device is a serious game made using Unity</p>
                <ReactPlayer url='https://www.youtube.com/watch?v=5ddYXmOPZTw' />
            </div>
        </Layout>
    )
}