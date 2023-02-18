import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import './Register.css';
import { IRegister } from '../../types/types'
import CSRFToken from "../../components/CSRFToken";
import { connect } from "react-redux";
import { register } from "../../actions/auth/actions";
import { useTypedSelector } from "../../hooks/redux";

interface RegisterProps extends React.PropsWithChildren {
    register: (username: string, password: string, re_password: string) => void
}

const Register: React.FC<RegisterProps> = ({ register }) => {
    const navigate = useNavigate();
    const [registerData, setRegisterData] = useState<IRegister>({
        username: '',
        password: '',
        re_password: '',
    })

    const isAuthenticated = useTypedSelector(state => state.auth.isAuthenticated);

    const {username, password, re_password} = registerData;
    const [remember, setRemember] = useState<boolean>(false);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
        setRegisterData(prev => ({...prev, [e.target.name]: e.target.value}))

    function registerUser(e: React.FormEvent<HTMLFormElement>): void {
        e.preventDefault();
        register(username, password, re_password);
    }

    useEffect(() => {
        if (isAuthenticated)
            return navigate('/');

    }, [isAuthenticated])

    return (
        <div className="login__page">
            <div className="inner__login-page">
            <div className="login__header">
                <div>
                </div>
                <h1 className="title login-title">SIGN UP</h1>
            </div>
            <form className="login__form" onSubmit={(e) => registerUser(e)}>
                <CSRFToken />
                <div className="input-block">
                    <label htmlFor="username" className="login-label">Username</label>
                        <input 
                            onChange={(e) => onChange(e)} 
                            value={username} 
                            className="input username-input" 
                            type="text" 
                            name="username"
                            required
                            minLength={6} 
                        />
                </div>
                <div className="input-block">
                    <label htmlFor="password" className="login-label">Password</label>
                    <input 
                        onChange={(e) => onChange(e)} 
                        value={password} className="input password-input" 
                        type="password" 
                        name="password"
                        required
                        minLength={6} 
                    />
                </div>
                <div className="input-block">
                    <label htmlFor="password" className="login-label">Confirm Password</label>
                    <input 
                        onChange={(e) => onChange(e)} 
                        value={re_password} className="input password-input" 
                        type="password" 
                        name="re_password"
                        required
                        minLength={6} 
                    />
                </div>
                <div className="remember">
                    <div className="remember-block">
                        <input 
                            type="checkbox" 
                            id="remember" 
                            name="remember"
                            onChange={() => setRemember(!remember)}
                        />
                        <label htmlFor="remember">Remember me</label>
                    </div>
                    <div className="forgot__block">
                        <Link className="forgot-link" to='/login'>Already have an account?</Link>
                    </div>
                </div>
                <button className="btn login-button" type="submit">SIGN UP</button>
            </form>
            </div> 
        </div>       
    );
}

export default connect(null, { register })(Register);
