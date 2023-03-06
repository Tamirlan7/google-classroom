import { IRoom, ITask, IUser } from "../../types/types"

export enum RoomActionTypes {
    // Receiving users with Rooms
    GET_USER_SUCCESS = 'GET_USERS_SUCCESS',
    GET_USER_FAIL = 'GET_USERS_FAIL',
    CREATE_ROOM_SUCCESS = 'CREATE_ROOM_SUCCESS',
    CREATE_ROOM_FAIL = 'CREATE_ROOM_FAIL',
    GET_ROOM_SUCCESS = 'GET_ROOM_SUCCESS',
    GET_ROOM_FAIL = 'GET_ROOM_FAIL'
}

export interface GetUserSuccess {
    type: RoomActionTypes.GET_USER_SUCCESS
    payload: IUser
}

export interface GetUserFail {
    type: RoomActionTypes.GET_USER_FAIL
    payload?: unknown
}

export interface CreateRoomSuccess {
    type: RoomActionTypes.CREATE_ROOM_SUCCESS
    payload?: unknown
}

export interface CreateRoomFail {
    type: RoomActionTypes.CREATE_ROOM_FAIL
    payload?: unknown
}

export interface GetRoomSuccess {
    type: RoomActionTypes.GET_ROOM_SUCCESS,
    payload: {room: IRoom, tasks: ITask}
}

export interface GetRoomFail {
    type: RoomActionTypes.GET_ROOM_FAIL
    payload?: unknown
}

export type RoomAction = GetUserFail | GetUserSuccess |
CreateRoomSuccess | CreateRoomFail | GetRoomSuccess | GetRoomFail
