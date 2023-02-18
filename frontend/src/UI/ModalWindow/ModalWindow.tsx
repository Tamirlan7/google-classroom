import React from 'react';
import { JsxElement } from 'typescript';
import cl from './ModalWindow.module.css';


interface ModalWindowProps extends React.PropsWithChildren {
    className?: string
    active: boolean
    setActive: (bool: boolean) => void
}

const ModalWindow: React.FC<ModalWindowProps> = ({children, className, active, setActive }) => {

    return (
        <div 
            className={active ? `${cl['modal-window']} ${cl['modal-active']}` : `${cl['modal-window']}`} 
            onMouseUp={() => setActive(false)}
        >   
            <div
                className={
                    className && active 
                    ? `${cl['modal-window-content']} ${className} ${cl['modal-content-active']}` 
                    : active ? `${cl['modal-window-content']} ${cl['modal-content-active']}` 
                    : className ? `${className} ${cl['modal-window-content']}` 
                    : `${cl['modal-window-content']}`
                }
                onMouseUp={(e) => e.stopPropagation()}
            >
                {children}
            </div>
        </div>
    )
}

export default ModalWindow;


