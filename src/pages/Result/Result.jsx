import styles from "./Result.module.css";
import { Button } from "../../components"
import result from "../../data/result.json"
import { useNavigate } from 'react-router-dom';

export function Result() {

  const navigate = useNavigate();

  function goToHome() {
    navigate("/");
  }

  return(
  <div className={styles.container}>
    <h2 className={styles.title}>산림ESG경영 진단결과</h2>
    <div className={styles.result}>
      <div className={styles["result-top"]}>
        <span className={styles["result-text"]}>누르의 진단 결과는:</span>
        <span className={styles["result-title"]}>{result[2].percentage}</span>
      </div>
      <div className={styles["inner-container"]}>
        <div className={styles["inner-left"]}>
          <div className={styles.score}>
            <span className={styles["score-title"]}>환경(Environment)</span>
            <div className={styles["score-bar"]}>
              <span>0</span>
              <div className={styles.progress}>
                <div className={`${styles.percentage} ${styles.green}`}></div>
              </div>
              <span>20</span>
            </div>
            <div className={styles.point}>10</div>
          </div>
          <div className={styles.score}>
            <span className={styles["score-title"]}>사회(Social)</span>
            <div className={styles["score-bar"]}>
              <span>0</span>
              <div className={styles.progress}>
                <div className={`${styles.percentage} ${styles.blue}`}></div>
              </div>
              <span>20</span>
            </div>
            <div className={styles.point}>10</div>
          </div>
          <div className={styles.score}>
            <span className={styles["score-title"]}>지배구조(Governance)</span>
            <div className={styles["score-bar"]}>
              <span>0</span>
              <div className={styles.progress}>
                <div className={`${styles.percentage} ${styles.red}`}></div>
              </div>
              <span>20</span>
            </div>
            <div className={styles.point}>10</div>
          </div>
        </div>
        <div className={styles["inner-right"]}>
          <p className={styles.desc1}>{result[2].text1}</p>
          <p className={styles.desc2}>{result[2].text2}</p>
          <Button className={styles.button} onClick={goToHome}>자가진단 종료하기</Button>
        </div>
      </div>
    </div>
  </div>
  )
}