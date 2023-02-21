import Cookies from "js-cookie";
import { Dispatch } from "redux";
import { 
    GetProfileFail, 
    GetProfileSuccess, 
    ProfileActionTypes, 
    UpdateProfileFail, 
    UpdateProfileSuccess
 } from "./types";
import axios from 'axios'
import { IProfile } from "../../types/types";


export function updateProfile (profile: IProfile) {
    return async (dispatch: Dispatch<UpdateProfileSuccess | UpdateProfileFail>) => {
        let config;
        let body;

        if(profile.avatar) {
            config = {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'multipart/form-data',
                    'X-CSRFToken': Cookies.get('csrftoken')
                }
            } 

            body = new FormData();
            body.append('avatar', profile.avatar)
        } else {
            config = {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'X-CSRFToken': Cookies.get('csrftoken')
                }
            } 

            body = JSON.stringify(
                profile.name ? {name: profile.name, surname: profile.surname} :
                profile.nickname ? {nickname: profile.nickname} :
                profile.birthday ? {birthday: profile.birthday} :
                profile.email ? {email: profile.email} :
                profile.phone ? {phone: profile.phone} :
                profile.gender !== undefined ? {gender: profile.gender} :
                profile.personal_address ? {personal_address: profile.personal_address} :
                profile.other_addresses ? {other_addresses: profile.other_addresses} 
                : {business_address: profile.business_address} 
            )
        }

        try {
            const res = await axios.put<{success: string, profile: IProfile} | {error: string}, any>(`${process.env.REACT_APP_API_URL}/api/profile/`, body, config)

            if((await res).data['success']) {
                dispatch({
                    type: ProfileActionTypes.UPDATE_PROFILE_SUCCESS,
                    payload: (await res).data.profile
                })
            } else {
                console.log((await res).data['error'])
                dispatch({
                    type: ProfileActionTypes.UPDATE_PROFILE_FAIL,
                })
            }
        } catch (err) {
            console.log(err)
            dispatch({
                type: ProfileActionTypes.UPDATE_PROFILE_FAIL
            })
        }
    }
}


export function getProfile() {
    return async (dispatch: Dispatch<GetProfileFail | GetProfileSuccess>) => {
        const config = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-CSRFToken': Cookies.get('csrftoken')
            }
        } 

        try {
            const res = await axios.get<{success: string, profile: IProfile} | {error: string}, any>(`${process.env.REACT_APP_API_URL}/api/profile/`, config)

            if((await res).data['success']) {
                dispatch({
                    type: ProfileActionTypes.GET_PROFILE_SUCCESS,
                    payload: (await res).data.profile
                })
            } else {
                console.log((await res).data['error'])
                dispatch({
                    type: ProfileActionTypes.GET_PROFILE_FAIL
                })
            }
        } catch (err) {
            console.log(err)
            dispatch({
                type: ProfileActionTypes.GET_PROFILE_FAIL
            })
        }
    }
}