import React from 'react';
import {ReactComponent as StatisticIcon} from '../../assets/icons/statistic.svg';
import {ReactComponent as FolderIcon} from '../../assets/icons/folder.svg';


interface RoomProps extends React.PropsWithChildren {

};

const Room: React.FC<RoomProps> = () => {

    return (
        <div className='room'>
            <div className='room-header'>
                <div className='room__left-header'>
                    <h1>Название курса</h1>
                    <small>Раздел</small>
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
    );
}

export default Room;
