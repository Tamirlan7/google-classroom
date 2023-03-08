import React from "react";
import cl from './Select.module.css'
import { ReactComponent as DropDownIcon } from '../../assets/icons/drop-down.svg'
import Avatar from "../../utils/Avatar/Avatar";
import { useOutsideClick } from "../../hooks/useClick";



const Select: React.FC = ({ }) => {
    const [ isSelectActive, setIsSelectActive ] = React.useState<boolean>(false)


    const selectRef = React.useRef<HTMLDivElement>(null)
    useOutsideClick(selectRef, disactiveSelect)
    const selectRect = selectRef.current?.getBoundingClientRect()
    const title = 'Название'
    const theme_color = 'pink'
    const section = 'Раздел'
    
    const [selectStyle, setSelectStyle] = React.useState({
        top: 0,
        left: 0,
        height: 0, 
    })

    React.useEffect(() => {
        changeSelectState()
    }, [])
    
    function activeSelect () {
        if(isSelectActive)
            setIsSelectActive(false)
    
        else setIsSelectActive(true)
    }


    function disactiveSelect() {
        setIsSelectActive(false)
    }

    function changeSelectState() {
        if(selectRef.current?.getBoundingClientRect) {
            const selectRect = selectRef.current.getBoundingClientRect()
            setSelectStyle(prev => ({...prev, top :selectRect.top}))
            setSelectStyle(prev => ({...prev, left :selectRect.left}))
            setSelectStyle(prev => ({...prev, height :selectRect.height}))
        }
    }

    return (
        <div className={cl['select']} ref={selectRef} onClick={activeSelect}>
            <div className={cl['select-inner']}>
                <span className={cl['select-inner__value']}>
                    <span className={cl['value-inner']}>
                        <span>Value 1</span>
                        <figure><DropDownIcon /></figure>
                    </span>
                </span>
            </div>
            {isSelectActive && <div 
                className={cl['options-block']} 
                style={{
                    position: "absolute",
                    top: selectStyle.top + selectStyle.height,
                    left: selectStyle.left,
                }}
            >
                <span className={`${cl['default-option']}`}>

                    <div className={cl['option-checkbox']}>
                        <div className={`${cl['option-checkbox__img']} ${cl['option-checkbox__default-active']}`}></div>
                    </div>

                    <div className={cl['option-text']}>
                        <div className={cl['option-avatar']}>
                            <Avatar theme_color={theme_color} title={title} />
                        </div>
                        <div className={cl['option-text__text']}>
                            <div className={cl['option-text__title']}>{title}</div>
                            {section && <div className={cl['option-text__section']}>{section}</div>}
                        </div>
                    </div>

                </span>
                <span className={`${cl['default-option']}`}>

                    <div className={cl['option-checkbox']}>
                        <div className={`${cl['option-checkbox__img']} ${cl['option-checkbox__default-active']}`}></div>
                    </div>

                    <div className={cl['option-text']}>
                        <div className={cl['option-avatar']}>
                            <Avatar theme_color={theme_color} title={title} />
                        </div>
                        <div className={cl['option-text__text']}>
                            <div className={cl['option-text__title']}>{title}</div>
                            {section && <div className={cl['option-text__section']}>{section}</div>}
                        </div>
                    </div>

                </span>
                <span className={`${cl['default-option']}`}>

                    <div className={cl['option-checkbox']}>
                        <div className={`${cl['option-checkbox__img']} ${cl['option-checkbox__default-active']}`}></div>
                    </div>

                    <div className={cl['option-text']}>
                        <div className={cl['option-avatar']}>
                            <Avatar theme_color={theme_color} title={title} />
                        </div>
                        <div className={cl['option-text__text']}>
                            <div className={cl['option-text__title']}>{title}</div>
                            {section && <div className={cl['option-text__section']}>{section}</div>}
                        </div>
                    </div>

                </span>
            </div>}
        </div>
    )
}

export default Select
