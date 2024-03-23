
import {FaInstagram, FaTwitter, FaFacebookF, FaGlobeAmericas} from 'react-icons/fa'
import styles from './styles.module.css'
import {Logo} from '../Logo/Logo'
import {aboutMenu, communitiesMenu, usefulLinkMenu, legalUrls } from './data'

export const Footer = () => {
    return (
        <footer className={styles.footer}>

            <div className={styles.menus}>

                <div className={styles.Logowrapper}>  
                    <Logo useBlack={false} /> 
                    <div className={styles.flex}>
                        <Menu  title="" options={ aboutMenu }/>
                        <Menu  title="communities" options={communitiesMenu}/>
                        <Menu  title="useful links" options={usefulLinkMenu}/>
                    </div>
                </div>
               
                <div className={styles['legal-urls']}> 
                    {
                       legalUrls.map(({url, name }) => 
                       <a href={`${url}`}>{name}</a>
                    
                    ) 
                    }
                  
                </div>
            </div>
            
            <div className={styles.socialmedia}>
                <div className={styles.iconwrap}>
                    <FaInstagram /> 
                    <FaTwitter />
                    <FaFacebookF />
                </div>
                <div className={styles.copyright}>
                    <p> <FaGlobeAmericas /> India (English)</p>
                    <p>© 2023 Spotify AB</p>
                </div>
            </div>
        </footer>
    )
}


export const Menu = ({title, options}) => {
    return (
        <nav className={styles.nav}>
            <h5>{title || <>&nbsp;</>}</h5>
            <ul>
                {
                    options && options.map((option)=> {
                      return (
                        <li><a href={option.url}>{option.name}</a></li>
                      )
                    })
                }
            </ul>
        </nav>
    )
}