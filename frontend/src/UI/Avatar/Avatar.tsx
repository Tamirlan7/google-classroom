import React from 'react'
import cl from './Avatar.module.css'

interface AvatarProps {
    title: string
    theme_color: string
}

const Avatar: React.FC<AvatarProps> = ({ title, theme_color }) => {
    
    return (
        <div className={cl['avatar']}>
            <div className={`${cl['img']} bg-${theme_color}`}>
                {title[0]}
            </div>
        </div>
    )
}

export default Avatar
