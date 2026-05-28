import { useState } from 'react';
import { Facebook, Twitter, Instagram, Youtube, MapPin, Mail, Phone, Flag } from 'lucide-react';
import { LegalModal, PrivacyContent, TermsContent } from './Legal';

export function Footer() {
  const [activeModal, setActiveModal] = useState<null | 'privacy' | 'terms'>(null);

  return (
    <footer className="bg-[#3D0606] text-cream relative pt-20 pb-8 overflow-hidden border-t border-white/10">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>

      {/* Background Watermark */}
      <div className="absolute bottom-0 right-0 opacity-[0.03] pointer-events-none transform translate-y-12 translate-x-12">
        <svg fill="currentColor" viewBox="0 0 100 100" className="w-[400px] h-[400px]">
          <path d="M50 10c-3 0-5 2-5 5s2 5 5 5 5-2 5-5-2-5-5-5zm-5 15c-15 4-22 17-23 30 0 3 5 4 5 1s1-22 18-24v50h10V27c17 2 18 21 18 24 0 3 5 2 5-1-1-13-8-26-23-30z"/>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 flex items-center justify-center aspect-square overflow-hidden shrink-0">
                <img src="https://i.ibb.co/V0920jFM/tvklogo-removebg-preview.png" alt="TVK Logo" className="w-full h-full object-contain rounded-full" />
              </div>
              <span className="font-sans text-xl tracking-tight font-bold text-primary">
                BUSSY N. ANAND
              </span>
            </div>
            <p className="text-white/60 leading-relaxed mb-6 max-w-md font-light">
              Minister, Government of Tamil Nadu. General Secretary, Tamilaga Vettri Kazhagam. Representing T. Nagar Constituency (Chennai).
            </p>
            <div className="mb-6 p-3 border border-primary/20 bg-primary/5 rounded-sm">
               <p className="text-primary text-[10px] font-bold uppercase tracking-[0.2em] leading-relaxed">
                 Disclaimer: This is an independent initiative and not the official website of the Government of Tamil Nadu, Tamilaga Vettri Kazhagam (TVK), or Shri Bussy N. Anand.
               </p>
            </div>
            <div className="flex gap-4">
              <a href="https://x.com/BussyAnand?lang=en" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-primary hover:border-primary transition-all">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/bussyanandoffl/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-primary hover:border-primary transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=100094785247186" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-primary hover:border-primary transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.youtube.com/hashtag/bussyanand" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-primary hover:border-primary transition-all">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
            <div className="mt-8">
              <p className="font-tamil text-xl text-cream font-medium italic">
                "பொதுமக்கள் சேவையே எங்கள் லட்சியம்"
              </p>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 border-b border-white/10 pb-2 inline-block">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'About', 'Journey', 'Welfare', 'Transparency', 'Constituency', 'Updates', 'Achievements'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(' ', '')}`} className="text-gray-400 hover:text-primary transition-colors flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-600 group-hover:bg-primary transition-colors"></span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 border-b border-white/10 pb-2 inline-block">Office Hours</h4>
            <ul className="space-y-4 text-sm text-white/50">
              <li>
                <span className="block font-bold text-primary text-[10px] uppercase tracking-widest">Weekdays</span>
                <span className="block">10:00 AM — 06:00 PM</span>
              </li>
              <li>
                <span className="block font-bold text-primary text-[10px] uppercase tracking-widest">Saturdays</span>
                <span className="block">10:00 AM — 01:00 PM</span>
              </li>
              <li>
                <span className="block font-bold text-primary text-[10px] uppercase tracking-widest">Sundays</span>
                <span className="block">Closed (Special Meets Only)</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="text-gray-500 text-xs mb-2">
              &copy; {new Date().getFullYear()} Hon. Bussy N. Anand. All rights reserved.
            </p>
            <p className="text-primary/40 text-[10px] uppercase tracking-widest max-w-lg leading-relaxed">
              This is an independent initiative and not the official website of the Government of Tamil Nadu, Tamilaga Vettri Kazhagam (TVK), or Shri Bussy N. Anand.
            </p>
          </div>
          <div className="flex justify-center gap-6 text-sm text-gray-500">
            <button 
              onClick={() => setActiveModal('privacy')}
              className="hover:text-primary transition-colors uppercase text-[10px] tracking-widest font-bold"
            >
              Privacy Policy
            </button>
            <button 
              onClick={() => setActiveModal('terms')}
              className="hover:text-primary transition-colors uppercase text-[10px] tracking-widest font-bold"
            >
              Terms of Service
            </button>
          </div>
        </div>
      </div>

      <LegalModal 
        isOpen={activeModal === 'privacy'}
        onClose={() => setActiveModal(null)}
        title="Privacy Policy"
        content={<PrivacyContent />}
      />
      <LegalModal 
        isOpen={activeModal === 'terms'}
        onClose={() => setActiveModal(null)}
        title="Terms of Service"
        content={<TermsContent />}
      />
    </footer>
  );
}
