

import React, {useState} from 'react'

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const login =() => {
        fetch(`https://qatestapi.site/api-auth/login/`,{
            method:'GET',
            headers: {
                'Content-Type':'application/json'
            }
        })
    }
    
    return (
        <div className='container mt-4'>
            <h1>Please Login Here</h1>
            <div className="mb-3">
                <input type="text" className="form-control" 
                    name="username" placeholder="Please Enter Username" 
                    value={username}
                    onChange={evt => setUsername(evt.target.value)}/>
            </div>
            <div>
                <input type="password" className="form-control" 
                    name="password" placeholder="Please Enter Password" 
                    value={password}
                    onChange={evt => setPassword(evt.target.value)}/>
            </div>
            <div className='mb-3'>
                <button type="submit" className="btn btn-success">Login</button>
            </div>
        </div>
    )
}

export default Login
