

import React from 'react'
import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom'

function ArticleDetails() {

    const params = useParams()
    const [articles, setArticle] = useState({})
    useEffect(() => {
        fetch()
    })


    return (
        <div>
        detail
        </div>
    )
}

export default ArticleDetails
