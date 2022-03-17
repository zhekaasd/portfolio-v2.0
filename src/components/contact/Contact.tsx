import {MdOutlineEmail} from 'react-icons/md';
import {RiMessengerLine} from 'react-icons/ri';
import {BsWhatsapp} from 'react-icons/bs';

import st from './contact.module.scss';

const Contact = () => {
    return <section id={'contact'}>Contact
        <h5>Get In Touch</h5>
        <h2>Contact Me</h2>

        <div className={st.contactContainer}>
            <div className={st.contactOptions}>
                <article className={st.contactOption}>
                    <MdOutlineEmail className={st.contactOptionIcon} />
                    <h4>Email</h4>
                    <h5>johndoe@gmail.com</h5>
                    <a rel={'noreferrer'} href="mailto:johndoe@gmail.com" target={'_blank'}>Send Message</a>

                </article>

                <article className={st.contactOption}>
                    <RiMessengerLine className={st.contactOptionIcon} />
                    <h4>Telegram</h4>
                    <h5>johndoe</h5>
                    <a rel={'noreferrer'} href="https://t.me/johndoe" target={'_blank'}>Send Message</a>

                </article>

                <article className={st.contactOption}>
                    <BsWhatsapp className={st.contactOptionIcon} />
                    <h4>WhatsApp</h4>
                    <h5>+56789098765432</h5>
                    <a rel={'noreferrer'} href="https://api.whatsapp.com/send?phone=+56789098765432" target={'_blank'}>Send Message</a>

                </article>

            </div>
            {/*END OF CONTACTS OPTIONS*/}

            <form action="">
                <input type="text" name={'name'} placeholder={'Your Full Name'} required />
                <input type="email" name={'email'} placeholder={'Your Email'} required={true} />
                <textarea placeholder={'Your Message'} name="message" id="msg" rows={7} ></textarea>
                <button type={'submit'} className={st.btn}>Send Message</button>
            </form>
            
        </div>
    </section>
}

export default Contact;