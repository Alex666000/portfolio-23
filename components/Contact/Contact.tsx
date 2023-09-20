import ArrowSvg from "../ArrowSvg/ArrowSvg"
import MainTitle from "../MainTitle/MainTitle"
import SocialList from "./SocialList"
import styles from "../../styles/contact.module.scss"
import ContactForm from "./ContactForm"
import { useMediaQuery } from "../../hooks"

const Contact = () => {
  const isMobile485 = useMediaQuery(485)

  return (
    <section className={styles.contact} id='contact'>
      <div className='container'>
        <MainTitle text='напишите мне' />
      </div>
      <div className='sub-container'>
        <div className={styles.contact__inner}>
          <div className={styles.contact__left}>
            <p className={styles.contact__text}>Напишите мне письмо и мы начнем делать проект вместе!</p>
            <p className={styles.contact__text}></p>
            {!isMobile485 && (
              <>
                <h3 className={styles.contact__title}>
                  <span className={styles.contact__title__text}>
                    Телефон: <span className={styles.tel}>+7 (929) 682-52-69</span>
                  </span>
                  <span className={styles.contact__title__arrow}>
                    <ArrowSvg />
                  </span>
                  <span className={styles.contact__title__border} />
                </h3>
                <h3 className={styles.contact__title}>
                  <span className={styles.contact__title__text}>Моя почта: bogdanov777000@mail.ru</span>
                  <span className={styles.contact__title__arrow}>
                    <ArrowSvg />
                  </span>
                  <span className={styles.contact__title__border} />
                </h3>
                <h3 className={styles.contact__title}>
                  <span className={styles.contact__title__text}>
                    Github: <span>https://github.com/Alex666000</span>{" "}
                  </span>
                  <span className={styles.contact__title__arrow}>
                    <ArrowSvg />
                  </span>
                  <span className={styles.contact__title__border} />
                </h3>
                <h3 className={styles.contact__title}>
                  <span className={styles.contact__title__text}>Я в соцсетях:</span>
                  <span className={styles.contact__title__arrow}>
                    <ArrowSvg />
                  </span>
                  <span className={styles.contact__title__border} />
                </h3>
                <SocialList />
              </>
            )}
          </div>
          <div className={styles.contact__right}>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
