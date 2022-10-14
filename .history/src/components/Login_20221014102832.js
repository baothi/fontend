

import React, {useState} from 'react'

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    
    return (
        <div>
            <h1>Please Login Here</h1>
            <div className="mb-3">
                <input type="text" className="form-control" name="username" placeholder="Please Enter Username" />
            </div>
        </div>
    )
}

export default Login
