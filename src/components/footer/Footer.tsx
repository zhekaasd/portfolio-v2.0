
import st from './footer.module.scss';

import {FaFacebookF} from 'react-icons/fa';
import {FaLinkedinIn} from 'react-icons/fa';
import {FaInstagram} from 'react-icons/fa';

const Footer = () => {
    return <footer>
        <a href="#" className={st.footerLogo}> JOHN DOE </a>
            <ul className={st.permalinks}>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#testimonials">Testimonials</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>

            <div className={st.footerSocial}>
                <a href="https://facebook.com"><FaFacebookF /></a>
                <a href="https://linkedin.com"><FaLinkedinIn /></a>
                <a href="https://instagram.com"><FaInstagram /></a>
            </div>

            <div className={st.footerCopyright}>
                <small>
                    &copy; SPIZHENNOE PORTFOLIO. Spizdil nekiy John Doe
                </small>
            </div>
    </footer>
}

export default Footer;