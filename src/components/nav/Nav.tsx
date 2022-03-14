import {AiOutlineHome} from 'react-icons/ai';
import {AiOutlineUser} from 'react-icons/ai';
import {BiBookAlt} from 'react-icons/bi';
import {BiMessageSquareDetail} from 'react-icons/bi';
import {RiServiceLine} from 'react-icons/ri';

import st from './nav.module.scss';
import {useState} from "react";

type IconItemsType = {
    id: string
    title: string
    icon: JSX.Element
}

const Nav = () => {

    let [active, setActive] = useState<string>('#');

    const items: Array<IconItemsType> = [
        {id: '0', title: '#', icon: <AiOutlineHome />},
        {id: '1', title: '#about', icon: <AiOutlineUser />},
        {id: '2', title: '#experience', icon: <BiBookAlt />},
        {id: '3', title: '#services', icon: <RiServiceLine />},
        {id: '4', title: '#contact', icon: <BiMessageSquareDetail />},
    ];


    return <nav>
        <div className={st.d}>
            {/*<a className={st.active} href="#"><AiOutlineHome /></a>*/}
            {/*<a href="#about"><AiOutlineUser /></a>*/}
            {/*<a href="#experience"><BiBookAlt /></a>*/}
            {/*<a href="#services"><RiServiceLine /></a>*/}
            {/*<a href="#contact"><BiMessageSquareDetail /></a>*/}

            {
                items.map( i => <a
                    key={i.id}
                    onClick={() => {
                        setActive(i.title);
                    }}
                    className={active === i.title ? st.active : ''}
                    href={i.title}>{i.icon}</a> )
            }



        </div>
    </nav>
}

export default Nav;