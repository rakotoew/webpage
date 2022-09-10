import React from 'react'
import ReactPlayer from 'react-player'
import Layout from '../../components/layout';
import {useTranslations} from "use-intl";

export default function VideoPlayer(){
    const t = useTranslations("generic");
    return (
        <Layout>
            <div>
                <h1>{t("project.pec.Title")}</h1>
                <p>{t("project.pec.desc")}</p>
                <!-- pec video-->
                <ReactPlayer url='https://www.youtube.com/watch?v=tA4RNsqEDdo' />
            </div>
            <div>
                <p>{t("project.pec.detail")}</p>
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