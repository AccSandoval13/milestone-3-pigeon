import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';


const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setUserPassword] = useState('');

    const handleSubmit = () => {
        console.log(handleSubmit)

    };

    return (
        <div className='formContainer' >
            <div className="signContainer">
            <h1>Pigeon</h1>
            <h2>Welcome Back!</h2>
                <br />
                <label htmlFor="username">Username: </label>
                <br />
                <input
                    type="text"
                    placeholder='Username'
                    id="username"
                    value={username}
                    onChange={ev => setUsername(ev.target.value)}
                />
                <br />
                <label htmlFor="password">Password: </label>
                <br />
                <input
                    type="password"
                    placeholder='Password'
                    id="password"
                    value={password}
                    onChange={ev => setUserPassword(ev.target.value)}
                />
                <br />
                {/* will handle fetch from firebase/backend once set up correctly */}
                <button className="btn" onClick={handleSubmit}>
                    Submit
                </button>
                <p>
                If you do not have an account, - <Link to="/createuser">Sign up here</Link>
                </p>
                </div>
            </div>

    );
}
export default Login;