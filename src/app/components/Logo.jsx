import SpotifyWhiteSVG from '../assets/images/spotify-white.svg'
import SpotifyBlackSVG from '../assets/images/spotify-black.svg'


export function Logo (props) {
    if (props.useBlack) {
        return (
            <a href="#/dashboard">
                <img src={SpotifyBlackSVG}  />
            </a>
        );
    } else {
        return (
            <a href="#/dashboard">
                <img src={SpotifyWhiteSVG}  />
            </a>
        );
    }
  
}