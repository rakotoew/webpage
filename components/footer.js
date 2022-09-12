import styles from "../styles/utils.module.css";
import {useTranslations} from "use-intl";

export default function Footer(){
    const t = useTranslations("generic");
    return (
        <section>
            <footer className={styles.footer}>
                <p>
                    <span>{t("footer.license")}</span>
                </p>
            </footer>
        </section>
    )
}