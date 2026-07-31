import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import TemplateShowcase from "@/components/TemplateShowcase";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Features />
      <TemplateShowcase />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
