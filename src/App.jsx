import { Home, Test, Result } from "./pages";
import logo from "./assets/logo.svg";
import styles from "./App.module.css";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <header className={styles.header}>
        <h1 className={styles.logo}>
          <a href="https://rlawlsdn263.github.io/cnnu-esg/#/">
            <img src={logo} alt="전남대학교"></img>
          </a>
        </h1>
      </header>
      <div className={styles.background}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/test" element={<Test />} />
          <Route path="/result" element={<Result />} />
        </Routes>
        <div className={styles.shadow}></div>
      </div>
      <footer className={styles.footer}>
        <span className={styles.copyright}>
          Copyright© 2023 CHONNAM NATIONAL UNIVERSITY. All rights reserved.
        </span>
        <span className={styles.license}>
          <a href="http://www.freepik.com">
            Designed by rawpixel.com / Freepik
          </a>
        </span>
      </footer>
    </div>
  );
}

export default App;
