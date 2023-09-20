/* eslint-disable @next/next/no-img-element */
import styles from "../../styles/socialListContact.module.scss"

const SocialList = () => (
  <ul className={styles.social__list}>
    <li className={styles.social__list__item}>
      <a href='https://vk.com/id18397838' className={styles.social__list__item__link}>
        <span className={styles.social__list__item__link__text}>ВКонтакте</span>
        <span className={`${styles.social__list__item__link__icon} ${styles.social__list__item__link__icon__vk}`}>
          <img className={styles.social__list__item__link__img} src='/img/vk.svg' alt='ВКонтакте' />
        </span>
      </a>
      <a href='https://github.com/Alex666000' className={styles.social__list__item__link}>
        <span className={styles.social__list__item__link__text}>Github</span>
        <span className={`${styles.social__list__item__link__icon} ${styles.social__list__item__link__icon__github}`}>
          <img className={styles.social__list__item__link__img} src='/img/github.svg' alt='Github' />
        </span>
      </a>
    </li>
  </ul>
)

export default SocialList
