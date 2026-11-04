import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import AboutMe from '@/components/AboutMe';
import ValuePillar from '@/components/ValuePillar';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ScrollRevealProvider from '@/components/ScrollRevealProvider';

export default function Home() {
  return (
    <ScrollRevealProvider>
      <Navbar />
      <main id="main-content">
        <Hero />
        <AboutMe />
        <ValuePillar />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </ScrollRevealProvider>
  );
}
