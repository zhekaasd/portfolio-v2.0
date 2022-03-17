import avatar1 from '../../assets/images/35.jpg';
import avatar2 from '../../assets/images/32.jpg';
import avatar3 from '../../assets/images/34.jpg';
import avatar4 from '../../assets/images/5.jpg';


// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import './slider.scss';

import st from './testimonials.module.scss';

const Testimonials = () => {
    return <section id={'testimonials'}>Testimonials
            <h5>Review from clients</h5>
            <h2>Testimonials</h2>

            <Swiper className={`${st.testimonialsContainer} `}
                    modules={[Pagination]}
                    spaceBetween={40}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
            >
                        <SwiperSlide className={st.testimonial}>
                            <div className={st.clientAvatar}>
                                <img src={avatar4} alt=""/>
                            </div>
                            <h5 className={st.clientName}>John Doe</h5>
                            <small className={st.clientReview}>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis dolore dolorem eos exercitationem
                                fugit quae, reprehenderit rerum sed tenetur voluptatibus. Dolore eius eligendi fugit nulla voluptatibus!
                                Aliquid dicta dignissimos labore.
                            </small>
                        </SwiperSlide>

                    <SwiperSlide className={st.testimonial}>
                        <div className={st.clientAvatar}>
                            <img src={avatar4} alt=""/>
                        </div>
                        <h5 className={st.clientName}>John Doe</h5>
                        <small className={st.clientReview}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis dolore dolorem eos exercitationem
                            fugit quae, reprehenderit rerum sed tenetur voluptatibus. Dolore eius eligendi fugit nulla voluptatibus!
                            Aliquid dicta dignissimos labore.
                        </small>
                    </SwiperSlide>

                    <SwiperSlide className={st.testimonial}>
                        <div className={st.clientAvatar}>
                            <img src={avatar4} alt=""/>
                        </div>
                        <h5 className={st.clientName}>John Doe</h5>
                        <small className={st.clientReview}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis dolore dolorem eos exercitationem
                            fugit quae, reprehenderit rerum sed tenetur voluptatibus. Dolore eius eligendi fugit nulla voluptatibus!
                            Aliquid dicta dignissimos labore.
                        </small>
                    </SwiperSlide>
            </Swiper>
    </section>
}

export default Testimonials;