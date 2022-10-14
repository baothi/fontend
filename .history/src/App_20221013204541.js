import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react';


function App() {
  const [questions, setQuestions] = useState(['Article One', 'Article Two'])
  const [editArticle, setEditedArticle] = useState('')

  useEffect(() => {
    fetch('https://qatestapi.site/question/', {
      method:'GET',
      headers: {
        'Content-Type':'application/json',
        'Authorization':`Token ${token}`
      }
    })
    .then(resp => resp.json())
    .then(result => {
      setArticles(result)
    })
    .catch(error => {
      console.log(error)
    })

  }, [token])
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
