import React from 'react';
import {BsLinkedin} from 'react-icons/bs';
import {BsFacebook} from 'react-icons/bs';
import {BsGithub} from 'react-icons/bs';

import st from './header.module.scss';

const HeaderSocials = () => {
    return (
        <div className={st.headerSocial}>
            <a href="https://github.com" target={"_blank"}>
                <BsGithub />
            </a>
            <a href="https://facebook.com" target={"_blank"}>
                <BsFacebook />
            </a>
            <a href="https://linkedin.com" target={"_blank"}>
                <BsLinkedin />
            </a>
        </div>
    );
};

export default HeaderSocials;