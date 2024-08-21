import { Link, Navigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import React from 'react';
import axios from 'axios';
import './login.scss';
import { UserContext } from '../../../Context/UserContext';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);

    const { setUser } = useContext(UserContext);

    async function handleLoginSubmit(e) {
        e.preventDefault();
        try {
            const { data } = await axios.post(
                '/login',
                { email, password },
                {
                    withCredentials: true, // Thiết lập để gửi cookie cùng với yêu cầu
                },
            );
            setUser(data);
            alert('login successfull');
            setRedirect(true);
        } catch (error) {
            alert('login fail! Try again');
        }
    }

    if (redirect) {
        return <Navigate to={'/home'} />;
    }

    return (
        <div className="Auth-form-container">
            <form className="Auth-form" onSubmit={handleLoginSubmit}>
                <div className="Auth-form-content">
                    <h3 className="Auth-form-title">Sign In</h3>
                    <div className="text-center">
                        Not registered yet?{' '}
                        <span>
                            <Link to="/register" className="link-primary">
                                Register
                            </Link>{' '}
                        </span>
                    </div>
                    <div className="form-group mt-3">
                        <label htmlFor="email">Email address</label>
                        <input
                            type="email"
                            className="form-control mt-1"
                            placeholder="Enter email"
                            id="email"
                            name={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            className="form-control mt-1"
                            placeholder="Enter password"
                            id="password"
                            name={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="d-grid gap-2 mt-3">
                        <button type="submit" className="btn btn-primary">
                            Submit
                        </button>
                    </div>
                    <p className="text-center mt-2">
                        Forgot{' '}
                        <a href="/#" className="password-btn">
                            password?
                        </a>
                    </p>
                </div>
            </form>
        </div>
    );
};

export default Login;
