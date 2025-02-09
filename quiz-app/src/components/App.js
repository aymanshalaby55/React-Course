import { useEffect, useReducer } from "react";
import Header from "./Header";
import Loader from './Loader'
import Main from "./Main";
import Error from "../Error";
import StartScreen from "./StartScreen";
import Question from "./Question";
import NextButton from "./NextButton";
import Progress from "./Progress";

const initialState = {
  questions: [],
  status: "loading",
  index: 0,
  answer: null,
  points: 0
}

export default function App() {

  const [{ questions, status, index, answer, points }, dispatch] = useReducer(reducer, initialState);
  const questionNum = questions.length;
  const maxPossiblePoints = questions.reduce((prev, cur) => prev + cur.point, 0)


  console.log(index);
  function reducer(state, action) {
    switch (action.type) {
      case "dataReceived":
        return {
          ...state,
          questions: action.payload,
          status: "ready",
        };
      case "dataFailed":
        return {
          ...state,
          status: "error"
        };
      case "start":
        return {
          ...state,
          status: "start",
        }
      case "newAnswer":
        const questoin = state.questions.at(state.index);
        return {
          ...state,
          answer: action.payload,
          points: (questoin.correctOption === action.payload) ? state.points + questoin.point : state.point,
        }
      case "nextQuestion":
        return {
          ...state,
          index: state.index + 1,
          answer: null
        }
      default:
        return new Error("unkown Error");
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8000/questions');
        const data = await response.json();
        console.log(data);
        dispatch({ type: "dataReceived", payload: data });
      } catch (error) {
        dispatch({ type: "dataFailed" });
      }
    };

    fetchData();
  }, []);


  return <div className="app">
    <Header />

    <Main>
      {status === 'loading' && <Loader />}
      {status === 'error' && <Error />}
      {status === 'ready' && <StartScreen dispatch={dispatch} questionNum={questionNum} />}
      {status === 'start' && (
        <>
          <Progress questionNum={questionNum} index={index} maxPossiblePoints={maxPossiblePoints} answer={answer} />
          <Question question={questions[index]} dispatch={dispatch} answer={answer} />
          <NextButton dispatch={dispatch} answer={answer} />
        </>)}
    </Main>
  </div>
}