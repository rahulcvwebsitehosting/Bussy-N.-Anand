import { Flag } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#061026] text-cream relative pt-20 pb-8 overflow-hidden border-t border-white/5">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>

      {/* Background Watermark */}
      <div className="absolute bottom-0 right-0 opacity-[0.03] pointer-events-none transform translate-y-12 translate-x-12">
        <svg fill="currentColor" viewBox="0 0 100 100" className="w-[400px] h-[400px]">
          <path d="M50 10c-3 0-5 2-5 5s2 5 5 5 5-2 5-5-2-5-5-5zm-5 15c-15 4-22 17-23 30 0 3 5 4 5 1s1-22 18-24v50h10V27c17 2 18 21 18 24 0 3 5 2 5-1-1-13-8-26-23-30z"/>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                <Flag className="w-5 h-5 text-primary animate-wave" />
              </div>
              <span className="font-sans text-xl tracking-tight font-bold text-primary">
                BUSSY N. ANAND
              </span>
            </div>
            <p className="text-white/60 leading-relaxed mb-6 max-w-md font-light">
              General Secretary, Tamilaga Vettri Kazhagam. Dedicated to the progress and prosperity of Tamil Nadu and Puducherry through transparent governance and social justice.
            </p>
            <p className="font-tamil text-xl text-cream font-medium italic">
              "பொதுமக்கள் சேவையே எங்கள் லட்சியம்"
            </p>
            <p className="text-[10px] uppercase tracking-[0.2em] text-primary mt-2">Public Service is our Goal</p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 border-b border-white/10 pb-2 inline-block">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'About', 'Journey', 'Achievements', 'TVK', 'Gallery'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(' ', '')}`} className="text-gray-400 hover:text-primary transition-colors flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-600 group-hover:bg-primary transition-colors"></span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 border-b border-white/10 pb-2 inline-block">Connect</h4>
            <ul className="space-y-4">
              <li>
                <a href="#" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 hover:border-primary hover:bg-primary/10 transition-all">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                  </div>
                  <span>@bussyanandoffl</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 hover:border-primary hover:bg-primary/10 transition-all">
                    <Flag className="w-4 h-4" />
                  </div>
                  <span>TVK Official</span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 text-center md:flex md:justify-between md:items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} bussynanand.com. All rights reserved.
          </p>
          <div className="flex justify-center gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
