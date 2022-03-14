import '../../index.scss';
import st from './header.module.scss';
import CTA from './CTA';
import me from '../../assets/images/25_6678-.png';
import HeaderSocials from "./HeaderSocials";

const Header = () => {
    return <header>
        <div className={st.container}>
            <h5>Hello I'm</h5>
            <h1>Hajia Bintu</h1>
            <h5 className={st.textLight}>Fullstack developer</h5>
            <CTA />
            <HeaderSocials />
            {/*HeaderSocial*/}

            <div className={st.me}>
                <img src={me} alt=""/>
            </div>

            <a href="#contact" className={st.scrollDown}>Scroll down</a>

        </div>
    </header>
}

export default Header;