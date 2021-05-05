import { combineReducers, createStore } from "redux";
import quizzReducer from "./quizzReducer/quizzReducer";

const reducer = combineReducers({
    quizz: quizzReducer
})

const store = createStore(reducer);

export default store;