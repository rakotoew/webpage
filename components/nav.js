import styles from "./layout.module.css";
import Link from "next/link";
import {useTranslations} from "use-intl";

export default function Nav(){
    const t = useTranslations("generic");
    return (
        <section>
            <div className={styles.topnav} id="mytopnav">
                <Link href="/" className="active">{t("nav_bar.home")}</Link>
                <Link href="/project/project_list">{t("nav_bar.projects")}</Link>
                <a href="javascript:void(0);" className="icon" onClick="expandable()">
                    <i className="fa fa-bars"></i>
                </a>
            </div>
        </section>
    );
}

function expandable(){
    const nav = document.getElementById("mytopnav");
    if (nav.className=== "topnav") {
        nav.className += " responsive";
    } else {
        nav.className = "topnav";
    }
}