import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../actions/auth/actions";
import CSRFToken from "../../components/CSRFToken";
import { UseTypedSelector } from "../../hooks/redux";
import { ILogin } from "../../types/types";
import './Login.css';


interface LoginProps extends React.PropsWithChildren {
    login: (username: string, password: string) => void
}

const Login: React.FC<LoginProps> = ({ login }) => {
    const navigate = useNavigate();
    const [loginData, setLoginData] = useState<ILogin>({
        username: '',
        password: '',
    })

    const isAuthenticated = UseTypedSelector(state => state.auth.isAuthenticated); 

    const {username, password} = loginData;
    const [remember, setRemember] = useState<boolean>(false);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
        setLoginData(prev => ({...prev, [e.target.name]: e.target.value}))

    function loginUser(e: React.FormEvent<HTMLFormElement>): void {
        e.preventDefault();
        login(username, password);
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
                <h1 className="title login-title">SIGN IN</h1>
            </div>
            <form className="login__form" onSubmit={(e) => loginUser(e)}>
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
                        <Link className="forgot-link" to='/register'>Don't have an account yet?</Link>
                    </div>
                </div>
                <button className="btn login-button" type="submit">LOGIN</button>
            </form>
            </div> 
        </div>       
    );
}

export default connect(null, { login })(Login);
