import React from 'react';
import st from './header.module.scss';
import name from './../../assets/images/1.jpg';

const Cta = () => {
    return (
        <div className={st.cta}>
            <a className={'btn'} href={name} download>Download CV</a>
            <a className={'btn'} href="#contact">Let's talk</a>
        </div>
    );
};

export default Cta;