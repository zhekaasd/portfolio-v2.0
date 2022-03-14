import ME from '../../assets/images/444.jpg';
import {FaAward} from 'react-icons/fa';
import {FiUsers} from 'react-icons/fi';
import {VscFolderLibrary} from 'react-icons/vsc';

import './about2.scss';
import '../../index.scss';

const About = () => {
    return <section id={'about'}>
        <h5>Get To Know</h5>
        <h2>About me</h2>

        <div className={"container aboutContainer"}>

            <div className="aboutMe">
                <div className="aboutMeImage">
                    <img src={ME} alt="me"/>
                </div>
            </div>



            <div className="aboutContent">
                <div className="aboutCards">
                    <article className={'aboutCard'}>

                        <FaAward className={'aboutIcon'} />
                        <h5>Experience</h5>
                        <small>3+ Years Working</small>
                    </article>

                    <article className={'aboutCard'}>

                        <FiUsers className={'aboutIcon'} />
                        <h5>Experience</h5>
                        <small>3+ Years Working</small>
                    </article>

                    <article className={'aboutCard'}>

                        <VscFolderLibrary className={'aboutIcon'} />
                        <h5>Experience</h5>
                        <small>3+ Years Working</small>
                    </article>
                </div>

                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Ab enim, perspiciatis! Adipisci aliquid aperiam asperiores
                    commodi consequuntur explicabo in ipsa, minus molestiae nulla?
                    Deserunt eveniet hic impedit non pariatur repellendus.
                </p>

                <a href="#contact" className={'btn' + ' ' + 'btn-primary'}>
                    Lat's talk
                </a>
            </div>

        </div>

    </section>
}

export default About;