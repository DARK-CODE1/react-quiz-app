import React from 'react'

export default function QuizResult({result,retry}) {
    return (
        <div className="result-sreen">
            <h2>Result: {result.percentage}%</h2>
            <p>Selected {result.correct} correct options out of {result.total-1} Questions.</p>
            <button onClick={retry}>retry</button>
        </div>
    )
}
