import { motion } from 'motion/react';
import { Newspaper, Bell, Calendar, ArrowRight } from 'lucide-react';

export function Updates() {
  const news = [
    {
      date: "May 10, 2026",
      title: "Sworn in as Minister for Development & Public Welfare",
      desc: "Following the historic victory in T. Nagar, Hon. Bussy N. Anand was sworn in as one of the 9 key ministers in the new Tamil Nadu cabinet.",
      category: "Cabinet Update"
    },
    {
      date: "May 8, 2026",
      title: "Constituency Grievance Meet Scheduled",
      desc: "The first post-election grievance redressal session for T. Nagar residents will be held at the South Boag Road office on May 15.",
      category: "Constituency"
    },
    {
      date: "May 5, 2026",
      title: "Flood Mitigation Project Phase 1 Approval",
      desc: "Minister-designate Bussy Anand reviewed and approved the urgent stormwater drain upgrades for West Mambalam ward.",
      category: "Infrastructure"
    }
  ];

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
            className="flex items-center gap-2 text-primary text-[10px] uppercase tracking-widest font-bold hover:underline"
          >
            Show All Press Releases <ArrowRight className="w-4 h-4" />
          </motion.button>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {news.map((item, index) => (
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
              <button className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/40 hover:text-primary transition-colors flex items-center gap-2">
                Learn More <ArrowRight className="w-3 h-3" />
              </button>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 bg-primary/5 border border-primary/20 p-8 rounded-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="bg-primary/20 p-4 rounded-full text-primary">
              <Bell className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <h4 className="text-cream font-bold">Subscribe to Updates</h4>
              <p className="text-white/40 text-[10px] uppercase tracking-widest">Get official press releases directly via WhatsApp/Email</p>
            </div>
          </div>
          <div className="flex w-full md:w-auto gap-2">
            <input 
              type="text" 
              placeholder="Your Phone / Email" 
              className="flex-grow md:w-64 bg-dark border border-white/10 px-4 py-3 text-cream text-sm focus:outline-none focus:ring-1 focus:ring-primary rounded-sm"
            />
            <button className="bg-primary text-dark font-bold px-6 py-3 text-[10px] uppercase tracking-widest rounded-sm hover:bg-cream transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
