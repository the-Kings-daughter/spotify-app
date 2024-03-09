import { HeaderNavigation } from './HeaderNavigation';
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
}


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

// const MobileNavigation = ()=> {
//    return (
//       <>

//          {
//             showMenu && (
//                <div className="menu mobile" >  
//                   <HeaderNavigation />
//             </div>
//             )
//          }
//       </>
//    )
// }