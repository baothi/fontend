import React, {useState, useEffect} from 'react'
import APIService from '../components/APIService';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';

function UpdateArticle(props) {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    const token = localStorage.getItem('mytoken')

    let navigate = useNavigate()

    useEffect(() => {
        setTitle(props.article.title)
        setDescription(props.article.description)

    }, [props.article])

    const updateArticle = () => {
        // APIService.UpdateArticle(props.article.slug , {title, description}, token)
        // .then(resp => {
        //     props.updatedData(resp)
        //     navigate('/articles')
            
        // })
        // .catch(error => console.log(error))
        const url = `https://qatestapi.site/articles/${props.article.slug}/`;
        const config = {     
            headers:{ 
                       'content-type': 'application/json',
                       'Authorization':`Token ${token}`
                    }
        }
        const tobody = JSON.stringify({title, description});
        
        axios.put(url, tobody, config)
        .then(response => {
            console.log(response.data);
            props.updatedData(response.data)
            navigate('/articles')
        })
        .catch(error => {
            
            return
        });

    }

    return (
        <div className = "container mt-5">

            <h2>Update Article</h2>
            <div className = "mb-3">
                <input type="text" className="form-control"
                placeholder = "Please Enter Title"
                value = {title}
                onChange = {evt => setTitle(evt.target.value)}
                
            />
            </div>

            <div className = "mb-3">
                <textarea className = "form-control"
                rows = "5"
                value = {description}
                onChange = {evt => setDescription(evt.target.value)}
            
            />
            </div>

            <div className = "mb-3">
                <button onClick = {updateArticle} className = "btn btn-success">Update Article</button>

            </div>
            
        </div>
    )
}

export default UpdateArticle
