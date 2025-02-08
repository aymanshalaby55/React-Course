import { useEffect, useReducer } from "react";
import Header from "./Header";
import Loader from './Loader'
import Main from "./Main";
import Error from "../Error";
import StartScreen from "./StartScreen";
import Question from "./Question";

const initialState = {
  questions: [],
  status: "loading",
  index: 0,
}

export default function App() {

  const [{ questions, status, index }, dispatch] = useReducer(reducer, initialState);
  const questionNum = questions.length;



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
      {status === 'start' && <Question question={questions[index]} />}
    </Main>
  </div>
}