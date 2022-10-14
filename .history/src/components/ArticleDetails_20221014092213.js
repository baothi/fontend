

import React from 'react'
import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom'

function ArticleDetails() {

    const params = useParams()
    const [articles, setArticle] = useState({})
    useEffect(() => {
        fetch(`https://qatestapi.site/articles/${params.slug/}`,{
            method:'GET',
            headers: {
                'Content-Type':'application/json',
                'Authorization':`Token e560b64c180a3433933f9a902976312b310ae846`
            }
        })
    })


    return (
        <div>
        detail
        </div>
    )
}

export default ArticleDetails
