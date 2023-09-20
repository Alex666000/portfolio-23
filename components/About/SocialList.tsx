/* eslint-disable @next/next/no-img-element */
import styles from "../../styles/socialList.module.scss"

const SocialList = () => {
  return (
    <ul className={styles.social__list}>
      <li className={styles.social__list__item}>
        <a href='https://vk.com/id18397838' className={styles.social__list__item__link}>
          <span className={styles.social__list__item__link__text}>ВКонтакте</span>
          <span className={`${styles.social__list__item__link__icon} ${styles.social__list__item__link__icon__vk}`}>
            <img className={styles.social__list__item__link__img} src='/img/vk.svg' alt='ВКонтакте' />
          </span>
        </a>
      </li>
    </ul>
  )
}

export default SocialList
