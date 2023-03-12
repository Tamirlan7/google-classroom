import React from "react";
import './RoomCreateTask.css'
import { ReactComponent as RepeatIcon } from '../../../../assets/icons/repeat.svg'
import { ReactComponent as BoldIcon } from '../../../../assets/icons/bold.svg'
import { ReactComponent as ItalicIcon } from '../../../../assets/icons/italic.svg'
import { ReactComponent as UnderlineIcon } from '../../../../assets/icons/underline.svg'
import { ReactComponent as UnorderedListIcon } from '../../../../assets/icons/unordered-list.svg'
import { ReactComponent as RemoveFormatIcon } from '../../../../assets/icons/remove-format.svg'
import Select from "../../../../UI/Select/Select";
import { IOption } from "../../../../types/types";
import { CSSTransition } from 'react-transition-group'
import ContentEditable from "react-contenteditable";
import ModifyButton from "../../../../UI/ModifyButton/ModifyButton";



const RoomCreateTask: React.FC = () => {
    const [isInput, setIsInput] = React.useState<boolean>(true);
    const [isTextareaActive, setIsTextareaActive] = React.useState<boolean>(false)
    const [text, setText] = React.useState<string>('')

    const [isFormattingRemoved, setIsFormattingRemoved] = React.useState<boolean>(false)

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

    // USE-REF

    const textareaRef = React.useRef<HTMLDivElement | string>('')

    // FUNCTIONS

    function activeTextarea() {
        setIsTextareaActive(true)
    }

    function disactiveTextarea() {
        setIsTextareaActive(false)
    }

    function changeTextValue(e: any) {
        textareaRef.current = e.target.value
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
                        <ContentEditable 
                            html={textareaRef.current as string}
                            tagName={'div'}
                            disabled={false}
                            className="create-task__textarea move-textarea" 
                            onFocus={activeTextarea}
                            onBlur={disactiveTextarea}
                            onChange={(e) => changeTextValue(e)}
                        >
                        </ContentEditable>
                        <label className={isTextareaActive 
                            ? `color-${theme_color} move-textarea__label move-textarea__label-focused` 
                            : textareaRef.current
                            ? `move-textarea__label move-textarea__label-focused`
                            : "move-textarea__label"
                            }><span>Обратитесь к курсу</span></label>
                        
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

                    <div className="create-task__modify-textarea">
                        
                            <ModifyButton 
                                cmd="bold"
                                isFormattingRemoved={isFormattingRemoved}
                                setIsFormattingRemoved={setIsFormattingRemoved}
                            >
                                <BoldIcon />
                            </ModifyButton>

                            <ModifyButton 
                                cmd={'italic'}
                                isFormattingRemoved={isFormattingRemoved}
                                setIsFormattingRemoved={setIsFormattingRemoved}
                            >
                                <ItalicIcon />
                            </ModifyButton>

                            <ModifyButton 
                                cmd={'underline'}
                                isFormattingRemoved={isFormattingRemoved}
                                setIsFormattingRemoved={setIsFormattingRemoved}
                            >
                                <UnderlineIcon />
                            </ModifyButton>

                            <ModifyButton 
                                cmd={'insertUnorderedList'}
                                isFormattingRemoved={isFormattingRemoved}
                                setIsFormattingRemoved={setIsFormattingRemoved}
                            >
                                <UnorderedListIcon />    
                            </ModifyButton>

                            <ModifyButton 
                                cmd={'removeFormat'}
                                isFormattingRemoved={isFormattingRemoved}
                                setIsFormattingRemoved={setIsFormattingRemoved}
                            >
                                <RemoveFormatIcon />    
                            </ModifyButton>

                    </div>

                </div>
            </form>
            <div className="create-task__submit-block">
                <div className="create-task__links">
                    <div className="create-task__links-inner">

                    </div>
                </div>
                <div className="create-task__submit">

                </div>
            </div>
        </div>
    )
}

export default RoomCreateTask
