import React from 'react';
import {ReactComponent as StatisticIcon} from '../../assets/icons/statistic.svg';
import {ReactComponent as FolderIcon} from '../../assets/icons/folder.svg';
import { useTypedSelector } from '../../hooks/redux';
import { IUser } from '../../types/types';
import './Rooms.css'
import {ReactComponent as ThreeDots} from '../../assets/icons/three-dots.svg'
import { useOutsideClick } from '../../hooks/useClick';
import { useNavigate } from 'react-router-dom';
import {ReactComponent as UserProfileIcon} from '../../assets/icons/user-profile.svg'

const Rooms: React.FC = () => {

    const navigate = useNavigate()
    const [isSettings, setIsSetttings] = React.useState<boolean>(false)
    const [left, setLeft] = React.useState<number>(0);
    const [top, setTop] = React.useState<number>(0);

    function onOpenSettings(e: React.MouseEvent<HTMLDivElement>) {
        e.stopPropagation()
        setIsSetttings(true)
        setSettingsPosition(e)
    }

    function setSettingsPosition(e: React.MouseEvent<HTMLDivElement>) {
        setTop(e.clientY)
        setLeft(e.clientX)
    }

    function onCloseSettings() {
        setIsSetttings(false)
    }
    
    const roomSettingsRef = React.useRef<HTMLUListElement>(null) 
    useOutsideClick(roomSettingsRef, onCloseSettings)

    function openRoom(code: string) {
        navigate(`/room/${code}`)
    }

    const [user, setUser] = React.useState<IUser>()
    const currentUser = useTypedSelector(state => state.room.user)

    React.useEffect(() => {
        if(currentUser)
            setUser(currentUser)
            
    }, [currentUser])


    return (
        <>
        <ol className='rooms'>
            {user && user.rooms.map(room => (
                <li className='room'>
                    <div onClick={() => openRoom(room.code)} className='room-header'>
                        <div className='room-background' style={{backgroundImage: `url(${process.env.REACT_APP_API_URL}${room.cover})`}}></div>
                        <div className='room-header__inner'>
                            <div className='room__left-header'>
                                <h1 className='room-title'>{room.title}</h1>
                                <small className='room-section'>{room.section}</small>
                                {user.id !== room.owner_profile.user  && <div className='room-owner'>{`${room.owner_profile.name}${room.owner_profile.surname}`}</div>}
                            </div>
                            <div onClick={(e) => onOpenSettings(e)} role={'button'} className='room__right-header'>
                                <ThreeDots />
                            </div>
                        </div>
                    </div>
                    <div className='room-body'>
                       { user.id !== room.owner_profile.user &&
                       <img className='room-avatar' src={room.owner_profile.avatar} alt="avatar" />}
                    </div>
                    <div className='room-footer'>
                        <span className='room-icon__block'>
                            {user.id === room.owner_profile.user 
                            ? <StatisticIcon />
                            : <UserProfileIcon />}
                        </span>
                        <span className='room-icon__block'>
                            <FolderIcon />
                        </span>
                    </div>
                </li>
            ))}
        </ol>
        {isSettings && <RoomSettings left={left} top={top} roomSettingsRef={roomSettingsRef} />}
        </>

        
    );
}

function RoomSettings({roomSettingsRef, left, top} : {left: number, top: number, roomSettingsRef: React.Ref<HTMLUListElement>}) {
    
    const settings = [
        'Переместить', 
        'Копировать ссылку',
        'Изменить',
        'Копировать',
        'Архивировать',
    ]

    return (
        <ul ref={roomSettingsRef} className='room-settings__list' style={{top: top + 40, left: left - 20}}>
            {settings.map(text => (
                <li className='room-settings__list-item'>
                    {text}
                </li>
            ))}
        </ul>
    )
}


export default Rooms;
