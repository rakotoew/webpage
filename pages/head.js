import {siteTitle} from "../components/layout";
import Head from "next/head";


export default function head(){
    return(
        <Head>
            <title>{siteTitle}</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
    )
}
