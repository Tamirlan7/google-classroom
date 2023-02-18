import React, { useState, useEffect } from "react";
import ProfileFormHeader from "../ProfileForms/ProfileFormHeader";
import { connect } from "react-redux";
import { useTypedSelector } from "../../../hooks/redux";
import { IProfile } from "../../../types/types";
import { updateProfile } from "../../../actions/profile/action";
import { Link } from "react-router-dom";

interface ProfileEditPhoneProps {
    updateProfile: (profile: IProfile) => void
}

const ProfileEditPhone: React.FC<ProfileEditPhoneProps> = ({ updateProfile }) => {
    const currentPhone = useTypedSelector(state => state.profile.profile.phone)
    const [phone, setPhone] = useState<string>('')
    
    useEffect(() => {
        if(currentPhone)
            setPhone(currentPhone)

    }, [currentPhone])

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
        setPhone(e.target.value)

    function updatePhone(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        updateProfile({ phone })
    }

    return (
        <div className='field-page field__personal__adress-page'>
        <ProfileFormHeader title="Номер телефона" />
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
                                placeholder=" " 
                                value={phone}
                                onChange={(e) => onChange(e)}
                            />
                            <label className="move-label name-edit-label" htmlFor="nickname"><span>Новый номер</span></label>
                        </div>
                    </div>
                    <form className="form-buttons" onSubmit={(e) => updatePhone(e)}>
                        <Link to="/profile?cat=self-info" className="cancel-button" role="button">Отмена</Link>
                        <button 
                            type="submit" 
                            className={phone !== currentPhone && phone ? "submit-button submit-button-active" : "submit-button"}
                            disabled={phone !== currentPhone && phone ? false : true}
                        >Сохранить</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
    );
}

export default connect(null, { updateProfile })(ProfileEditPhone);
