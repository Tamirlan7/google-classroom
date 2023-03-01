import React from "react";
import ModalWindow from "../../UI/ModalWindow/ModalWindow";
import './AddCourseForm.css' 


interface AddCourseProps {
    isConfirmedModal: boolean
    setIsConfirmedModal: (prev: React.SetStateAction<boolean>) => void
}

const AddCourseForm: React.FC<AddCourseProps> = ({ isConfirmedModal, setIsConfirmedModal }) => {
    const [isAddCourseModal, setIsAddCourseModal] = React.useState<boolean>(false);
    const [isCheckboxChecked, setIsCheckboxChecked] = React.useState<boolean>(false);

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

        </ModalWindow>
        )
    }

    return <></>
}

export default AddCourseForm;
