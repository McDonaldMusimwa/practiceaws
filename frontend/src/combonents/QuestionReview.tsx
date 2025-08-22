import { useState } from "react";
import styles from "./Question.module.css";
import type{ AnsweredQuestionType } from "../types/QuestionType";
import Card from "./UI/Card";



type Props = {
  answeredquestion: AnsweredQuestionType;
};

function QuestionReview({ answeredquestion }: Props) {
  const userAnswer = answeredquestion.userAnswer;
  const [result, setResult] = useState<string>("");

  if (!answeredquestion) {
    throw new Error("Answered question cannot be null or undefined");
  }

  const correctAnswer = answeredquestion.correctAnswer;

  if (correctAnswer === userAnswer) {
    setResult("✅ Correct");
  } else if (correctAnswer !== null && correctAnswer !== undefined) {
    setResult("❌ Incorrect answer");
  } else {
    setResult("No answer provided");
  }

const questionnumber = 1;

  return (
    <div className={styles.questionComponent}>
  
      <form>
        <p className={styles.question}>
          Question {questionnumber + 1}: {answeredquestion.questionText}
        </p>
        {result && <p className={styles.result}>{result}</p>}
        {answeredquestion.choices.map((ans) => (
          <div key={ans.selection} className={styles.answers}>
            <label>
              <input
                type="radio"
                name="answer"
                value={answeredquestion.userAnswer}
                disabled
              />
              {ans.selection}: {ans.answer}
            </label>
          </div>
        ))}
      </form>

      <div className={styles.reviewsection}>
        <Card>{result}</Card>
        <Card>{answeredquestion.explanation}</Card>
      </div>
    </div>
  );
}
export default QuestionReview;