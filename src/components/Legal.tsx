import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: React.ReactNode;
}

export function LegalModal({ isOpen, onClose, title, content }: LegalModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-dark/95 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-4xl max-h-[80vh] bg-secondary border border-white/10 rounded-sm shadow-2xl overflow-hidden flex flex-col"
          >
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <h2 className="text-xl font-bold text-cream uppercase tracking-widest">{title}</h2>
              <button 
                onClick={onClose}
                className="p-2 text-white/50 hover:text-primary transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="p-8 overflow-y-auto text-white/70 font-light leading-relaxed space-y-6 custom-scrollbar">
              {content}
            </div>
            <div className="p-6 border-t border-white/10 flex justify-end">
              <button 
                onClick={onClose}
                className="px-6 py-2 bg-primary text-dark font-bold text-[10px] uppercase tracking-widest rounded-sm hover:bg-cream transition-colors"
              >
                Close
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

export const PrivacyContent = () => (
  <div className="space-y-4 text-sm">
    <p className="text-primary font-bold">Last Updated: May 10, 2026</p>
    <section>
      <h3 className="text-cream font-bold uppercase tracking-wider mb-2">1. INTRODUCTION</h3>
      <p>This Privacy Policy applies to the Site, an independent digital initiative created for informational purposes regarding Shri Bussy N. Anand, Minister of Tamil Nadu and MLA for Thiyagarayanagar (T. Nagar) constituency. This Site is NOT the official website of the Government of Tamil Nadu, Tamilaga Vettri Kazhagam (TVK), or Shri Bussy N. Anand.</p>
      <p>By using this Site, you agree to the collection and use of information in accordance with this policy. This policy is designed to comply with the Information Technology Act, 2000 and the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011.</p>
    </section>
    <section>
      <h3 className="text-cream font-bold uppercase tracking-wider mb-2">2. INFORMATION WE COLLECT</h3>
      <p>We may collect the following types of information:</p>
      <ul className="list-disc pl-5 space-y-1">
        <li>Information You Provide Directly: Name, phone number, and email address (via the grievance/contact form), Ward/area details within T. Nagar constituency, Nature of grievance or feedback submitted.</li>
        <li>Automatically Collected Information: IP address, Browser type and version, Device information, Pages visited and time spent, Referring website.</li>
      </ul>
    </section>
    <section>
      <h3 className="text-cream font-bold uppercase tracking-wider mb-2">3. HOW WE USE YOUR INFORMATION</h3>
      <p>We use the information we collect to:</p>
      <ul className="list-disc pl-5 space-y-1">
        <li>Forward constituency grievances to the relevant MLA office</li>
        <li>Respond to inquiries submitted through the contact form</li>
        <li>Improve website functionality and user experience</li>
        <li>Analyze traffic patterns using aggregated, non-identifiable data</li>
      </ul>
    </section>
    <section>
      <h3 className="text-cream font-bold uppercase tracking-wider mb-2">4. DATA HOSTING AND TRANSFER</h3>
      <p>This Site is hosted on global infrastructure. Your data may be processed and stored on servers located outside India. By using this Site, you consent to this transfer.</p>
    </section>
    <section>
      <h3 className="text-cream font-bold uppercase tracking-wider mb-2">5. SHARING OF INFORMATION</h3>
      <p>We do NOT sell, rent, or trade your personal information. We may share information only with the MLA office staff for grievance redressal or when required by law.</p>
    </section>
    <section>
      <h3 className="text-cream font-bold uppercase tracking-wider mb-2">11. CONTACT US</h3>
      <p>For privacy-related queries or data removal requests: Email: rahulcvfiitjee@gmail.com</p>
    </section>
  </div>
);

export const TermsContent = () => (
  <div className="space-y-4 text-sm">
    <p className="text-primary font-bold">Last Updated: May 10, 2026</p>
    <section>
      <h3 className="text-cream font-bold uppercase tracking-wider mb-2">1. ABOUT THIS SITE</h3>
      <p>This Site is an independent, non-official digital initiative created for informational and educational purposes. It is NOT affiliated with, endorsed by, or operated by the Government of Tamil Nadu, Tamilaga Vettri Kazhagam (TVK), or Shri Bussy N. Anand.</p>
    </section>
    <section>
      <h3 className="text-cream font-bold uppercase tracking-wider mb-2">2. ACCEPTANCE OF TERMS</h3>
      <p>By accessing or using this Site, you agree to be bound by these Terms. If you do not agree, please do not use the Site.</p>
    </section>
    <section>
      <h3 className="text-cream font-bold uppercase tracking-wider mb-2">4. ACCURACY OF INFORMATION</h3>
      <p>While we strive to ensure accuracy, the information on this Site is provided "as is" without warranties of any kind. Political positions, ministerial portfolios, and constituency details may change.</p>
    </section>
    <section>
      <h3 className="text-cream font-bold uppercase tracking-wider mb-2">5. GRIEVANCE SUBMISSION</h3>
      <p>The contact/grievance form is provided as a convenience to constituents. Submission of a grievance does NOT guarantee response from the MLA office or resolution of the issue.</p>
    </section>
    <section>
      <h3 className="text-cream font-bold uppercase tracking-wider mb-2">10. GOVERNING LAW</h3>
      <p>These Terms shall be governed by and construed in accordance with the laws of India. Any dispute shall be subject to the exclusive jurisdiction of the courts in Chennai, Tamil Nadu.</p>
    </section>
    <section>
      <h3 className="text-cream font-bold uppercase tracking-wider mb-2">12. CONTACT</h3>
      <p>For questions about these Terms: Email: rahulcvfiitjee@gmail.com</p>
    </section>
  </div>
);
