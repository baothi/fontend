import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react';


function App() {
  const [articlequs, setArticles] = useState(['Article One', 'Article Two'])
  const [editArticle, setEditedArticle] = useState('')

  useEffect(() => {
    fetch('https://qatestapi.site/articles/', {
      method:'GET',
      headers: {
        'Content-Type':'application/json',
        'Authorization':`Token e560b64c180a3433933f9a902976312b310ae846`
      }
    })
    .then(resp => resp.json())
    .then(result => {
      setArticles(result)
    })
    .catch(error => {
      console.log(error)
    })

  },[])
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
