import { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isTamil, setIsTamil] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 50;
      setIsScrolled(scrolled);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { en: 'Home', ta: 'முகப்பு', href: '#hero' },
    { en: 'About', ta: 'பற்றி', href: '#about' },
    { en: 'Journey', ta: 'பயணம்', href: '#timeline' },
    { en: 'Welfare', ta: 'நற்செயல்கள்', href: '#gooddeeds' },
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
      <nav className={`fixed top-0 w-full z-[70] transition-all duration-300 ${isScrolled ? 'bg-dark/90 backdrop-blur-md border-b border-primary/30 py-4 shadow-lg' : 'bg-transparent py-6 border-b border-white/5'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-4 2xl:px-8">
          <div className="flex justify-between items-center">
            
            <div className="flex items-center gap-4 shrink-0">
              <div className="w-12 h-12 flex items-center justify-center aspect-square overflow-hidden shrink-0">
                <img src="https://i.ibb.co/V0920jFM/tvklogo-removebg-preview.png" alt="TVK Logo" className="w-full h-full object-contain rounded-full" />
              </div>
              <div className="flex flex-col shrink-0 xl:max-w-[350px] min-[1340px]:max-w-[450px] 2xl:max-w-none">
                <span className={`font-sans text-lg md:text-xl font-bold text-primary ${isTamil ? 'font-tamil' : 'tracking-tight'}`}>
                  {isTamil ? 'புஸ்ஸி என். ஆனந்த்' : 'BUSSY N. ANAND'}
                </span>
                <span 
                  title={isTamil ? 'அமைச்சர் | சட்டமன்ற உறுப்பினர் | பொதுச்செயலாளர், தமிழக வெற்றிக் கழகம்' : 'Minister | MLA | General Secretary, Tamilaga Vettri Kazhagam'}
                  className={`text-[8px] md:text-[10px] xl:text-[7.5px] min-[1340px]:text-[9.5px] uppercase opacity-80 text-cream leading-tight ${isTamil ? 'font-tamil' : 'tracking-[0.15em]'} truncate block`}
                >
                  {isTamil ? 'அமைச்சர் | சட்டமன்ற உறுப்பினர் | பொதுச்செயலாளர், தமிழக வெற்றிக் கழகம்' : 'Minister | MLA | General Secretary, Tamilaga Vettri Kazhagam'}
                </span>
              </div>
            </div>

            <div className={`hidden xl:flex items-center font-bold tracking-widest uppercase shrink-0 ${
              isTamil 
                ? 'gap-1.5 min-[1340px]:gap-2.5 2xl:gap-4 text-[8.5px] min-[1340px]:text-[9.5px]' 
                : 'gap-2.5 min-[1340px]:gap-4 2xl:gap-6 text-[9.5px] min-[1340px]:text-[10px]'
            }`}>
              {navLinks.map((link) => (
                <a key={link.en} href={link.href} className={`text-cream/80 hover:text-primary transition-colors border-b-2 border-transparent hover:border-primary pb-1 ${isTamil ? 'font-tamil tracking-normal' : ''}`}>
                  {isTamil ? link.ta : link.en}
                </a>
              ))}
              <button 
                onClick={() => setIsTamil(!isTamil)}
                className="px-3 py-1.5 border border-primary rounded-full text-[9px] min-[1340px]:text-[10px] uppercase tracking-widest hover:bg-primary hover:text-dark transition-all text-cream whitespace-nowrap shrink-0"
              >
                Tamil / English
              </button>
            </div>

            <button 
              className="xl:hidden text-cream p-2 shrink-0" 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
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
              className="absolute top-full left-0 w-full xl:hidden bg-dark border-b border-primary/30 shadow-xl max-h-[80vh] overflow-y-auto z-[70]"
            >
              <div className="flex flex-col px-4 py-6 space-y-4">
                {navLinks.map((link) => (
                  <a 
                    key={link.en} 
                    href={link.href} 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`text-cream hover:text-primary transition-colors font-medium uppercase border-b border-white/5 pb-3 ${isTamil ? 'font-tamil text-[13px] leading-relaxed tracking-normal' : 'text-[11px] tracking-widest'}`}
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
