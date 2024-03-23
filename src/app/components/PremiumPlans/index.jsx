import React from 'react';
import PaymentIcons from '../../assets/images/icons/payment.svg';
import styles from './style.module.css';
import {premiumplans} from './data'
import {CustomButton} from "../Button"
import CheckedIcon from '../../assets/images/icons/checked.svg'




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



export const OneTimePlan = (props) => {
    const classNames = {
        outline: 'link-outline'
    }
    const className = classNames[props.type]
    return (
        <a href="#" className={className}> {props.children} </a>
    )
}


export const PlanCard = ({ title, price, description, features, termstext, termslink, duration}) => {
  return (
    <div className={styles.cards}>
        <div className={styles.card1}>
            <div className={duration ? '' : styles.wrapper}>
                {/* <p className={styles.wrapperpara} >
                    {duration}
                </p> */}

                {/* <OneTimePlan  type={duration ? null : 'link'} >{duration ? null : '1 month free'}</OneTimePlan> */}
                <div>
                    <p className={duration ? 'hide' : 'link'}> {duration ? null : '1 month free'}</p>
                </div>
           
                <OneTimePlan type='outline' >One-time plans available</OneTimePlan>
       
            </div>
            <h3 className={styles.plantitle}>{title}</h3>
            <p className={styles.pricetag}>{price} </p>
            <p className={styles.description}>{description}</p>

            {/* <hr width="100%" color='#eeeeee'/>     */}
        </div>
        <div className={styles.card2}>
            <ul className={styles.featurelist}>
                {features.map((feature, index) => (
                    <li key={index} className={styles.featureitem}>
                        <img src={CheckedIcon}  />
                        {feature}
                    </li>
                ))}
            </ul>
        </div>
        
        <CustomButton type='btn' onClick= {()=>{}} >VIEW PLANS</CustomButton>
        {/* <hr className={styles.hr} />     */}

        <div className={styles.card3}>
            <p className={styles.linktext}>
                <a href="#" className={styles.link}> {termslink}</a>
                {termstext}
            </p>
        </div>
    </div>  
  );
};





