import React from "react";
import './RoomCreateTask.css'
import { ReactComponent as RepeatIcon } from '../../../../assets/icons/repeat.svg'
import Select from "../../../../UI/Select/Select";


const RoomCreateTask: React.FC = () => {
    const isInput = React.useState<boolean>(true);

    const color_theme = 'pink'
    const avatar = 'none'

    // if ( isInput ) 
    //     return (
    //         <>
    //         <div className="room-content__input">
    //             <div className={`room-content__input-button color-${color_theme}-hover`}>
    //                 <div className="input-button__avatar-block">
    //                     <div>
    //                         <img className="input-button__avatar-img" src={avatar} alt="avatar" />
    //                     </div>
    //                 </div>
    //                 <div className={`input-button__text`}>
    //                     Обратитесь к курсу
    //                 </div>
    //             </div>
    //             <div className="room-content__input-repeat">
    //                 <figure className="input-repeat__icon">
    //                     <RepeatIcon />
    //                 </figure>
    //             </div>
    //         </div>
    //         <div className="room-content__tasks"></div>
    //         </>
    //     )
    

    return (
        <div className="room-details__create-task">
            <form className="create-task__form">
                <div className="create-task__form-course">
                    <p className="create-task__form-course__text">Для кого</p>
                    <div className="create-task__form-course__selects">
                        <Select />
                    </div>
                </div>
                <div className="create-task__form-text">

                </div>
            </form>
            <div className="create-task__submit-block">

            </div>
        </div>
    )
}

export default RoomCreateTask
