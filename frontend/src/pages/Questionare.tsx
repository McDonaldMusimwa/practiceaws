import QuestionComponent from "../combonents/Question";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import getQuestions from "../utils/http";
import { useQuestionStore } from "../store/QuestionStore";
import type { QuestionType } from "../types/QuestionType";
import LoadingGif from "../assets/loading.gif";
import styles from "./Questionare.module.css"
function QuestionareBasePage() {
  const questions = useQuestionStore((state) => state.questions);
  const loadQuestions = useQuestionStore((state) => state.loadQuestions);
  const location = useLocation();
  const pathname: string = location.pathname.replace(/\//g, "");

  const [tracker, setTracker] = useState(0);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const res = await getQuestions(pathname, "1");
        if (res) {
          loadQuestions(res); // only load into store
        }
      } catch (error) {
        console.error("Error fetching questions:", error);
      }
    };

    fetchQuestions();
  }, [pathname, loadQuestions]);

  const navigateHandler = {
    nextQuestion: () => {
      if (tracker < questions.length - 1) {
        setTracker((prev) => prev + 1);
      }
    },
    saveAnswer: () => {},
  };

  return (
    <>
  {questions.length === 0 && (
  <div className={styles.loadingcontainer}>
    <img src={LoadingGif} alt="loading" className={styles.loadinggif} />
  </div>
)}

      {questions.map((question: QuestionType, i: number) => {
        if (i === tracker) {
          return (
            <QuestionComponent
              key={tracker}
              question={question}
              navigateHandler={navigateHandler}
              questionnumber={tracker}
            />
          );
        }
        return null;
      })}
    </>
  );
}

export default QuestionareBasePage;
