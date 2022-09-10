import React from 'react'
import ReactPlayer from 'react-player'
import Layout, {siteTitle} from '../../components/layout';
import {useTranslations} from "use-intl";

export default function VideoPlayer(){
    const t = useTranslations("generic");
    return (
        <Layout>
            <div>
                <h1>{t("project.byod.Title")}</h1>
                <p>{t("project.byod.desc")}</p>
                <!-- byod video -->
                <ReactPlayer url='https://www.youtube.com/watch?v=5ddYXmOPZTw' />
            </div>
            <div>
                <p>{t("project.byod.detail")}</p>
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