

import React from 'react'
import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom'

function ArticleDetails() {

    const params = useParams()
    const [articles, setArticle] = useState({})
    useEffect(() => {
        fetch(`https://qatestapi.site/articles/${params.slug/}`)
    })


    return (
        <div>
        detail
        </div>
    )
}

export default ArticleDetails
