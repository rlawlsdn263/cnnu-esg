import styles from "./Test.module.css";
import {Button} from "../../components"
import data from "../../data/data.json"
import { useState } from 'react';

export function Test() {
  const test = data;
  const [index, setIndex] = useState(0);

  function no(){
    setIndex(prev => prev + 1)
  }
  
  function normal(){
    setIndex(prev => prev + 1)
  }
  
  function yes(){
    setIndex(prev => prev + 1)
  }

  return(<>
    <div className={styles.test}>
      <div className={styles.testHeader}>
        <span className={styles.name}>{test[index].section}</span>
        <span className={styles.number}>{test[index].id}/{test.length}</span>
      </div>
      <div className={styles.testBody}>
        <span className={styles.testNumber}>Q{test[index].id}.</span>
        <p className={styles.testText}>{test[index].content}</p>
      </div>
      <div className={styles.testButtons}>
        <Button className={styles.ButtonNo} onClick={no}>그렇지 않다</Button>
        <Button className={styles.ButtonNormal} onClick={normal}>보통이다</Button>
        <Button className={styles.ButtonYes} onClick={yes}>그렇다</Button>
      </div>
    </div>
  </>)
}