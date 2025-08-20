import  { useState, useEffect } from 'react';
import styles from "./timer.module.css";

const TimerCombonent = () => {
  const [time, setTime] = useState(120 * 60); // 120 minutes in seconds
  const [minutes, setMinutes] = useState(120);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (time > 0) {
        setTime(time - 1);
      } else {
        clearInterval(intervalId);
      }
    }, 1000);
    return () => clearInterval(intervalId);
  }, [time]);

  useEffect(() => {
    const mins = Math.floor(time / 60);
    const secs = time % 60;
    setMinutes(mins);
    setSeconds(secs);
  }, [time]);

return (
  <div className={styles.timercontainer}>
    <h1>Timer</h1>
    <p>
      {minutes} mins &{seconds} seconds remaining
    </p>
  </div>
);
};

export default TimerCombonent;