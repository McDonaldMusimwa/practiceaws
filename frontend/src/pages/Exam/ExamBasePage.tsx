import HomeStart from '../../combonents/HomeStart';
import Home from '../Questionare';
import styles from "./Exam.module.css"
import { useState } from 'react';
import { useLocation } from "react-router";
function ExamBasePage() {
const [start, setStart] = useState(false)
const location = useLocation();
const path = location.pathname;
  const startQuestionaireHandler = () => {
    if (setStart === null || typeof setStart !== 'function') {
      throw new Error('Start is not a function');
    }
    try {
      setStart(true);
    } catch (error) {
      console.error('Failed to start:', error);
      throw error;
    }
  };
let examName =""; 
  switch (path) {
    case '/SAA-C03':
      examName = "SolutionsArchitect";
      break;
    case '/CP-C03':
      examName = "Practitioner";
      break;
    case '/AIP':
      examName = "aipractitioner";
      break;
    default:
      break;
  }


    return (
        <div className={styles.base}>
             {start?<Home /> :  <HomeStart exam={examName} startQuestionaire={startQuestionaireHandler} /> }
   
        </div>
    );
}

export default ExamBasePage;