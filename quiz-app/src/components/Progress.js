import React from "react";

const Progress = ({ questionNum, index, points, maxPossiblePoints, answer }) => {
    const progress = (index / questionNum) * 100;
    return (
        <header className="progress">
            <progress max={maxPossiblePoints} value={index + Number(answer !== null)} />

            <p> Question <strong> {index + 1}</strong> / {questionNum}</p>
            <p> Points {points} / {maxPossiblePoints}</p>
            <div className="progress-bar" role="progressbar" style={{ width: `${progress}%` }} aria-valuenow={progress} aria-valuemin="0" aria-valuemax="100"></div>
        </header>
    );
};

export default Progress;
