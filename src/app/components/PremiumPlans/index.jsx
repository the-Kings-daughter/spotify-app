import PaymentIcons from '../../assets/images/icons/payment.svg';
import { PlanCard } from './PlanCard';
import styles from './style.module.css';
import {premiumplans} from './data'




export const PremiumPlans = () => {
    return (
        <section className={styles.PremiumPlans}>
            <div className={styles.Leadingtext}>
                <h3 className={styles.title}>Pick your Premium</h3>
                <p className={styles.para}>Listen without limits on your phone, speaker, and other devices.</p>
                <img src={PaymentIcons}  />
            </div>
           
            <div className={styles.plancard}>
                {premiumplans.map((premiumplan, index) => (
                   <PlanCard key={index} {...premiumplan} />
                ))}


            </div>
             
       
        </section>
    )
}