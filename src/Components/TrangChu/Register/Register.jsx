import axios from 'axios';
import './Register.module.scss';
import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Register() {
    const [reEnterPassword, setReEnterPassword] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function registerUser(e) {
        e.preventDefault();
        try {
            await axios.post('/register', {
                email,
                password,
                reEnterPassword,
            });
            alert('Register successfull');
        } catch (error) {
            alert('Register failed! Try again');
        }
    }

    return (
        <div className="Auth-form-container">
            <form className="Auth-form" onSubmit={registerUser}>
                <div className="Auth-form-content">
                    <h3 className="Auth-form-title">Register</h3>
                    <div className="text-center">
                        Already registered?{' '}
                        <span>
                            <Link to="/login" className="link-primary">
                                Sign In
                            </Link>
                        </span>
                    </div>
                    <div className="form-group mt-2">
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
                    <div className="form-group mt-2">
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
                    <div className="form-group mt-2">
                        <label htmlFor="re-password">Re-enter Password</label>
                        <input
                            type="password"
                            className="form-control mt-1"
                            placeholder="Re-enter Password"
                            id="reEnterPassword"
                            name={reEnterPassword}
                            onChange={(e) => setReEnterPassword(e.target.value)}
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
}

export default Register;
