import { RoomAction, RoomActionTypes } from "../actions/room/types"
import { IUser } from "../types/types"

interface IState {
    user: IUser
}

const initialState: IState = {
    user: {
        id: 0,
        username: '',
        rooms: {
            title: '',
            audience: '',
            section: '',
            subject: '',
            code: '',
            updated_at: '',
            created_at: '',
            cover: '',
            id: 0,
            owner: 0,
            theme_color: '',
        }
    }
}

const room = (state = initialState, action: RoomAction): IState => {
    const { type, payload } = action

    switch(type) {
        case RoomActionTypes.GET_USERS_SUCCESS:
            return {...state, user: payload}
        case RoomActionTypes.GET_USERS_FAILURE:
            return state
        default:
            return state
    }
}


export default room
