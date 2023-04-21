import { Button } from "./components"
import logo from "./assets/logo.svg"
import styles from "./App.module.css"
import { handleClick } from './functions/_index.js'

function App() {

  return (
    <div>
      <header className={styles.header}>
        <h1 className={styles.logo}>
          <a href="/">
            <img src={logo} alt="전남대학교"></img>
          </a>
        </h1>
      </header>
      <div className={styles.background}>
        <div className={styles.container}>
          <p className={styles.title}>산림ESG경영 자가진단 서비스</p>
          <p className={styles.text}>산림ESG경영 자가진단 서비스는 기업의 산림분야 <strong>ESG 수준을 진단할 수 있는 자가진단 서비스</strong>를 제공합니다.</p>
          <p className={styles.text}>귀사의 산림분야 ESG에 대한 현재 수준을 진단하여 ESG 역량을 제고하고 개선할 수 있도록 개발되었습니다.</p>
          <p className={styles.text}>자가진단을 통해 산림ESG 경영을 위한 기본적인 요건들을 확인하실 수 있습니다.</p>
        </div>
        <Button className={styles.button} onClick={handleClick}>자가진단 시작하기</Button>
        <div className={styles.shadow}></div>
      </div>
      <footer className={styles.footer}>
        <span className={styles.copyright}>Copyright© 2023 CHONNAM NATIONAL UNIVERSITY. All rights reserved.</span>
        <span className={styles.license}><a href="http://www.freepik.com">Designed by rawpixel.com / Freepik</a></span>
      </footer>
    </div>
    )
}

export default App
