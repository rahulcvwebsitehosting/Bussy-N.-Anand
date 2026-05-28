import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, Award, ArrowRight, ShieldCheck, CheckCircle, GraduationCap, Sparkles } from 'lucide-react';

interface ActivityItem {
  titleEn: string;
  titleTa: string;
  descEn: string;
  descTa: string;
  icon: React.ReactNode;
  highlighten: string;
  highlightTa: string;
}

export function GoodDeeds() {
  const [activeTab, setActiveTab] = useState<'deeds' | 'milestones'>('deeds');

  const deeds: ActivityItem[] = [
    {
      titleEn: "Community Feeding Initiatives (அன்னதானம்)",
      titleTa: "மக்கள் பசித் தீர்க்கும் அன்னதானப் பணி",
      descEn: "Organized massive community feeding campaigns and established regular free kitchens under the TVK welfare umbrella, serving hot, nutritious meals to over 50,000+ daily wage earners and underprivileged citizens.",
      descTa: "த.வெ.க மக்கள் நலப் பணியின் கீழ் தொடர்ச்சியாக அன்னதான முகாம்களை அமைத்து, 50,000க்கும் மேற்பட்ட ஏழை எளிய மக்கள் மற்றும் கூலித் தொழிலாளர்களுக்கு தரமான உணவுகளை வழங்கி பசி துயரை துடைத்துள்ளார்.",
      icon: <Heart className="w-6 h-6" />,
      highlighten: "50K+ Meals Served",
      highlightTa: "50,000+ பயனாளிகள்"
    },
    {
      titleEn: "Personal Funding of Public Civic Works",
      titleTa: "சொந்த நிதியில் பேரிடர் மற்றும் தூய்மை பணிகள்",
      descEn: "Demonstrated selfless dedication by monthly contributing significant personal resources for public drain cleansing, sewage clearance, and emergency street maintenance within the local municipal boundaries to ensure hygienic public environments.",
      descTa: "பொதுமக்கள் சுகாதாரத்தை காக்கும் வகையில், தூய்மைப் பணிகள், கழிவுநீர் அகற்றுதல் மற்றும் அவசர கால தெரு பராமரிப்புப் பணிகளுக்கு தனது சொந்த நிதியில் இருந்து பங்களித்து தன் அர்ப்பணிப்பை நிரூபித்துள்ளார்.",
      icon: <CheckCircle className="w-6 h-6" />,
      highlighten: "Direct Welfare Funding",
      highlightTa: "மக்களுக்கே நேரடி நிதி"
    },
    {
      titleEn: "Educational Scholarship & Support Plans",
      titleTa: "மாணவர்களுக்கான கல்வி உதவித்தொகை",
      descEn: "Sponsorship of school bags, uniform kits, stationery, and higher education tuition fees for meritorious but underprivileged students in Chennai and Puducherry areas to level the educational playing field.",
      descTa: "சென்னை மற்றும் புதுச்சேரி பகுதிகளில் உள்ள தகுதியான எளிய மாணவர்களுக்கு பள்ளி பைகள், சீருடைகள் மற்றும் உயர்கல்வி கட்டணங்களை வழங்கி கல்விப் பணியில் பெரும் பங்காற்றி வருகிறார்.",
      icon: <GraduationCap className="w-6 h-6" />,
      highlighten: "Supporting Future Leaders",
      highlightTa: "கல்வித் தரம் மேம்பாடு"
    },
    {
      titleEn: "Statewide Blood Donation & Health Campaigns",
      titleTa: "மாநில அளவிலான ரத்த தான மற்றும் மருத்துவ முகாம்கள்",
      descEn: "Established a robust, state-wide rapid response network of youth blood donors through TVK and VMI forums, coordinating critical blood drives and free multi-specialty health checkups in vulnerable subregions.",
      descTa: "த.வெ.க மற்றும் வி.எம்.ஐ இளைஞர்கள் மூலமாக வலுவான மாநில அளவிலான அவசர ரத்த தான கட்டமைப்பை உருவாக்கி, ஏராளமான இலவச மருத்துவ முகாம்களை வெற்றிகரமாக நடத்தியுள்ளார்.",
      icon: <ShieldCheck className="w-6 h-6" />,
      highlighten: "24/7 Support Network",
      highlightTa: "24/7 ரத்த தான உதவிகள்"
    }
  ];

  const milestones: ActivityItem[] = [
    {
      titleEn: "Historic Victory from T. Nagar (2026)",
      titleTa: "தி. நகர் தொகுதியில் வரலாற்றுப் பெருவெற்றி",
      descEn: "Decisively won the Thiyagarayanagar constituency seat as TVK made its grand electoral debut, polling 51,632 votes and overcoming decades of legacy party domination.",
      descTa: "த.வெ.க-வின் முதல் சட்டமன்றத் தேர்தலில் தி. நகர் தொகுதியில் போட்டியிட்டு 51,632 வாக்குகள் பெற்று, இரு பெரும் பாரம்பரிய கட்சிகளின் ஆதிக்கத்தை முறியடித்து வரலாற்று சாதனை படைத்தார்.",
      icon: <Award className="w-6 h-6" />,
      highlighten: "51,632 Votes Sworn",
      highlightTa: "51,632 மாபெரும் வாக்குகள்"
    },
    {
      titleEn: "Sworn In as Minister (Government of Tamil Nadu)",
      titleTa: "அமைச்சராகப் பொறுப்பு ஏற்பு",
      descEn: "Elevated to Cabinet rank as a Minister in the Government of Tamil Nadu, executing democratic reforms, people-first administration, and youth welfare.",
      descTa: "தமிழக அமைச்சரவையில் அமைச்சராகப் பொறுப்பேற்று, மக்கள் நலன், இளைஞர் மேம்பாடு மற்றும் ஜனநாயக சீர்திருத்தங்களை முன்னெடுக்கும் மிக உயரிய பொறுப்பில் செயலாற்றி வருகிறார்.",
      icon: <Sparkles className="w-6 h-6" />,
      highlighten: "Honorable Assembly Rank",
      highlightTa: "பாதுகாப்பான மக்கள் சேவை"
    },
    {
      titleEn: "Transforming VMI into TVK (2024)",
      titleTa: "வி.எம்.ஐ இயக்கத்தை த.வெ.க கட்சியாக மாற்றுதல்",
      descEn: "Entrusted by party President Vijay to coordinate the massive infrastructure pivot from the Vijay Makkal Iyakkam welfare wing into a highly disciplined regional political party.",
      descTa: "கட்சித் தலைவர் விஜய் அவர்களின் நம்பிக்கைக்குரியவராக, விஜய் மக்கள் இயக்கத்தை ஒழுக்கமான மக்கள் கட்சியாக (தமிழக வெற்றிக் கழகம்) விரிவுபடுத்தும் பொறுப்பை வெற்றிகரமாக முன்னெடுத்தார்.",
      icon: <ArrowRight className="w-6 h-6" />,
      highlighten: "1.5 Crore+ Cadres System",
      highlightTa: "1.5 கோடிக்கும் அதிகமான தொண்டர்கள்"
    },
    {
      titleEn: "Legendary Puducherry Assembly MLA Triumph (2006)",
      titleTa: "புதுச்சேரி சட்டமன்ற உறுப்பினர் வெற்றி",
      descEn: "Elected to the Puducherry Legislative Assembly from the Bussy Constituency, launching a lifelong legacy of accessible, ground-level administrative representation.",
      descTa: "புதுச்சேரி பெரிமண்டல சட்டமன்ற உறுப்பினராக 'புஸ்ஸி' தொகுதியிலிருந்து தேர்ந்தெடுக்கப்பட்டு, இன்று வரை தொடரும் மக்கள் பிரதிநிதித்துவத்திற்கான களப்பணியை முறைப்படி துவங்கினார்.",
      icon: <CheckCircle className="w-6 h-6" />,
      highlighten: "Earned Lifetime Moniker 'Bussy'",
      highlightTa: "வாழ்நாள் புகழ்பெற்ற 'புஸ்ஸி' பட்டம்"
    }
  ];

  const currentList = activeTab === 'deeds' ? deeds : milestones;

  return (
    <section id="gooddeeds" className="py-24 bg-dark text-cream relative border-t border-b border-white/5">
      <div className="absolute inset-0 bg-kolam opacity-[0.02] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-bold text-xs uppercase tracking-[0.4em] mb-3 block">Welfare & Landmarks</span>
          <h2 className="font-tamil text-3xl md:text-5xl font-bold text-cream mb-4">
            நற்செயல்கள் & மைல்கற்கள் | Good Deeds & Milestones
          </h2>
          <p className="text-white/40 text-xs mt-2 max-w-xl mx-auto font-light leading-relaxed">
            A comprehensive catalog of public welfare acts, direct community programs, and historic administrative breakthroughs demonstrating compassionate public governance.
          </p>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mt-6"></div>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex bg-secondary border border-white/10 p-1 rounded-sm shadow-xl">
            <button
              onClick={() => setActiveTab('deeds')}
              className={`px-6 py-3 text-xs font-bold uppercase tracking-widest transition-all rounded-sm flex items-center gap-2 ${
                activeTab === 'deeds' 
                  ? 'bg-primary text-dark shadow-md' 
                  : 'text-cream/50 hover:text-cream'
              }`}
            >
              <Heart className="w-3.5 h-3.5" />
              Public Good Deeds
            </button>
            <button
              onClick={() => setActiveTab('milestones')}
              className={`px-6 py-3 text-xs font-bold uppercase tracking-widest transition-all rounded-sm flex items-center gap-2 ${
                activeTab === 'milestones' 
                  ? 'bg-primary text-dark shadow-md' 
                  : 'text-cream/50 hover:text-cream'
              }`}
            >
              <Award className="w-3.5 h-3.5" />
              Key Milestones
            </button>
          </div>
        </div>

        {/* Grid List with Animations */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          <AnimatePresence mode="wait">
            {currentList.map((item, index) => (
              <motion.div
                key={activeTab + index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-secondary/20 border border-white/5 rounded-sm p-6 md:p-8 flex flex-col justify-between hover:border-primary/40 transition-all group hover:bg-secondary/40 shadow-2xl"
              >
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <div className="bg-primary/10 p-4 rounded-none border border-primary/20 text-primary group-hover:bg-primary group-hover:text-dark transition-colors shrink-0">
                      {item.icon}
                    </div>
                    <span className="text-[10px] uppercase tracking-widest bg-dark border border-white/10 px-3 py-1.5 font-mono text-primary group-hover:bg-primary/15 transition-colors">
                      {item.highlighten}
                    </span>
                  </div>

                  <h3 className="text-lg md:text-xl font-bold text-cream mb-1 group-hover:text-primary transition-colors tracking-wide">
                    {item.titleEn}
                  </h3>
                  <h4 className="font-tamil text-sm text-primary/70 mb-4 font-bold">
                    {item.titleTa}
                  </h4>
                  
                  <div className="w-12 h-[1px] bg-white/10 mb-4 transition-all group-hover:w-full group-hover:bg-primary/20"></div>

                  <p className="text-white/60 text-xs md:text-sm font-light leading-relaxed mb-4">
                    {item.descEn}
                  </p>
                  <p className="font-tamil text-white/40 text-xs md:text-sm font-light leading-relaxed">
                    {item.descTa}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
