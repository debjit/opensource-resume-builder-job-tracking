import Image from "next/image";
import { Inter } from "next/font/google";
import Nav from "./components/Layout/Nav";
import Features from "./components/Index/Features";
import Hero from "./components/Index/Hero";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Nav />
      <main
        className={`flex min-h-screen flex-col items-center justify-between  ${inter.className}`}
      >
        {/* <Hero /> */}
        <Features />
      </main>
    </>
  );
}
