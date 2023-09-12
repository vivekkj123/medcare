'use client'
import Features from "./Features";
import Footer from "./Footer";
import Hero from "./Hero";
import NavBar from "./Navbar";
import Why from "./Why";

const Home = (props: any) => {
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
