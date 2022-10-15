

import React from 'react'
import {useState, useEffect} from 'react';
import {useParams, Link} from 'react-router-dom'
import {useNavigate} from 'react-router-dom';
import axios from 'axios';

function ArticleDetails(props) {

    const params = useParams()
    const [article, setArticle] = useState({})
    const [req, setReq] = useState('')
    const token = localStorage.getItem('mytoken')
    let navigate = useNavigate()

    useEffect(() => {
        fetch(`https://qatestapi.site/articles/${params.slug}/`,{
            method:'GET',
            headers: {
                'Content-Type':'application/json',
                // 'Authorization':`Token e560b64c180a3433933f9a902976312b310ae846`
                'Authorization':`Token ${token}`
            }
        })
        .then(resp => resp.json())
        .then(result => {
            setArticle(result)
            // console.log(result)
        })
        .catch(error => {
            console.log(error)
        })
    },[params.slug, token])


    useEffect(() => {
        fetch('https://qatestapi.site/dj-rest-auth/user/', {
            method:"GET",
            headers: {
                'Content-Type':'application/json',
                'Authorization':`Token ${token}`

            }

        })
        .then(resp => resp.json())
        .then(result => setReq(result))
        .catch(error => console.log(error))

    },[token])

    const updateBtn = (article) => {
        props.updateBtn(article)
    }

    const deleteBtn = (article)  => {
        const url = `https://qatestapi.site/articles/${article.slug}/`;
        const config = {     
            headers:{ 
                       'content-type': 'application/json',
                       'Authorization':`Token ${token}`
                    }
        }
        
        axios.delete(url,config)
        .then(response => {
            console.log(response);
            props.deleteBtn(article.slug)
            navigate('/articles')
        })
        .catch(error => {
            
            return
        });

    }


    return (
        <div className='container mt-4'>
            <h1>{article.title}</h1>
            <h6>
                published by {article.published} by <i className='badge rounde-pill bg-success'>{article.author}</i>
            </h6>
            <br/>
            <p>
                {article.description}
            </p>
            {req.username === article.author ? 
            <div>
            <button onClick = {() => deleteBtn(article)} className = "btn btn-danger mx-3 mt-3">Delete</button>
            <Link to = {`/update/${article.slug}`}><button onClick = {() => updateBtn(article)} className = "btn btn-success mx-3 mt-3">Update</button></Link>
            </div>
                :

                null
            }
        </div>
    )
}

export default ArticleDetails
