import React from "react";
import RoomContent from "../../RoomComponents/RoomContent/RoomContent";
import RoomCover from "../../RoomComponents/RoomCover/RoomCover";
import RoomCreateTask from "../../RoomComponents/RoomCreateTask/RoomCreateTask";
import './RoomMain.css'


interface RoomMainProps {

}

const RoomMain: React.FC<RoomMainProps> = ({  }) => {

    return (
        <main className="room-details__main">
            <RoomCover />
            <div className="room-content">
                <RoomContent />
                <div className="room-content__main">
                    <RoomCreateTask />
                </div>
            </div>
        </main>
    )
}


export default RoomMain
