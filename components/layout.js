import styles from './layout.module.css';
import Link from 'next/link';
import {useTranslations} from "use-intl";
import Footer from "./footer";
import Nav from "./nav"
import Header from "./head"

const name = 'Ewan Rakotoanosy';
export const siteTitle = 'Ewan Rakotoanosy';

export default function Layout({ children, home}) {
    const t = useTranslations("generic");
    return (
        <div>
            <Header/>
        <Nav/>
        <div className={styles.container}>
            <main>
                {children}
            </main>
            {!home && (
                <div className={styles.backToHome}>
                    <Link href="/">
                        <a> ← {t("back")}</a>
                    </Link>
                </div>
            )}
        </div>
        <Footer/>
    </div>);
}
