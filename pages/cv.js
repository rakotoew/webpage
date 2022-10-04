import styles from "../styles/utils.module.css";
import Layout from "../components/layout";
import {useTranslations} from "use-intl";

export default function cv() {
    const t = useTranslations("generic");
    return(
        <Layout className={styles.main}>
            <div>
                <iframe title={t("cv.title")}
                        src='/cv1.pdf'
                        width="1200"
                        height="1800"/>
            </div>
        </Layout>
    )
}