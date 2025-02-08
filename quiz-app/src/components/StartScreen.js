import React from "react"

const StartScreen = ({QuestionNum , dispatch}) => {
    return (
        <div className="start-screen">
            <h1>Welcome to the Quiz App!</h1>
            <h3>{QuestionNum} questions to test your react mastery</h3>
            <button className="btn btn-ui" onClick={() => dispatch({type: "start"})}>Start Quiz</button>
        </div>
    )
};

export default StartScreen;
