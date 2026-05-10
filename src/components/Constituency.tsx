import { motion } from 'motion/react';
import { Map as MapIcon, Zap, Droplets, Construction, Users, AlertCircle } from 'lucide-react';
import { APIProvider, Map, AdvancedMarker, Pin } from '@vis.gl/react-google-maps';

const API_KEY = process.env.GOOGLE_MAPS_PLATFORM_KEY || '';
const hasValidKey = Boolean(API_KEY);

function ConstituencyMap() {
  if (!hasValidKey) {
    return (
      <div className="w-full h-full bg-dark/50 flex flex-col items-center justify-center p-6 text-center">
        <AlertCircle className="w-8 h-8 text-primary/50 mb-4" />
        <p className="text-white/40 text-xs uppercase tracking-widest font-bold mb-2">Google Maps Key Required</p>
        <p className="text-[10px] text-white/30 leading-relaxed max-w-[200px]">
          Please add GOOGLE_MAPS_PLATFORM_KEY to AI Studio Secrets to view the live constituency map.
        </p>
      </div>
    );
  }

  return (
    <APIProvider apiKey={API_KEY}>
      <Map
        defaultCenter={{ lat: 13.0405, lng: 80.2337 }}
        defaultZoom={14}
        mapId="DEMO_MAP_ID"
        internalUsageAttributionIds={['gmp_mcp_codeassist_v1_aistudio']}
        style={{ width: '100%', height: '100%' }}
        gestureHandling={'greedy'}
        disableDefaultUI={true}
      >
        <AdvancedMarker position={{ lat: 13.0405, lng: 80.2337 }}>
          <Pin background="#f3b33d" glyphColor="#061026" borderColor="#f3b33d" />
        </AdvancedMarker>
      </Map>
    </APIProvider>
  );
}

export function Constituency() {
  const wards = [
    { name: "Ward 135", area: "Kodambakkam South" },
    { name: "Ward 136", area: "Pondy Bazaar" },
    { name: "Ward 140", area: "West Mambalam" },
    { name: "Ward 141", area: "T. Nagar Central" },
    { name: "Ward 142", area: "CIT Nagar" }
  ];

  const projects = [
    { 
      icon: <Droplets className="w-6 h-6" />, 
      title: "Flood Mitigation", 
      desc: "Upgrading the stormwater drain network across West Mambalam and T. Nagar to prevent monsoon waterlogging." 
    },
    { 
      icon: <Zap className="w-6 h-6" />, 
      title: "Smart Lighting", 
      desc: "Installation of 500+ energy-efficient LED streetlights across all commercial and residential streets." 
    },
    { 
      icon: <Construction className="w-6 h-6" />, 
      title: "Pondy Bazaar Redevelopment", 
      desc: "Phase 2 of the pedestrian-first smart city initiative to balance commerce with citizen comfort." 
    }
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
          <span className="text-primary font-bold text-xs uppercase tracking-[0.4em] mb-4 block">Action for T. Nagar</span>
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

          {/* Local Projects */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <Construction className="text-primary w-6 h-6" />
              <h3 className="text-xl font-bold uppercase tracking-widest text-primary">Development Projects</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map((project, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ y: -5 }}
                  className="bg-secondary p-8 rounded-sm border border-white/5 shadow-xl group"
                >
                  <div className="text-primary mb-6 group-hover:scale-110 transition-transform">{project.icon}</div>
                  <h4 className="text-xl font-bold text-cream mb-4">{project.title}</h4>
                  <p className="text-white/60 text-sm leading-relaxed font-light">{project.desc}</p>
                </motion.div>
              ))}
              
              <div className="bg-primary/5 border-2 border-dashed border-primary/20 p-8 rounded-sm flex flex-col justify-center items-center text-center">
                <Users className="text-primary/40 w-12 h-12 mb-4" />
                <h4 className="text-cream font-bold mb-2">Next Milestone: Citizens' Meet</h4>
                <p className="text-white/40 text-xs">Join us for the monthly grievance session at the Constituency Office.</p>
                <a href="#contact" className="mt-6 text-primary text-[10px] font-bold uppercase tracking-widest hover:underline">Submit Grievance Online →</a>
              </div>
            </div>

            <div className="bg-dark/30 p-8 border border-white/5 rounded-sm">
              <h4 className="text-cream font-bold mb-4 flex items-center gap-2">
                <span className="w-8 h-[1px] bg-primary"></span>
                Constituency Updates
              </h4>
              <p className="text-white/60 text-sm leading-relaxed font-light">
                "Thiyagarayanagar is not just a commercial hub; it is the heart of Chennai's residential legacy. As your representative and Minister, my focus is to synchronize modern urban demands with the peace of our neighborhoods like West Mambalam and CIT Nagar."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
