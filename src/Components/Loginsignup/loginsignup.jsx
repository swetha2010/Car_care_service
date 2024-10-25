import React, { useState, useEffect } from 'react';
import './loginsignup.css';

import user_icon from '../Assets/person.png';
import email_icon from '../Assets/email.png';
import password_icon from '../Assets/password.png';

const Loginsignup = () => {
    const [action, setAction] = useState("Sign up");
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email,setEmail] = useState('');

    useEffect(() => {
        setUsername('');
        setEmail('');
        setPassword('');
    }, [action]);

    return (
        <div className='container'>
            <div className='header'>
                <div className='text'>{action}</div>
                <div className='underline'></div>
            </div>
            <div className='inputs'>
                {action === "Sign up" && (
                    <div className='input'>
                        <img src={user_icon} alt='User Icon' />
                        <input type='text' placeholder='Name' value={username} onChange={(e) => setUsername(e.target.value)} />
                    </div>
                )}
                <div className='input'>
                    <img src={email_icon} alt='Email Icon' />
                    <input type='Email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className='input'>
                    <img src={password_icon} alt='Password Icon' />
                    <input type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
            </div>
            {action === "Login" && (
                <div className='forgot-password'>
                    Forgot password? <span>Click here</span>
                </div>
            )}
            <div className='submit-container'>
                <div className={action === "Login" ? "submit gray" : "submit"} onClick={() => setAction("Sign up")}>Sign up</div>
                <div className={action === "Sign up" ? "submit gray" : "submit"} onClick={() => setAction("Login")}>Login</div>
            </div>
        </div>
    );
}

export default Loginsignup;
