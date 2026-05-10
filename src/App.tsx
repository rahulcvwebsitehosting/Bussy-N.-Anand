import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Timeline } from './components/Timeline';
import { Achievements } from './components/Achievements';
import { TVK } from './components/TVK';
import { Gallery } from './components/Gallery';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <main>
        <About />
        <Timeline />
        <Achievements />
        <TVK />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
