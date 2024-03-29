import Head from "next/head";
import Image from "next/image";
import MainHome from "../components/Home/MainHome/MainHome";
// import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Khandokar Samadul Kabir</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <MainHome></MainHome>
      </main>
    </div>
  );
}
