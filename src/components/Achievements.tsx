import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';

export function Achievements() {
  const stats = [
    { value: 51632, suffix: "", label: "Total Votes in 2026" },
    { value: 13027, suffix: "", label: "Win Margin vs AIADMK" },
    { value: 14615, suffix: "", label: "Win Margin vs DMK" },
    { value: 2026, suffix: "", label: "Year Sworn in as Minister" },
  ];

  const cards = [
    { title: "Rural Dev & Irrigation Minister", desc: "Hon. Bussy N. Anand serves as the Minister for Rural Development, Panchayats & Irrigation in the 2026 Tamil Nadu Cabinet, following the historic debut of TVK in the Assembly Elections." },
    { title: "Defeating Heavyweights", desc: "In the 2026 T. Nagar election, he secured 51,632 votes, convincingly defeating AIADMK's B. Sathyanarayanan by 13,027 votes and DMK's candidate by 14,615 votes." },
    { title: "Historic 2026 Victory", desc: "Won Thiyagarayanagar assembly seat in Chennai — a constituency dominated by DMK and AIADMK for decades — with a commanding majority of 13,027 votes on TVK's debut election." },
    { title: "People's Voice", desc: "Served as TVK's primary public spokesperson, articulating party vision on governance, youth empowerment, and social justice across Tamil Nadu and Puducherry." },
    { title: "Organizational Force", desc: "For over 15 years, he meticulously transformed the Vijay Makkal Iyakkam (VMI) from a fan-led welfare association into a high-discipline political infrastructure." },
    { title: "Early Career Hub", desc: "Prior to his full-time political ascent, he managed successful ventures in real estate and operated a printing press, providing him with early practical experience in business and administration." },
  ];

  return (
    <section id="achievements" className="py-24 bg-[#3D0606] text-cream relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-tamil text-4xl md:text-5xl font-bold text-cream mb-4">சாதனைகள் | Achievements</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        {/* Counters */}
        <div className="grid grid-cols-2 lg:grid-cols-4 w-full gap-4 mb-20 bg-[#3D0606] border border-white/10 rounded-sm overflow-hidden p-4">
          {stats.map((stat, index) => (
            <Counter key={index} end={stat.value} suffix={stat.suffix} label={stat.label} delay={index * 0.1} />
          ))}
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -10 }}
              className="bg-transparent p-8 rounded-sm border border-white/5 hover:border-primary/50 transition-all group relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-primary/20 group-hover:bg-primary transition-colors"></div>
              <div className="w-12 h-12 bg-primary/10 rounded-none flex items-center justify-center mb-6 group-hover:bg-primary/25 transition-colors">
                <div className="w-4 h-4 bg-primary rotate-45 transition-colors"></div>
              </div>
              <h3 className="text-xl font-bold text-cream mb-4 group-hover:text-primary transition-colors uppercase tracking-wider">{card.title}</h3>
              <p className="text-white/60 leading-relaxed font-light">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Counter({ end, suffix, label, delay }: { end: number, suffix: string, label: string, delay: number }) {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    if (!inView) return;
    let rafId: number;
    const timeoutId = setTimeout(() => {
      let startTime: number;
      const duration = 2000;
      const animateCount = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = timestamp - startTime;
        const percent = Math.min(progress / duration, 1);
        const easeOutQuart = 1 - Math.pow(1 - percent, 4);
        setCount(Math.floor(end * easeOutQuart));
        if (percent < 1) {
          rafId = requestAnimationFrame(animateCount);
        }
      };
      rafId = requestAnimationFrame(animateCount);
    }, delay * 1000);

    return () => {
      clearTimeout(timeoutId);
      cancelAnimationFrame(rafId);
    };
  }, [inView, end, delay]);

  return (
    <div ref={ref} className="text-center p-4 border-b border-white/5 lg:border-b-0 lg:border-r lg:last:border-r-0 flex flex-col justify-center">
      <div className="text-4xl md:text-5xl font-black text-primary font-sans mb-2">
        {count.toLocaleString()}{suffix}
      </div>
      <div className="text-[10px] uppercase tracking-widest text-white/40">{label}</div>
    </div>
  );
}
