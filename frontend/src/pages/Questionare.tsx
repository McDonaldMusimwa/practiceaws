  import QuestionComponent from "../combonents/Question";
import { useState, useEffect } from "react";
import { useLocation } from "react-router";
import getQuestions from "../utils/http";
import TimerCombonent from "../combonents/TimerCombonent";

function Home() {
  const [data, setData] = useState<any>([]);
  const location = useLocation();
  const pathname = location.pathname.replace(/\//g, "");

  const fetchQuestions = async () => {
    try {
      const res = await getQuestions(pathname, "2");
      if (res) {
        setData(res);
      } else {
        console.error("Failed to fetch questions");
      }
    } catch (error) {
      console.error("Error fetching questions:", error);
    }
  };

  const [tracker, setTracker] = useState(0);

  const navigateHandler = {
    nextQuestion: () => {
      setTracker((prev) => (prev < data.length - 1 ? prev + 1 : prev));
    },
    saveAnswer: () => {
      // Implement save answer logic here
    },
  };

  useEffect(() => {
    fetchQuestions();
  }, [pathname]);

  if (!data.length) {
    return <div>Loading...</div>;
  }

  return (
    <>
   <TimerCombonent />
      {data.map((question: any, i: number) => {
        if (i === tracker) {
          return (
            <QuestionComponent
              question={question}
              navigateHandler={navigateHandler}
              questionnumber={tracker}
              key={tracker}
            />
          );
        }
        return null;
      })}
    </>
  );
}
export default Home;