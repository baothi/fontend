import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react';


function App() {
  const [articles, setArticles] = useState(['Article One', 'Article Two'])
  const [editArticle, setEditedArticle] = useState('')

  useEffect(() => {
    fetch('https://blogrestapi1.herokuapp.com/articles/', {
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
      {articles.map(article =>{
        return <h2>
          {article}
        </h2>
      })}
    </div>
  );
}

export default App;
