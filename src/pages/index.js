import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Sidebar from "@/components/Sidebar/Sidebar";
import DashNavbar from "@/components/DashNavbar/DashNavbar";
import Analytics from "@/components/Analytics/Analytics";
import { Open_Sans } from "@next/font/google";

const open_sans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Dashboard</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={open_sans.className}>
        <div className={styles.main}>
          <Sidebar></Sidebar>
          <DashNavbar></DashNavbar>
        </div>
      </main>
    </>
  );
}
