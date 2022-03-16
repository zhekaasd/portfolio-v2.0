import React from 'react';
import name from '../../../assets/images/1.jpg';

import st from './cta.module.scss';

const Cta = () => {
    return (
        <div className={st.cta}>
            <a className={st.btn} href={name} download>Download CV</a>
            <a className={`${st.btn} ${st.btnPrimary}`} href="#contact">Let's talk</a>
        </div>
    );
};

export default Cta;