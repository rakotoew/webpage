import Link from 'next/link';
import Layout, {siteTitle} from '../../components/layout';
import styles from "../../styles/utils.module.css";
import head from "../head";
import {useTranslations} from "use-intl";
export default function projects() {
    const t = useTranslations("generic");
    return (
        head(),
        <Layout className={styles.main}>
            <h2>{t("project.Title")}</h2>
            <div className={styles.grid}>
                <Link href="/project/pec">
                    <a className={styles.card}>
                        <h3>{t("project_list.list.pec.Title")}</h3>
                        <p>{t("project_list.list.pec.desc")}</p>
                    </a>
                </Link>
                <Link href="/project/byod">
                    <a className={styles.card}>
                        <h3>{t("project_list.list.byod.Title")}</h3>
                        <p>{t("project_list.list.byod.desc")}</p>
                    </a>
                </Link>
                <Link href="https://www.rakotoew.fr">
                    <a className={styles.card}>
                        <h3>{t("project_list.list.web.Title")}</h3>
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
