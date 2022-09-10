import Head from 'next/head';
import styles from './layout.module.css';
import Link from 'next/link';
import {useTranslations} from "use-intl";

const name = 'Ewan Rakotoanosy';
export const siteTitle = 'Ewan Rakotoanosy';

export default function Layout({ children, home}) {
    const t = useTranslations("generic");
    return <div>
        <div className={styles.topnav} id="mytopnav">
        <Link href="/" className="active">{t("nav_bar.home")}</Link>
        <Link href="/project/project_list">{t("nav_bar.projects")}</Link>
        <a href="javascript:void(0);" className="icon" onClick="expandable()">
            <i className="fa fa-bars"></i>
        </a>
    </div>
    <div className={styles.container}>
        <Head>
            <title>{siteTitle}</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>
            {children}
        </main>
        {!home && (
            <div className={styles.backToHome}>
                <Link href="/">
                    <a> ← Home </a>
                </Link>
            </div>
        )}
        </div>
    </div>;
}

function expandable(){
    const nav = document.getElementById("mytopnav");
    if (nav.className=== "topnav") {
        nav.className += " responsive";
    } else {
        nav.className = "topnav";
    }
}