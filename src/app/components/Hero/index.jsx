import React from 'react'
import style from './Hero.module.css'
import {CustomButton} from '../Button'
export const Hero = () => {
    return (
        <section className={style.hero}> 
            <h1 className={style.heading1}>Get Premium free for 1 month</h1>
            <p className={style.description}>Just ₹119/month after. Debit and credit cards accepted. Cancel anytime.</p>
            <div className= {style['button-group']}>
                <CustomButton type='btn' onClick= {()=>{}} >get started</CustomButton>
                <CustomButton type='outline'onClick= {()=>{}} >see other plans</CustomButton>
            </div>
           
            <div className={style.termslink}>
                <a href="#/terms and conditions">Terms and conditions apply. </a>
                1 month free not available for users who have already tried Premium.
            </div>
        </section>
    );
}