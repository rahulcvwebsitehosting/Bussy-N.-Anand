import { motion } from 'motion/react';
import { Map as MapIcon, Zap, Droplets, Construction, Users } from 'lucide-react';

function ConstituencyMap() {
  return (
    <div className="w-full h-full relative bg-dark">
      <iframe
        width="100%"
        height="100%"
        frameBorder="0"
        scrolling="no"
        marginHeight={0}
        marginWidth={0}
        src="https://www.openstreetmap.org/export/embed.html?bbox=80.211%2C13.023%2C80.256%2C13.058&amp;layer=mapnik&amp;marker=13.0405%2C80.2337"
        className="grayscale invert opacity-60 contrast-125"
        title="T. Nagar Constituency Map"
        loading="lazy"
        referrerPolicy="no-referrer"
        sandbox="allow-scripts allow-same-origin"
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-dark/95 p-4 text-center border border-white/10 rounded-sm">
          <p className="text-cream text-xs mb-2">Google Map / OpenStreetMap failed to load.</p>
          <a 
            href="https://www.openstreetmap.org/#map=15/13.0405/80.2337" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-primary hover:underline text-xs font-bold"
          >
            View Map on OpenStreetMap ↗
          </a>
        </div>
      </iframe>
      <div className="absolute inset-0 pointer-events-none bg-primary/5 ring-1 ring-inset ring-primary/20"></div>
    </div>
  );
}

export function Constituency() {
  const wards = [
    { name: "Ward 117", area: "T. Nagar North" },
    { name: "Ward 134", area: "West Mambalam North" },
    { name: "Ward 135", area: "Kodambakkam South" },
    { name: "Ward 136", area: "Pondy Bazaar" },
    { name: "Ward 140", area: "West Mambalam" },
    { name: "Ward 141", area: "T. Nagar South" },
    { name: "Ward 142", area: "CIT Nagar" }
  ];

  return (
    <section id="constituency" className="py-24 bg-dark text-cream relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
          <path d="M400 100 L600 300 L400 700 L200 300 Z" fill="none" stroke="currentColor" strokeWidth="2" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-tamil text-4xl md:text-5xl font-bold text-cream mb-4">தி. நகர் தொகுதி | T. Nagar Constituency</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Map and Wards */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1 space-y-8"
          >
            <div className="bg-white/5 border border-white/10 rounded-sm p-6 relative overflow-hidden">
              <div className="flex items-center gap-3 mb-6">
                <MapIcon className="text-primary w-5 h-5" />
                <h3 className="text-lg font-bold uppercase tracking-widest text-primary">Constituency Map</h3>
              </div>
              <div className="aspect-square border border-white/5 rounded-sm overflow-hidden relative">
                <ConstituencyMap />
                <div className="absolute top-4 right-4 pointer-events-none">
                  <span className="bg-primary/90 text-dark px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded-full shadow-lg">Live: T. Nagar</span>
                </div>
              </div>
              <div className="mt-8">
                <h4 className="text-[10px] font-bold text-white/40 uppercase tracking-[0.2em] mb-4">Covered Wards</h4>
                <div className="space-y-3">
                  {wards.map((ward, idx) => (
                    <div key={idx} className="flex justify-between items-center text-sm border-b border-white/5 pb-2">
                      <span className="font-bold text-primary">{ward.name}</span>
                      <span className="text-white/60 font-light">{ward.area}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Local Priorities */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <Construction className="text-primary w-6 h-6" />
              <h3 className="text-xl font-bold uppercase tracking-widest text-primary">Development Priorities</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-secondary p-8 rounded-sm border border-white/5 shadow-xl group col-span-1 md:col-span-2">
                <p className="text-white/60 text-sm leading-relaxed font-light mb-6">
                  Constituency development priorities for Thiyagarayanagar are being formulated through active community engagement. Our goal is to balance the commercial vitality of T. Nagar with residential peace and infrastructure resilience.
                </p>
                <div className="bg-primary/10 border border-primary/20 p-6 rounded-sm">
                  <p className="text-primary text-xs font-bold leading-relaxed">
                    Official masterplans and specific project announcements will be shared following detailed department assessments and ministerial approvals. 
                  </p>
                </div>
              </div>
              
              <div className="bg-primary/5 border-2 border-dashed border-primary/20 p-8 rounded-sm flex flex-col justify-center items-center text-center col-span-1 md:col-span-2">
                <Users className="text-primary/40 w-12 h-12 mb-4" />
                <h4 className="text-cream font-bold mb-2">Constituency Service & Information</h4>
                <p className="text-white/40 text-xs max-w-sm">
                  View precise boundaries, locations, and GCC division office details for each ward using our Interactive Map below, or report issues directly to the MLA office online.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center justify-center mt-6">
                  <a href="#ward-map" className="text-primary text-[10px] font-bold uppercase tracking-widest hover:underline flex items-center gap-1">
                    Explore Ward Map ↓
                  </a>
                  <span className="text-white/20 hidden sm:inline">|</span>
                  <a href="#contact" className="text-primary text-[10px] font-bold uppercase tracking-widest hover:underline flex items-center gap-1">
                    Submit Grievance Online →
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-dark/30 p-8 border border-white/5 rounded-sm">
              <h4 className="text-cream font-bold mb-4 flex items-center gap-2">
                <span className="w-8 h-[1px] bg-primary"></span>
                Constituency Updates
              </h4>
              <blockquote className="text-white/60 text-sm leading-relaxed font-light pl-4 border-l-2 border-primary italic">
                "Thiyagarayanagar is not just a commercial hub; it is the heart of Chennai's residential legacy. As your representative and Minister, my focus is to synchronize modern urban demands with the peace of our neighborhoods like West Mambalam and CIT Nagar."
                <cite className="block not-italic text-[10px] uppercase tracking-widest font-bold text-primary mt-4">— Hon. Bussy N. Anand, MLA Statement during Assembly General Discussion, June 2026</cite>
              </blockquote>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
