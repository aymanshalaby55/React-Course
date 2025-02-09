import React from "react";
import Options from "./Options";

const Question = ({ question, dispatch, answer }) => {
    console.log(question);
    return (
        <div>
            <h4>{question.question}</h4>

            <div className="question">
                <Options question={question} dispatch={dispatch} answer={answer} />
            </div>
        </div>
    );
};

export default Question;
