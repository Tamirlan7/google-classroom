import React from "react"
import { useTypedSelector } from "../../hooks/redux"
import { IRoom, ITask } from "../../types/types"
import './Room.css'
import RoomHeader from "./RoomContainers/RoomHeader/RoomHeader"
import RoomMain from "./RoomContainers/RoomMain/RoomMain"


const Room: React.FC = () => {
    const urlCode = window.location.pathname.split('/')[2]

    const [room, setRoom] = React.useState<IRoom>({
        "id": 1,
        "title": "Math",
        "section": "Section",
        "subject": "Subject",
        "audience": "Audience",
        "created_at": "2023-03-03T16:22:29.951593Z",
        "updated_at": "2023-03-03T16:22:29.951593Z",
        "cover": "media/cover/code.jpg",
        "code": "562312",
        "theme_color": "pink",
        "owner_profile": {
            "name": "Тамирлан",
            "surname": "Жукасаев",
            "user": 1,
            "avatar": "/media/avatar/user_1/cat.jpg"
        }
    });

    // const [tasks, setTasks] = React.useState<ITask>();
    // const {currentRoom, currentTasks} = useTypedSelector(state => state.room)

    // React.useEffect(() => {
    //     if(currentTasks) 
    //         setTasks(currentTasks)

    //     if(currentRoom)
    //         setRoom(currentRoom)

    // }, [currentRoom, currentTasks])

    return (
        <>
            <RoomHeader code={urlCode} theme_color={room.theme_color} title={room.title} section={room.section} />
            <RoomMain />
        </>
    )
}


export default Room
