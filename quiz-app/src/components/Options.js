import React from "react"

const Options = ({ question }) => {
    console.log(question);
    return (
        <div className="options">
            {
                question.options.map((opt) => (
                    <button className="btn btn-option" key={opt.id}>
                        {opt}
                    </button>
                ))
            }
        </div>
    )
};

export default Options;
