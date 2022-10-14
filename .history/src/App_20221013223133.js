import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react';


function App() {
  const [articles, setArticles] = useState(['Article One', 'Article Two'])
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
      // setArticles(result)
      console.log(result)
    })
    .catch(error => {
      console.log(error)
    })

  },[])
  return (
    <div>
      {articles.map(article =>{
        return (
          <div>
            {article.title}
          </div>
        )
      })}
    </div>
  );
}

export default App;