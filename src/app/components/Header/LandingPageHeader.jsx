
import './LandingPageHeader.css';
import {Logo} from '../Logo/Logo';
import MenuIcon from '../../assets/images/icons/list.svg';
import React from "react"

function useState(initialValue) {
   let val = initialValue
   function change(newValue) {
      val = newValue
   }
   return [val, change]
};


export const LandingPageHeader = () => {
   const [showMenu, setMenu]= React.useState(false);
   const toggleMenu = ()=> {
      setMenu(showMenu === false)
   }
   return (
    <header className = "header">
       <div className= "logo">
            <Logo useBlack={false} />
       </div>
       <img src={MenuIcon} className='menu-icon' onClick={toggleMenu} />
       <div className='menu'>
            <HeaderNavigation  className={showMenu ? 'mobile' : '' } />
      </div>
    </header>
   )
}

export const HeaderNavigation = (props)=> {
   return (
       <ul className={props.className}>
           <li>
               <a href="#/Premium">Premium</a> 
           </li>
           <li>
               <a href="#/Support">Support</a> 
           </li>
           <li>
               <a href="#/Download">Download</a> 
           </li>
           <li className="hidden-mobile">|</li>
           <li className= "offwhite">
               <a href="#/Sign up">Sign up</a> 
           </li>
           <li className= "offwhite">
               <a href="/Login">Log in</a> 
           </li>
       </ul>
   )
}