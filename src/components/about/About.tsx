import ME from '../../assets/images/444.jpg';
import {FaAward} from 'react-icons/fa';
import {FiUsers} from 'react-icons/fi';
import {VscFolderLibrary} from 'react-icons/vsc';

import st from './about.module.scss';
import '../../index.scss';

const About = () => {
    return <section id={'about'}>
        <h5>Get To Know</h5>
        <h2>About me</h2>

        <div className={st.aboutContainer}>

            <div className={st.aboutMe}>
                <div className={st.aboutMeImage}>
                    <img src={ME} alt="me"/>
                </div>
            </div>


            <div className={st.aboutContent}>
                <div className={st.aboutCards}>
                    <article className={st.aboutCard}>

                        <FaAward className={st.aboutIcon}/>
                        <h5>Experience</h5>
                        <small>3+ Years Working</small>
                    </article>

                    <article className={st.aboutCard}>

                        <FiUsers className={st.aboutIcon}/>
                        <h5>Experience</h5>
                        <small>3+ Years Working</small>
                    </article>

                    <article className={st.aboutCard}>

                        <VscFolderLibrary className={st.aboutIcon}/>
                        <h5>Experience</h5>
                        <small>3+ Years Working</small>
                    </article>
                </div>

                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Ab enim, perspiciatis! Adipisci aliquid aperiam asperiores
                    commodi consequuntur explicabo in ipsa, minus molestiae nulla?
                    Deserunt eveniet hic impedit non pariatur repellendus.
                </p>

                <a href="#contact" className={`${st.btn} ${st.btn}`}>
                    Lat's talk
                </a>
            </div>

        </div>

    </section>
}

export default About;