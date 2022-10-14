import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react';
import ArticleList from './components/ArticleList';
import Navbar from './components/Navbar';
import {
  Routes,
  Route,
} from "react-router-dom";
import Login from './components/Login';
import ArticleDetails from './components/ArticleDetails';
import {useNavigate} from 'react-router-dom';
import AddArticle from './components/AddArticle';


function App() {
  const [articles, setArticles] = useState([])
  const [editArticle, setEditedArticle] = useState('')
  let navigate = useNavigate()
  const token = localStorage.getItem('mytoken')

  useEffect(() => {
    fetch(`https://qatestapi.site/articles/`, {
      method:'GET',
      headers: {
        'Content-Type':'application/json',
        // 'Authorization':`Token e560b64c180a3433933f9a902976312b310ae846`
        'Authorization':`Token ${token}`
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

  },[token])
  
  useEffect(() => {
    if(!token) {
      navigate('/')
      return;
    }

    // navigate('/articles')

    
  
  }, [token])


  return (
    <div>
      
      <Navbar />
      <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/articles' 
            element={<ArticleList articles={articles}/>}>
        </Route>
        <Route path="/articles/:slug" element={<ArticleDetails />}></Route>
        <Route path="/add" element={<AddArticle />}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
