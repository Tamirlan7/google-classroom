import axios from "axios";
import Cookies from "js-cookie";
import { Dispatch } from "react";
import { CreateRoomFail, CreateRoomSuccess, GetRoomFail, GetRoomSuccess, GetUserFail, GetUserSuccess } from "./types";
import { RoomActionTypes } from "./types";


export const getUser = () =>
async (dispatch: Dispatch<GetUserSuccess | GetUserFail>) => {
    const config = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'X-CSRFToken': Cookies.get('csrftoken')
        }
    }

    try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/accounts/user/`, config)

        if(res.data.success) {
            dispatch({
                type: RoomActionTypes.GET_USER_SUCCESS,
                payload: res.data['success'],
            })
        } else {
            dispatch({
                type: RoomActionTypes.GET_USER_FAIL,
            })
        }
    } catch(err) {
        dispatch({
            type: RoomActionTypes.GET_USER_FAIL,
        })
    }
}


export const createRoom = (
    { title, 
    subject,
    audience,
    section }: {title: string, subject: string, audience: string, section: string}) => 
async (dispatch: Dispatch<CreateRoomSuccess | CreateRoomFail>) => {
    const config = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'X-CSRFToken': Cookies.get('csrftoken')
        }
    }

    const body = JSON.stringify({
        title, subject, audience, section
    })

    try {
        const res = await axios.post(`${process.env.REACT_APP_API_URL}/api/room/`, body, config)
    
        if(res.data['success']) {
            dispatch({
                type: RoomActionTypes.CREATE_ROOM_SUCCESS
            })
        } else {
            dispatch({
                type: RoomActionTypes.CREATE_ROOM_FAIL
            })
        }
    } catch (err) {
        dispatch({
            type: RoomActionTypes.CREATE_ROOM_FAIL
        })
    }
}
  

export const getCurrentRoom = (code: string) =>
async (dispatch: Dispatch<GetRoomSuccess | GetRoomFail>) => {
    const config = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'X-CSRFToken': Cookies.get('csrftoken')
        }
    }

    try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/room/${code}/`, config)

        if(res.data.success) {
            dispatch({
                type: RoomActionTypes.GET_ROOM_FAIL,
                payload: res.data.success
            })
        } else {
            dispatch({
                type: RoomActionTypes.GET_ROOM_FAIL
            })
        }
    } catch(err) {
        dispatch({
            type: RoomActionTypes.GET_ROOM_FAIL
        })
    }
}