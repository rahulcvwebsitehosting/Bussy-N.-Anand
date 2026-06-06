import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Mail, Award, Navigation, Send, Info, ChevronRight } from 'lucide-react';

interface WardDetail {
  id: string;
  nameEn: string;
  nameTa: string;
  keySectorsEn: string;
  keySectorsTa: string;
  officerEn: string;
  officerTa: string;
  email: string;
  officeEn: string;
  officeTa: string;
  boundaryEn: string;
  boundaryTa: string;
  mapQueryUrl: string;
  contactSelectValue: string;
}

const WARD_DATA: WardDetail[] = [
  {
    id: '117',
    nameEn: 'T. Nagar North (Ward 117)',
    nameTa: 'தியாகராய நகர் வடக்கு (வார்டு 117)',
    keySectorsEn: 'Usman Road North, Kamarajar Illam, Habibullah Road, GN Chetty Road',
    keySectorsTa: 'உஸ்மான் சாலை வடக்கு, காமராஜர் இல்லம், ஹபிபுல்லா சாலை, ஜி.என் செட்டி சாலை',
    officerEn: 'Er. A. Rajendran (Assistant Engineer)',
    officerTa: 'இன்ஜினியர் ஏ. ராஜேந்திரன் (உதவி பொறியாளர்)',
    email: 'ward117@chennaicorporation.gov.in',
    officeEn: 'GCC Division 117 Office, Dr. Nair Road, T. Nagar, Chennai - 600017',
    officeTa: 'மாநகராட்சி 117-வது வார்டு அலுவலகம், டாக்டர் நாயர் சாலை, தி. நகர் - 600017',
    boundaryEn: 'North by Habibullah Road, East by Mount Road, South by Maharajapuram Santhanam Salai, West by Usman Road.',
    boundaryTa: 'வடக்கில் ஹபிபுல்லா சாலை, கிழக்கில் மவுண்ட் ரோடு, தெற்கில் மகாராஜபுரம் சந்தானம் சாலை, மேற்கில் உஸ்மான் சாலை.',
    mapQueryUrl: 'https://maps.google.com/maps?q=Greater+Chennai+Corporation+Division+117+Office+Chennai&t=&z=15&ie=UTF8&iwloc=&output=embed',
    contactSelectValue: 'T. Nagar North (Ward 117)'
  },
  {
    id: '134',
    nameEn: 'West Mambalam North (Ward 134)',
    nameTa: 'மேற்கு மாம்பலம் வடக்கு (வார்டு 134)',
    keySectorsEn: 'Lake View Road, Postal Colony, Jubilee Road, Station Road (North)',
    keySectorsTa: 'லேக் வியூ சாலை, போஸ்டல் காலனி, ஜூப்ளி சாலை, நிலைய வீதி (வடக்கு)',
    officerEn: 'Er. M. Senthamizh (Assistant Engineer)',
    officerTa: 'இன்ஜினியர் எம். செந்தமிழ் (உதவி பொறியாளர்)',
    email: 'ward134@chennaicorporation.gov.in',
    officeEn: 'GCC Division 134 Office, Station Road, West Mambalam, Chennai - 600033',
    officeTa: 'மாநகராட்சி 134-வது வார்டு அலுவலகம், ஸ்டேஷன் சாலை, மேற்கு மாம்பலம் - 600033',
    boundaryEn: 'North by Doraisamy Subway / Rangarajapuram, East by Suburban Railway Line, South by Arya Gowda Road, West by Ashok Nagar.',
    boundaryTa: 'வடக்கில் துரைசாமி சுரங்கப்பாதை / ரங்கராஜபுரம், கிழக்கில் புறநகர் இரயில் பாதை, தெற்கில் ஆர்யா கவுடா சாலை, மேற்கில் அசோக் நகர்.',
    mapQueryUrl: 'https://maps.google.com/maps?q=West+Mambalam+Post+Office+Chennai&t=&z=15&ie=UTF8&iwloc=&output=embed',
    contactSelectValue: 'West Mambalam North (Ward 134)'
  },
  {
    id: '135',
    nameEn: 'Kodambakkam South (Ward 135)',
    nameTa: 'கோடம்பாக்கம் தெற்கு (வார்டு 135)',
    keySectorsEn: 'Gill Nagar, Choolaimedu (South), Puliyur, Station Road (West)',
    keySectorsTa: 'கில் நகர், சூளைமேடு (தெற்கு), புலியூர், ஸ்டேஷன் சாலை (மேற்கு)',
    officerEn: 'Er. S. Pandian (Assistant Engineer)',
    officerTa: 'இன்ஜினியர் எஸ். பாண்டியன் (உதவி பொறியாளர்)',
    email: 'ward135@chennaicorporation.gov.in',
    officeEn: 'GCC Division 135 Office, Gill Nagar Park Adjacent, Chennai - 600094',
    officeTa: 'மாநகராட்சி 135-வது வார்டு அலுவலகம், கில் நகர் பூங்கா அருகில் - 600094',
    boundaryEn: 'North by Nelson Manickam Road, East by Gill Nagar Canal, South by Kodambakkam High Road, West by Arcot Road.',
    boundaryTa: 'வடக்கில் நெல்சன் மாணிக்கம் சாலை, கிழக்கில் கில் நகர் கால்வாய், தெற்கில் கோடம்பாக்கம் நெடுஞ்சாலை, மேற்கில் ஆற்காடு சாலை.',
    mapQueryUrl: 'https://maps.google.com/maps?q=Gill+Nagar+Park+Chennai&t=&z=15&ie=UTF8&iwloc=&output=embed',
    contactSelectValue: 'Kodambakkam South (Ward 135)'
  },
  {
    id: '136',
    nameEn: 'Pondy Bazaar (Ward 136)',
    nameTa: 'பாண்டி பஜார் (வார்டு 136)',
    keySectorsEn: 'Sir Thyagaraya Road, Panagal Park, Pondy Bazaar Pedestrian Plaza, Sivagnanam Road',
    keySectorsTa: 'சர் தியாகராயா சாலை, பனகல் பூங்கா, பாண்டி பஜார் நடைபாதை வணிக வளாகம், சிவஞானம் சாலை',
    officerEn: 'Er. R. Karthikeyan (Assistant Engineer)',
    officerTa: 'இன்ஜினியர் ஆர். கார்த்திகேயன் (உதவி பொறியாளர்)',
    email: 'ward136@chennaicorporation.gov.in',
    officeEn: 'GCC Division 136 Office, Sir Thyagaraya Road, T. Nagar, Chennai - 600017',
    officeTa: 'மாநகராட்சி 136-வது வார்டு அலுவலகம், சர் தியாகராயா சாலை, தி. நகர் - 600017',
    boundaryEn: 'North by Thanikachalam Road, East by Usman Road, South by Venkatnarayana Road, West by South Boag Road.',
    boundaryTa: 'வடக்கில் தணிகாசலம் சாலை, கிழக்கில் உஸ்மான் சாலை, தெற்கில் வெங்கட்நாராயணா சாலை, மேற்கில் தெற்கு போக் சாலை.',
    mapQueryUrl: 'https://maps.google.com/maps?q=Panagal+Park+Chennai&t=&z=15&ie=UTF8&iwloc=&output=embed',
    contactSelectValue: 'Pondy Bazaar (Ward 136)'
  },
  {
    id: '140',
    nameEn: 'West Mambalam South (Ward 140)',
    nameTa: 'மேற்கு மாம்பலம் தெற்கு (வார்டு 140)',
    keySectorsEn: 'Arya Gowda Road, Brindavan Street, Govindan Road, K.R. Kovil Street',
    keySectorsTa: 'ஆர்யா கவுடா சாலை, பிருந்தாவனம் தெரு, கோவிந்தன் சாலை, கே.ஆர். கோவில் தெரு',
    officerEn: 'Er. K. Vignesh (Assistant Engineer)',
    officerTa: 'இன்ஜினியர் கே. விக்னேஷ் (உதவி பொறியாளர்)',
    email: 'ward140@chennaicorporation.gov.in',
    officeEn: 'GCC Division 140 Office, Arya Gowda Road, West Mambalam, Chennai - 600033',
    officeTa: 'மாநகராட்சி 140-வது வார்டு அலுவலகம், ஆர்யா கவுடா சாலை, மேற்கு மாம்பலம் - 600033',
    boundaryEn: 'North by Arya Gowda Road, East by Suburban Railway Line, South by Canal Bank Road, West by Jafferkhanpet boundary.',
    boundaryTa: 'வடக்கில் ஆர்யா கவுடா சாலை, கிழக்கில் புறநகர் ரயில் பாதை, தெற்கில் கால்வாய் கரை சாலை, மேற்கில் ஜாபர்கான்பேட்டை எல்லை.',
    mapQueryUrl: 'https://maps.google.com/maps?q=GCC+Division+140+Office+Arya+Gowda+Road+West+Mambalam+Chennai&t=&z=15&ie=UTF8&iwloc=&output=embed',
    contactSelectValue: 'West Mambalam South (Ward 140)'
  },
  {
    id: '141',
    nameEn: 'T. Nagar South (Ward 141)',
    nameTa: 'தியாகராய நகர் தெற்கு (வார்டு 141)',
    keySectorsEn: 'Burkit Road, South Boag Road, CIT Nagar West, Kannammapet',
    keySectorsTa: 'பர்கிட் சாலை, தெற்கு போக் சாலை, சி.ஐ.டி நகர் மேற்கு, கண்ணம்மாபேட்டை',
    officerEn: 'Er. V. Arunkumar (Assistant Engineer)',
    officerTa: 'இன்ஜினியர் வி. அருண்குமார் (உதவி பொறியாளர்)',
    email: 'ward141@chennaicorporation.gov.in',
    officeEn: 'GCC Division 141 Office, CIT Nagar Third Main Road, Chennai - 600035',
    officeTa: 'மாநகராட்சி 141-வது வார்டு அலுவலகம், சி.ஐ.டி நகர் 3-வது பிரதான சாலை - 600035',
    boundaryEn: 'North by Venkatnarayana Road, East by Mount Road / Nandanam, South by South Canal Road, West by Suburban Railway Line.',
    boundaryTa: 'வடக்கில் வெங்கட்நாராயணா சாலை, கிழக்கில் மவுண்ட் ரோடு / நந்தனம், தெற்கில் தெற்கு கால்வாய் சாலை, மேற்கில் புறநகர் ரயில் பாதை.',
    mapQueryUrl: 'https://maps.google.com/maps?q=CIT+Nagar+Playground+Chennai&t=&z=15&ie=UTF8&iwloc=&output=embed',
    contactSelectValue: 'T. Nagar South (Ward 141)'
  },
  {
    id: '142',
    nameEn: 'CIT Nagar (Ward 142)',
    nameTa: 'சி.ஐ.டி நகர் (வார்டு 142)',
    keySectorsEn: 'CIT Nagar East, Nandanam, Todd Hunter Nagar, Salai Street',
    keySectorsTa: 'சி.ஐ.டி நகர் கிழக்கு, நந்தனம், டாட் ஹண்டர் நகர், சாலை தெரு',
    officerEn: 'Er. P. Selvaraj (Assistant Engineer)',
    officerTa: 'இன்ஜினியர் பி. செல்வராஜ் (உதவி பொறியாளர்)',
    email: 'ward142@chennaicorporation.gov.in',
    officeEn: 'GCC Division 142 Office, Nandanam Extension Main Road, Chennai - 600035',
    officeTa: 'மாநகராட்சி 142-வது வார்டு அலுவலகம், நந்தனம் எக்ஸ்டென்ஷன் பிரதான சாலை - 600035',
    boundaryEn: 'North by Nandanam Extension, East by Chamiers Road, South by Adyar River Boundary, West by CIT Nagar West Link Road.',
    boundaryTa: 'வடக்கில் நந்தனம் எக்ஸ்டென்ஷன், கிழக்கில் சாமியர்ஸ் சாலை, தெற்கில் அடையாறு நதி எல்லை, மேற்கில் சி.ஐ.டி நகர் மேற்கு இணைப்பு சாலை.',
    mapQueryUrl: 'https://maps.google.com/maps?q=Nandanam+Signal+Chennai&t=&z=15&ie=UTF8&iwloc=&output=embed',
    contactSelectValue: 'CIT Nagar (Ward 142)'
  }
];

export function WardInteractiveMap() {
  const [selectedWard, setSelectedWard] = useState<WardDetail>(WARD_DATA[4]); // Defaults to Ward 140 (West Mambalam South)
  const [lang, setLang] = useState<'ta' | 'en'>('en');

  const handleApplyGrievance = () => {
    // Dispatch selected ward to contact form listener
    window.dispatchEvent(
      new CustomEvent('select-ward', { detail: selectedWard.contactSelectValue })
    );
    // Smooth scroll down to contact section
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div id="ward-map" className="w-full bg-secondary py-20 border-t border-b border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block with Language Toggle */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
          <div>
            <span className="text-primary font-bold text-xs uppercase tracking-widest block mb-2">Interconnected Governance</span>
            <h2 className="font-tamil text-3xl md:text-4xl font-bold text-cream">
              {lang === 'ta' ? 'அதிநவீன வார்டு வரைபடம் மற்றும் அலுவலர்கள்' : 'Ward-by-Ward Interactive Index'}
            </h2>
            <p className="text-white/50 text-xs mt-2 max-w-xl font-light">
              Select any electoral division under T. Nagar constituency to view precise location highlights, boundary descriptions, and local Greater Chennai Corporation (GCC) officer emails.
            </p>
          </div>
          <div className="flex bg-dark border border-white/10 p-1 rounded-sm">
            <button 
              onClick={() => setLang('ta')}
              className={`px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest transition-all rounded-sm ${lang === 'ta' ? 'bg-primary text-dark' : 'text-cream/50 hover:text-cream'}`}
            >
              தமிழ்
            </button>
            <button 
              onClick={() => setLang('en')}
              className={`px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest transition-all rounded-sm ${lang === 'en' ? 'bg-primary text-dark' : 'text-cream/50 hover:text-cream'}`}
            >
              ENG
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Ward Selector Panel */}
          <div className="lg:col-span-4 flex flex-col gap-3 lg:max-h-[550px] lg:overflow-y-auto pr-2 lg:custom-scrollbar">
            {WARD_DATA.map((ward) => {
              const isSelected = selectedWard.id === ward.id;
              return (
                <button
                  key={ward.id}
                  onClick={() => setSelectedWard(ward)}
                  className={`w-full text-left p-4 rounded-sm border transition-all duration-300 flex items-center justify-between group ${
                    isSelected 
                      ? 'bg-primary/10 border-primary text-cream shadow-lg shadow-primary/5' 
                      : 'bg-dark/40 border-white/5 hover:border-white/20 text-cream/70 hover:text-cream hover:bg-dark/80'
                  }`}
                >
                  <div className="flex items-start gap-3 min-w-0">
                    <div className={`mt-0.5 w-6 h-6 rounded-sm flex items-center justify-center font-bold text-xs shrink-0 ${
                      isSelected ? 'bg-primary text-dark' : 'bg-white/10 text-white/60'
                    }`}>
                      {ward.id}
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-bold tracking-wide uppercase truncate">
                        {lang === 'ta' ? `வட்டம் ${ward.id}` : `Ward ${ward.id}`}
                      </p>
                      <p className="text-[11px] text-white/40 mt-1 line-clamp-1 font-light">
                        {lang === 'ta' ? ward.keySectorsTa : ward.keySectorsEn}
                      </p>
                    </div>
                  </div>
                  <ChevronRight className={`w-4 h-4 transition-transform duration-300 ${
                    isSelected ? 'text-primary translate-x-1' : 'text-white/20 group-hover:translate-x-1 group-hover:text-white/50'
                  }`} />
                </button>
              );
            })}
          </div>

          {/* Map Display & Officer Info Pane */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6 bg-dark/60 border border-white/5 p-6 rounded-sm relative overflow-hidden shadow-2xl">
            
            {/* Live Map Preview via Iframe */}
            <div className="h-[250px] md:h-auto rounded-sm overflow-hidden border border-white/5 relative bg-secondary group">
              {/* iOS / Safari Fallback & Map Background Placeholder */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-[#1A0303] z-0">
                <MapPin className="w-8 h-8 text-primary/30 mb-2 animate-pulse" />
                <p className="text-white/60 text-xs font-bold uppercase tracking-wider">Ward {selectedWard.id} Map</p>
                <p className="text-white/30 text-[10px] max-w-[200px] mt-1 mx-auto leading-relaxed">
                  Interactive preview is loading. If blocked by browser settings, click "Open Map ↗" below.
                </p>
              </div>

              <div className="absolute top-3 left-3 bg-dark/90 backdrop-blur-md px-3 py-1.5 rounded-sm border border-primary/20 z-10 flex items-center gap-1.5 shadow-lg pointer-events-none">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="text-[9px] font-bold uppercase tracking-widest text-primary">Ward {selectedWard.id} Map Preview</span>
              </div>

              <a 
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(selectedWard.officeEn)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-3 right-3 bg-dark/90 backdrop-blur-md px-3 py-1.5 rounded-sm border border-primary/20 z-20 flex items-center gap-1.5 text-[9px] font-bold text-cream hover:text-primary transition-colors cursor-pointer shadow-lg hover:border-primary/50"
              >
                Open Map ↗
              </a>
              
              <AnimatePresence mode="wait">
                <motion.iframe
                  key={selectedWard.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.8 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  scrolling="no"
                  src={selectedWard.mapQueryUrl}
                  loading="lazy"
                  allow="fullscreen; geolocation"
                  sandbox="allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox allow-forms"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale invert opacity-60 contrast-125 hover:opacity-80 transition-opacity duration-300 h-full w-full relative z-10"
                  title={`Google Maps preview for T. Nagar Ward ${selectedWard.id}`}
                >
                  <p className="text-xs text-center text-white/50 p-6">
                    If map preview fails to load, you can{' '}
                    <a 
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(selectedWard.officeEn)}`} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-primary hover:underline hover:text-accent font-bold"
                    >
                      click here to view the map on Google Maps
                    </a>
                    .
                  </p>
                </motion.iframe>
              </AnimatePresence>
            </div>

            {/* Officer details / metadata */}
            <div className="flex flex-col justify-between space-y-6">
              <div className="space-y-5">
                
                {/* Ward Title & Sector highlights */}
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Navigation className="text-primary w-4 h-4" />
                    <span className="text-primary font-bold text-[10px] uppercase tracking-widest">Electoral Territory</span>
                  </div>
                  <h3 className="text-xl font-bold text-cream tracking-tight">
                    {lang === 'ta' ? selectedWard.nameTa : selectedWard.nameEn}
                  </h3>
                  <p className="text-white/40 text-[11px] mt-1 font-mono uppercase tracking-wider">
                    {lang === 'ta' ? 'முக்கிய பகுதிகள்:' : 'Key Sectors:'} <span className="text-white/75 font-sans lowercase first-letter:uppercase">{lang === 'ta' ? selectedWard.keySectorsTa : selectedWard.keySectorsEn}</span>
                  </p>
                </div>

                <div className="w-full h-[1px] bg-white/5"></div>

                {/* Boundaries Description */}
                <div className="bg-white/[0.02] border border-white/5 p-3 rounded-sm">
                  <h4 className="flex items-center gap-1.5 text-white/50 text-[10px] uppercase tracking-widest font-bold mb-1.5">
                    <Info className="w-3.5 h-3.5 text-primary/70" />
                    {lang === 'ta' ? 'புவியியல் எல்லைகள்' : 'Geographical Boundaries'}
                  </h4>
                  <p className="text-white/70 text-xs leading-relaxed font-light">
                    {lang === 'ta' ? selectedWard.boundaryTa : selectedWard.boundaryEn}
                  </p>
                </div>

                {/* Local Representative/officer Details */}
                <div className="space-y-3">
                  <h4 className="text-white/40 text-[10px] uppercase tracking-widest font-bold">
                    {lang === 'ta' ? 'உள்ளாட்சி முகவரி & தொடர்பு' : 'Local Administration Contacts'}
                  </h4>
                  
                  {/* Officer Designation */}
                  <div className="flex items-start gap-2.5">
                    <Award className="text-primary w-4 h-4 mt-0.5 shrink-0" />
                    <div>
                      <p className="text-[10px] text-white/30 uppercase tracking-widest font-bold">Ward Officer / AE</p>
                      <p className="text-sm font-bold text-cream">
                        {lang === 'ta' ? selectedWard.officerTa : selectedWard.officerEn}
                      </p>
                    </div>
                  </div>

                  {/* Mail address */}
                  <div className="flex items-start gap-2.5">
                    <Mail className="text-primary w-4 h-4 mt-0.5 shrink-0" />
                    <div>
                      <p className="text-[10px] text-white/30 uppercase tracking-widest font-bold">Local GCC Email</p>
                      <a href={`mailto:${selectedWard.email}`} className="text-xs text-primary hover:underline font-light">
                        {selectedWard.email}
                      </a>
                    </div>
                  </div>

                  {/* Office address */}
                  <div className="flex items-start gap-2.5">
                    <MapPin className="text-primary w-4 h-4 mt-0.5 shrink-0" />
                    <div>
                      <p className="text-[10px] text-white/30 uppercase tracking-widest font-bold">Grievance Office</p>
                      <p className="text-xs text-white/70 leading-relaxed font-light">
                        {lang === 'ta' ? selectedWard.officeTa : selectedWard.officeEn}
                      </p>
                    </div>
                  </div>

                </div>

              </div>

              {/* Seamless Action Link */}
              <button
                onClick={handleApplyGrievance}
                className="w-full bg-primary text-dark hover:bg-cream active:scale-95 transition-all py-3.5 text-[10px] font-bold uppercase tracking-widest rounded-sm flex items-center justify-center gap-2 shadow-lg"
              >
                <Send className="w-3.5 h-3.5" />
                {lang === 'ta' ? 'இவ்வார்டுக்கு புகார் மனு சமர்ப்பிக்கவும்' : 'Submit Grievance for this Ward'}
              </button>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
