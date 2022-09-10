import Link from 'next/link';
import Layout, {siteTitle} from '../../components/layout';
import styles from "../../styles/utils.module.css";
import {useTranslations} from "use-intl";


export default function projects() {
    const t = useTranslations("generic");
    return (
        <Layout className={styles.main}>
            <h1 className={styles.title}>{t("nav_bar.projects")}</h1>
            <h4>{t("project.Title")}</h4>
            <div className={styles.grid}>
                <Link href="/project/pec">
                    <a className={styles.card}>
                        <h3>{t("project_list.list.pec.Title")}</h3>
                        <h4>Typescript</h4>
                        <p>{t("project_list.list.pec.desc")}</p>
                    </a>
                </Link>
                <Link href="/project/byod">
                    <a className={styles.card}>
                        <h3>{t("project_list.list.byod.Title")}</h3>
                        <h4>C#</h4>
                        <p>{t("project_list.list.byod.desc")}</p>
                    </a>
                </Link>
                <Link href="https://www.rakotoew.fr">
                    <a className={styles.card}>
                        <h3>{t("project_list.list.web.Title")}</h3>
                        <h4>Javascript</h4>
                        <p>{t("project_list.list.web.desc")}</p>
                    </a>
                </Link>
            </div>
        </Layout>
    );
}

export function getStaticProps({ locale }) {
    return {
        props: {
            messages: require(`../../locales/${locale}.json`),
        },
    };
}
