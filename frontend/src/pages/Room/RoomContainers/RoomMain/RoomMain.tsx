import React from "react";
import RoomContent from "../../RoomComponents/RoomContent/RoomContent";
import RoomCover from "../../RoomComponents/RoomCover/RoomCover";
import './RoomMain.css'


interface RoomMainProps {

}

const RoomMain: React.FC<RoomMainProps> = ({  }) => {

    return (
        <main className="room-details__main">
            <RoomCover />
            <RoomContent />
        </main>
    )
}


export default RoomMain
