"use client";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "src/app/components/Projects.jsx";
import EmailSection from "./components/EmailSection";
import AboutSection from "./components/AboutSection";
import TechStack from "./components/TechStack";
import Footer from "./components/Footer";
import ContactButton from "./components/ContactButton";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#060b24]">
      <Navbar />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="mt-16 md:mt-24"
      >
        <Hero />
        <AboutSection/>
        <TechStack />
        <Projects />
        <div className="container mx-auto px-4">
          <EmailSection />
        </div>
        <Footer />
      </motion.div>
      <ContactButton />
    </main>
  );
}
