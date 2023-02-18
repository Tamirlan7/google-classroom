import React, { useEffect, useState } from "react";
import ProfileFormHeader from "../ProfileForms/ProfileFormHeader";
import PeopleImg from '../../../assets/images/people.png';
import { connect } from "react-redux";
import { IProfile } from "../../../types/types";
import { useTypedSelector } from "../../../hooks/redux";
import { updateProfile } from "../../../actions/profile/action"
import { Link } from "react-router-dom";


interface ProfileEditNicknameProps {
    updateProfile: (profile: IProfile) => void
}

const ProfileEditNickname: React.FC<ProfileEditNicknameProps> = ({ updateProfile }) => {
    const currentNickname = useTypedSelector(state => state.profile.profile.nickname); 
    const [nickname, setNickname] = useState<string>('');

    useEffect(() => {
        if(currentNickname)
            setNickname(currentNickname)
    }, [currentNickname])

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
        setNickname(e.target.value)

    function updateNickname(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        updateProfile({nickname})
    }


    return (
        <div className='field-page field__personal__adress-page'>
            <ProfileFormHeader title="Псевдоним" />
            <div className='field-page__content field-page__personal__adress-content'>
                <div className="inner-field__content inner-field-personal__adress__content">
                    <div className="field-form name-edit__field-form">
                        <div className="edit-nickname__privacy-block privacy-block">
                            <p>Псевдоним будет изменен во всех сервисах, где используется аккаунт Google. <span>Подробнее…</span></p>
                        </div>
                        <div className="edit-nickname__form">
                            <div className="move-input__field-form">
                                <input 
                                    className="move-input name-edit-input" 
                                    type="text" 
                                    name="nickname"
                                    value={nickname}
                                    placeholder=" "
                                    onChange={(e) => onChange(e)}
                                />
                                <label className="move-label name-edit-label" htmlFor="nickname"><span>Псевдоним</span></label>
                            </div>
                        </div>
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
                        <form className="form-buttons" onSubmit={(e) => updateNickname(e)}>
                            <Link to='/profile?cat=self-info' className="cancel-button" role="button">Отмена</Link>
                            <button
                                type="submit" 
                                className={
                                    nickname !== currentNickname && nickname
                                    ? "submit-button submit-button-active" 
                                    : "submit-button"
                                } 
                                disabled={
                                    nickname !== currentNickname && nickname
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

export default connect(null, { updateProfile })(ProfileEditNickname);
