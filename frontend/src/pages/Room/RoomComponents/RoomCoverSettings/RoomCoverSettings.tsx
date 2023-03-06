import React from "react";
import ModalWindow from "../../../../UI/ModalWindow/ModalWindow";
import './RoomCoverSettings.css'


interface RoomCoverSettingsProps {
    coverSettingsActive: boolean
    setCoverSettingsActive: (prev?: any) => void
}

const RoomCoverSettings: React.FC<RoomCoverSettingsProps> = ({ coverSettingsActive, setCoverSettingsActive }) => {


    return (
        <ModalWindow className="room-cover__settings" active={coverSettingsActive} setActive={setCoverSettingsActive}>

        </ModalWindow>
    )
}

export default RoomCoverSettings
