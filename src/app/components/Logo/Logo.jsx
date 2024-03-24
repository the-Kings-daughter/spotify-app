import SpotifyWhiteSVG from '../../assets/images/spotify-white.svg'
import React from 'react'
import SpotifyBlackSVG from '../../assets/images/spotify-white.svg'
import style from './style.module.css'

export function Logo (props) {
    const myimage = props.useBlack ? SpotifyBlackSVG : SpotifyWhiteSVG
    return (
        <a href="#/dashboard" className={style.logo}>
            <img src={myimage}  />
        </a>
    );
   
  
}