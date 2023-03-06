import React from "react";
import './RoomCover.css'
import coverImg from '../../../../assets/images/bookclub.jpg'
import {ReactComponent as InfoIcon} from '../../../../assets/icons/info.svg'
import {ReactComponent as InfoActiveIcon} from '../../../../assets/icons/info-active.svg'
import {ReactComponent as PencilIcon} from '../../../../assets/icons/pencil.svg'
import RoomCoverSettings from "../RoomCoverSettings/RoomCoverSettings";

const RoomCover: React.FC = () => {
    const [isInfoActive, setIsInfoActive] = React.useState<boolean>(false)
    const [coverSettingsActive, setCoverSettingsActive] = React.useState<boolean>(false)

    function openCoverSettings() {
        setCoverSettingsActive(true)
    }

    function toggleIsInfoActive() {
        setIsInfoActive(prev => !prev)
    }
    const theme_color = 'pink'

    return (
        <div className="room-details__cover-block">
            <div className="room-details__cover">
                <div 
                    className="room-details__cover-img"
                    style={{background: `url("${coverImg}")`}}
                >
                </div>
                <div className="room-details__cover-title">
                    <h1>Название</h1>
                    <div>Раздел</div>
                </div>
                <div className="room-details__cover-settings">
                    <div role="button "className={`cover-settings__button cover-settings__button-${theme_color}`} onClick={openCoverSettings}>
                        <figure className="cover-settings__button-icon">
                            <PencilIcon />
                        </figure>
                        <span className="cover-settings__button-text">
                            Настроить
                        </span>
                    </div>
                    <RoomCoverSettings coverSettingsActive={coverSettingsActive} setCoverSettingsActive={setCoverSettingsActive} />
                </div>
                <div className="room-details__info">
                    <div className="room-details__info-icon" onClick={toggleIsInfoActive}>
                        {isInfoActive
                        ? <InfoActiveIcon /> 
                        : <InfoIcon />
                        }
                    </div>
                </div>
            </div>
            {isInfoActive && <RoomCoverInfo />}
        </div>
    )
}

const RoomCoverInfo: React.FC = () => {

    return (
        <div className="room-details__cover-info">
            <div>
                <div className="room-details__info-item room-details__info-code">
                    <h4 className="room-details__info-item__key">Код курса</h4>
                    <span className="room-details__info-item__value">Предмет</span>
                </div>
                <div className="room-details__info-item room-details__info-subject">
                    <h4 className="room-details__info-item__key">Предмет</h4>
                    <span className="room-details__info-item__value">Предмет</span>
                </div>
                <div className="room-details__info-item room-details__info-audience">
                    <h4 className="room-details__info-item__key">Аудитория</h4>
                    <span className="room-details__info-item__value">Аудитория</span>
                </div>
            </div>
        </div>
    )
}


export default RoomCover;
