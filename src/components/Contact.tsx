import { motion } from 'motion/react';
import { MapPin, Instagram, Mail, Phone, Send } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-[#061026] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-tamil text-4xl md:text-5xl font-bold text-cream mb-4">தொடர்பு | Contact</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 items-stretch">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-5/12"
          >
            <div className="bg-transparent p-8 md:p-10 rounded-sm shadow-2xl h-full border border-white/5 flex flex-col justify-between relative overflow-hidden group">
               {/* Traditional Arch Motif inside Contact Card */}
               <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-24 bg-secondary rounded-b-full opacity-10 group-hover:opacity-20 transition-opacity"></div>
               
              <div>
                <h3 className="font-tamil text-2xl font-bold text-primary mb-6 relative z-10 text-center uppercase tracking-widest">தொடர்பு கொள்க</h3>
                <p className="text-white/60 mb-10 leading-relaxed font-light text-center relative z-10">
                  "The office of Bussy Anand maintains a direct line of communication with citizens and supporters."
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full text-primary border border-primary/20">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Office Locations</h4>
                      <p className="text-cream font-medium leading-relaxed mt-1">Puducherry & Chennai,<br />Tamil Nadu, India</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full text-primary border border-primary/20">
                      <Instagram className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Instagram</h4>
                      <a href="#" className="text-primary font-bold hover:text-white transition-colors mt-1 inline-block">@bussyanandoffl</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full text-primary border border-primary/20">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Email</h4>
                      <a href="#" className="text-primary font-bold hover:text-white transition-colors mt-1 inline-block">office@bussynanand.com</a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-12 pt-6 border-t border-white/5 flex justify-center gap-4">
                 <button className="w-12 h-12 bg-dark rounded-full flex justify-center items-center text-primary border border-primary/30 hover:bg-primary hover:text-dark transition-colors cursor-pointer">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                 </button>
                 <button className="w-12 h-12 bg-dark rounded-full flex justify-center items-center text-primary border border-primary/30 hover:bg-primary hover:text-dark transition-colors cursor-pointer">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                 </button>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-7/12"
          >
            <div className="bg-transparent p-8 md:p-10 rounded-sm shadow-xl border border-white/5 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full pointer-events-none"></div>
              <h3 className="text-xl font-bold text-cream mb-8 uppercase tracking-widest text-center md:text-left">Send a Message</h3>
              <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest font-bold text-white/50 mb-2">Your Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 bg-dark border border-white/10 rounded-sm text-cream focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all placeholder:text-white/20"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest font-bold text-white/50 mb-2">Email Address</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-3 bg-dark border border-white/10 rounded-sm text-cream focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all placeholder:text-white/20"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-widest font-bold text-white/50 mb-2">Message</label>
                  <textarea 
                    rows={5}
                    className="w-full px-4 py-3 bg-dark border border-white/10 rounded-sm text-cream focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all resize-none placeholder:text-white/20"
                    placeholder="How can we help?"
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-primary text-dark hover:bg-accent px-8 py-4 rounded-sm font-bold text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-2 group relative overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Send Message
                    <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </span>
                </button>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
