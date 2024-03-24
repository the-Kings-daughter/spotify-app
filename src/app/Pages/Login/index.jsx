import { Logo } from '../../components/Logo/Logo'
import style from './style.module.css'
import React from 'react'
import SpotifyBlack from '../../assets/images/spotify-black.svg'
import { CustomButton } from '../../components/Button/index'
import  {socials} from './data'




export const LoginPage = () => {
    return (
        <section className={style.login}>
            <div className={style['logo-wrapper']}>
                <img src={SpotifyBlack} />
            </div>

            <ContinueSocial ></ContinueSocial>
          
            <h1>Login Page</h1>
        </section>
    )
}


export function ContinueSocial () {
    return (
        <div className={style['socials-link']}>
           
           <p></p>
        </div>
    )
}