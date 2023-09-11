"use client";
import { useEffect, useState } from "react";
import Features from "./Features";
import Footer from "./Footer";
import Hero from "./Hero";
import NavBar from "./Navbar";
import Why from "./Why";
import { useSearchParams } from "next/navigation";

const Home = (props: any) => {
  const [Code, setCode] = useState<string | string[] | null | undefined>(null);
  const searchParams = useSearchParams();
  useEffect(() => {
    const code = searchParams.get("code");
    setCode(code);
  }, []);
  return (
    <div className="Home">
      <NavBar />
      <Hero />
      <Why />
      <Features />
      <Footer />
    </div>
  );
};

export default Home;
