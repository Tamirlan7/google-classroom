import { ReactComponent as BoldIcon } from '../../assets/icons/bold.svg'
import { ReactComponent as ItalicIcon } from '../../assets/icons/italic.svg'
import { ReactComponent as UnderlineIcon } from '../../assets/icons/underline.svg'
import { ReactComponent as UnorderedListIcon } from '../../assets/icons/unordered-list.svg'
import { ReactComponent as RemoveFormatIcon } from '../../assets/icons/remove-format.svg'


import React from 'react'
import cl from './Textarea.module.css'
import ContentEditable from "react-contenteditable";
import ModifyButton from "..//ModifyButton/ModifyButton";
import { CSSTransition } from 'react-transition-group'


interface TextareaProps {
    
    theme_color: string
    placeholder: string /* specifies to the text in label for div (textarea)  */
}

const Textarea: React.FC<TextareaProps> = ({ theme_color, placeholder }) => {

    const [isTextareaActive, setIsTextareaActive] = React.useState<boolean>(false)
    const [isFormattingRemoved, setIsFormattingRemoved] = React.useState<boolean>(false)
    
    
    /*
        | ---- USE-REFS ---- |
    */

    const textareaRef = React.useRef<HTMLElement | string>('')





    /* 
        | ---- FUNCTIONS ---- | 
    */

    function activeTextarea() {
        setIsTextareaActive(true)
    }

    function disactiveTextarea() {
        setIsTextareaActive(false)
    }

    function changeTextValue(e: any) {
        textareaRef.current = e.target.value
    }

    /* function focusTextarea () {
        const textarea = textareaRef.current as HTMLElement
        textarea.focus()
    } */


    /* 
        | ---- UI ARRAYS ---- | 
    */

    const modifyButtons = [

        { cmd: 'bold', element: <BoldIcon /> },
        { cmd: 'italic', element: <ItalicIcon /> },
        { cmd: 'underline', element: <UnderlineIcon /> },
        { cmd: 'insertUnorderedList', element: <UnorderedListIcon /> },
        { cmd: 'removeFormat', element: <RemoveFormatIcon /> },

    ]





    return (
        <>

                        {/*  TEXTAREA */}

            <div className={`${cl['create-task__textarea-block']} ${cl['move-textarea__block']}`}>
                <ContentEditable 
                    html={textareaRef.current as string}
                    tagName={'div'}
                    disabled={false}
                    className={`${cl["create-task__textarea"]} ${cl["move-textarea"]}`} 
                    onFocus={activeTextarea}
                    onBlur={disactiveTextarea}
                    onChange={(e) => changeTextValue(e)}
                >

                </ContentEditable>
                <label className={isTextareaActive 
                    ? `color-${theme_color} ${cl['move-textarea__label']} ${cl['move-textarea__label-focused']}` 
                    : textareaRef.current
                    ? `${cl['move-textarea__label']} ${cl['move-textarea__label-focused']}`
                    : `${cl['move-textarea__label']}`
                    }><span>{placeholder}</span></label>

            </div>
                    
                        {/* UNDERLINE */}

            <div className={cl["create-task__textarea-underline"]}></div>

                    {/* UNDERLINE WHEN IT FOCUSED */}

            <CSSTransition 
                in={isTextareaActive} 
                timeout={6000} 
                classNames={{
                    enterActive: `${cl['create-task__textarea-underline__focused-enter-active']}`,
                    exitActive: `${cl['create-task__textarea-underline__focused-exit-active']}`
                }}
                mountOnEnter
                unmountOnExit
            >
                <div className={`${cl['create-task__textarea-underline__focused']} bg-${theme_color}`}></div>
            </CSSTransition>


                    {/* MODIFY BUTTONS */}


            <div className={cl["create-task__modify-textarea"]}>

                {modifyButtons.map((button) => (

                    <ModifyButton 
                        key={button.cmd}
                        cmd={button.cmd}
                        isFormattingRemoved={isFormattingRemoved}
                        setIsFormattingRemoved={setIsFormattingRemoved}
                    >

                        {button.element}

                    </ModifyButton>

                ))}

            </div>
        </>
    )
}


export default Textarea
