import React from 'react'

export default function JoinSreen({start:quizStart}) {
    return (
        <div className="join-sreen">
            <h2>Join Sreen</h2>
            <p>create quiz app for first time!</p>
            <button onClick={quizStart}>start</button>
        </div>
    )
}
