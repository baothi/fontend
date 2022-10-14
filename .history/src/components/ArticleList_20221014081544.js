import React from 'react'

function ArticleList() {
  return (
    <div>
      {articles.map(article =>{
        return (
          <div className='container mt-3' key={article.id}>
            <span className='badge rounde-pill bg-success'>Author {article.author}</span>
            <h2><a className='link-style' href=''>{article.title}</a></h2>
            {/* <p>{article.description}</p> */}
          </div>
        )
      })}
    </div>
  )
}

export default ArticleList
