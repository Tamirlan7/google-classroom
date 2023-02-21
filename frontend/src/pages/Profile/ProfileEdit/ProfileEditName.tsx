import React, { useState, useEffect } from "react";
import ProfileFormHeader from "../ProfileForms/ProfileFormHeader";
import PeopleImg from '../../../assets/images/people.png';
import { connect } from "react-redux";
import { updateProfile } from "../../../actions/profile/action";
import { IProfile } from "../../../types/types";
import { useTypedSelector } from "../../../hooks/redux";
import { Link } from "react-router-dom";


interface ProfileEditNameProps {
    updateProfile: (profile: IProfile) => void
}

const ProfileEditName: React.FC<ProfileEditNameProps> = ({ updateProfile }) => {
    const currentName = useTypedSelector(state => state.profile.profile.name)
    const currentSurname = useTypedSelector(state => state.profile.profile.surname)
    console.log('ProfileEditName render');
    const [name, setName] = useState<{name: string, surname: string}>({
        name: '',
        surname: '' 
    })
    
    useEffect(() => {
        if(currentName)
            setName(prev => ({...prev, name: currentName}))
        if (currentSurname) 
            setName(prev => ({...prev, surname: currentSurname}))
            
    }, [currentName, currentSurname])

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
        setName((prev) => ({...prev, [e.target.name]: e.target.value}))

    function updateName(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        updateProfile({...name})
    }

    return (
        <div className='field-page field__personal__adress-page'>
            <ProfileFormHeader title="Имя" />
            <div className='field-page__content field-page__personal__adress-content'>
                <div className="inner-field__content inner-field-personal__adress__content">
                    <div className="field-form name-edit__field-form">
                        <div className="edit-name__privacy-block privacy-block">
                            <p>Имя будет изменено во всех сервисах, где используется аккаунт Google. <span>Подробнее…</span></p>
                        </div>
                        <form className="edit-name__form">
                            <div className="move-input__field-form">
                                <input 
                                    className="move-input name-edit__input" 
                                    type="text" 
                                    name="name" 
                                    value={name.name}
                                    pattern="[a-zA-Z\u0400-\u04ff\s0-9]+"
                                    placeholder=" " 
                                    onChange={(e) => onChange(e)}
                                    required
                                />
                                <label className="move-label name-edit-label" htmlFor="name"><span>Имя</span></label>
                            </div>
                            <div className="move-input__field-form">
                                <input 
                                    className="move-input name-edit__input" 
                                    type="text" 
                                    name="surname"
                                    value={name.surname} 
                                    placeholder=" " 
                                    pattern="[a-zA-Z\u0400-\u04ff\s0-9]+"
                                    onChange={(e) => onChange(e)}
                                    required
                                />
                                <label className="move-label name-edit-label" htmlFor="surname"><span>Фамилия</span></label>
                            </div>  
                        </form>
                        <div className='field-form__info'>
                            <h3>Кто может видеть ваше имя</h3>
                            <div className='field-form__info-text'>
                                <figure>
                                    <img src={PeopleImg} alt="people" />
                                </figure>
                                <p>Эту информацию смогут увидеть любые пользователи, которые будут общаться с вами или просматривать созданный вами контент в сервисах Google.
                                    <span> Подробнее…</span>
                                </p>
                            </div>
                        </div>
                        <form className="form-buttons" onSubmit={(e) => updateName(e)}>
                            <Link to={'/profile?cat=self-info'} className="cancel-button" role="button">Отмена</Link>
                            <button
                                type="submit" 
                                className={
                                    name.name && name.surname && (name.name !== currentName  || name.surname !== currentSurname) 
                                    ? "submit-button submit-button-active" 
                                    : "submit-button"
                                } 
                                disabled={
                                    name.name && name.surname && (name.name !== currentName  || name.surname !== currentSurname) 
                                    ? false 
                                    : true
                                }
                            >Сохранить</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default connect(null, { updateProfile })(ProfileEditName);
