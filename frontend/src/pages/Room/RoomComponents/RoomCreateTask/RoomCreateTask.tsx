import React from "react";
import './RoomCreateTask.css'
import { ReactComponent as RepeatIcon } from '../../../../assets/icons/repeat.svg'
import Select from "../../../../UI/Select/Select";
import { IOption } from "../../../../types/types";
import { CSSTransition } from 'react-transition-group'

const RoomCreateTask: React.FC = () => {
    const [isInput, setIsInput] = React.useState<boolean>(true);
    const [isTextareaActive, setIsTextareaActive] = React.useState<boolean>(false)
    const [text, setText] = React.useState<string>('')

    const theme_color = 'pink'
    const avatar = 'none'

    const [options, setOptions] = React.useState<IOption[]>([
        {id: 1, theme_color: 'pink', title: 'Bamb'},
        {id: 2, theme_color: 'turquoise', title: 'Hamb'},
        {id: 3, theme_color: 'grey', title: 'Samb'},
    ])

    const usersOptions: IOption[] = [{
        id: 1,
        theme_color: 'turquoise',
        title: 'Все учащиеся',
    }]

    // FUNCTIONS

    function activeTextarea() {
        setIsTextareaActive(true)
    }

    function disactiveTextarea() {
        setIsTextareaActive(false)
    }

    function changeTextValue(e: React.ChangeEvent<HTMLTextAreaElement>) {
        setText(e.target.value)
    }

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
                        <Select 
                            options={options} 
                            setOptions={setOptions}
                            defaultOption={options[0]} 
                        />
                        <Select 
                            className="create-task__users-select"
                            setOptions={null}
                            options={usersOptions}
                            defaultOption={usersOptions[0]} 
                        />
                    </div>
                </div>
                <div className="create-task__form-text">
                    
                    <div className="create-task__textarea-block move-textarea__block">
                        <textarea 
                            className="create-task__textarea move-textarea" 
                            placeholder=" "
                            onFocus={activeTextarea}
                            onBlur={disactiveTextarea}
                            onChange={changeTextValue}
                            value={text}
                        ></textarea>
                        <label className={isTextareaActive ? `color-${theme_color} move-textarea__label` : "move-textarea__label"}><span>Обратитесь к курсу</span></label>
                        
                    </div>

                    <div className="create-task__textarea-underline"></div>
                    <CSSTransition 
                        in={isTextareaActive} 
                        timeout={6000} 
                        classNames="create-task__textarea-underline__focused"
                        mountOnEnter
                        unmountOnExit
                    >
                        <div className={`create-task__textarea-underline__focused bg-${theme_color}`}></div>
                    </CSSTransition>

                    {/* <div className="create-task__modify-textarea">

                    </div> */}

                </div>
            </form>
            <div className="create-task__submit-block">

            </div>
        </div>
    )
}

export default RoomCreateTask
