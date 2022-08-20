import Layout from "../components/layout";
import styles from "../styles/utils.module.css";
import Image from "next/image";
import Link from "next/link";
import head, {work} from "./head";

export default function Home() {
     return(
         <Layout home>
             <main className={styles.main}>
                <h1 className={styles.title}>
                    Ewan Rakotoanosy
                </h1>
                 <Image
                     src="/image/profile.png"
                     className={styles.imgCircle}
                     height={200}
                     width={200}
                 />
                <p className={styles.description}>
                    French Student in computing <br /> Currently doing a master degree at University of Savoy
                </p>

             </main>
             <div>{work}</div>
             <div className={styles.grid}>
                 <Link href="/project/project_list" >
                     <a className={styles.card}>
                         <h3>Projects</h3>
                         <p>List of my projects</p>
                     </a>
                 </Link>
                 <Link href="https://github.com/rakotoew">
                     <a className={styles.card}>
                         <h3>GitHub</h3>
                         <p>My github with some of the work I've done</p>
                     </a>
                 </Link>

             </div>
             <div className={styles.contact}>
                 <h1>Contact</h1>
                 <p>Rakotoanosy.ewan@gmail.com</p>
             </div>
             <footer className={styles.footer}>
                 <p>
                        This website is under the GNU GPL v.3.0 license
                 </p>
             </footer>
         </Layout>
     )
}


