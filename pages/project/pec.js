import React from 'react'
import ReactPlayer from 'react-player'
import Layout, {siteTitle} from '../../components/layout';
import Head from "next/head";
import head from "../head";
import {useTranslations} from "use-intl";
export default function VideoPlayer(){
    const t = useTranslations("generic");
    return (
        head(),
        <Layout>
            <div>
                <h1>{t("project_list.pec.Title")}</h1>
                <p>{t("project_list.pec.desc")}</p>
                <ReactPlayer url='https://www.youtube.com/watch?v=tA4RNsqEDdo' />
            </div>
        </Layout>
    )
}

export function getStaticProps({ locale }) {
    return {
        props: {
            messages: require(`../../locales/${locale}.json`),
        },
    };
}