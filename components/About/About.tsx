/* eslint-disable @next/next/no-img-element */
import ArrowSvg from "../ArrowSvg/ArrowSvg"
import MainTitle from "../MainTitle/MainTitle"
import SocialList from "./SocialList"
import styles from "../../styles/about.module.scss"
import { useMediaQuery } from "../../hooks"

const About = () => {
  const isMobile1080 = useMediaQuery(1080)

  return (
    <section className={styles.about} id='about'>
      <div className='container'>
        <MainTitle text='обо мне' />
      </div>
      <div className={`sub-container ${styles.about__sub_container}`}>
        <img className={styles.about__img} src='/img/my-photo.jpg' alt='avatar' />
        <div className={styles.about__inner}>
          <h3 className={styles.about__title}>
            Александр Богданов
            <span className={styles.about__title__border}>
              <span className={styles.about__title__border__arrow}>
                <ArrowSvg />
              </span>
              <span className={styles.about__title__border__line} />
            </span>
          </h3>
          <div className={styles.about__text}>
            <p>
              Я frontend-разработчик, специализирующийся на создании SPA с использованием библиотеки React. Постоянно
              улучшаю свои навыки в этой области. Интересуюсь fullstack разработкой, планирую расширять свои знания в
              новых технологиях, таких как Angular и Nest.js. В свободное время углубляюсь в изучение этих технологий.
              Готов рассмотреть ваши предложения и открыт к новым проектам.
            </p>
          </div>
          {!isMobile1080 && <SocialList />}
        </div>
      </div>
      <div className='sub-container'>{isMobile1080 && <SocialList />}</div>
    </section>
  )
}
//

export default About
