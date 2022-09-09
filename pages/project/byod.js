import React from 'react'
import ReactPlayer from 'react-player'
import Layout, {siteTitle} from '../../components/layout';
import {useTranslations} from "use-intl";

export default function VideoPlayer(){
    const t = useTranslations("generic");
    return (
        <Layout>
            <div>
                <h1>{t("project_list.byod.Title")}</h1>
                <p>{t("project_list.byod.desc")}</p>
                <ReactPlayer url='https://www.youtube.com/watch?v=5ddYXmOPZTw' />
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