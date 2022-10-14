import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react';


function App() {
  const [questions, setQuestions] = useState(['Article One', 'Article Two'])
  const [editArticle, setEditedArticle] = useState('')

  useEffect(() => {
    fetch('https://qatestapi.site/question/')
  })
  return (
    <div>
      {questions.map(question =>{
        return <h2>
          {question}
        </h2>
      })}
    </div>
  );
}

export default App;
