import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useTypedSelector } from "../../../hooks/redux";
import { IProfile } from "../../../types/types";
import ProfileFormHeader from "./ProfileFormHeader";
import { updateProfile } from "../../../actions/profile/action";
import { Link } from "react-router-dom";


interface ProfileFormEmailProps {
    updateProfile: (profile: IProfile) => void
}

const ProfileFormEmail: React.FC<ProfileFormEmailProps> = ({updateProfile}) => {
    const currentEmail = useTypedSelector(state => state.profile.profile.email)
    const [email, setEmail] = useState<string>('');
    console.log('ProfileFormEmail render');
    useEffect(() => {
        if(currentEmail)
            setEmail(currentEmail)
    }, [currentEmail])

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => 
        setEmail(e.target.value)
    
    function updateEmail(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        updateProfile({email})
    }

    return (
        <div className='field-page field__email-page'>
            <ProfileFormHeader title="Электронная почта" />
            <div className='field-page__content field-page__email-content'>
                <div className="inner-field__content inner-field-email__content">
                    <div className="privacy-info">
                        <p>
                        Здесь вы можете изменить адреса электронной почты, связанные с вашим аккаунтом Google. <span>Подробнее…</span>
                        </p>
                    </div>
                    <div className="field-form">
                        <div className="move-input__field-form">
                            <input 
                                className="move-input" 
                                type="email" 
                                name="email" 
                                placeholder=" "
                                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                                value={email}
                                onChange={(e) => onChange(e)}
                            />
                            <label className="move-label" htmlFor="email"><span>Почта</span></label>
                        </div>
                        <form className="form-buttons" onSubmit={(e) => updateEmail(e)}>
                            <Link to={'/profile?cat=self-info'} className="cancel-button" role="button">Отмена</Link>
                            <button 
                                type="submit"
                                className={email !== currentEmail && email ? "submit-button submit-button-active" : "submit-button"} 
                                disabled={email !== currentEmail && email ? false : true}
                            >Сохранить</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default connect(null, { updateProfile })(ProfileFormEmail);
