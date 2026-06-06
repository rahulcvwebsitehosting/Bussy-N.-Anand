import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Newspaper, Bell, Calendar, ArrowRight, X } from 'lucide-react';

export function Updates() {
  const [showAll, setShowAll] = useState(false);
  const [selectedNews, setSelectedNews] = useState<null | number>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedNews(null);
    };
    if (selectedNews !== null) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedNews]);

  const news = [
    {
      date: "May 10, 2026",
      title: "Sworn in as Minister for Rural Development, Panchayats & Irrigation",
      desc: "Following the historic victory in T. Nagar, Shri Bussy N. Anand was sworn in to steer the critical portfolios of Rural Development, Panchayat Raj, and Irrigation in the Government of Tamil Nadu.",
      category: "Cabinet Update",
      fullContent: "Following the 2026 electoral victory in Thiyagarayanagar (T. Nagar), Shri Bussy N. Anand was inducted into the cabinet of the Government of Tamil Nadu. The portfolios assigned cover Rural Development, Panchayats, and Irrigation. Departmental outlines focus on infrastructure strengthening, panchayat administration synchronization, and local administrative updates."
    },
    {
      date: "May 8, 2026",
      title: "Constituency Grievance Channel Open",
      desc: "The digital grievance portal for T. Nagar residents is now active. Citizens are encouraged to submit their concerns directly for review.",
      category: "Constituency",
      fullContent: "As part of independent citizen initiative updates, a public contact channel outlines resources for residents of T. Nagar to register neighborhood concerns. Standard divisions cover municipal works, sanitation infrastructure, and public utility reporting. Submissions are designed to guide local efforts in coordination with ward-level volunteers and civic representatives."
    },
    {
      date: "May 5, 2026",
      title: "TVK Party Strengthening Meet",
      desc: "General Secretary Bussy Anand presided over the district secretaries' meet to outline the party's future roadmap.",
      category: "Party News",
      fullContent: "Reflecting TVK's electoral expansion following the 2026 assembly elections, standard party organizing protocols focus on stabilizing booth-level coordination. General Secretary Bussy N. Anand coordinates political alignment across districts in Tamil Nadu and Puducherry, facilitating party membership records and constituency welfare initiatives."
    },
    {
      date: "April 28, 2026",
      title: "Rural Water & Asset Modernization Draft Released",
      desc: "An initial blueprint for improving rural drinking water access and renovating public assets was presented for department review.",
      category: "Development",
      fullContent: "Standard administrative briefs outline proposals for rural infrastructure, including water conservation efforts and local assets management. The Department of Rural Development and Irrigation handles the planning and structural evaluation of panchayat utility centers across targeted districts in Tamil Nadu."
    },
    {
      date: "April 15, 2026",
      title: "T. Nagar Smart Drainage Upgrade Review",
      desc: "A joint inspection with Greater Chennai Corporation (GCC) officials was conducted to inspect waterlogging preventions in T. Nagar.",
      category: "Municipal",
      fullContent: "Addressing local urban drainage concerns, inspections are typically scheduled around West Mambalam, CIT Nagar, and Pondy Bazaar in collaboration with Greater Chennai Corporation (GCC) engineers. Efforts focus on mapping localized bottlenecks to help mitigate seasonal waterlogging risks in high-density areas of the T. Nagar constituency."
    },
    {
      date: "April 2, 2026",
      title: "Mandatory Asset Disclosures Submitted to EC",
      desc: "In accordance with legal guidelines, complete asset and financial transparency archives were formally filed.",
      category: "Transparency",
      fullContent: "In accordance with electoral guidelines and legal mandates, Shri Bussy N. Anand submitted complete wealth disclosures and candidate affidavits to the Election Commission of India during the 2026 general assembly election. These public declarations, certifying verified financial and asset statements of ₹7.48 Crore, remain fully accessible through the official ECI web registry."
    }
  ];

  const displayedNews = showAll ? news : news.slice(0, 3);

  return (
    <section id="updates" className="py-24 bg-dark text-cream relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6"
        >
          <div className="text-left">
            <span className="text-primary font-bold text-xs uppercase tracking-[0.4em] mb-4 block">Latest from the Office</span>
            <h2 className="font-tamil text-4xl md:text-5xl font-bold text-cream mb-4">செய்திகள் & நிகழ்வுகள் | Updates</h2>
            <div className="w-24 h-1 bg-primary rounded-full"></div>
          </div>
          <motion.button 
            whileHover={{ x: 5 }}
            onClick={() => setShowAll(!showAll)}
            className="flex items-center gap-2 text-primary text-[10px] uppercase tracking-widest font-bold hover:underline"
          >
            {showAll ? "Show Fewer Releases" : "Show All Press Releases"} <ArrowRight className="w-4 h-4" />
          </motion.button>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {displayedNews.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-secondary/30 border border-white/5 p-8 rounded-sm hover:border-primary/30 transition-all flex flex-col h-full group"
            >
              <div className="flex justify-between items-start mb-6">
                <span className="px-2 py-1 bg-primary/10 text-primary text-[9px] font-bold uppercase tracking-widest rounded-full">
                  {item.category}
                </span>
                <div className="flex items-center gap-2 text-white/30 text-[10px] font-bold uppercase tracking-widest">
                  <Calendar className="w-3 h-3" />
                  {item.date}
                </div>
              </div>
              <h3 className="text-xl font-bold text-cream mb-4 group-hover:text-primary transition-colors leading-tight">
                {item.title}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed font-light mb-8 flex-grow">
                {item.desc}
              </p>
              <button 
                onClick={() => setSelectedNews(index)}
                className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/40 hover:text-primary transition-colors flex items-center gap-2 cursor-pointer self-start"
              >
                Learn More <ArrowRight className="w-3 h-3" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* news detail modal */}
      <AnimatePresence>
        {selectedNews !== null && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedNews(null)}
              className="absolute inset-0 bg-dark/95 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl bg-secondary border border-white/10 rounded-sm shadow-2xl overflow-hidden flex flex-col z-[101]"
            >
              <div className="p-6 border-b border-white/10 flex justify-between items-center bg-dark/50">
                <div className="flex items-center gap-3">
                  <span className="px-2 py-1 bg-primary/10 text-primary text-[9px] font-bold uppercase tracking-widest rounded-full">
                    {news[selectedNews].category}
                  </span>
                  <span className="text-[10px] text-white/40 font-bold uppercase tracking-widest">{news[selectedNews].date}</span>
                </div>
                <button 
                  onClick={() => setSelectedNews(null)}
                  aria-label="Close news detail"
                  className="p-1 text-white/50 hover:text-primary transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="p-8 overflow-y-auto max-h-[60vh] custom-scrollbar text-white/70 space-y-4">
                <h2 className="text-2xl font-bold text-cream tracking-tight leading-tight">{news[selectedNews].title}</h2>
                <p className="text-sm font-light leading-relaxed text-cream/80 pt-2">{news[selectedNews].fullContent}</p>
                <div className="bg-primary/5 p-4 border border-primary/20 rounded-sm mt-6">
                  <p className="text-[10px] text-primary/80 uppercase tracking-wider font-bold">Disclaimer:</p>
                  <p className="text-[9px] text-cream/60 leading-relaxed mt-1">This is an independent informational project archive. For official state press releases, refer directly to official governmental portals.</p>
                </div>
              </div>
              <div className="p-4 border-t border-white/10 flex justify-end bg-dark/25">
                <button 
                  onClick={() => setSelectedNews(null)}
                  className="px-6 py-2 bg-primary text-dark font-bold text-[10px] uppercase tracking-widest rounded-sm hover:bg-cream transition-colors"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
