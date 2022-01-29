import Head from 'next/head';
import type { AppProps } from 'next/app';
import '../styles/globals.scss';
import { MainLayout } from '../components/main-layout/main-layout';
import { Header } from '../components/header/header';
import { Footer } from '../components/footer';
import styles from '../styles/Home.module.scss';

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
      <Footer />
    </>
  );
}

export default CustomApp;
