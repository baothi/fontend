import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react';


function App() {
  const [articles, setArticles] = useState(['Article One', 'Article Two'])
  const [editArticle, setEditedArticle] = useState('')
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
