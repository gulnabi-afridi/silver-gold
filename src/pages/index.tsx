import Head from "next/head";
import HeroSection from "@/component/HeroSection/HeroSection";
import Roadmap from "@/component/Roadmap/Roadmap";
import GetFreeKit from "@/component/GetFreeKit/GetFreeKit";
import Contact from "@/component/Contact/Contact";

export default function Home() {
  return (
    <>
      <Head>
        <title>Gold-Silver</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <HeroSection />
        <Roadmap />
        <Contact/>
        <GetFreeKit />
      </main>
    </>
  );
}
