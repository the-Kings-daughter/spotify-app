import './LandingPageHeader.css';
import {Logo} from './Logo'


export  const LandingPageHeader = () => {
    return (
    <header className = "header">
       <div className= "logo">
            <Logo useBlack={false} />
       </div>
       <div className="menu">
        <ul>
            <li>
               <a href="#/Premium">Premium</a> 
            </li>
            <li>
               <a href="#/Support">Support</a> 
            </li>
            <li>
               <a href="#/Download">Download</a> 
            </li>
            <li>|</li>
            <li className= "offwhite">
                <a href="#/Sign up">Sign up</a> 
            </li>
            <li className= "offwhite">
               <a href="#/Log in">Log in</a> 
            </li>
        </ul>
       </div>
    </header>
    )
}