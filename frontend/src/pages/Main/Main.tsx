import React, { useState } from "react";
import { connect } from "react-redux";
import './Main.css';
import MainHeader from "./MainComponents/MainHeader/MainHeader";
import { getUser } from "../../actions/room/action";
import {ReactComponent as FolderLinesIcon} from '../../assets/icons/folder-lines.svg'
import {ReactComponent as CalendarIcon} from '../../assets/icons/calendar.svg'
import {ReactComponent as TasksIcon} from '../../assets/icons/tasks.svg'
import Rooms from "../../components/Rooms/Rooms";


interface MainProps {
    getUser: () => void
}

const Main: React.FC<MainProps> = ({ getUser }) => {

    const [rooms, setRooms] = useState<any[]>([
        {courseName: '', section: '', graduatesLink: '', folderLink: ''}
    ]);

    console.log('Main render')

    React.useEffect(() => {
        getUser()
    })

    return (
        <>
            <MainHeader />
            <main className="main-main">

                <div className="quick-menu">
                    <div className="quick-menu__item quick-menu__tasks">
                        <figure className="quick-menu__icon"><TasksIcon /></figure>
                        <span className="quick-menu__text">Список заданий</span>
                    </div>
                    <div className="quick-menu__item quick-menu__unchecked-tasks">
                        <figure className="quick-menu__icon"><FolderLinesIcon /></figure>
                        <span className="quick-menu__text">Непроверенные задания</span>
                    </div>
                    <div className="quick-menu__item quick-menu__calendar">
                        <figure className="quick-menu__icon"><CalendarIcon/></figure>
                        <span className="quick-menu__text">Календарь</span>
                    </div>
                </div>

                <Rooms />
            </main>
        </>

    );
}

export default connect(null, { getUser })(Main);
