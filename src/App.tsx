import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Timeline } from './components/Timeline';
import { GoodDeeds } from './components/GoodDeeds';
import { Achievements } from './components/Achievements';
import { Constituency } from './components/Constituency';
import { WardInteractiveMap } from './components/WardInteractiveMap';
import { Transparency } from './components/Transparency';
import { Updates } from './components/Updates';
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
        <GoodDeeds />
        <Transparency />
        <Constituency />
        <WardInteractiveMap />
        <Updates />
        <Achievements />
        <TVK />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
