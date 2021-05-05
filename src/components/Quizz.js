import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setScore } from "../store/quizzReducer/quizzReducer";
import './Quizz.scss';

const TotalScore = ({ score }) => {
    return (
        <div>
            {score > 2 ? <p>Good job</p> : <p>Don't worry next time will be better</p>}
            Total score: {score}
        </div>
    )
}

const QuizzItem = ({score, quizz, currentQuestion, answerOptionClick}) => {
    return (
        <div>
            <div>
                Score: {score}
            </div>
            <div>
                {quizz[currentQuestion].questionText}
            </div>
            <div className="question__wrapper">
                {quizz[currentQuestion].answerOptions.map((answerOption) => (
                    <button className="answer__btn" onClick={() => answerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
                ))}
            </div>
        </div>
    )
}

const Quizz = () => {
    const { quizz, score } = useSelector(state => state.quizz);
    const dispatch = useDispatch();

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);

    const answerOptionClick = (isCorrect) => {
        if (isCorrect) {
            dispatch(setScore(score + 1))
        }

        const nextQuastion = currentQuestion + 1;
        if (nextQuastion < quizz.length) {
            setCurrentQuestion(nextQuastion)
        } else {
            setShowScore(true)
        }
    }


    return (
        <div className="wrapper">
            Quizz
            {showScore ?
                <TotalScore score={score} /> :
                <QuizzItem score={score}
                            answerOptionClick={answerOptionClick}
                            quizz={quizz}
                            currentQuestion={currentQuestion}/>
            }
        </div>
    )
}

export default Quizz