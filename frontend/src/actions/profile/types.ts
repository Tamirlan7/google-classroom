import { IProfile } from "../../types/types"

export enum ProfileActionTypes {
    GET_PROFILE_SUCCESS = 'GET_PROFILE_SUCCESS',
    GET_PROFILE_FAIL = 'GET_PROFILE_FAIL',
    UPDATE_PROFILE_SUCCESS = 'UPDATE_PROFILE_SUCCESS',
    UPDATE_PROFILE_FAIL = 'UPDATE_PROFILE_FAIL',
}


export interface GetProfileSuccess {
    type: ProfileActionTypes.GET_PROFILE_SUCCESS
    payload: IProfile
}

export interface GetProfileFail {
    type: ProfileActionTypes.GET_PROFILE_FAIL
    payload?: unknown
}

export interface UpdateProfileSuccess {
    type: ProfileActionTypes.UPDATE_PROFILE_SUCCESS
    payload: IProfile
}

export interface UpdateProfileFail {
    type: ProfileActionTypes.UPDATE_PROFILE_FAIL
    payload?: unknown
}


export type ProfileType = GetProfileSuccess | GetProfileFail | UpdateProfileSuccess | UpdateProfileFail;
