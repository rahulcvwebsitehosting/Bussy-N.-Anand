import { motion } from 'motion/react';
import { Calendar, User, MapPin, Award } from 'lucide-react';

export function About() {
  const bioFacts = [
    { icon: <Calendar />, label: "Born", value: "18 July 1964, Puducherry" },
    { icon: <Award />, label: "Cabinet Role", value: "Minister, Govt of Tamil Nadu" },
    { icon: <User />, label: "Education", value: "8th Std (Pass), Calve College (1981)" },
    { icon: <MapPin />, label: "Constituency", value: "T. Nagar (MLA 2026)" },
  ];

  const secondaryFacts = [
    { label: "Financial Transparency", value: "₹7.48 Crore — Election Commission Affidavit, 2026" },
    { label: "Early Career", value: "Real Estate & Printing Press" },
  ];

  return (
    <section id="about" className="py-24 bg-dark relative overflow-hidden border-t border-white/5">
      <div className="absolute top-0 left-0 w-full h-4 bg-gradient-to-b from-primary/10 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="font-tamil text-4xl md:text-5xl font-bold text-cream mb-2">பற்றி | About</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <motion.div 
            className="lg:w-5/12"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative p-4 md:p-8">
              <div className="absolute inset-0 border border-primary/30 rounded-t-[100px] opacity-30"></div>
              <div className="absolute inset-2 border-4 border-primary/10 rounded-t-[100px] z-10"></div>
              <img 
                src="https://raw.githubusercontent.com/rahulcvwebsitehosting/ImageStorage/main/BussyNAnand%20Images/BussyNew.avif" 
                alt="Bussy Anand Portrait" 
                className="relative z-20 rounded-t-[100px] w-full object-cover shadow-2xl shadow-primary/5 aspect-[3/4] filter grayscale hover:grayscale-0 transition-all duration-700"
                onError={(e) => {
                  e.currentTarget.src = 'https://ui-avatars.com/api/?name=BA&size=600&background=0D1B3E&color=E8A020';
                }}
              />
              <div className="absolute -bottom-6 -right-6 z-30 bg-primary text-dark p-6 rounded-sm shadow-2xl">
                <p className="font-tamil font-bold text-xl uppercase">மக்கள்<br/>தொண்டன்</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="lg:w-7/12 space-y-10"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-xl md:text-2xl text-white/70 leading-relaxed font-light">
              "Hon. Bussy N. Anand currently serves as a Minister in the Government of Tamil Nadu and the General Secretary of Tamizhaga Vetri Kazhagam (TVK). He earned the nickname 'Bussy' after his landmark 2006 election win from the Bussy constituency in Puducherry. Having previously served as an MLA for Puducherry, he now represents T. Nagar in Chennai following a decisive victory in the 2026 Assembly Elections."
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {bioFacts.map((fact, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + (index * 0.1) }}
                  className="bg-transparent p-6 rounded-sm border border-white/5 border-l-4 border-l-primary hover:bg-white/5 hover:border-white/10 transition-colors flex items-start gap-4 group"
                >
                  <div className="text-primary bg-primary/10 p-3 rounded-full group-hover:bg-primary/25 group-hover:text-primary transition-colors shrink-0">
                    {fact.icon}
                  </div>
                  <div>
                    <h4 className="text-[10px] text-white/40 font-bold uppercase tracking-widest">{fact.label}</h4>
                    <p className="text-cream font-medium text-sm">{fact.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              {secondaryFacts.map((fact, index) => (
                <div key={index} className="px-4 py-2 bg-white/5 border border-white/10 rounded-sm">
                  <span className="block text-[9px] text-white/40 uppercase font-bold tracking-[0.2em] mb-1">{fact.label}</span>
                  <span className="text-cream text-xs font-medium">{fact.value}</span>
                </div>
              ))}
            </div>

            <div className="relative bg-secondary p-8 md:p-10 rounded-sm border-l-4 border-accent shadow-2xl mt-8">
              <p className="relative z-10 text-[13px] md:text-sm italic text-cream leading-relaxed text-left">
                "To advocate for the unvoiced and establish a governance model rooted in social justice. TVK strives to empower every community with transparency, dignity, and economic resilience."
              </p>
              <p className="text-[10px] font-bold mt-4 text-accent uppercase tracking-widest">— OUR MISSION</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
