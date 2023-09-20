import styles from "../../styles/skills.module.scss"
import MainTitle from "../MainTitle/MainTitle"
import SkillsItem from "./SkillsItem"

const Skills = () => {
  return (
    <section className={styles.skills} id='skills'>
      <div className='container'>
        <MainTitle text='навыки' />
      </div>
      <div className='sub-container'>
        <ul className={styles.skills__list}>
          <SkillsItem
            title='Frontend разработка'
            text='HTML5, CSS3, SCSS, Javascript, Gulp, Webpack, Babel, Typescript, React, Next.js, Redux (Redux Toolkit),
                        Thunk, React router dom, MobX, Zustand, REST API, Axios
                        Material-UI, RTK Query, Storybook, Formik/React Hook Form, Unit, RTL и e2e тестирование,
                        ESlint и Stylelint, Prettier, Feature-Sliced Design, Webstorm'
            iconClass={styles.skills__front}
          />
          <SkillsItem
            title='Backend'
            text='Node.js, Express.js, MongoDB (Mongoose), Postman/Insomnia,Vercel. Базовые навыки по использованию Nest.js'
            iconClass={styles.skills__front}
          />
          <SkillsItem
            title='Английский язык'
            text='Уровень навыков: A2 (Pre-intermediate) in progress. Умею пользоваться технической документацией.
                        Планирую совершенствовать свои навыки в английском языке'
            iconClass={styles.skills__front}
          />
        </ul>
      </div>
    </section>
  )
}

export default Skills
