import { useState} from "react";
import styles from "./Question.module.css";
import { useNavigate } from "react-router";
import type { AnsweredQuestionType,QuestionType } from "../types/QuestionType";
import TimerCombonent from "./TimerCombonent";
import { useQuestionStore } from "../store/QuestionStore";
import { useAnsweredQuestions } from "../store/QuestionStore";
//import Card from "./UI/Card";

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
  const navigate = useNavigate();
/* determine number of question */
const numberquestions = useQuestionStore((state) => state.questions.length);
const numberanswered = useAnsweredQuestions(
  (state) => state.answeredquestions.length

)

console.log("We have answered " + numberanswered +"Out of " + numberquestions)
  if (!question) {
    throw new Error("Question cannot be null or undefined");
  }

  function saveAnswer() {
    console.log(userAnswer);

    if (userAnswer.length===0) {
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

   
  }

if (numberanswered === numberquestions-1) {
  window.alert("You have reached the last question");
}

  return (
    <div className={styles.questionComponent}>
      <TimerCombonent />
      <form>
        <p className={styles.question}>
          Question {questionnumber + 1}: {question.questionText}
        </p>
        {result && <p className={styles.result}>{result}</p>}
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
      {numberanswered === numberquestions-1 ? (<button type="button" disabled={!active} className={styles.button} onClick={()=> navigate("/Exam/Summary")}>
         Finish Questionare 
      </button>) :( <button type="button" disabled={!active} className={styles.button} onClick={saveAnswer}>
      Next
      </button>)}
          </div>
  );
}

export default QuestionComponent;
