import './GetPremiumSection.css'
import {Button} from './Button'

export const GetPremiumSection = () => {
    return (
        <section className="section">
            <div className='getpremium'>
                <h1>Get Premium free for 1 month</h1>
                <p>Just ₹119/month after. Debit and credit cards accepted. Cancel anytime.</p>
            </div>
            <div className='buttons'>
                <Button>get started</Button>
                <Button variant="secondary">see other plans</Button>
                
            </div>
            <div className='Termslink'>
                <p><a href="#/terms and conditions">Terms and conditions apply. </a>
                1 month free not available for users who have already tried Premium.
                </p>
            </div>
        </section>
    );
}