import {BsPatchCheckFill} from 'react-icons/bs';

import st from './experience.module.scss';


const Experience = () => {
    return <section id={'experience'}>Experience

        <h5>What skills i have</h5>
        <h2>My Experience</h2>

        <div className={st.experienceContainer}>
            <div className={st.experienceFrontend}>

                <h3>Frontend Development</h3>
                <div className={st.experienceContent}>
                    <article className={st.experienceDetails}>
                        <BsPatchCheckFill className={st.experienceDetailsIcon} />
                        <div>
                            <h4>HTML</h4>
                        <small className={st.textLight}>Experienced </small>
                        </div>
                    </article>

                    <article className={st.experienceDetails}>
                        <BsPatchCheckFill className={st.experienceDetailsIcon} />
                        <div>
                            <h4>CSS</h4>
                        <small className={st.textLight}>Experienced </small>
                        </div>
                    </article>

                    <article className={st.experienceDetails}>
                        <BsPatchCheckFill className={st.experienceDetailsIcon} />
                        <div>
                            <h4>JavaScript</h4>
                        <small className={st.textLight}>Intermediate </small>
                        </div>
                    </article>

                    <article className={st.experienceDetails}>
                        <BsPatchCheckFill className={st.experienceDetailsIcon} />
                        <div>
                            <h4>React</h4>
                        <small className={st.textLight}>Experienced </small>
                        </div>
                    </article>

                    <article className={st.experienceDetails}>
                        <BsPatchCheckFill className={st.experienceDetailsIcon} />
                        <div>
                            <h4>TypeScript</h4>
                        <small className={st.textLight}>Experienced </small>
                        </div>
                    </article>

                    <article className={st.experienceDetails}>
                        <BsPatchCheckFill className={st.experienceDetailsIcon} />
                        <div>
                            <h4>HTML</h4>
                        <small className={st.textLight}>Experienced </small>
                        </div>
                    </article>

                </div>
            </div>
{/*END OF FRONTEND CONTENT*/}
            <div className={st.experienceBackend}>
                <h3>Backend Development</h3>
                <div className={st.experienceContent}>
                    <article className={st.experienceDetails}>
                        <BsPatchCheckFill className={st.experienceDetailsIcon} />
                        <div>
                            <h4>NODE JS</h4>
                        <small className={st.textLight}>Experienced </small>
                        </div>
                    </article>

                    <article className={st.experienceDetails}>
                        <BsPatchCheckFill className={st.experienceDetailsIcon} />
                        <div>
                            <h4>MongoDB</h4>
                        <small className={st.textLight}>Experienced </small>
                        </div>
                    </article>

                    <article className={st.experienceDetails}>
                        <BsPatchCheckFill className={st.experienceDetailsIcon} />
                        <div>
                            <h4>PHP</h4>
                        <small className={st.textLight}>Intermediate </small>
                        </div>
                    </article>

                    <article className={st.experienceDetails}>
                        <BsPatchCheckFill className={st.experienceDetailsIcon} />
                        <div>
                            <h4>MySQL</h4>
                        <small className={st.textLight}>Experienced </small>
                        </div>
                    </article>

                    <article className={st.experienceDetails}>
                        <BsPatchCheckFill className={st.experienceDetailsIcon} />
                        <div>
                            <h4>Python</h4>
                        <small className={st.textLight}>Experienced </small>
                        </div>
                    </article>

{/*                    <article className={'experienceDetails'}>
                        <BsPatchCheckFill />
                        <h4>HTML</h4>
                        <small className={st.textLight'}>Experienced </small>
                    </article>*/}

                </div>
            </div>
        </div>

    </section>
}

// experience

export default Experience;