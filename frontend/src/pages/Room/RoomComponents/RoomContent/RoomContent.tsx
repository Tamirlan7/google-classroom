import React from "react";
import './RoomContent.css'
import { ReactComponent as ThreeDotsIcon } from '../../../../assets/icons/three-dots.svg'
import { ReactComponent as InFullScreenIcon } from '../../../../assets/icons/in-full-screen.svg'


const RoomContent: React.FC = () => {
    const theme_color = 'pink'
    const code = '5426vs5'

    return (
        <div className="room-content">
            <aside className="room-content__aside" role={'complementary'}>
                <div className="room-content__code-block">
                    <div className="code-block__title">   
                        <small>Код курса</small>
                        <figure className="code-block__icon"><ThreeDotsIcon /></figure>
                    </div>
                    <div className={`code-block__code code-block__code-${theme_color}`}>
                        <h2 className={`code-block__code-text`}>{code}</h2>
                        <figure className={`code-block__icon code-block__code-icon`}>
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
                    <div className="expect-block__button-block">
                        <button>Посмотреть всё</button>
                    </div>
                </div>
            </aside>
            <div>

            </div>
        </div>
    )
}


export default RoomContent
