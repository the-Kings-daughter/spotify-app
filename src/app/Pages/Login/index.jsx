
import style from './style.module.css'
import React from 'react'
import SpotifyBlack from '../../assets/images/spotify-black.svg'
import { CustomButton } from '../../components/Button/index'
import { FaApple, FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { CustomInput } from '../../components/input'




export const LoginPage = () => {
    return (
        <section className={style.login}>
            <div className={style['logo-wrapper']}>
                <img src={SpotifyBlack} />
            </div>
            <main className={style.main}>

                <CustomButton type="secondary" onClick={() => {}}>
                    <FaFacebook size={'1rem'} />
                    &nbsp;
                    Continue with Facebook
                </CustomButton>
                <CustomButton  onClick={()=> {}}>
                    <FaApple  size={'1rem'}/>
                    &nbsp;
                    Continue with Apple
                </CustomButton>
                <CustomButton type="tertiary"  onClick={()=> {}}>
                    <FcGoogle  size={'1rem'}/>
                    &nbsp;
                    Continue with google
                </CustomButton>
                <div className={style.divider}>
                   <span>or</span>  
                </div>
                <CustomInput type="email" placeholder={'Email address or username'} label={'Email address or username'} />
                <CustomInput type='password' placeholder={'Password'} label={'Password'} />
                <a href="/forgot-password" className={style.forgot}>Forgot your password?</a>
                <div className={style.flex}>
                    <div>
                        <input type="checkbox" />
                        <label>Remember me</label>
                    </div>

                    <div >
                        <CustomButton type="login" onClick={() => {}}> log in </CustomButton>
                    </div>
                    
                </div>
               
                <div className={style.divider}></div>
                <p>Don't have an account?</p>
          
                <CustomButton type="tertiary"  onClick={()=> {}}>
                    &nbsp;
                    Sign up for sportify
                </CustomButton>
            </main>

        </section>
    )
}


