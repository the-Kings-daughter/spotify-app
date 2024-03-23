import { LandingPageHeader } from '../components/Header/LandingPageHeader'
import { Hero } from '../components/Hero'
import { Features } from '../components/Features'
import { PremiumPlans } from '../components/PremiumPlans'
import { Footer } from '../components/Footer'



export const LandingPage = () => {
    return (
        <div>
            <LandingPageHeader />
            <Hero />
            <Features />
            <PremiumPlans />
            <Footer />
        </div>
    )
}