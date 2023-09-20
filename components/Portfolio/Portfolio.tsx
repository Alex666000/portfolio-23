import { useState } from "react"
import MainTitle from "../MainTitle/MainTitle"
import PortfolioTabControl from "./PortfolioTabControl"
import PortfolioTabContent from "./PortfolioTabContent"
import { useMediaQuery } from "../../hooks"
import { portfolioItems1, portfolioItems2, portfolioItems3 } from "./portfolioTabContents"
import PortfolioSlider from "./PortfolioSlider"
import styles from "../../styles/portfolio.module.scss"

const Portfolio = () => {
  const isMobile = useMediaQuery(1080)
  const [portfolioTab1, setPortfolioTab1] = useState(true)
  const [portfolioTab2, setPortfolioTab2] = useState(false)
  const [portfolioTab3, setPortfolioTab3] = useState(false)

  const handleShowPortfolioItems1 = () => {
    setPortfolioTab1(true)
    setPortfolioTab2(false)
    setPortfolioTab3(false)
  }

  const handleShowPortfolioItems2 = () => {
    setPortfolioTab1(false)
    setPortfolioTab2(true)
    setPortfolioTab3(false)
  }

  const handleShowPortfolioItems3 = () => {
    setPortfolioTab1(false)
    setPortfolioTab2(false)
    setPortfolioTab3(true)
  }

  const portfolioTabControls = [
    { id: 1, title: "Production project", isActive: portfolioTab1, handler: handleShowPortfolioItems1 },
    { id: 2, title: "Todolist", isActive: portfolioTab2, handler: handleShowPortfolioItems2 },
    { id: 3, title: "Social network", isActive: portfolioTab3, handler: handleShowPortfolioItems3 },
  ]

  return (
    <section className={styles.portfolio} id='portfolio'>
      <div className='container'>
        <MainTitle text='портфолио' />
      </div>
      <div className='sub-container'>
        <div className={styles.portfolio__inner}>
          <ul className={styles.portfolio__tabs}>
            {portfolioTabControls.map(item => (
              <PortfolioTabControl
                key={item.id}
                title={item.title}
                isActive={item.isActive}
                handleShowTab={item.handler}
              />
            ))}
          </ul>
        </div>
        {!isMobile && (
          <ul className={styles.portfolio__list}>
            {portfolioTab1 && <PortfolioTabContent tabItems={portfolioItems1} />}
            {portfolioTab2 && <PortfolioTabContent tabItems={portfolioItems2} />}
            {portfolioTab3 && <PortfolioTabContent tabItems={portfolioItems3} />}
          </ul>
        )}
      </div>
      {isMobile && (
        <div className={styles.portfolio__list__mobile}>
          <div className={styles.portfolio__list__mobile__container}>
            {portfolioTab1 && <PortfolioSlider tabItems={portfolioItems1} />}
            {portfolioTab2 && <PortfolioSlider tabItems={portfolioItems2} />}
            {portfolioTab3 && <PortfolioSlider tabItems={portfolioItems3} />}
          </div>
        </div>
      )}
    </section>
  )
}

export default Portfolio
