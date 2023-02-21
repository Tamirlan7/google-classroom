import { AuthActionTypes, AuthenticatedFail, AuthenticatedSuccess, LoginFail, LoginSuccess, LogoutFail, LogoutSuccess } from "./types";
import { Dispatch } from "react";
import axios from 'axios';
import Cookies from 'js-cookie';
import { RegisterSuccess, RegisterFail } from './types';

export const register = (username: string, password: string, re_password: string) => 
async (dispatch: Dispatch<RegisterSuccess | RegisterFail>) => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'X-CSRFToken': Cookies.get('csrftoken'),
        }
    }

    const body = JSON.stringify({
        username, 
        password, 
        re_password
    });

    try {
        const res = await axios.post(`${process.env.REACT_APP_API_URL}/api/accounts/register/`, body, config)
        if (res.data['success']) {
            dispatch({
                type: AuthActionTypes.REGISTER_SUCCESS
            })
        } else {
            dispatch({
                type: AuthActionTypes.REGISTER_FAIL
            })
        }
    } catch (err) {
        dispatch({
            type: AuthActionTypes.REGISTER_FAIL,
        })
    }
}



export const login = (username: string, password: string) => 
async (dispatch: Dispatch<LoginSuccess | LoginFail>) => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'X-CSRFToken': Cookies.get('csrftoken'),
        }
    }

    const body = JSON.stringify({
        username, 
        password, 
    });

    try {
        const res = await axios.post(`${process.env.REACT_APP_API_URL}/api/accounts/login/`, body, config)
        if (res.data['success']) {
            dispatch({
                type: AuthActionTypes.LOGIN_SUCCESS
            })
        } else {
            dispatch({
                type: AuthActionTypes.LOGIN_FAIL
            })   
        }
    } catch (err) {
        dispatch({
            type: AuthActionTypes.LOGIN_FAIL,
        })
    }
}

export const logout = () => async (dispatch: Dispatch<LogoutFail | LogoutSuccess>) => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'X-CSRFToken': Cookies.get('csrftoken'),
        }
    }

    const body = JSON.stringify({
        'withCredentials': true
    })

    try {
        const res = axios.post(`${process.env.REACT_APP_API_URL}/api/accounts/logout/`, body, config)

        if((await res).data.success) {
            dispatch({
                type: AuthActionTypes.LOGOUT_SUCCESS
            })
        } else {
            console.log((await res).data.err)
            dispatch({
                type: AuthActionTypes.LOGOUT_FAIL
            })
        }
    } catch (err) {
        console.log(err)
        dispatch({
            type: AuthActionTypes.LOGOUT_FAIL
        })
    }
}


export const checkAuthenticated = () => async (dispatch: Dispatch<AuthenticatedSuccess | AuthenticatedFail>) => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'X-CSRFToken': Cookies.get('csrftoken')
        }
    }

    try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/accounts/authenticated/`, config);
        if ((await res).data.success) {
            dispatch({
                type: AuthActionTypes.AUTHENTICATED_SUCCESS
            })
        } else {
            console.log((await res).data['error'])
            dispatch({
                type: AuthActionTypes.AUTHENTICATED_FAIL
            })
        }
    } catch(err) {
        console.log(err);
        dispatch({
            type: AuthActionTypes.AUTHENTICATED_FAIL
        })
    }
}