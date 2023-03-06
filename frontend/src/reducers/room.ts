import { RoomAction, RoomActionTypes } from "../actions/room/types"
import { IRoom, IUser, ITask } from "../types/types"

interface IState {
    user: IUser | null
    currentRoom: IRoom | null
    currentTasks: ITask | null
}

const initialState: IState = {
    user: null,
    currentRoom: null,
    currentTasks: null
}

const room = (state = initialState, action: RoomAction): IState => {
    const { type, payload } = action

    switch(type) {
        case RoomActionTypes.GET_ROOM_SUCCESS:
            return {...state, currentRoom: payload.room, currentTasks: payload.tasks}
        case RoomActionTypes.GET_USER_SUCCESS:
            return {...state, user: payload}

        case RoomActionTypes.GET_ROOM_FAIL:
        case RoomActionTypes.GET_USER_FAIL:
            return state
        default:
            return state
    }
}


export default room
