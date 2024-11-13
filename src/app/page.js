import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "src/app/components/Projects.jsx";
import EmailSection from "./components/EmailSection";
import AboutSection from "./components/AboutSection"
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#060b24]">
      <Navbar />
      <div className="container mt-24 mx-auto px-8 py-4">
        <Hero />
        <AboutSection/>
        <Projects />
        <EmailSection />
        <Footer />
      </div>
    </main>
  );
}
