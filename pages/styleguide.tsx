import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import styles from '../styles/styleguide.module.css';

export default function styleguide() {
  return (
    <>
    <Head>
    </Head>
        <main className={styles.main}>
            <h1>Website Style Guide</h1>
            <section className={styles.colors}>
                <h2>Colors</h2>
                <ul>
                    <li className={styles.orange}>
                        <p>Dunkin Orange</p>
                        <p>#ef6a00</p>
                    </li>
                    <li className={styles.pink}>
                        <p>Dunkin Pink</p>
                        <p>#c63663</p>
                    </li>
                    <li className={styles.text}>
                        <p>Text Color</p>
                        <p>#3e342f</p>
                    </li>
                    <li className={styles.background}>
                        <p>HTML Background</p>
                        <p>#f8f4f1</p>
                    </li>
                </ul>
            </section>
            <section className={styles.fonts}>
                <h2>Fonts</h2>
                <ul>
                    <li><h1>H1 Title</h1></li>
                    <li><h2>H2 Title</h2></li>
                    <li><h3>H3 Title</h3></li>
                    <li><h4>H4 Title</h4></li>
                    <li><h5>H5 Title</h5></li>
                    <li><p>Paragraph font looks like this.</p></li>
                </ul>
            </section>
            <section className={styles.colors}>
                <h2>Text Styles</h2>
            </section>
            <section className={styles.colors}>
                <h2>Buttons</h2>
            </section>
        </main>

    </>
  )
}
