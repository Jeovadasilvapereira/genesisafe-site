import Header from './components/Header';
import HeroSection from './components/HeroSection';
import SocialProof from './components/SocialProof';
import FeaturesGrid from './components/FeaturesGrid';
import Compliance from './components/Compliance';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-zinc-950 flex flex-col selection:bg-amber-400 selection:text-zinc-950 font-sans">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <SocialProof />
        <FeaturesGrid />
        <Compliance />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}

export default App;
