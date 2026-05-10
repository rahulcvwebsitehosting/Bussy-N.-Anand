import { motion } from 'motion/react';
import { ChevronDown, Flag, Users, Heart, Target, Lightbulb, MapPin, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';

export function TVK() {
  const [openAccordion, setOpenAccordion] = useState<number | null>(0);

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
            className="md:col-span-2 lg:col-span-3 bg-[#8B1A1A] p-6 rounded-sm border-l-4 border-primary flex flex-col items-center justify-center"
          >
            <p className="text-xs font-bold text-accent uppercase tracking-widest mb-2">Motto</p>
            <p className="font-tamil text-2xl md:text-3xl text-cream font-bold">"வேலை! உயர்வு! உன்னால் முடியும்!"</p>
            <p className="text-sm font-medium text-cream/70 uppercase tracking-widest mt-2">— Work! Rise! You Can! —</p>
          </motion.div>
        </div>

        <div className="max-w-4xl mx-auto">
          <h3 className="font-tamil text-3xl font-bold text-primary mb-8 text-center uppercase tracking-widest">Good Deeds & Milestones</h3>
          
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
                
                <motion.div 
                  initial={false}
                  animate={{ height: openAccordion === index ? 'auto' : 0, opacity: openAccordion === index ? 1 : 0 }}
                  className="overflow-hidden bg-[#061026]"
                >
                  <div className="px-6 pb-5 pl-6 md:pl-14 pt-2">
                    <p className="text-white/60 leading-relaxed font-light">{m.desc}</p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
