
import st from "./portfolio.module.scss";
import img1 from "../../assets/images/p/p_1.jpg";
import img2 from "../../assets/images/p/p_1.jpg";
import img3 from "../../assets/images/p/p_1.jpg";
import img4 from "../../assets/images/p/p_1.jpg";

type ItemType = {
    id: string
    title: string
    image: string
    github: string
    githubRepo: string
}


const Portfolio = () => {


    const items: ItemType[] = [
        {id: '1', image: img1, title: 'Lorem ipsum dolor sit amet, consectetur.', github: 'https://github.com', githubRepo: 'htpps://github.com/zhekaasd'},
        {id: '2', image: img2, title: 'Lorem ipsum dolor sit amet, consectetur.', github: 'https://github.com', githubRepo: 'htpps://github.com/zhekaasd'},
        {id: '3', image: img3, title: 'Lorem ipsum dolor sit amet, consectetur.', github: 'https://github.com', githubRepo: 'htpps://github.com/zhekaasd'},
        {id: '4', image: img1, title: 'Lorem ipsum dolor sit amet, consectetur.', github: 'https://github.com', githubRepo: 'htpps://github.com/zhekaasd'},
        {id: '5', image: img4, title: 'Lorem ipsum dolor sit amet, consectetur.', github: 'https://github.com', githubRepo: 'htpps://github.com/zhekaasd'},
        {id: '6', image: img2, title: 'Lorem ipsum dolor sit amet, consectetur.', github: 'https://github.com', githubRepo: 'htpps://github.com/zhekaasd'},
    ]

    return <section id={'portfolio'}>Portfolio
        <h5>My Recent Work</h5>
        <h2>Portfolio</h2>



        <div className={st.portfolioContainer}>
            {
                items.map( ({id, title, image, github, githubRepo})  => <article key={id} className={st.portfolioItem}>
                    <div className={st.portfolioItemImage}>
                        <img src={image} alt="image" />
                    </div>

                    <h3>{title}</h3>
                    <div className={st.portfolioItemCta}>

                        <a href={github} className={st.btn}>Github</a>
                        <a href={githubRepo} className={`${st.btn} ${st.btnPrimary}`} target={'_blank'}>Live Demo</a>
                    </div>
                </article>)
            }
        </div>
    </section>
}

export default Portfolio;