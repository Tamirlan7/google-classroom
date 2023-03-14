import { ReactComponent as RoomTasksIcon } from '../../../../assets/icons/room-tasks.svg'
import { ReactComponent as Settings18pxIcon } from '../../../../assets/icons/settings-18px.svg'

import React from "react"
import './RoomTasks.css'


const RoomTasks: React.FC = () => {

    const theme_color = 'pink'

    return (
        <div className="room-no-tasks">

            <RoomTasksIcon className={`room-no-tasks__icon`} />

            <div className="room-no-tasks__content">

                <p className={`room-no-tasks__content-title color-${theme_color}`}>
                    Здесь можно общаться с курсом
                </p>
                <p className="room-no-tasks__content-info">
                    В ленте можно публиковать объявления и задания, а также отвечать на вопросы учащихся.
                </p>

                <div className="room-no-tasks__button-block">
                    <div>

                        <button 
                            className={
                                `room-no-tasks__button 
                                color-${theme_color} 
                                fill-${theme_color}
                                bg-${theme_color}-hover
                                `
                            }
                        >
                            <figure className="room-no-tasks__button-icon"> <Settings18pxIcon /> </figure>
                            <span> Настройки ленты </span>
                        </button>

                    </div>
                </div>

            </div>

        </div>
    )
}


export default RoomTasks
