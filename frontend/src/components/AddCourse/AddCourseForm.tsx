import React from "react";
import ModalWindow from "../../UI/ModalWindow/ModalWindow";
import './AddCourseForm.css' 


interface AddCourseProps {
    isConfirmedModal: boolean
    setIsConfirmedModal: (prev: React.SetStateAction<boolean>) => void
}

interface IRoomData {
    title: string
    section: string
    audience: string
    subject: string
}

const AddCourseForm: React.FC<AddCourseProps> = ({ isConfirmedModal, setIsConfirmedModal }) => {
    const [isAddCourseModal, setIsAddCourseModal] = React.useState<boolean>(false);
    const [isCheckboxChecked, setIsCheckboxChecked] = React.useState<boolean>(false);
    const [roomData, setRoomData] = React.useState<IRoomData>({
        audience: '',
        title: '',
        subject: '',
        section: '',
    })

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
        setRoomData(prev => ({...prev, [e.target.name]: e.target.value}))

    function onCreateRoom(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
    }

    function openAddCourseModal() {
        setIsAddCourseModal(true)
        setIsConfirmedModal(false)
        setIsCheckboxChecked(false)
    }

    function closeConfirmedModal() {
        setIsConfirmedModal(false)
        setIsCheckboxChecked(false)
    }

    if (isConfirmedModal) {
        return (
            <ModalWindow 
                active={isConfirmedModal} 
                setActive={setIsConfirmedModal} 
                className={"confirm-modal"}
            >
                <div className="confirm-modal__header">
                    Используете Класс в учебном заведении?
                </div>
                <div className="confirm-modal__main">
                    <p className="confirm-main__text">
                        Для доступа к Классу вашему учебному заведению нужно зарегистрировать аккаунт 
                        <a className="confirm-modal__link" href="https://edu.google.com/intl/ru/workspace-for-education/editions/education-fundamentals/#how-to"> Google Workspace for Education.</a>
                        <a className="confirm-modal__link" href="https://support.google.com/edu/classroom/answer/6025224?hl=ru&authuser=0"> Подробнее...</a>
                    </p>
                    <p className="confirm-main__text">
                        Google Workspace for Education позволяет администраторам выбрать, какие сервисы Google будут доступны учащимся, а также обеспечивает дополнительную 
                        <a className="confirm-modal__link" href="https://edu.google.com/intl/ru/why-google/privacy-security/"> конфиденциальность и безопасность </a>
                        данных. Учащиеся на территории учебного заведения не смогут входить в сервис "Google Класс" с помощью обычного аккаунта.
                    </p>
                    <label className="confirm-main__label">
                        <div className="confirm-main__label-checkbox">
                            <div className="confirm-main__checkbox-block">
                                <div className="confirm-main__checkbox">
                                    <input 
                                        type="checkbox" 
                                        className="confirm__checkbox" 
                                        onChange={() => setIsCheckboxChecked(prev => !prev)}
                                        checked={isCheckboxChecked ? true : false}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="confirm-main__label-text">
                            Мне все понятно, и я не использую Класс в учебном заведении
                        </div>
                    </label>
                    
                </div>
                <div className="confirm-modal__footer">
                    <button className="confirm-button confirm-button__back" onClick={closeConfirmedModal}>Назад</button>
                    <button 
                        className={isCheckboxChecked ? "confirm-button confirm-button__continue" : "confirm-button confirm-button__disabled"} 
                        disabled={isCheckboxChecked ? false : true}
                        onClick={openAddCourseModal}
                    >Продолжить</button>
                </div>
            </ModalWindow> 
        )
    }
    
    if(isAddCourseModal) {
        return (
        <ModalWindow
            active={isAddCourseModal}
            setActive={setIsAddCourseModal}
            className={"add-course"}
        >
            <div className="add-course__header">
                <div className="add-course__title">
                    <div>
                        Создать курс
                    </div>
                </div>
            </div>
            <div className="add-course__main">
                <div className="add-course__input-block">
                    <input 
                        type="text" 
                        className="add-course__input"
                        placeholder=" "
                        name="title"
                        onChange={(e) => onChange(e)}
                        required
                    />
                    <label className="add-course__label"><span>Название курса (обязательно)</span></label>
                    <div className="add-course__line"></div>
                </div>
                <div className="add-course__input-block">
                    <input 
                        type="text" 
                        className="add-course__input"
                        placeholder=" "
                        name="section"
                        onChange={(e) => onChange(e)}
                    />
                    <label className="add-course__label"><span>Раздел</span></label>
                    <div className="add-course__line"></div>
                </div>
                <div className="add-course__input-block">
                    <input 
                        type="text" 
                        className="add-course__input"
                        placeholder=" " 
                        name="subject"
                        onChange={(e) => onChange(e)}
                    />
                    <label className="add-course__label"><span>Предмет</span></label>
                    <div className="add-course__line"></div>
                </div>
                <div className="add-course__input-block">
                    <input 
                        type="text" 
                        className="add-course__input"
                        placeholder=" " 
                        name="audience"
                        onChange={(e) => onChange(e)}
                    />
                    <label className="add-course__label"><span>Аудитория</span></label>
                    <div className="add-course__line"></div>
                </div> 
            </div>
            <form onSubmit={(e) => onCreateRoom(e)} className="confirm-modal__footer add-course__footer">
                    <button className="confirm-button confirm-button__back" onClick={closeConfirmedModal}>Назад</button>
                    <button 
                        type="submit"
                        className={roomData.title ? "confirm-button confirm-button__continue" : "confirm-button confirm-button__disabled"} 
                        disabled={roomData.title ? false : true}
                        onClick={openAddCourseModal}
                    >Продолжить</button>
            </form>
        </ModalWindow>
        )
    }

    return <></>
}

export default AddCourseForm;
