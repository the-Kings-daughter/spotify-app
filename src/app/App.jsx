import './App.css';
import { LandingPageHeader } from './components/Header/LandingPageHeader';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { PremiumPlans } from './components/PremiumPlans';


export function App() {
  return (
    <div>
      <LandingPageHeader />
      <Hero />
      <Features />
      <PremiumPlans />
    </div>
  );
}



