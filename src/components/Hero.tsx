import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowDown } from 'lucide-react';

export function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);
  const titles = [
    "Minister, Government of Tamil Nadu & General Secretary, TVK",
    "MLA — Thiyagarayanagar, Chennai 2026",
    "General Secretary — Tamilaga Vettri Kazhagam",
    "Former MLA — Bussy Constituency, Puducherry"
  ];

  const particles = useMemo(() => {
    return [...Array(30)].map((_, i) => ({
      id: i,
      size: Math.random() * 6 + 2,
      left: Math.random() * 100,
      top: Math.random() * 100,
      opacity: Math.random() * 0.4 + 0.1,
      duration: Math.random() * 8 + 4,
      delay: Math.random() * 5,
      x: Math.random() > 0.5 ? [0, 50] : [0, -50]
    }));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % titles.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen bg-dark flex flex-col items-center justify-center overflow-hidden pt-20">
      {/* Particles */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute rounded-full bg-accent blur-[1px]"
            style={{
              width: p.size + 'px',
              height: p.size + 'px',
              left: p.left + '%',
              top: p.top + '%',
              opacity: p.opacity
            }}
            animate={{
              y: [100, -500],
              opacity: [0, 0.8, 0],
              x: p.x
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              ease: "linear",
              delay: p.delay
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex flex-col-reverse lg:flex-row items-center gap-12 mt-10 lg:mt-0">
        <motion.div 
          className="lg:w-1/2 text-left flex flex-col items-start relative"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Decorative Corner SVG */}
          <div className="absolute -top-10 -left-10 w-40 h-40 opacity-20 pointer-events-none hidden lg:block">
            <svg className="text-primary" fill="currentColor" viewBox="0 0 100 100">
              <path d="M50 0 L60 40 L100 50 L60 60 L50 100 L40 60 L0 50 L40 40 Z" />
            </svg>
          </div>

          <div className="relative z-10 border-l-4 border-primary pl-8">
            <h2 className="hidden font-tamil text-5xl md:text-7xl text-white/5 uppercase opacity-20 absolute -top-12 -left-4 pointer-events-none select-none">அமைச்சர்</h2>
            <h2 className="font-tamil text-3xl md:text-4xl text-cream italic mb-4 relative z-10">அமைச்சர்</h2>
            <h3 className="text-xl md:text-2xl font-light text-primary mb-8 uppercase tracking-wider">
              Minister | MLA | GS
            </h3>
            
            <h1 
              className="text-5xl md:text-7xl lg:text-8xl font-bold text-cream mb-6 relative z-10"
              style={{ 
                fontFamily: "'Playfair Display', Georgia, 'Times New Roman', serif",
                letterSpacing: '2px',
                textTransform: 'none',
                lineHeight: '1.1'
              }}
            >
              Bussy N. <span className="text-primary">Anand</span>
            </h1>
            
            <div className="h-20 flex items-center justify-start w-full mb-8">
              <AnimatePresence mode="wait">
                <motion.p 
                  key={titleIndex}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.5 }}
                  className="text-lg text-white/70 max-w-md"
                  style={{ 
                    fontFamily: "'Playfair Display', Georgia, 'Times New Roman', serif",
                    fontWeight: 400,
                    letterSpacing: '4px',
                    lineHeight: '1.1',
                    textTransform: 'none'
                  }}
                >
                  {titles[titleIndex]}
                </motion.p>
              </AnimatePresence>
            </div>

            <motion.a 
              href="#timeline"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="bg-primary text-dark px-8 py-4 rounded-sm font-bold uppercase text-xs tracking-widest shadow-xl shadow-primary/10 transition-transform inline-flex items-center gap-3 w-fit"
            >
              Know His Journey
              <ArrowDown className="w-4 h-4 animate-bounce" />
            </motion.a>
          </div>
        </motion.div>

        <motion.div 
          className="lg:w-1/2 flex items-center justify-center relative w-full h-full min-h-[400px] mt-10 lg:mt-0"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, type: "spring" }}
        >
          {/* Decorative Backdrop Circle */}
          <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none hidden lg:flex">
            <svg className="w-full h-full text-primary" viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="0.5">
              <circle cx="100" cy="100" r="80" />
              <circle cx="100" cy="100" r="60" />
              <circle cx="100" cy="100" r="40" />
              <path d="M100 20V180M20 100H180" />
            </svg>
          </div>

          <div className="relative w-72 h-80 md:w-80 md:h-96 flex flex-col items-center justify-end group lg:scale-110">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-dark z-30 pointer-events-none"></div>
            
            <img 
              src="https://raw.githubusercontent.com/rahulcvwebsitehosting/ImageStorage/main/BussyNAnand%20Images/BussyRemoveBG.png" 
              alt="Bussy N. Anand" 
              className="absolute inset-0 w-full h-full object-contain object-bottom transition-all duration-700 z-20"
              onError={(e) => {
                e.currentTarget.src = 'https://ui-avatars.com/api/?name=Bussy+N.+Anand&size=600&background=0D1B3E&color=E8A020&font-size=0.33';
              }}
            />
            
            <div className="z-40 text-center pb-8 opacity-100 transition-opacity">
              <div className="text-primary font-tamil text-2xl md:text-3xl mb-1 drop-shadow-md">Hon. Bussy N. Anand</div>
              <div className="text-[10px] uppercase tracking-[0.3em] text-white/60">Minister, Govt of Tamil Nadu</div>
            </div>
          </div>
          
          <div className="absolute -bottom-12 right-[-20%] w-72 p-6 bg-secondary/80 backdrop-blur-sm border-l-4 border-accent shadow-2xl z-50 hidden lg:block">
            <p className="text-sm italic leading-relaxed text-cream">
              "To advocate for the unvoiced and establish a governance model rooted in social justice."
            </p>
            <p className="text-[10px] font-bold mt-2 text-accent uppercase tracking-widest">— Our Mission</p>
          </div>
        </motion.div>
      </div>
      
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 hidden md:block">
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <a href="#about" className="flex flex-col items-center gap-2 cursor-pointer text-primary hover:text-accent transition-colors">
            <span className="text-xs uppercase tracking-widest font-bold">Scroll</span>
            <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center pt-2 shadow-[0_0_10px_rgba(232,160,32,0.3)]">
              <div className="w-1.5 h-1.5 bg-current rounded-full" />
            </div>
          </a>
        </motion.div>
      </div>
      {/* Vertical Text Decoration Right Side */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 flex-col gap-6 z-20 hidden lg:flex items-center">
        <div className="w-[1px] h-32 bg-gradient-to-b from-transparent via-primary to-transparent"></div>
        <div className="[writing-mode:vertical-rl] text-[10px] tracking-[0.5em] text-primary/50 uppercase font-bold">
          Tamilaga Vettri Kazhagam
        </div>
        <div className="w-[1px] h-32 bg-gradient-to-b from-transparent via-primary to-transparent"></div>
      </div>
    </section>
  );
}
