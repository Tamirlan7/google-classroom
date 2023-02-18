import { ProfileActionTypes, ProfileType } from "../actions/profile/types";
import { IProfile } from "../types/types";

interface IState {
    profile: IProfile
}

const initialState: IState = {
    profile: {
        name: '',
        surname: '',
        nickname: '',
        birthday: '',
        phone: '',
        email: '',
        avatar: '',
        gender: null,
        personal_address: '',
        business_address: '',
        other_addresses: '',
    }
}

const profile = (state = initialState, action: ProfileType): IState => {
    const { type, payload } = action;

    switch(type) {
        case ProfileActionTypes.UPDATE_PROFILE_SUCCESS:
        case ProfileActionTypes.GET_PROFILE_SUCCESS:
            return {...state, profile: {...payload}}

        case ProfileActionTypes.UPDATE_PROFILE_FAIL:
        case ProfileActionTypes.GET_PROFILE_FAIL:
            return state

        default:
            return state;
    }
}

export default profile;
