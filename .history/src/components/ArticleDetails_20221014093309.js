

import React from 'react'
import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom'

function ArticleDetails() {

    const params = useParams()
    const [article, setArticle] = useState({})
    useEffect(() => {
        fetch(`https://qatestapi.site/articles/${params.slug}/`,{
            method:'GET',
            headers: {
                'Content-Type':'application/json',
                'Authorization':`Token e560b64c180a3433933f9a902976312b310ae846`
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
    },[params.slug])


    return (
        <div className='container mt-4'>
            <h1>{article.title}</h1>
            <h6>
                published by {article.published} by <i>{article.author}</i>
            </h6>
        </div>
    )
}

export default ArticleDetails
