import React from "react";
import cl from './Select.module.css'
import { ReactComponent as DropDownIcon } from '../../assets/icons/drop-down.svg'
import Avatar from "../Avatar/Avatar";
import { useOutsideClick } from "../../hooks/useClick";
import { IOption } from "../../types/types";


interface SelectProps {
    defaultOption?: IOption // to disable it, so that it would be always checked 
    options: IOption[] // ordinary options
    setOptions: React.Dispatch<React.SetStateAction<IOption[]>> | null
    className?: string
}

const Select: React.FC<SelectProps> = ({ className, defaultOption, options, setOptions }) => {
    const [isSelectActive, setIsSelectActive] = React.useState<boolean>(false)

    // filteredOptions uses whenever defaultOption is passed,
    const filteredOptions = options.filter(option => option.id !== defaultOption?.id)

    // USE-REFS

    const optionsRef = React.useRef<HTMLDivElement>(null)
    const selectRef = React.useRef<HTMLDivElement>(null)
    useOutsideClick(optionsRef, disactiveSelect, selectRef)

    // USE-MEMO

    /* 
        it is select that works like checkbox
        <select>
            <option checked></option>
            <option checked></option>
            <option></option>
        </select> 

        the way of determining which one is checked is here ||
                                                            \/
    */

    const selectValue = React.useMemo(() => {
        const selectedOptions = options.filter(option => option.selected === true)

        if(defaultOption) {
            if(selectedOptions.length + 1 > 1) return `${selectedOptions.length + 1} курса`

            else return defaultOption.title
        }

        return 'Не выбрано'

    }, [options])

    // the position of an dropdown element

    const selectStyle = React.useMemo(() => {
        let obj: {top: number, left: number, height: number} = {
            top: 0,
            left: 0,
            height: 0, 
        }
        
        if(selectRef?.current?.getBoundingClientRect) {
            const selectRect = selectRef?.current.getBoundingClientRect()
            obj = {
                top: selectRect.top,
                left: selectRect.left,
                height: selectRect.height
            }
        }

        return obj
    }, [isSelectActive])

    
    // FUNCTIONS

    // function to select an option 

    function selectOption(option: IOption) {
        setOptions 
        
        ? setOptions((prev) => {
            return prev.map((currOption) => {
                if(currOption.id === option.id) {
                    currOption.selected = !currOption.selected
                    return currOption
                }

                return currOption
            })
        })

        : console.log("setOptions function hasn't been passed (Select.tsx Component)")
    }

    // basic functionality

    function activeSelect () {
        if(isSelectActive)
            setIsSelectActive(false)
    
        else setIsSelectActive(true)
    }


    function disactiveSelect() {
        setIsSelectActive(false)
    }

    return (
        // SELECT
        <>
        <div className={`${cl['select']} ${className}`} ref={selectRef} onClick={activeSelect}>
            <div className={cl['select-inner']}>
                <span className={cl['select-inner__value']}>
                    <span className={cl['value-inner']}>
                        <span>{selectValue}</span>
                        <figure><DropDownIcon /></figure>
                    </span>
                </span>
            </div>
        </div>
        
        {/* DROP DOWN */}

        {isSelectActive && <div
            ref={optionsRef}
            className={cl['options-block']} 
            style={{
                position: "absolute",
                top: selectStyle.top + selectStyle.height,
                left: selectStyle.left,
            }}
        >

            {defaultOption

            // WITH DEFAULT OPTION


            ? <>
            <span key={defaultOption.id} className={`${cl['default-option']}`}>

                <div className={cl['option-checkbox']}>
                    <div className={`${cl['option-checkbox__img']} ${cl['option-checkbox__default-active']}`}></div>
                </div>

                <div className={cl['option-text']}>
                    <div className={cl['option-avatar']}>
                        <Avatar theme_color={defaultOption.theme_color} title={defaultOption.title} />
                    </div>
                    <div className={cl['option-text__text']}>
                        <div className={cl['option-text__title']}>{defaultOption.title}</div>
                        {defaultOption.section && <div className={cl['option-text__section']}>{defaultOption.section}</div>}
                    </div>
                </div>

            </span>
            {filteredOptions.map((option) => (
                <span key={option.id} className={`${cl['option']}`} onClick={() => selectOption(option)}>

                <div className={cl['option-checkbox']}>
                    <div className={option.selected 
                        ? `${cl['option-checkbox__img']} ${cl['option-checkbox__active']}` 
                        : `${cl['option-checkbox__img']} ${cl['option-checkbox__disactive']}`}
                        >
                    </div>
                </div>

                <div className={cl['option-text']}>
                    <div className={cl['option-avatar']}>
                        <Avatar theme_color={option.theme_color} title={option.title} />
                    </div>
                    <div className={cl['option-text__text']}>
                        <div className={cl['option-text__title']}>{option.title}</div>
                        {option.section && <div className={cl['option-text__section']}>{option.section}</div>}
                    </div>
                </div>

                </span>
            ))} 
            </>


                // WITHOUT DEFAULT OPTION

            : options.map((option) => (
                <span key={option.id} className={`${cl['option']}`}>

                    <div className={cl['option-checkbox']}>
                        <div className={option.selected 
                            ? `${cl['option-checkbox__img']} ${cl['option-checkbox__active']}` 
                            : `${cl['option-checkbox__img']} ${cl['option-checkbox__disactive']}`}
                        >

                            </div>
                    </div>
                
                    <div className={cl['option-text']}>
                        <div className={cl['option-avatar']}>
                            <Avatar theme_color={option.theme_color} title={option.title} />
                        </div>
                        <div className={cl['option-text__text']}>
                            <div className={cl['option-text__title']}>{option.title}</div>
                            {option.section && <div className={cl['option-text__section']}>{option.section}</div>}
                        </div>
                    </div>
            
                </span>
            ))
            }
        
        </div>}
        </>
    )
}

export default Select
