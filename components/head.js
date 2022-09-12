import Head from "next/head";
import {siteTitle} from "./layout";

export default function Header(){
    return (
        <section>
            <Head>
                <title>{siteTitle}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
        </section>
    );
}