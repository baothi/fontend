
import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom';
import axios from 'axios';

function Login() {
    const [username,setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    let navigate = useNavigate()
    let formData = new FormData(); 
    formData.append("username", username);
    formData.append("password", password);
    const config = {     
        headers: { 'content-type': 'multipart/form-data' }
    }
    const url = 'https://qatestapi.site/dj-rest-auth/login/'
    // https://stackoverflow.com/questions/43085762/how-to-pass-form-values-as-formdata-in-reactjs-on-submit-function


    const login =() => {
        axios.post(url, formData, config)
        .then(response => {
            localStorage.setItem('mytoken', response.data.key)
            navigate('/articles')
        })
        .catch(error => {
            setError("Invalid username or password")
            return
        });
    };


    return (
        <div className = "container mt-4">
            <br/>
            
            {error ? 
                <div className = "alert alert-warning alert-dismissible" role="alert">
                    <p>{error}</p>
                
                </div>

                :

                null
        
            }

            <h1>Please Login Here</h1>

            <div className = "mb-3">
                <input type = "text" className = "form-control" 
                name = "username" placeholder="Please Enter Username"
                value = {username}
                onChange = {evt => setUsername(evt.target.value)}
             />
        
            </div>


            <div className = "mb-3">
                <input type = "password" className = "form-control" 
                name = "password" placeholder="Please Enter Password"
                value = {password}
                onChange = {evt => setPassword(evt.target.value)}
             />
        
            </div>

            <div className = "mb-3">

                <button onClick = {login} className = "btn btn-success">Login</button>


            </div>
        </div>
    )
}

export default Login
