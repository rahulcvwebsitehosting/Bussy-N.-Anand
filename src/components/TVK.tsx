import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, Flag, Users, Heart, Target, Lightbulb, MapPin, CheckCircle2, FileText, BookOpen, ExternalLink } from 'lucide-react';
import { useState } from 'react';

export function TVK() {
  const [openAccordion, setOpenAccordion] = useState<number | null>(0);
  const [showManifestoEmbed, setShowManifestoEmbed] = useState(false);

  const keyFacts = [
    { icon: <Flag />, label: "Founded", value: "2 February 2024" },
    { icon: <Users />, label: "Founder & President", value: "Vijay (Thalapathy)" },
    { icon: <Target />, label: "General Secretary", value: "Bussy N. Anand" },
    { icon: <MapPin />, label: "Headquarters", value: "Panaiyur, Chennai" },
    { icon: <Lightbulb />, label: "Ideology", value: "Secular Social Justice, Centre-Left" },
    { icon: <Heart />, label: "Members", value: "1.5 Crore+ (as of 2025)" },
  ];

  const milestones = [
    { title: "Oct 2024 — Vikravandi Conference", desc: "First political conference attended by 800,000+ people — one of the largest party debuts in Tamil Nadu history." },
    { title: "Nov 2024 — State Rights Resolutions", desc: "Passed 26 resolutions against central and state governments on behalf of Tamil people's rights." },
    { title: "Jul 2024 — Opposing NEET", desc: "Demanded abolishment of NEET exam and restoration of education to State List — championing rural and Tamil students." },
    { title: "2024 — Ideological Stance", desc: "Aligned with centre-left; explicitly rejected right-wing politics. Committed to Ambedkar's constitutional values, Periyar's social reform, and Kamaraj's people-first governance." },
    { title: "Feb 2025 — Booth Expansion", desc: "Announced massive expansion: 70,000+ booth agents appointed, internal hierarchy restructured for democratic participation." },
    { title: "Sept 2025 — Karur Rally Support", desc: "Following the Karur rally tragedy, Vijay personally announced ₹2 lakh compensation per deceased family and ₹20,000 per injured. Met families to offer condolences." },
    { title: "2026 Manifesto Promises", desc: "₹2,500/month for women head-of-family; 6 free LPG cylinders/year; 8 grams of gold + silk saree for brides (below ₹5L/yr); Youth job creation." },
    { title: "2026 Election Result", desc: "TVK emerged as the SINGLE LARGEST PARTY in Tamil Nadu with 108 seats out of 234, contesting independently." },
  ];

  return (
    <section id="tvk" className="py-24 bg-dark relative border-t border-white/5">
      <div className="absolute inset-0 bg-kolam opacity-[0.03]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <svg viewBox="0 0 24 24" fill="none" className="w-16 h-16 text-primary animate-wave mb-4 drop-shadow-lg">
             <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1v12zm0 0v7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <h2 className="font-tamil text-4xl md:text-5xl font-bold text-cream mb-4 drop-shadow-sm">தமிழக வெற்றிக் கழகம்</h2>
          <h3 className="text-xl md:text-2xl font-bold text-primary tracking-wide uppercase">Tamilaga Vettri Kazhagam</h3>
          <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/50 mt-2">Victory Party of Tamilakam</p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-transparent p-8 md:p-10 rounded-sm mb-16 border border-white/5 border-l-4 border-l-primary relative overflow-hidden"
        >
          <div className="absolute -right-20 -top-20 opacity-5 w-64 h-64 bg-[url('data:image/svg+xml,%3Csvg width=\\'60\\' height=\\'60\\' viewBox=\\'0 0 60 60\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cpath d=\\'M30 0c16.568 0 30 13.432 30 30S46.568 60 30 60 0 46.568 0 30 13.432 0 30 0zm0 5c13.807 0 25 11.193 25 25S43.807 55 30 55 5 43.807 5 30 16.193 5 30 5z\\' fill=\\'%23E8A020\\' fill-rule=\\'evenodd\\'/%3E%3C/svg%3E')] rotate-45"></div>
          
          <p className="text-xl md:text-2xl text-cream leading-relaxed font-light italic relative z-10 text-center max-w-4xl mx-auto">
            "Founded on 2 February 2024 by actor-turned-politician Vijay, Tamilaga Vettri Kazhagam is a centre-left regional political party headquartered in Panaiyur, Chennai. Its ideology is rooted in egalitarianism, secularism, social justice, and the philosophies of Ambedkar, Periyar, and Kamaraj."
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {keyFacts.map((fact, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-transparent p-6 rounded-sm border border-white/5 flex items-center gap-4 hover:border-primary/50 transition-all group"
            >
              <div className="bg-primary/10 p-4 rounded-full text-primary group-hover:bg-primary/25 group-hover:text-primary transition-colors">
                {fact.icon}
              </div>
              <div>
                <p className="text-[10px] font-bold text-white/40 uppercase tracking-widest">{fact.label}</p>
                <p className="text-cream font-medium text-lg">{fact.value}</p>
              </div>
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="md:col-span-2 lg:col-span-3 bg-[#3B0808] p-6 rounded-sm border-l-4 border-primary flex flex-col items-center justify-center"
          >
            <p className="text-xs font-bold text-accent uppercase tracking-widest mb-2">Motto</p>
            <p className="font-tamil text-2xl md:text-3xl text-cream font-bold">"வேலை! உயர்வு! உன்னால் முடியும்!"</p>
            <p className="text-sm font-medium text-cream/70 uppercase tracking-widest mt-2">— Work! Rise! You Can! —</p>
          </motion.div>
        </div>

        <div className="max-w-4xl mx-auto">
          
          <div className="space-y-4">
            {milestones.map((m, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-transparent rounded-sm border border-white/10 overflow-hidden"
              >
                <button 
                  onClick={() => setOpenAccordion(openAccordion === index ? null : index)}
                  className="w-full px-6 py-5 flex justify-between items-center text-left hover:bg-white/5 transition-colors focus:outline-none"
                >
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className={`w-5 h-5 flex-shrink-0 ${openAccordion === index ? 'text-primary' : 'text-white/30'}`} />
                    <span className="font-bold text-cream text-base tracking-wider uppercase">{m.title}</span>
                  </div>
                  <ChevronDown className={`w-4 h-4 text-white/50 transition-transform ${openAccordion === index ? 'rotate-180' : ''}`} />
                </button>
                
                <AnimatePresence initial={false}>
                  {openAccordion === index && (
                    <motion.div 
                      key="content"
                      layout
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden bg-[#3D0606]"
                    >
                      <div className="px-6 pb-5 pl-6 md:pl-14 pt-2">
                        <p className="text-white/60 leading-relaxed font-light">{m.desc}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {/* New Interactive 2026 Manifesto Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 bg-gradient-to-br from-[#3D0606] to-dark border border-primary/25 rounded-sm p-6 md:p-10 relative overflow-hidden shadow-2xl"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
            
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4 border-b border-white/10 pb-6">
              <div>
                <div className="flex items-center gap-2 text-primary mb-2">
                  <FileText className="w-4 h-4" />
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] font-bold">Official Document Launch</span>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-cream tracking-tight">
                  2026 Tamil Nadu Development Manifesto
                </h3>
                <p className="font-tamil text-xs text-primary/70 font-semibold mt-1">
                  த.வெ.க கொள்கை மற்றும் 2026 தேர்தல் அறிக்கை
                </p>
              </div>
              
              <div className="flex gap-2">
                <a 
                  href="https://github.com/rahulcvwebsitehosting/ImageStorage/raw/d084feaa6f886c2ea2c46c7175e1aff290d9e2f8/BussyNAnand%20Images/TVK%20MANIFESTO.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-transparent text-cream hover:bg-white/5 border border-white/10 px-4 py-2 text-[10px] font-bold uppercase tracking-widest rounded-sm transition-all flex items-center gap-2 shrink-0"
                >
                  <ExternalLink className="w-3 h-3 text-primary" />
                  Manifesto Link
                </a>
                <button
                  onClick={() => setShowManifestoEmbed(!showManifestoEmbed)}
                  className="bg-primary text-dark hover:bg-accent px-4 py-2 text-[10px] font-bold uppercase tracking-widest rounded-sm transition-all flex items-center gap-2 shrink-0 shadow-lg"
                >
                  <BookOpen className="w-3 h-3" />
                  {showManifestoEmbed ? 'Close Reader' : 'View Full Manifesto →'}
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              <div className={showManifestoEmbed ? "md:col-span-12" : "md:col-span-8"}>
                <p className="text-white/80 text-sm md:text-base leading-relaxed font-light mb-4 text-left">
                  In the 2026 elections, TVK released its vision document for Tamil Nadu's development. This landmark public policy framework details comprehensive resolutions for complete administrative transparency, women-led monthly welfare grants, and high-performance government systems.
                </p>
                <p className="font-tamil text-white/50 text-xs md:text-sm leading-relaxed font-light text-left">
                  2026 சட்டமன்றத் தேர்தலில், தமிழ்நாட்டின் வளர்ச்சி மற்றும் சமூகப் பாதுகாப்புக்கான தொலைநோக்குப் பார்வை கொள்கை அறிக்கையை தமிழக வெற்றிக் கழகம் அதிகாரப்பூர்வமாக வெளியிட்டுள்ளது. கல்வி, மக்கள் நல்வாழ்வு, விவசாயம் மற்றும் சமூக நீதிக்கான வழிகாட்டுதல்களை இது விளக்குகிறது.
                </p>
                
                <p className="text-cream/45 text-[10px] uppercase font-mono tracking-widest mt-4 flex items-center gap-1.5 text-left">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  For the complete TVK manifesto, click here to view on the official site.
                </p>
              </div>

              {!showManifestoEmbed && (
                <div className="md:col-span-4 flex justify-center py-4">
                  <div 
                    onClick={() => setShowManifestoEmbed(true)}
                    className="w-36 h-48 bg-dark/60 border border-white/10 hover:border-primary/40 rounded-sm p-4 relative group cursor-pointer transition-all shadow-xl hover:-translate-y-1 flex flex-col justify-between text-left"
                  >
                    <div className="absolute top-2 right-2 p-1 bg-primary/10 rounded-full text-primary group-hover:bg-primary group-hover:text-dark transition-colors">
                      <BookOpen className="w-4 h-4" />
                    </div>
                    <span className="text-[8px] font-mono text-white/30 uppercase tracking-widest">Election 2026</span>
                    <div>
                      <h4 className="font-tamil text-primary text-xs font-bold leading-tight group-hover:text-cream transition-colors">தேர்தல் கொள்கை</h4>
                      <p className="text-[10px] text-cream/70 mt-1 uppercase font-bold tracking-wide">TVK Manifesto</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <AnimatePresence>
              {showManifestoEmbed && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-8 border border-white/10 rounded-sm overflow-hidden w-full bg-dark relative flex flex-col"
                >
                  <div className="bg-dark/95 backdrop-blur-md px-4 py-3 border-b border-white/10 flex flex-wrap justify-between items-center gap-3">
                    <div className="flex items-center gap-1.5 min-w-max">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                      <p className="text-[9px] font-bold text-primary uppercase tracking-widest text-left">Interactive Manifesto PDF Viewer</p>
                    </div>
                    <div className="flex items-center gap-3 text-[10px]">
                      <span className="text-white/40 block sm:hidden">Mobile? For the best experience, open on desktop or</span>
                      <span className="text-white/40 hidden sm:block md:hidden">On mobile? For the best experience, open on desktop or</span>
                      <a 
                        href="https://github.com/rahulcvwebsitehosting/ImageStorage/raw/d084feaa6f886c2ea2c46c7175e1aff290d9e2f8/BussyNAnand%20Images/TVK%20MANIFESTO.pdf" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-primary hover:text-accent font-bold hover:underline py-1 px-3 border border-primary/20 rounded-sm bg-primary/5 hover:bg-primary/10 transition-colors whitespace-nowrap"
                      >
                        Open PDF Directly ↗
                      </a>
                    </div>
                  </div>
                  <div className="h-[60vh] sm:h-[650px] md:h-[750px] min-h-[450px] w-full relative">
                    <iframe
                      src="https://docs.google.com/gview?embedded=1&url=https://github.com/rahulcvwebsitehosting/ImageStorage/raw/d084feaa6f886c2ea2c46c7175e1aff290d9e2f8/BussyNAnand%20Images/TVK%20MANIFESTO.pdf"
                      width="100%"
                      height="100%"
                      frameBorder="0"
                      className="opacity-95 contrast-125 w-full h-full"
                      title="TVK 2026 Party Manifesto Document"
                      loading="lazy"
                      allow="fullscreen"
                      referrerPolicy="no-referrer-when-downgrade"
                      sandbox="allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox allow-forms"
                    >
                      <div className="absolute inset-0 flex flex-col items-center justify-center bg-dark/95 p-6 text-center border border-white/10 rounded-sm">
                        <p className="text-cream text-sm mb-4 font-bold">Unable to display the interactive PDF preview here.</p>
                        <a 
                          href="https://github.com/rahulcvwebsitehosting/ImageStorage/raw/d084feaa6f886c2ea2c46c7175e1aff290d9e2f8/BussyNAnand%20Images/TVK%20MANIFESTO.pdf" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="text-dark bg-primary hover:bg-accent font-bold py-2 px-4 rounded-sm transition-colors duration-200"
                        >
                          Open PDF Directly ↗
                        </a>
                      </div>
                    </iframe>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
