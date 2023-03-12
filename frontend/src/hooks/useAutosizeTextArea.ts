import React from "react"


function useAutosizeTextArea(textareaRef: HTMLElement | null, value: string): void {
    
    React.useEffect(() => {

        if(!textareaRef)
            return

        // resetting initial height
        textareaRef.style.height = '0px'

        textareaRef.style.height = textareaRef.scrollHeight + 'px'


    }, [textareaRef, value])

} 

export default useAutosizeTextArea
