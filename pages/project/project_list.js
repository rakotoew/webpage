import Link from 'next/link';
import Head from "next/head";
import Layout, {siteTitle} from '../../components/layout';
import styles from "../../styles/utils.module.css";
export default function FirstPost() {
    return (
        <Layout>
            <Head>
                <title>{siteTitle}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <h1>List of all my ongoing and finished project</h1>
            <div className={styles.grid}>
                <Link href="https://pec.ythepaut.com">
                    <a className={styles.card}>
                        <h3>Private Encrypted Cloud</h3>
                        <p>A project of an End to End Encrypted cloud for storing and sharing data</p>
                    </a>
                </Link>
                <Link href="https://www.rakotoew.fr">
                    <a className={styles.card}>
                        <h3>Personal Website </h3>
                        <p>A project of an End to End Encrypted cloud for storing and sharing data</p>
                    </a>
                </Link>
                <Link href="/project/byod">
                    <a className={styles.card}>
                        <h3>BYOD </h3>
                        <p>Serious Game created with unity with the goal of making it crossplatform</p>
                    </a>
                </Link>
            </div>
        </Layout>
    );
}
