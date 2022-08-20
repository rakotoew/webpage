import {siteTitle} from "../components/layout";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/utils.module.css";

export default function head(){
    return(
        <Head>
            <title>{siteTitle}</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
    )
}
