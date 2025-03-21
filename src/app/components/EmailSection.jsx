"use client";
import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import emailjs from '@emailjs/browser';

const EmailSection = () => {
  const formRef = useRef();
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const result = await emailjs.sendForm(
        'service_cuxsfre',
        'template_9wqkh1n',
        formRef.current,
        'oXcl2u8WafKC-cJkF'
      );
      
      setEmailSubmitted(true);
      formRef.current.reset();
    } catch (error) {
      console.error("Email submission error:", error);
      setError("Si è verificato un errore. Riprova più tardi.");
    } finally {
      setLoading(false);
    }
  };

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-10 md:py-16"
    >
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600 mb-8 md:mb-10"
      >
        Contattami
      </motion.h2>
      
      <div className="bg-[#0d1537]/30 rounded-xl border border-cyan-500/20 shadow-lg p-4 md:p-6 lg:p-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <p className="text-[#ADB7BE] mb-4 max-w-md text-sm md:text-lg">
              Sono alla ricerca di nuove opportunità e sempre aperto a progetti interessanti.
              Se hai domande o vuoi semplicemente salutare, sono qui per te!
            </p>
            <div className="flex flex-row items-center gap-4 mb-6">
              <Link
                href="https://github.com/Luceva2002"
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600"
              >
                <div className="w-8 h-8 bg-[#121212] rounded-full flex items-center justify-center transition-transform duration-300 hover:scale-110">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                </div>
              </Link>
              <Link
                href="https://www.linkedin.com/in/luca-evangelista-91a2101a3/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600"
              >
                <div className="w-8 h-8 bg-[#121212] rounded-full flex items-center justify-center transition-transform duration-300 hover:scale-110">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </div>
              </Link>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {emailSubmitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-[#0d1537] p-4 md:p-6 rounded-lg border border-cyan-500/20 shadow-lg shadow-blue-500/10 flex flex-col items-center justify-center h-full"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-12 w-12 md:h-16 md:w-16 text-cyan-500 mb-4" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="text-xl md:text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">
                  Grazie per avermi contattato!
                </h3>
                <p className="text-[#ADB7BE] text-center text-sm md:text-base">
                  Ti risponderò il prima possibile.
                </p>
                <button
                  className="px-5 py-2 mt-6 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium hover:opacity-90 transition-opacity text-sm md:text-base"
                  onClick={() => setEmailSubmitted(false)}
                >
                  Invia un altro messaggio
                </button>
              </motion.div>
            ) : (
              <form 
                ref={formRef}
                onSubmit={handleSubmit} 
                className="flex flex-col gap-4"
              >
                <div>
                  <label htmlFor="name" className="text-white block mb-2 text-sm font-medium">
                    Nome
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="user_name"
                    required
                    placeholder="John Doe"
                    className="bg-[#0d1537] border border-cyan-500/20 placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition-all duration-300"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="text-white block mb-2 text-sm font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="user_email"
                    required
                    placeholder="john@example.com"
                    className="bg-[#0d1537] border border-cyan-500/20 placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition-all duration-300"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="text-white block text-sm mb-2 font-medium">
                    Messaggio
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows="6"
                    placeholder="Ciao Luca, ti contatto per..."
                    className="bg-[#0d1537] border border-cyan-500/20 placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition-all duration-300"
                  />
                </div>
                {error && (
                  <p className="text-red-500 text-sm mt-1">
                    {error}
                  </p>
                )}
                <div className="mt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium py-2.5 px-5 rounded-lg w-full hover:opacity-90 transition-all duration-300 flex justify-center items-center text-sm md:text-base"
                  >
                    {loading ? (
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                    ) : (
                      "Invia Messaggio"
                    )}
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
      
      <div className="absolute top-0 left-0 right-0 bottom-0 blur-[120px] opacity-30 -z-10">
        <div className="absolute top-1/3 left-1/4 w-60 h-60 bg-blue-600 rounded-full"></div>
        <div className="absolute bottom-1/3 right-1/4 w-60 h-60 bg-cyan-500 rounded-full"></div>
      </div>
    </section>
  );
};

export default EmailSection;
