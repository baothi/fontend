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
import Register from './components/Register';
import UpdateArticle from './components/UpdateArticle';


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
  

  const insertedArticle = (article) => {
    const new_articles = [...articles, article]
    setArticles(new_articles)
  }

  const updatedData = (article) => {
    const new_articles = articles.map(myarticle => {
      if(myarticle.slug === article.slug) {
        return article
      } else {
        return myarticle
      }
    })

    setArticles(new_articles)
  }

  const updateBtn = (article) => {
    setEditedArticle(article)

  }

  const deleteBtn = (article) => {
    const new_articles = articles.filter(myarticle => {
      if(myarticle.slug === article) {
        return false;
      }
      return true;
    })

    setArticles(new_articles)
  }

  return (
    <div>
      
      <Navbar />
      <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/articles' 
            element={<ArticleList articles={articles}/>}>
        </Route>
        <Route path="/articles/:slug" element={<ArticleDetails updateBtn = {updateBtn} deleteBtn = {deleteBtn}/>}></Route>
        <Route path="/add" element={<AddArticle insertedArticle = {insertedArticle}/>}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/update/:slug" element = {
            <UpdateArticle article = {editArticle} updatedData = {updatedData}/>
          }></Route>
      </Routes>
      
    </div>
  );
}

export default App;
