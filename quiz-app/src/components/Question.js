import React from "react";
import Options from "./Options";

const Question = ({ question }) => {
    console.log(question);
    return (
        <div>
            <h4>{question.text}</h4>

            <div className="question">
                <div>
                    <Options question={question}/>
                </div>
            </div>
        </div>
    );
};

export default Question;
