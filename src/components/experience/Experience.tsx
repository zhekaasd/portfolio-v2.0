import {BsPatchCheckFill} from 'react-icons/bs';

import '../../index.scss';
import './experience.scss';

const Experience = () => {
    return <section id={'experience'}>Experience

        <h5>What skills i have</h5>
        <h2>My Experience</h2>

        <div className="container experienceContainer">
            <div className="experienceFrontend">

                <h3>Frontend Development</h3>
                <div className="experienceContent">
                    <article className={'experienceDetails'}>
                        <BsPatchCheckFill />
                        <h4>HTML</h4>
                        <small className={'text-light'}>Experienced </small>
                    </article>

                    <article className={'experienceDetails'}>
                        <BsPatchCheckFill />
                        <h4>CSS</h4>
                        <small className={'text-light'}>Experienced </small>
                    </article>

                    <article className={'experienceDetails'}>
                        <BsPatchCheckFill />
                        <h4>JavaScript</h4>
                        <small className={'text-light'}>Intermediate </small>
                    </article>

                    <article className={'experienceDetails'}>
                        <BsPatchCheckFill />
                        <h4>React</h4>
                        <small className={'text-light'}>Experienced </small>
                    </article>

                    <article className={'experienceDetails'}>
                        <BsPatchCheckFill />
                        <h4>TypeScript</h4>
                        <small className={'text-light'}>Experienced </small>
                    </article>

                    <article className={'experienceDetails'}>
                        <BsPatchCheckFill />
                        <h4>HTML</h4>
                        <small className={'text-light'}>Experienced </small>
                    </article>

                </div>
            </div>
{/*END OF FRONTEND CONTENT*/}
            <div className="experienceBackend">
                <h3>Backend Development</h3>
                <div className="experienceContent">
                    <article className={'experienceDetails'}>
                        <BsPatchCheckFill />
                        <h4>NODE JS</h4>
                        <small className={'text-light'}>Experienced </small>
                    </article>

                    <article className={'experienceDetails'}>
                        <BsPatchCheckFill />
                        <h4>MongoDB</h4>
                        <small className={'text-light'}>Experienced </small>
                    </article>

                    <article className={'experienceDetails'}>
                        <BsPatchCheckFill />
                        <h4>PHP</h4>
                        <small className={'text-light'}>Intermediate </small>
                    </article>

                    <article className={'experienceDetails'}>
                        <BsPatchCheckFill />
                        <h4>MySQL</h4>
                        <small className={'text-light'}>Experienced </small>
                    </article>

                    <article className={'experienceDetails'}>
                        <BsPatchCheckFill />
                        <h4>Python</h4>
                        <small className={'text-light'}>Experienced </small>
                    </article>

{/*                    <article className={'experienceDetails'}>
                        <BsPatchCheckFill />
                        <h4>HTML</h4>
                        <small className={'text-light'}>Experienced </small>
                    </article>*/}

                </div>
            </div>
        </div>

    </section>
}

// experience

export default Experience;