import { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: React.ReactNode;
}

export function LegalModal({ isOpen, onClose, title, content }: LegalModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

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
      <p>This Privacy Policy applies to the Site, an independent digital initiative created for informational purposes regarding Shri Bussy N. Anand, Minister for Rural Development, Panchayats & Irrigation of Tamil Nadu and MLA for Thiyagarayanagar (T. Nagar) constituency. This Site is NOT the official website of the Government of Tamil Nadu, Tamilaga Vettri Kazhagam (TVK), or Shri Bussy N. Anand.</p>
      <p>By using this Site, you agree to the collection and use of information in accordance with this policy. This policy is designed to comply with the Digital Personal Data Protection Act, 2023 (DPDP Act) and the Information Technology Act, 2000 of India.</p>
    </section>
    <section>
      <h3 className="text-cream font-bold uppercase tracking-wider mb-2">2. INFORMATION WE PROCESS</h3>
      <p>We process the following types of information:</p>
      <ul className="list-disc pl-5 space-y-1">
        <li><strong>Direct Communications (No Server Storage):</strong> When you click "Send Message", your name, email, selected ward, and message contents are formatted into a direct email message utilizing the <code>mailto:</code> protocol. These details are processed entirely on your local device and transmitted via your local mail client. Our website servers do not receive, store, or process your grievance message contents.</li>
        <li><strong>User-Initiated Ward Selections:</strong> Selections made within the interactive map are stored solely in the client-side browser memory for the current session.</li>
        <li><strong>Automatically Collected Telemetry:</strong> Non-identifiable aggregated metadata such as page views and browser types for optimization, with no individual tracking.</li>
      </ul>
    </section>
    <section>
      <h3 className="text-cream font-bold uppercase tracking-wider mb-2">3. RETENTION AND SECURITY POLICY</h3>
      <p>Since this website utilizes a client-side mailto protocol, we do not compile or maintain a database of personal data. Any correspondence received in our mailbox (<code>bussynanand.contact@gmail.com</code>) is retained only for the duration necessary to address your specific inquiry or forward it to constituency volunteers for grievance redressal. Correspondence is securely deleted once resolved or upon a request for erasure.</p>
    </section>
    <section>
      <h3 className="text-cream font-bold uppercase tracking-wider mb-2">4. DATA HOSTING AND TRANSFER</h3>
      <p>We do not store personal information on servers. Aggregated, non-identifiable telemetry data generated by static site visitors may be processed on global content delivery network infrastructure with high-grade security practices.</p>
    </section>
    <section>
      <h3 className="text-cream font-bold uppercase tracking-wider mb-2">5. YOUR RIGHTS UNDER DPDP ACT 2023</h3>
      <p>Indian residents have specific rights regarding their personal data, including: the right to withdraw consent; the right to access a summary of personal details processed; the right to request correction, completion, or erasure of personal correspondence; and the right to lodge a complaint with a Data Protection Officer or Grievance Officer at <code>bussynanand.contact@gmail.com</code>.</p>
    </section>
    <section>
      <h3 className="text-cream font-bold uppercase tracking-wider mb-2">6. CONTACT & DATA CONTROLLER</h3>
      <p>If you have questions, wish to exercise your rights, or request removal of historical correspondence, please contact the independent initiative volunteer coordinator at: <a href="mailto:bussynanand.contact@gmail.com" className="text-primary hover:underline">bussynanand.contact@gmail.com</a>.</p>
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
      <h3 className="text-cream font-bold uppercase tracking-wider mb-2">3. ACCURACY OF INFORMATION</h3>
      <p>While we strive to ensure accuracy, the information on this Site is provided "as is" without warranties of any kind. Political positions, ministerial portfolios, and constituency details may change.</p>
    </section>
    <section>
      <h3 className="text-cream font-bold uppercase tracking-wider mb-2">4. GRIEVANCE SUBMISSION</h3>
      <p>The contact/grievance form is provided as a convenience to constituents. Submission of a grievance does NOT guarantee response from the MLA office or resolution of the issue.</p>
    </section>
    <section>
      <h3 className="text-cream font-bold uppercase tracking-wider mb-2">5. GOVERNING LAW</h3>
      <p>These Terms shall be governed by and construed in accordance with the laws of India. Any dispute shall be subject to the exclusive jurisdiction of the courts in Chennai, Tamil Nadu.</p>
    </section>
    <section>
      <h3 className="text-cream font-bold uppercase tracking-wider mb-2">6. CONTACT</h3>
      <p>For questions about these Terms: Email: bussynanand.contact@gmail.com</p>
    </section>
  </div>
);
