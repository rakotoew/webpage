import Layout from "../components/layout";
import styles from "../styles/utils.module.css";
import Image from "next/image";
import Link from "next/link";
import {useTranslations} from "use-intl";


export default function Home() {
    const t = useTranslations("generic");
     return(
         <Layout home>
                <h1 className={styles.title}>
                    {t("home.name")}
                </h1>
                <div className={styles.main}>
                     <Image
                         src="/image/profile.png"
                         className={styles.imgCircle}
                         height={200}
                         width={200}
                     />
                </div>
                <p className={styles.description}>
                    <span>{t("home.desc1")}</span> <br/> <span>{t("home.desc2")}</span>
                </p>
             <div className={styles.grid}>
                 <Link href="/project/project_list" >
                     <a className={styles.card}>
                         <h3><span>{t("home.grid.projects.Title")}</span></h3>
                         <p><span>{t("home.grid.projects.desc")}</span></p>
                     </a>
                 </Link>
                 <Link href="https://github.com/rakotoew">
                     <a className={styles.card}>
                         <h3>{t("home.grid.github.Title")}</h3>
                         <p>{t("home.grid.github.desc")}</p>
                     </a>
                 </Link>
                 <Link href="">
                     <a className={styles.card}>
                         <h3>{t("home.grid.cv.Title")}</h3>
                         <p>{t("home.grid.cv.desc")}</p>
                     </a>
                 </Link>

             </div>
             <div className={styles.contact}>
                 <h1>{t("footer.Title")}</h1>
                 <p>{t("footer.email")}</p>
             </div>
             <footer className={styles.footer}>
                 <p>
                     <span>{t("footer.license")}</span>
                 </p>
             </footer>
         </Layout>
     )
}

export function getStaticProps({ locale }) {
    return {
        props: {
            messages: require(`../locales/${locale}.json`),
        },
    };
}


