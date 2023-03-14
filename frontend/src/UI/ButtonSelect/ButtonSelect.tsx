import React from 'react'
import cl from './ButtonSelect.module.css'
import { ReactComponent as DropDownIcon } from '../../assets/icons/drop-down.svg'
import { useOutsideClick } from '../../hooks/useClick'
import { CSSTransition } from 'react-transition-group'


interface ButtonSelectProps {
    className?: string
    theme_color?: string  
    buttonText: string /* <button> {buttonText} </button> */
    withDeleting: boolean /*  this is responsible for wether remove draft in drop down menu is visible or not  */
}

const ButtonSelect: React.FC<ButtonSelectProps> = ({ buttonText, className, theme_color, withDeleting }) => {

    const [isSelectActive, setIsSelectActive] = React.useState(false)



    /* 
        | USE  -  REF |
    */

   const selectRef = React.useRef<HTMLDivElement>(null)
   const dropDownRef = React.useRef<HTMLDivElement>(null)
   /* useOutsideClick Function */
   useOutsideClick(dropDownRef, closeSelect, selectRef) 




    /* 
        | FUNCTIONS |
    */

    function toggleIsSelectActive () {
        setIsSelectActive(prev => !prev)
    }

    function closeSelect () {
        setIsSelectActive(false)
    }





    return (

        <div className={`${cl['button-select']}`}>



            <div 
            className={`
                ${cl['buttons-select__button']} 
                bg-${theme_color}
                bg-${theme_color}-hover-light 
                ${className}`}

            >
                <span className={`${cl['button-select__text']}`}>
                    {buttonText}
                </span>
            </div>



            <div 
            className={`
                ${cl['buttons-select__select']} 
                bg-${theme_color}
                bg-${theme_color}-hover-light 
                ${className}`}

                onClick={toggleIsSelectActive}
                ref={selectRef}
            >
                <figure className={`${cl['button-select__icon']}`}>
                    <DropDownIcon />
                </figure>
            </div>



            <CSSTransition
                in={isSelectActive}
                timeout={200}
                classNames={{
                    enterActive: `${cl['button-select__drop-down-enter-active']}`,
                    exitActive: `${cl['button-select__drop-down-exit-active']}`
                }}
            >

                {withDeleting 

                /* WITH DELETING */

                ? <></>

                : 
                /* WITHOUT DELETING */
                <>

                {isSelectActive &&<div 
                    className={cl['button-select__drop-down']}
                    ref={dropDownRef}
                    style={{
                        position: 'absolute',
                    }}
                >

                    <span className={`${cl['drop-down__buttons']}`}>
                        <div className={`${cl['drop-down__buttons-text']}`}>Опубликовать</div>
                    </span>
                    <span className={`${cl['drop-down__buttons']}`}>
                        <div className={`${cl['drop-down__buttons-text']}`}>Добавить в расписание</div>
                    </span>
                    <span className={`${cl['drop-down__buttons']}`}>
                        <div className={`${cl['drop-down__buttons-text']}`}>Сохранить черновик</div>
                    </span>

                </div>} 

                </>
                }

            </CSSTransition>
            

        </div>
    )
}


export default ButtonSelect
