import React from "react";
import RoomAside from "../../RoomComponents/RoomAside/RoomAside";
import RoomCover from "../../RoomComponents/RoomCover/RoomCover";
import RoomCreateTask from "../../RoomComponents/RoomCreateTask/RoomCreateTask";
import RoomTasks from "../../RoomComponents/RoomTasks/RoomTasks";
import './RoomMain.css'


interface RoomMainProps {

}

const RoomMain: React.FC<RoomMainProps> = ({  }) => {

    return (
        <main className="room-details__main">
            <RoomCover />
            <div className="room-content">
                <RoomAside />
                <div className="room-content__main">
                    <RoomCreateTask />
                    <RoomTasks />
                </div>
            </div>
        </main>
    )
}


export default RoomMain
