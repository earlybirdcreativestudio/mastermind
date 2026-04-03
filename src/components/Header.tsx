"use client";

import { useLanguage } from '@/context/LanguageContext';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Header() {
  const { lang, t, toggleLang } = useLanguage();
  const { scrollY } = useScroll();
  const backgroundColor = useTransform(scrollY, [0, 100], ['rgba(245, 241, 234, 0)', 'rgba(245, 241, 234, 0.95)']);
  const backdropFilter = useTransform(scrollY, [0, 100], ['blur(0px)', 'blur(12px)']);

  return (
    <motion.header 
      style={{ backgroundColor, backdropFilter }}
      className="fixed top-0 left-0 right-0 z-50 transition-colors duration-300 border-b border-black/5"
    >
      <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
        <div className="flex flex-col items-center justify-center order-1 md:order-2 h-full">
          <div className="relative h-14 md:h-16 w-48 md:w-80">
            <Image
              src="/logo.png"
              alt="Mastermind Productions"
              fill
              className="object-contain object-left md:object-center brightness-0"
              priority
            />
          </div>
          <span className="hidden md:block text-sm font-medium tracking-widest uppercase text-mm-dark/80 mt-1 whitespace-nowrap">
            Mastermind Productions
          </span>
        </div>
        
        <nav className="hidden md:flex gap-8 items-center text-sm font-medium tracking-widest uppercase text-mm-dark/80 order-2 md:order-1 md:w-48">
          <a href="#services" className="hover:text-mm-orange transition-colors">{t.nav.services}</a>
          <a href="#projects" className="hover:text-mm-orange transition-colors">{t.nav.projects}</a>
        </nav>
        
        <div className="flex items-center gap-6 order-3 md:w-48 md:justify-end">
          <button 
            onClick={toggleLang}
            className="flex items-center gap-2 group"
          >
            <span className={`text-sm font-bold tracking-widest ${lang === 'nl' ? 'text-mm-dark' : 'text-mm-dark/40 group-hover:text-mm-dark/70'} transition-colors`}>NL</span>
            <span className="text-mm-dark/20">/</span>
            <span className={`text-sm font-bold tracking-widest ${lang === 'en' ? 'text-mm-dark' : 'text-mm-dark/40 group-hover:text-mm-dark/70'} transition-colors`}>EN</span>
          </button>
          
          <a href="#contact" className="px-6 py-3 bg-mm-dark text-white font-bold text-xs tracking-widest uppercase rounded-full hover:bg-mm-orange hover:text-white transition-all duration-300">
            {t.nav.contact}
          </a>
        </div>
      </div>
    </motion.header>
  );
}
