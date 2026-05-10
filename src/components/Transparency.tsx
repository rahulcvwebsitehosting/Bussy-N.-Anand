import { motion } from 'motion/react';
import { Shield, Info, Gavel, Landmark } from 'lucide-react';

export function Transparency() {
  const cases = [
    { 
      case: "Karur Stampede (2025)", 
      details: "Following a tragic incident at a TVK rally, the CBI is investigating the circumstances. Hon. Bussy Anand was named in the FIR.", 
      status: "Investigation Pending" 
    },
    { 
      case: "Trichy Airport Case", 
      details: "Related to allegations of unlawful assembly and assault on a public servant.", 
      status: "Legal Proceedings Ongoing" 
    },
    { 
      case: "R1 Mambalam Case", 
      details: "Various charges related to political activities and demonstrations.", 
      status: "Pending" 
    }
  ];

  return (
    <section id="transparency" className="py-24 bg-[#061026] text-cream relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-bold text-xs uppercase tracking-[0.4em] mb-4 block">Compliance & Accountability</span>
          <h2 className="font-tamil text-4xl md:text-5xl font-bold text-cream mb-4">வெளிப்படைத்தன்மை | Transparency</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Legal Section */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3 mb-6">
              <Gavel className="text-primary w-6 h-6" />
              <h3 className="text-xl font-bold uppercase tracking-widest text-primary">Legal Standing</h3>
            </div>
            
            <div className="bg-dark/50 border border-white/10 rounded-sm overflow-hidden">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-white/5">
                    <th className="p-4 text-[10px] uppercase tracking-widest font-bold text-white/40">Case</th>
                    <th className="p-4 text-[10px] uppercase tracking-widest font-bold text-white/40">Status</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  {cases.map((c, idx) => (
                    <tr key={idx} className="border-t border-white/5 hover:bg-white/5 transition-colors">
                      <td className="p-4">
                        <span className="block font-bold text-cream mb-1">{c.case}</span>
                        <span className="block text-xs text-white/40 leading-relaxed">{c.details}</span>
                      </td>
                      <td className="p-4 align-top">
                        <span className="inline-block px-2 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest whitespace-nowrap">
                          {c.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="p-4 bg-primary/5 border-t border-white/10">
                <p className="text-xs text-cream/70 italic flex items-start gap-2">
                  <Info className="w-4 h-4 text-primary shrink-0" />
                  "Three cases are currently pending. I am fully cooperating with the judicial process and maintain absolute faith in the legal system of India."
                </p>
              </div>
            </div>
          </motion.div>

          {/* Financial & Integrity */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <Landmark className="text-primary w-6 h-6" />
              <h3 className="text-xl font-bold uppercase tracking-widest text-primary">Integrity & Assets</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-dark/30 border border-white/5 p-6 rounded-sm border-l-4 border-l-primary">
                <span className="block text-[10px] uppercase tracking-widest text-white/40 font-bold mb-2">Total Declared Assets</span>
                <span className="text-3xl font-bold text-cream">₹7.48 <span className="text-sm font-light text-white/50">Crore</span></span>
                <p className="mt-4 text-[10px] text-white/30 uppercase tracking-wider">As per EC Affidavit, 2026 Assembly Elections</p>
              </div>
              
              <div className="bg-dark/30 border border-white/5 p-6 rounded-sm border-l-4 border-l-primary">
                <span className="block text-[10px] uppercase tracking-widest text-white/40 font-bold mb-2">Commitment</span>
                <p className="text-sm text-cream/80 leading-relaxed font-light">
                  Dedicated to maintaining transparency in public life and providing the public with full access to legislative disclosures.
                </p>
              </div>
            </div>

            <div className="bg-primary/5 border border-primary/20 p-8 rounded-sm relative overflow-hidden group">
              <Shield className="absolute -bottom-8 -right-8 w-32 h-32 text-primary/10 group-hover:scale-110 transition-transform duration-500" />
              <h4 className="text-cream font-bold mb-4 flex items-center gap-2">
                <span className="w-8 h-[1px] bg-primary"></span>
                Public Service Pledge
              </h4>
              <p className="text-white/60 text-sm leading-relaxed font-light relative z-10">
                True leadership is built on trust. My commitment to the people of Tamil Nadu and Puducherry remains unshakable, through legal scrutiny and political challenges alike.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
