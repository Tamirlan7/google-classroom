import React from "react";
import './RoomAside.css'
import { ReactComponent as ThreeDotsIcon } from '../../../../assets/icons/three-dots.svg'
import { ReactComponent as InFullScreenIcon } from '../../../../assets/icons/in-full-screen.svg'
import { ReactComponent as RepeatIcon } from '../../../../assets/icons/repeat.svg'


const RoomAside: React.FC = () => {
    const theme_color = 'pink'
    const code = '5426vs5'

    return (
        <aside className="room-content__aside" role={'complementary'}>
            <div className="room-content__code-block">
                <div className="code-block__title">   
                    <small>Код курса</small>
                    <figure className="code-block__icon"><ThreeDotsIcon /></figure>
                </div>
                <div className={`code-block__code color-${theme_color} fill-${theme_color}`}>
                    <h2 className={`code-block__code-text`}>{code}</h2>
                    <figure className={`code-block__icon code-block__code-icon bg-${theme_color}-hover`}>
                        <InFullScreenIcon />
                    </figure>
                </div>
            </div>
            <div className="room-content__expect-block">
                <div className="expect-block__title">
                    <h4>Предстоящие </h4>
                </div>
                <div className="expect-block__expect-tasks">
                    <p>Ничего сдавать не нужно</p>
                </div>
                <div className={`expect-block__button-block`}>
                    <button className={`color-${theme_color} bg-${theme_color}-hover`}>Посмотреть всё</button>
                </div>
            </div>
        </aside>
    )
}


export default RoomAside
