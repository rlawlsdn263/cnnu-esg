import styles from "./Result.module.css";
import { Button } from "../../components"

export function Result() {
  console.log(styles)
  return(
  <div className={styles.container}>
    <h2 className={styles.title}>산림ESG경영 진단결과</h2>
    <div className={styles.result}>
      <div className={styles["result-top"]}>
        <span className={styles["result-text"]}>누르의 진단 결과는:</span>
        <span className={styles["result-title"]}>양호(상위12%)</span>
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
            <div>10</div>
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
            <div>10</div>
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
            <div>10</div>
          </div>
        </div>
        <div className={styles["inner-right"]}>
          <p className={styles.desc1}>귀사는 산림ESG경영을 위한 필수요건을 충족하고 있습니다. 전반적으로 산림ESG 운영을 위한 시스템이 갖춰져 있는 편입니다.</p>
          <p className={styles.desc2}>그러나 우수한 수준에 도달하기 위해서는 FSC 인증 목재 활용, 토지이용목표 달성, 사유림 활용 등 환경(E)영역의 산림자원활용 이슈 및 이행을 기업 전략 및 의사결정에 반영할 수 있어야 합니다.  </p>
          <Button className={styles.button}>자가진단 종료하기</Button>
        </div>
      </div>
    </div>
  </div>
  )
}