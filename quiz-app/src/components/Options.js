import React from "react"

const Options = ({ question, dispatch, answer }) => {
    console.log(question);
    const hasAnswer = answer !== null;
    return (
        <div className="options">
            {
                question.options.map((opt, index) => (
                    <button className={`btn btn-option ${index === answer ? "answer" : ""} 
                        ${hasAnswer ?
                            index === question.correctOption ? "correct" : "wrong" : ""}`}
                        key={index} onClick={() => { dispatch({ type: "newAnswer", payload: index }) }}
                        disabled={hasAnswer}
                    >
                        {opt}
                    </button>
                ))
            }
        </div>
    )
};

export default Options;
