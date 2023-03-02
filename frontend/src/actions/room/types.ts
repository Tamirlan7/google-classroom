import { IUser } from "../../types/types"

export enum RoomActionTypes {
    // Receiving users with Rooms
    GET_USERS_SUCCESS = 'GET_USERS_SUCCESS',
    GET_USERS_FAILURE = 'GET_USERS_FAILURE',
}

export interface GetUsersSuccess {
    type: RoomActionTypes.GET_USERS_SUCCESS
    payload: IUser
}

export interface GetUsersFailure {
    type: RoomActionTypes.GET_USERS_FAILURE
    payload?: unknown
}

export type RoomAction = GetUsersFailure | GetUsersSuccess
