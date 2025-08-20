import { useState} from "react";
import styles from "./Question.module.css";
import { useAnsweredQuestions } from "../store/QuestionStore";
import type { AnsweredQuestionType } from "../types/QuestionType";
//import Card from "./UI/Card";

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
  const saveAnswerToGlobalState = useAnsweredQuestions(
    (state) => state.saveAnsweredQuestions
  );
  const [userAnswer, setUserAnswer] = useState<string>("");
  const [result, setResult] = useState<string>("");
  const [active, setActive] = useState(true);


  if (!question) {
    throw new Error("Question cannot be null or undefined");
  }

  function saveAnswer() {
    console.log(userAnswer);

    if (!userAnswer) {
      setResult("⚠️ Please select an answer before saving");
      return;
    }
    setActive(false);

    try {
      const answeredQuestion: AnsweredQuestionType = {
        ...question,
        userAnswer: userAnswer,
      };
   

      saveAnswerToGlobalState(answeredQuestion);
      navigateHandler.nextQuestion();
    } catch (error) {
      console.error("Error setting questionAnswered", error);
    }

    /*
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
      */
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
      <button type="button" className={styles.button} onClick={saveAnswer}>
        Next
      </button>
      {/*
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
          onClick={saveAnswer}
        >
          Save
        </button>
      )}
      */}
    </div>
  );
}

export default QuestionComponent;
