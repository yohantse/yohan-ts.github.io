import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Clients from "@/components/Clients";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import Services from "@/components/Services";
import ProjectsTable from "@/components/ProjectsTable";
import Contact from "@/components/Contact";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Stats />
        <Clients />
        <About />
        <Gallery />
        <Services />
        <ProjectsTable />
        <Contact />
        <CTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
