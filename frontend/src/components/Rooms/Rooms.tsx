import React from 'react';
import {ReactComponent as StatisticIcon} from '../../assets/icons/statistic.svg';
import {ReactComponent as FolderIcon} from '../../assets/icons/folder.svg';
import { IRoom } from '../../types/types'

interface RoomProps extends React.PropsWithChildren {
    rooms: IRoom[]
};

const Room: React.FC<RoomProps> = ({ rooms }) => {
    
    return (
        <div className='rooms'>
            {rooms.map(room => (
                <div className='room'>
                    <div className='room-header'>
                        <div className='room__left-header'>
                            <h1>{room.title}</h1>
                            <small>{room.section}</small>
                        </div>
                        <div className='room__right-header'>

                        </div>
                    </div>
                    <div className='room-body'>

                    </div>
                    <div className='room-footer'>
                        <div className='icons'>
                            <span className='icon-block'>
                                <StatisticIcon />
                            </span>
                            <span className='icon-block'>
                                <FolderIcon />
                            </span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Room;
