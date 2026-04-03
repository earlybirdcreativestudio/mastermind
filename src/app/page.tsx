"use client";

import { useLanguage } from "@/context/LanguageContext";
import Header from "@/components/Header";
import VideoBackground from "@/components/VideoBackground";
import SectionBlock from "@/components/SectionBlock";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Mic2, Headphones, Radio, BarChart } from "lucide-react";

export default function Home() {
  const { t } = useLanguage();

  return (
    <main className="relative w-full min-h-screen selection:bg-mm-lavender selection:text-black">
      <VideoBackground />
      <Header />

      {/* Hero Section */}
      <section className="relative w-full h-[100svh] flex flex-col justify-center items-center text-center px-6 pt-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="max-w-6xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold tracking-tighter text-white drop-shadow-2xl mb-8 leading-[0.9]">
            {t.hero.headline.split('.').map((part, i, arr) => (
              <span key={i}>
                {part}{i !== arr.length - 1 ? '.' : ''}<br className="hidden md:block" />
              </span>
            ))}
          </h1>
          <p className="text-lg md:text-2xl text-white/80 max-w-3xl mx-auto font-light leading-relaxed drop-shadow-lg">
            {t.hero.subheadline}
          </p>
        </motion.div>
      </section>

      {/* Intro Section - Alternating Left */}
      <div className="relative z-10 w-full max-w-[1600px] mx-auto mb-24">
        <SectionBlock color="lavender" align="left" className="-mt-10">
          <div className="prose prose-lg pr-4">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">Our Philosophy</h2>
            <p className="text-xl leading-relaxed mb-6 font-medium">{t.intro.p1}</p>
            <p className="text-lg leading-relaxed mb-6 opacity-80">{t.intro.p2}</p>
            <p className="text-lg leading-relaxed mb-10 opacity-80 italic">{t.intro.p3}</p>
            <a href="#contact" className="inline-block px-8 py-4 bg-mm-dark text-white font-bold tracking-widest text-sm uppercase rounded-full hover:bg-black transition-colors">
              {t.intro.button}
            </a>
          </div>
        </SectionBlock>

        {/* Services Section */}
        <section id="services" className="pt-16 pb-8 px-6 max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-8"
          >
            <h2 className="text-5xl md:text-8xl font-bold text-white tracking-tighter mix-blend-difference">{t.services.title}</h2>
          </motion.div>
        </section>

        {t.services.items.map((service, index) => {
          const colors: Array<"sage" | "orange" | "offwhite" | "lavender"> = ["sage", "orange", "offwhite", "lavender"];
          const icons = [Mic2, Radio, Headphones, BarChart];
          const Icon = icons[index % icons.length];
          
          return (
            <SectionBlock 
              key={index} 
              color={colors[index % colors.length]} 
              align={index % 2 === 0 ? "right" : "left"}
              className="py-12"
            >
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="p-4 bg-black/5 rounded-2xl">
                  <Icon size={48} className="opacity-80" />
                </div>
                <div>
                  <h3 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">{service.title}</h3>
                  <p className="text-lg md:text-xl leading-relaxed opacity-90">{service.desc}</p>
                </div>
              </div>
            </SectionBlock>
          );
        })}

        {/* Projects Section */}
        <section id="projects" className="pt-24 pb-8 px-6 max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-5xl md:text-8xl font-bold text-white tracking-tighter mix-blend-difference mb-8 text-black dark:text-white">{t.projects.title}</h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.projects.items.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#F5F1EA]/70 backdrop-blur-md border border-black/10 p-8 rounded-3xl hover:bg-[#F5F1EA]/90 transition-colors group"
              >
                <div className="text-mm-orange text-sm font-bold tracking-widest uppercase mb-4">{project.subtitle}</div>
                <h3 className="text-2xl font-bold text-mm-dark mb-4">{project.title}</h3>
                <p className="text-mm-dark/70 leading-relaxed text-sm">{project.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

      </div>

      <Footer />
    </main>
  );
}
