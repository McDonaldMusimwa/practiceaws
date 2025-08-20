import { useState } from "react";
import styles from "./Question.module.css";
import Card from "./UI/Card";

interface Choice {
  selection: string;
  answer: string;
}

interface QuestionType {
  questionText: string;
  correctAnswer: string;
  questionid: string;
  examcode: string;
  difficulty: string;
  section_module: string;
  isFree: boolean;
  isGeneral: boolean;
  choices: Choice[];
  domain: string;
  explanation: string;
}

type NavigateHandlerType = {
  nextQuestion: () => void;
  saveAnswer: () => void;
};

type Props = {
  question: QuestionType;
  navigateHandler: NavigateHandlerType;
  questionnumber: number;
};

function QuestionComponent({
  question,
  navigateHandler,
  questionnumber,
}: Props) {
  const [answer, setAnswer] = useState<string>("");
  const [userAnswer, setUserAnswer] = useState<string>("");
  const [result, setResult] = useState<string>("");
  const [active, setActive] = useState(true);
  const [questionAnswered, setQuestionAnswered] = useState([]);

  if (!question) {
    throw new Error("Question cannot be null or undefined");
  }

  function saveAnswerCompare() {
    if (!question || !question.correctAnswer) {
      console.error("Question or correctAnswer cannot be null or undefined");
      return;
    }

    const correctAnswer = question.correctAnswer;
    setAnswer(correctAnswer);

    if (!userAnswer) {
      setResult("⚠️ Please select an answer before saving");
      return;
    }

    setActive(false);

    try {
      setQuestionAnswered((prev) => [
        ...prev,
        {
          ...question,
          userAnswer,
        },
      ]);
    } catch (error) {
      console.error("Error setting questionAnswered", error);
    }

    if (correctAnswer === userAnswer) {
      setResult("✅ Correct");
    } else {
      setResult("❌ Incorrect answer");
    }

    try {
      navigateHandler.saveAnswer();
    } catch (error) {
      console.error("Error calling navigateHandler.saveAnswer()", error);
    }
  }

  return (
    <div className={styles.questionComponent}>
      <form>
        <p className={styles.question}>
          Question {questionnumber + 1}: {question.questionText}
        </p>
        {question.choices.map((ans) => (
          <div key={ans.selection} className={styles.answers}>
            <label>
              <input
                type="radio"
                name="answer"
                value={ans.selection}
                onChange={(e) => setUserAnswer(e.target.value)}
                disabled={!active}
              />
              {ans.selection}: {ans.answer}
            </label>
          </div>
        ))}
      </form>

      {answer && (
        <div className={styles.reviewsection}>
          <Card>{result}</Card>
          <Card>{question.explanation}</Card>
        </div>
      )}

      {answer ? (
        <button
          className={styles.button}
          onClick={navigateHandler.nextQuestion}
        >
          Next
        </button>
      ) : (
        <button
          className={styles.button}
          type="button"
          onClick={saveAnswerCompare}
        >
          Save
        </button>
      )}
    </div>
  );
}

export default QuestionComponent;
