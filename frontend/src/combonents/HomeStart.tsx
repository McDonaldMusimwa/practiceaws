import styles from "./Homestart.module.css";
import { useState } from "react";
import Img1 from "../assets/practice.png";
import Img2 from "../assets/practice2.png";
import Img3 from "../assets/practice3.png";
import Img4 from "../assets/practice4.png";
type Props = {
  startQuestionaire: () => void;
  exam: string;
};

function HomeStart({ startQuestionaire, exam }: Props) {
  const [startTimer, setStartTimer] = useState(false);

  const handleStart = () => {
    if (startQuestionaire === null || typeof startQuestionaire !== "function") {
      throw new Error("Start is not a function");
    }
    setStartTimer(true);
  };

  const startQuestionaireHandler = () => {
    handleStart();
    try {
      startQuestionaire();
    } catch (error) {
      console.error("Failed to start:", error);
      throw error;
    }
  };
  console.log(startTimer);
  const images = [Img1, Img2, Img3, Img4];
  
  return (
    <>
      <div className={styles.homeStart}>
       <section className={styles.herO}>
  <img
    src={images[Math.floor(Math.random() * images.length)]}
    alt="aws cloud prep"
  />
  <p>
    Press start to get started with practice of Aws Questions of {exam} exam concepts.
  </p>
</section>


        <button onClick={startQuestionaireHandler}>Start</button>
      </div>{" "}
    </>
  );
}

export default HomeStart;
