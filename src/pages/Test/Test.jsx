import styles from "./Test.module.css";
import {Button} from "../../components"
import data from "../../data/data.json"
import { useState } from 'react';
import { useEffect } from 'react';

export function Test() {
  const [test, setTest] = useState(data);
  const [count, setCount] = useState(0);
  /* useEffect(() => {
    getCount();
  }, []); */

  /* function keepCount() {
    localStorage.setItem("count", count);
  }

  function getCount() {
    let savedCount = JSON.stringify(localStorage.getItem("count"));
    setCount(savedCount);
  } */

  function no(){
    setCount(prev => prev + 1);
  }
  
  function normal(){
    setCount(prev => prev + 2);
  }
  
  function yes(){
    setCount(prev => prev + 3);
  }

  return(<>
    <div className={styles.test}>
      <div className={styles.testHeader}>
        <span className={styles.name}>{test[count].section}</span>
        <span className={styles.number}>{test[count].id}/{test.length}</span>
      </div>
      <div className={styles.testBody}>
        <span className={styles.testNumber}>Q{test[count].id}.</span>
        <p className={styles.testText}>{test[count].content}</p>
      </div>
      <div className={styles.testButtons}>
        <Button className={styles.ButtonNo} onClick={no}>그렇지 않다</Button>
        <Button className={styles.ButtonNormal} onClick={normal}>보통이다</Button>
        <Button className={styles.ButtonYes} onClick={yes}>그렇다</Button>
      </div>
    </div>
  </>)
}