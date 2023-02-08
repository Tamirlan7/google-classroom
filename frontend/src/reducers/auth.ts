import { AuthActionTypes, AuthType } from "../actions/auth/types";

interface IState {
    isAuthenticated: boolean
}

const initialState: IState = {
    isAuthenticated: false
}

const auth = (state = initialState, action: AuthType): IState => {
    const { type } = action;

    switch(type) {
        case AuthActionTypes.LOGIN_SUCCESS:
        case AuthActionTypes.AUTHENTICATED_SUCCESS:
        case AuthActionTypes.REGISTER_SUCCESS:
            return {...state, isAuthenticated: true}

        case AuthActionTypes.REGISTER_FAIL:
        case AuthActionTypes.AUTHENTICATED_FAIL:
        case AuthActionTypes.LOGOUT_FAIL:
        case AuthActionTypes.LOGOUT_SUCCESS:
        case AuthActionTypes.LOGIN_FAIL:
            return {...state, isAuthenticated: false}
            
        default:
            return state;
    }
}

export default auth;
