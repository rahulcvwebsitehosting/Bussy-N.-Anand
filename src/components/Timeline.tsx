import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';

export function Timeline() {
  const milestones = [
    { year: "1992", title: "Early Movement", desc: "Joined Vijay fan clubs; became part of early people's welfare movement." },
    { year: "2006", title: "First Election Win", desc: "Elected MLA from Bussy Constituency, Puducherry under PMC. Defeated DMK's candidate, earning his iconic nickname 'Bussy'." },
    { year: "2006–2011", title: "Grassroots Governance", desc: "As MLA: personally participated in garbage collection and drain cleaning, funding civic activities from his own pocket." },
    { year: "2011 & 2016", title: "Continuing the Fight", desc: "Contested Oupalam constituency as an independent (2011) and under AINRC (2016), strictly fighting for the people." },
    { year: "2024", title: "Inaugural General Secretary", desc: "Appointed inaugural General Secretary of TVK on Feb 2. Pivotal role in transforming the Iyakkam into a formal political force." },
    { year: "2024–2025", title: "Party Expansion", desc: "Prominent TVK spokesperson. Led huge party expansion across Tamil Nadu. Declared TVK's leader would become Chief Minister." },
    { year: "2026", title: "Historic Victory", desc: "Elected MLA from Thiyagarayanagar, Chennai with 51,632 votes. Historic win for TVK in a traditionally DMK/AIADMK dominated seat." },
  ];

  return (
    <section id="timeline" className="py-24 bg-dark text-cream relative border-t border-white/5">
      <div className="absolute inset-0 bg-kolam opacity-5"></div>
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="font-tamil text-4xl md:text-5xl font-bold text-cream mb-4">அரசியல் பயணம் | Political Journey</h2>
          <div className="w-32 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="relative border-l-4 border-primary/30 md:border-l-0 md:flex md:flex-col md:items-center">
          {/* Central Line for Desktop */}
          <div className="hidden md:block absolute w-[1px] h-full bg-gradient-to-b from-primary/10 via-primary/50 to-primary/10 left-1/2 -translate-x-1/2"></div>

          {milestones.map((m, i) => (
            <TimelineItem key={i} data={m} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TimelineItem({ data, index }: { data: any, index: number }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const isEven = index % 2 === 0;

  return (
    <div ref={ref} className={`mb-12 md:mb-24 flex justify-between items-center w-full ${isEven ? 'md:flex-row-reverse' : ''}`}>
      <div className="hidden md:block w-5/12"></div>
      
      {/* Node */}
      <motion.div 
        initial={{ scale: 0 }}
        animate={inView ? { scale: 1 } : { scale: 0 }}
        transition={{ type: "spring", stiffness: 200, delay: 0.3 }}
        className="absolute left-[-11px] md:left-1/2 md:-translate-x-1/2 w-6 h-6 rounded-none rotate-45 bg-dark border-2 border-primary z-20 shadow-[0_0_15px_rgba(232,160,32,0.8)]"
      />

      {/* Content Card */}
      <motion.div 
        initial={{ opacity: 0, x: isEven ? 50 : -50 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="w-full pl-8 md:pl-0 md:w-5/12"
      >
        <div className={`bg-transparent border border-white/5 p-6 md:p-8 rounded-sm hover:bg-white/5 hover:border-white/10 transition-all group shadow-2xl relative ${isEven ? 'border-r-4 border-r-primary hover:border-r-accent' : 'border-l-4 border-l-primary hover:border-l-accent'}`}>
          <div className="text-primary font-serif font-black text-3xl md:text-4xl mb-2 tracking-widest">{data.year}</div>
          <h3 className="text-lg md:text-xl font-bold text-cream mb-3 uppercase tracking-wider">{data.title}</h3>
          <p className="text-white/60 font-light leading-relaxed">{data.desc}</p>
        </div>
      </motion.div>
    </div>
  );
}
