
import { useAnsweredQuestions } from "../../store/QuestionStore";
import QuestionReview from "../../combonents/QuestionReview";
function ExamSummaryPage() {
    const answeredquestions = useAnsweredQuestions((state) => state.answeredquestions);

    if (answeredquestions === null || answeredquestions === undefined) {
        throw new Error("Answered questions cannot be null or undefined");
    }

    return <div>
        {answeredquestions.map((answeredquestion, index) => {
            if (answeredquestion === null || answeredquestion === undefined) {
                throw new Error("Answered question cannot be null or undefined");
            }
            return <QuestionReview key={index} answeredquestion={answeredquestion} />
        })}
    </div>
}

export default ExamSummaryPage