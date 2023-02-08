export enum AuthActionTypes {
    REGISTER_SUCCESS = 'REGISTER_SUCCESS',
    REGISTER_FAIL = 'REGISTER_FAIL',
    LOGIN_SUCCESS = 'LOGIN_SUCCESS',
    LOGIN_FAIL = 'LOGIN_FAIL',
    AUTHENTICATED_SUCCESS = 'AUTHENTICATED_SUCCESS',
    AUTHENTICATED_FAIL = 'AUTHENTICATED_FAIL',
    LOGOUT_SUCCESS = 'LOGOUT_SUCCESS',
    LOGOUT_FAIL = 'LOGOUT_FAIL',
}

export interface RegisterSuccess {
    type: AuthActionTypes.REGISTER_SUCCESS
    payload?: unknown
}

export interface RegisterFail {
    type: AuthActionTypes.REGISTER_FAIL
    payload?: unknown
}

export interface LoginSuccess {
    type: AuthActionTypes.LOGIN_SUCCESS
    payload?: unknown
}

export interface LoginFail {
    type: AuthActionTypes.LOGIN_FAIL
    payload?: unknown
}

export interface AuthenticatedSuccess {
    type: AuthActionTypes.AUTHENTICATED_SUCCESS
    payload?: unknown
}

export interface AuthenticatedFail {
    type: AuthActionTypes.AUTHENTICATED_FAIL
    payload?: unknown
}

export interface LogoutSuccess {
    type: AuthActionTypes.LOGOUT_SUCCESS
    payload?: unknown
}

export interface LogoutFail {
    type: AuthActionTypes.LOGOUT_FAIL
    payload?: unknown
}

export type AuthType = RegisterSuccess | RegisterFail | LoginSuccess | LoginFail |
AuthenticatedSuccess | AuthenticatedFail | LogoutSuccess | LogoutFail 
