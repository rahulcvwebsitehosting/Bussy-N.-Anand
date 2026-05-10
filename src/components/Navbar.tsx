import { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isTamil, setIsTamil] = useState(true);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { en: 'Home', ta: 'முகப்பு', href: '#hero' },
    { en: 'About', ta: 'பற்றி', href: '#about' },
    { en: 'Journey', ta: 'பயணம்', href: '#timeline' },
    { en: 'Transparency', ta: 'வெளிப்படைத்தன்மை', href: '#transparency' },
    { en: 'Constituency', ta: 'தொகுதி', href: '#constituency' },
    { en: 'Updates', ta: 'செய்திகள்', href: '#updates' },
    { en: 'Achievements', ta: 'சாதனைகள்', href: '#achievements' },
    { en: 'TVK', ta: 'த.வெ.க', href: '#tvk' },
    { en: 'Gallery', ta: 'புகைப்படங்கள்', href: '#gallery' },
    { en: 'Contact', ta: 'தொடர்பு', href: '#contact' },
  ];

  return (
    <>
      <div className="fixed top-0 left-0 w-full h-1 bg-primary z-[60]"></div>
      <div className="fixed top-1 left-0 w-full h-4 bg-gradient-to-b from-primary/20 to-transparent z-[60] pointer-events-none"></div>
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-dark/90 backdrop-blur-md border-b border-primary/30 py-4 shadow-lg' : 'bg-transparent py-6 border-b border-white/5'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full overflow-hidden flex items-center justify-center shadow-lg shadow-primary/20 shrink-0 border border-primary/30 bg-dark/50">
                <img src="https://i.ibb.co/V0920jFM/tvklogo-removebg-preview.png" alt="TVK Logo" className="w-full h-full object-contain transform scale-125" />
              </div>
              <div className="flex flex-col">
                <span className="font-sans text-xl font-bold tracking-tight text-primary">
                  {isTamil ? 'புஸ்ஸி என். ஆனந்த்' : 'BUSSY N. ANAND'}
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] opacity-80 text-cream">
                  {isTamil ? 'அமைச்சர் | சட்டமன்ற உறுப்பினர் | த.வெ.க' : 'Minister | MLA | General Secretary, TVK'}
                </span>
              </div>
            </div>

            <div className="hidden md:flex items-center gap-8 text-[10px] font-bold tracking-widest uppercase">
              {navLinks.map((link) => (
                <a key={link.en} href={link.href} className="text-cream/80 hover:text-primary transition-colors border-b-2 border-transparent hover:border-primary pb-1">
                  {isTamil ? link.ta : link.en}
                </a>
              ))}
              <button 
                onClick={() => setIsTamil(!isTamil)}
                className="px-6 py-2 border border-primary rounded-full text-[10px] uppercase tracking-widest hover:bg-primary hover:text-dark transition-all text-cream"
              >
                Tamil / English
              </button>
            </div>

            <button className="md:hidden text-cream" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-dark border-b border-primary/30 shadow-xl"
            >
              <div className="flex flex-col px-4 py-6 space-y-4">
                {navLinks.map((link) => (
                  <a 
                    key={link.en} 
                    href={link.href} 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-cream hover:text-primary transition-colors font-medium text-[11px] uppercase tracking-widest border-b border-white/5 pb-3"
                  >
                    {isTamil ? link.ta : link.en}
                  </a>
                ))}
                <button 
                  onClick={() => setIsTamil(!isTamil)}
                  className="px-6 py-3 border border-primary rounded-sm text-[11px] uppercase tracking-widest hover:bg-primary hover:text-dark transition-all text-cream mt-2"
                >
                  {isTamil ? 'Switch to English' : 'தமிழில் படிக்க'}
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
