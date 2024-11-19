import React, { useState } from 'react';
import './loginsignup.css';
 
import user_icon from '../Assets/person.png';
import email_icon from '../Assets/email.png';
import password_icon from '../Assets/password.png';
 
const Loginsignup = () => {
    const [action, setAction] = useState("Sign up");

    return (
        
     <body className='background'>
        <div className='padding'></div>
        <div className='container'>
            <div className='header'>
                <div className='text'>{action}</div>
                <div className='underline'></div>
            </div>
            <div className='inputs'>
                {action === "Login" ? <div></div> :
                <div className='input'>
                    <img src={user_icon} alt='User Icon' />
                    <input type='text' placeholder='Name' />
                </div>}
               
                <div className='input'>
                    <img src={email_icon} alt='Email Icon' />
                    <input type='email' placeholder='Email' />
                </div>
 
                <div className='input'>
                    <img src={password_icon} alt='Password Icon' />
                    <input type='password' placeholder='Password' />
                </div>
            </div>
            {action === "Sign up" ? <div></div> :
            <div className='forgot-password'>
                forgot password? <span>Click here</span>
            </div>}
            <div className='submit-container'>
                <div className={action === "Login" ? "submit gray" : "submit"} onClick={() => setAction("Sign up")}>Sign up</div>
                <div className={action === "Sign up" ? "submit gray" : "submit"} onClick={() => setAction("Login")}>Login</div>
            </div>
        </div>
        
     </body>       
        
        
    );
}

export default Loginsignup;