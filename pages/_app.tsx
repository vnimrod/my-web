import '../styles/globals.css';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import { MainLayout } from '../components/main-layout/main-layout';
import { Header } from '../components/header/header';
import styles from '../styles/Home.module.css';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>About Nimrod Weinstein | Full Stack</title>
      </Head>
      <Header />
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
      <footer className={styles.footer}>footer</footer>
    </>
  );
}

export default CustomApp;
