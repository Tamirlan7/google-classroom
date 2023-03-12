import React from 'react'
import cl from './ModifyButton.module.css'


interface ModifyButtonProps extends React.PropsWithChildren {
    cmd: string
    name?: string
    arg?: string

    isFormattingRemoved: boolean
    setIsFormattingRemoved: React.Dispatch<React.SetStateAction<boolean>>
}

const ModifyButton: React.FC<ModifyButtonProps> = ({ isFormattingRemoved, setIsFormattingRemoved, children, cmd, name, arg }) => {
    const [isActive, setIsActive] = React.useState<boolean>(false)


    function disactiveIsRemoveFormatting() {
        setIsFormattingRemoved(false)
    }

    function toggleActive () {
        // setIsFormattingRemoved(false)
        
        const selectedNode = window.getSelection() 

        if (
            selectedNode
            && !selectedNode.isCollapsed
            && selectedNode.anchorNode
            && selectedNode.anchorNode.parentElement
            && selectedNode.anchorNode.parentElement.localName === findTagByCmd()
        ) {
            console.log(isFormattingRemoved)
            console.log(isActive)
            setIsActive(true)
            return
        }

        if (
            selectedNode    
            && !selectedNode.isCollapsed
            && selectedNode.anchorNode
            && selectedNode.anchorNode.parentElement
            && selectedNode.anchorNode.parentElement.localName !== findTagByCmd()
        ) { 
            console.log(isFormattingRemoved)
            console.log(isActive)
            setIsActive(false)
            return
        }

        console.log('else')
        console.log(window.getSelection())
        console.log(isFormattingRemoved)
        console.log(isActive)
        setIsActive(prev => !prev)
    }

    const findTagByCmd = (): 'b' | 'i' | 'ul' | 'u' | false => {

        switch(cmd) {
            case 'bold':
                return 'b'
            case 'italic':
                return 'i'
            case 'insertUnorderedList':
                return 'ul'
            case 'underline':
                return 'u'
            default:
                return false
        }

    }

    function removeFormatting() {
        const selectedNodes = window.getSelection()

        if(!selectedNodes?.isCollapsed) 
            setIsFormattingRemoved(true)

    }

    function onMouseDown(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault() // avoids loosing focus from the editable area

        return document.execCommand(cmd, false, arg) // Send the command to the browser
    }

    return (
        <>
        {cmd !== 'removeFormat'
        ? <button
            className={isActive && !isFormattingRemoved
                ? `${cl['modify-button']} ${cl['modify-button__clicked']}`
                : `${cl['modify-button']}`
            }

            onClick={() => {disactiveIsRemoveFormatting(); toggleActive()}}
            key={cmd}
            onMouseDown={(e) => onMouseDown(e)}
            type={'button'}
        >
            {children}
        </button> 
        
        : <button
            className={
                `${cl['modify-button']}`
            }
            onClick={removeFormatting}
            key={cmd}
            onMouseDown={(e) => onMouseDown(e)}
            type={'button'}
        >
            {children}
        </button> 
        }
        </>
    )
}


export default ModifyButton
