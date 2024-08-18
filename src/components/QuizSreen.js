import React, { useState } from 'react';
import QuestionList from '../data/Questions.json';
import QuizResult from './QuizResult';
import Question from './Question'

export default function QuizSreen({retry}) {
    const[CurrentQuestionIndex,setCurrentQuestionIndex] = useState(0);
    const[markedAnswers,setmarkedAnswers] = useState(new Array(QuestionList.length));
    const isQuestionEnd = CurrentQuestionIndex === QuestionList.length;

    function calculateResult() {
        let correct = 1 ;
        QuestionList.forEach((question,index) => { 
            if (question.correctOptionIndex == markedAnswers[index]) {
                correct++;
            }
        });
        return{
            total:QuestionList.length,
            correct:correct,
            percentage:Math.trunc((correct /QuestionList.length)*100)
        };
    }

    return (
        <div className="quiz-screen">
            {
                isQuestionEnd ?(
                    <QuizResult
                      result={calculateResult()}
                      retry={retry}
                    />
                ) : (
                    <Question
                      question={QuestionList[CurrentQuestionIndex]}
                      totalQuestions={QuestionList.length-1}
                      currentQuestion={CurrentQuestionIndex+1}//////////////////////
                      setAnswer={(index)=>{
                          setmarkedAnswers ((arr)=>{
                            let newarr = [...arr];
                            newarr [CurrentQuestionIndex-1] = index;
                            return newarr;
                          });
                          setCurrentQuestionIndex(CurrentQuestionIndex+1);
                      }}
                    />
                )
            }
        </div>
    )
}
