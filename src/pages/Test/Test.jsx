import styles from "./Test.module.css";
import {Button} from "../../components"
import data from "../../data/data.json"

function no(){
  console.log(data)
  console.log(-1);
}

function normal(){
  console.log(0);
}

function yes(){
  console.log(1);
}

export function Test() {
  return(<>
    <div className={styles.test}>
      <div className={styles.testHeader}>
        <span className={styles.name}>STEP 02 환경(E) 대응</span>
        <span className={styles.number}>3/10</span>
      </div>
      <div className={styles.testBody}>
        <span className={styles.testNumber}>Q3.</span>
        <p className={styles.testText}>우리 회사는 산림 벌채 및/또는 자연 생태계 전환을 줄이고, 산림 환경 활성화를 위해 사유림 소유자와 협력하고 있다. </p>
      </div>
      <div className={styles.testButtons}>
        <Button className={styles.ButtonNo} onClick={no}>그렇지 않다</Button>
        <Button className={styles.ButtonNormal} onClick={normal}>보통이다</Button>
        <Button className={styles.ButtonYes} onClick={yes}>그렇다</Button>
      </div>
    </div>
  </>)
}