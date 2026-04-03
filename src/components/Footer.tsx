"use client";

import { useLanguage } from "@/context/LanguageContext";
import { ArrowRight, Mail } from "lucide-react";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer id="contact" className="w-full bg-[#F5F1EA]/80 backdrop-blur-lg text-mm-dark pt-32 pb-16 px-6 relative z-10 border-t border-black/10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-16">
        
        <div className="flex-1">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight leading-none text-mm-dark">
            {t.footer.contact}
          </h2>
          <p className="text-mm-dark/70 mb-8 max-w-sm text-lg">
            Ready to shape your sound? Let's talk about your next big project.
          </p>
          <a href="mailto:info@mastermindproductions.com" className="inline-flex items-center gap-3 px-8 py-4 bg-mm-orange text-white font-bold tracking-widest uppercase text-sm rounded-full hover:bg-mm-dark transition-colors">
            <Mail size={18} />
            Email Us
          </a>
        </div>

        <div className="flex-1 w-full md:max-w-md bg-white/40 p-8 rounded-3xl border border-black/10">
          <h3 className="text-xl font-bold mb-4 tracking-wide text-mm-dark">{t.footer.newsletter}</h3>
          <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Email address" 
              className="w-full px-6 py-4 bg-white/50 border border-black/10 rounded-xl text-mm-dark placeholder:text-mm-dark/50 outline-none focus:border-mm-orange transition-colors"
              required
            />
            <button 
              type="submit" 
              className="w-full px-6 py-4 bg-mm-dark text-white font-bold uppercase tracking-widest text-sm rounded-xl flex justify-center items-center gap-2 hover:bg-mm-sage hover:text-mm-dark transition-colors"
            >
              {t.footer.subscribe}
              <ArrowRight size={16} />
            </button>
          </form>
        </div>

      </div>
      
      <div className="max-w-7xl mx-auto mt-32 pt-8 border-t border-black/10 flex flex-col md:flex-row justify-between items-center text-xs text-mm-dark/50 tracking-widest uppercase font-semibold">
        <p>© {new Date().getFullYear()} Mastermind Productions</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-mm-orange transition-colors">Instagram</a>
          <a href="#" className="hover:text-mm-orange transition-colors">Spotify</a>
          <a href="#" className="hover:text-mm-orange transition-colors">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}
