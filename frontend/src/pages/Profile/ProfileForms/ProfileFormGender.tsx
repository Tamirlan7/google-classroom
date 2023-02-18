import React, { useState, useEffect } from "react";
import ProfileFormHeader from "./ProfileFormHeader";
import peopleImg from '../../../assets/images/people.png';
import lockImg from '../../../assets/images/lock.png';
import { useTypedSelector } from "../../../hooks/redux";
import { IProfile } from "../../../types/types";
import { connect } from "react-redux";
import { updateProfile } from "../../../actions/profile/action"; 


interface ProfileFormGenderProps {
    updateProfile: (profile: IProfile) => void
}

const ProfileFormGender: React.FC<ProfileFormGenderProps> = ({ updateProfile }) => {
    const [gender, setGender] = useState<boolean | null>(null);
    const currentGender = useTypedSelector(state => state.profile.profile.gender);

    useEffect(() => {
        if(currentGender !== undefined)
            setGender(currentGender)

    }, [currentGender])

    function updateGender(genderValue: boolean | null) {
        setGender(genderValue)
        updateProfile({gender: genderValue})
    }

    return (
        <div className='field-page field__gender-page'>
            <ProfileFormHeader title="Пол" />
            <div className='field-page__content field-page__gender-content'>
                <div className="inner-field__content inner-field-gender__content">
                    <div className="privacy-info">
                        <p>Сведения о вашем поле могут использоваться для персонализации сервисов Google. Например, мы сможем правильно к вам обращаться <span>Подробнее…</span></p>
                    </div>
                    <div className='field-form field__gender-form'>
                        <div className="field-gender-block">
                            <small>Пол</small>
                            <div className="genders">
                                <div className="gender">
                                    <input 
                                        id="gender-female" 
                                        type="radio" 
                                        name="gender" 
                                        checked={gender === true ? true : false}
                                        onChange={() => updateGender(true)}
                                    /> 
                                    <label htmlFor="gender-female">Женский</label>
                                </div>
                                <div className="gender">
                                    <input 
                                        id="gender-male" 
                                        type="radio" 
                                        name="gender" 
                                        checked={gender === false ? true : false}
                                        onChange={() => updateGender(false)}
                                    /> 
                                    <label htmlFor="gender-male">Мужской</label>
                                </div>
                                <div className="gender">
                                    <input 
                                        id="gender-undefined" 
                                        checked={typeof gender === 'object' ? true : false} 
                                        type="radio" 
                                        name="gender" 
                                        onChange={() => updateGender(null)}
                                    /> 
                                    <label htmlFor="gender-undefined">Не скажу</label>
                                </div>
                            </div>
                        </div>
                        <div className="field-privacy-block">
                            <h3>Укажите кто может видеть ваш пол</h3>
                            <div className="field-privacy-buttons">
                                <button className="button-selected">
                                    <figure>
                                        <img src={lockImg} alt="lock" />
                                    </figure>
                                    <small>
                                        Только вы
                                    </small>
                                </button>
                                <button>
                                    <figure>
                                        <img src={peopleImg} alt="people" />
                                    </figure>
                                    <small>
                                        Все
                                    </small>
                                </button>
                            </div>
                        </div>
                        <div className="field-privacy-info">
                            <p>
                            Эту информацию смогут увидеть любые пользователи, которые будут общаться с вами или просматривать созданный вами контент в сервисах Google. <span>Подробнее…</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default connect(null, { updateProfile })(ProfileFormGender);
