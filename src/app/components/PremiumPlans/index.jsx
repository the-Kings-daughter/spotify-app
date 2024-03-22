import PaymentIcons from '../../assets/images/icons/payment.svg';
import { PlanCard } from './PlanCard';
import styles from './style.module.css';
import {premiumplans} from './data'
import {CustomButton} from "../Button"




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
             
             <div className={styles.studentdiscount}>
                <p>Special discount for eligible students in university</p>
                <CustomButton type='secondary' onClick= {()=> {}} className={styles.learnmore}>Learn more</CustomButton>
             </div>
        </section>
    )
}