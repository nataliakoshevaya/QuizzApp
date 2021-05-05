const  SET_SCORE = "SET_SCORE";

const initialState = {
    quizz: [
            {
                questionText: "Who invented JavaScript?",
                answerOptions: [
                    { answerText: 'Douglas Crockford', isCorrect: false },
                    { answerText: 'Sheryl Sandberg', isCorrect: false },
                    { answerText: 'Brendan Eich', isCorrect: true },
                    { answerText: 'John Rezig', isCorrect: false}
                ],
            },
            {
                questionText: 'Who is CEO of Tesla?',
                answerOptions: [
                    { answerText: 'Jeff Bezos', isCorrect: false },
                    { answerText: 'Elon Musk', isCorrect: true },
                    { answerText: 'Bill Gates', isCorrect: false },
                    { answerText: 'Tony Stark', isCorrect: false },
                ],
            },
            {
                questionText: 'The iPhone was created by which company?',
                answerOptions: [
                    { answerText: 'Apple', isCorrect: true },
                    { answerText: 'Intel', isCorrect: false },
                    { answerText: 'Amazon', isCorrect: false },
                    { answerText: 'Microsoft', isCorrect: false },
                ],
            },
            {
                questionText: 'Which tool can you use to ensure code quality?',
                answerOptions: [
                    { answerText: 'Angular', isCorrect: false },
                    { answerText: 'jQuery', isCorrect: false },
                    { answerText: 'RequireJS', isCorrect: false },
                    { answerText: 'ESLint', isCorrect: true },
                ],
            }
        ],
    score: 0           
}
const quizzReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_SCORE: 
          return {
              ...state,
              score: action.payload
          }
        default:
           return state
    }
}

export const setScore = (score) => ({
    type: SET_SCORE,
    payload: score
})

export default quizzReducer;