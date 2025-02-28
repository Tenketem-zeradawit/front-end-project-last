import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { APIUrl, handleError, handleSuccess } from '../utils';

function Login() {
    const [loginInfo, setLoginInfo] = useState({
        email: '',
        password: ''
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLoginInfo({ ...loginInfo, [name]: value });
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        const { email, password } = loginInfo;
        if (!email || !password) {
            return handleError('Email and password are required');
        }
        try {
            const url = `${APIUrl}/auth/login`;
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(loginInfo)
            });
            const result = await response.json();
            const { success, message, jwtToken, name, error } = result;
            if (success) {
                handleSuccess(message);
                localStorage.setItem('token', jwtToken);
                localStorage.setItem('loggedInUser', name);
                setTimeout(() => {
                    navigate('/home');
                }, 1000);
            } else if (error) {
                handleError(error?.details?.[0]?.message || message);
            } else {
                handleError(message);
            }
        } catch (err) {
            handleError(err);
        }
    };

    return (
        <>
          
            <header >
                <div class='top'>
                    
                    <h3 style={{ margin: 0 }}>
                        <span className="fw-bolder fs-3" style={{ color: 'orange', border: '4px solid yellow', padding: '5px' }}>
                          FINANCIALtrack
                        </span>
                    </h3>

                   
                    <a href="https://www.facebook.com/tenketem.zeradawit" target="_blank" rel="noopener noreferrer"
                        style={{ textDecoration: 'none', fontSize: '18px', color: '#007bff' }}>
                        Contact Us
                    </a>
                </div>
            </header>

          
            <div className='container'>
                <h1>Login</h1>
                <form onSubmit={handleLogin}>
                    <div>
                        <label htmlFor='email'>Email</label>
                        <input
                            onChange={handleChange}
                            type='email'
                            name='email'
                            placeholder='Enter your email...'
                            value={loginInfo.email}
                        />
                    </div>
                    <div>
                        <label htmlFor='password'>Password</label>
                        <input
                            onChange={handleChange}
                            type='password'
                            name='password'
                            placeholder='Enter your password...'
                            value={loginInfo.password}
                        />
                    </div>
                    <button type='submit'>Login</button>
                    <span>Don't have an account?
                        <Link to="/signup"> Signup</Link>
                    </span>
                </form>
                <ToastContainer />
            </div>

          
            <footer className='footer'>
                <p>Web Developer © 2025. All Rights Reserved. Designed By:
                    <a href="https://tenketem-zeradawit.github.io/-first-project-/#" target="_blank" rel="noopener noreferrer"
                        style={{ color: '#00f', marginLeft: '5px', textDecoration: 'none', fontSize:'23px' }}>
                        Tenketem Zeradawit
                    </a>
                </p>
            </footer>
        </>
    );
}

export default Login;
