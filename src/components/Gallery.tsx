import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ZoomIn } from 'lucide-react';

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedImage]);

  const images = [
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Bussy_Anand_MLA.jpg",
      alt: "Campaigning in T. Nagar",
      ta: "தி. நகர் தேர்தல் பிரச்சாரம்",
      en: "T. Nagar Election Campaign"
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Bussy_Anand.jpg/800px-Bussy_Anand.jpg",
      alt: "Minister Swearing-in Ceremony",
      ta: "அமைச்சராக பதவியேற்பு",
      en: "Swearing-in as Minister"
    },
    {
      src: "https://i.ibb.co/TM8dfcqW/Bussy-Remove-BG.png",
      alt: "Official Presidential Portrait",
      ta: "அதிகாரப்பூர்வ புகைப்படம்",
      en: "Official State Portrait"
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Bussy_Anand.jpg/640px-Bussy_Anand.jpg",
      alt: "Constituency Grievance Meeting",
      ta: "தொகுதி மக்கள் சந்திப்பு",
      en: "Public Grievance Redressal"
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Bussy_Anand_MLA.jpg",
      alt: "Inspecting Monsoon Relief",
      ta: "நிவாரண பணிகள் ஆய்வு",
      en: "Monsoon Relief Inspection"
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Bussy_Anand.jpg/400px-Bussy_Anand.jpg",
      alt: "Legislative Assembly Session",
      ta: "சட்டமன்ற நிகழ்வுகள்",
      en: "At the Legislative Assembly"
    }
  ];

  return (
    <section id="gallery" className="py-24 bg-dark text-cream relative border-t border-white/5">
      <div className="absolute inset-0 bg-terracotta opacity-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-tamil text-4xl md:text-5xl font-bold text-cream mb-4">புகைப்படங்கள் | Gallery</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group overflow-hidden rounded-sm aspect-[4/3] cursor-pointer bg-dark border border-white/10 hover:border-primary/50 transition-all shadow-lg"
              onClick={() => setSelectedImage(img.src)}
            >
              <img 
                src={img.src} 
                alt={img.alt} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter saturate-50 group-hover:saturate-100"
                onError={(e) => {
                  e.currentTarget.src = `https://ui-avatars.com/api/?name=BA&size=800&background=0D1B3E&color=E8A020&font-size=0.3`;
                }}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <ZoomIn className="w-8 h-8 text-primary mb-2 self-end translate-y-4 group-hover:translate-y-0 transition-transform duration-300" />
                <h4 className="font-tamil text-2xl font-bold text-accent translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">{img.ta}</h4>
                <p className="text-white font-medium translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">{img.en}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 md:p-8 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-10 h-10" />
            </button>
            <motion.img 
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              src={selectedImage} 
              alt="Expanded view" 
              className="max-w-full max-h-full object-contain rounded-xl shadow-2xl border border-white/10"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
