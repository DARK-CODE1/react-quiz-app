import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import QuizSreen from './components/QuizSreen.js';
import JoinSreen from './components/JoinSreen.js';
import Navbar from './components/Navbar';


function App() {
  const[isQuizStarted,setIsQuizStarted] =useState(false)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
         <p> Use App.js And Save To Reload.</p>
      </header>
      <Navbar/>
      <div className="quiz-container">
        {
          isQuizStarted?(
            <QuizSreen retry={()=>setIsQuizStarted(false)}/>
          ):(
            <JoinSreen start={()=>setIsQuizStarted(true)}/>
          )
        }
      </div>
    </div>
  );
}

export default App;
