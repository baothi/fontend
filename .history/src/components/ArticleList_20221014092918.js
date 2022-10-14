import {Link} from 'react-router-dom';

function ArticleList(props) {
  return (
    <div>
      {props.articles[0] && props.articles.map(article => {
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
