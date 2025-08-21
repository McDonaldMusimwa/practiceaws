import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import styles from "./timer.module.css";
import { CiClock2 } from "react-icons/ci";
/*
function DraggableTimerBox() {
  const [time, setTime] = useState(120 * 60); // 120 minutes in seconds
  const [minutes, setMinutes] = useState(120);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const mins = Math.floor(time / 60);
    const secs = time % 60;
    setMinutes(mins);
    setSeconds(secs);
  }, [time]);

  return (
    <motion.div
      drag
      dragConstraints={false}
      style={{
        width: 150,
        height: 100,
        backgroundColor: "lightblue",
        border: "1px solid blue",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "grab",
        position: "fixed", // 👈 important, so it’s free-floating
        top: 50,
        left: 50,
        zIndex: 9999,
      }}
    >
      <div className={styles.timercontainer}>
        <div
          className="drag-handle"
          style={{
            background: "#333",
            color: "#fff",
            padding: "5px",
            cursor: "grab",
            borderTopLeftRadius: "8px",
            borderTopRightRadius: "8px",
          }}
        >
          <h1>Timer</h1>
          <p>
            {minutes} mins & {seconds} seconds remaining
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default DraggableTimerBox;  */

function DraggableBox() {
  const [time, setTime] = useState(120 * 60); // 120 minutes in seconds
  const [minutes, setMinutes] = useState(120);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const mins = Math.floor(time / 60);
    const secs = time % 60;
    setMinutes(mins);
    setSeconds(secs);
  }, [time]);
  return (
    <div style={{ position: "absolute", width: "100vw", height: "20vh" }}>
...
    <motion.div
      drag
      dragConstraints={{ left: 100, right: -100, top: -100, bottom: 100 }}
      className={styles.timercontainer}
    >
 <CiClock2 />
      <span
        style={{
          color: "green",
          margin: "0 5px",
        }}
      >
        {minutes}
      </span>{" "}
      mins - {seconds} sec left
    </motion.div>
    </div>
  );
}

export default DraggableBox;
