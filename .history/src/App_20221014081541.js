import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react';
import ArticleList from './components/ArticleList';


function App() {
  const [articles, setArticles] = useState([])
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
      // console.log(result)
    })
    .catch(error => {
      console.log(error)
    })

  },[])
  return (
    <div>
      <ArticleList />
    </div>
  );
}

export default App;
