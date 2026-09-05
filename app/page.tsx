import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Signature from "@/components/Signature";
import MenuSection from "@/components/MenuSection";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import Reviews from "@/components/Reviews";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SkipLink from "@/components/SkipLink";
import ScrollRefresh from "@/components/ScrollRefresh";

export default function Home() {
  return (
    <>
      <SkipLink />
      <ScrollRefresh />
      <Header />
      <main id="main">
        <Hero />
        <Features />
        <Signature />
        <MenuSection />
        <About />
        <Gallery />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
