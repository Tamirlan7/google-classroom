import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useTypedSelector } from "../../../hooks/redux";
import { IProfile } from "../../../types/types";
import ProfileFormHeader from "./ProfileFormHeader";
import { updateProfile } from "../../../actions/profile/action";
import { Link } from "react-router-dom";


interface ProfileFormPersonalAddressProps {
    updateProfile: (profile: IProfile) => void
}

const ProfileFormPersonalAddress: React.FC<ProfileFormPersonalAddressProps> = ({ updateProfile }) => {

    const currentPersonalAddress = useTypedSelector(state => state.profile.profile.personal_address)

    const [personalAddress, setPersonalAddress] = useState<string>('')
    
    useEffect(() => {
        if(currentPersonalAddress)
            setPersonalAddress(currentPersonalAddress)

    }, [currentPersonalAddress])

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
        setPersonalAddress(e.target.value)

    function updatePersonalAddress(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        updateProfile({personal_address: personalAddress})
        console.log('submitted')
    }
    
    return (
        <div className='field-page field__personal__adress-page'>
        <ProfileFormHeader title="Домашний адрес" />
        <div className='field-page__content field-page__personal__adress-content'>
            <div className="inner-field__content inner-field-personal__adress__content">
                <div className="privacy-info">
                    <p>
                    Домашний и рабочий адреса используются для персонализации сервисов Google (например, чтобы показывать результаты поиска поблизости от вашего дома или прокладывать маршруты до места работы на Картах) и для подбора более подходящей рекламы. Адреса можно удалить в любой момент. <span>Подробнее…</span>
                    </p>
                </div>
                <div className="field-form personal-address__field-form">
                    <div className="move-input__field-form">
                        <input 
                            className="move-input personal-address-input" 
                            type="text" 
                            name="personal-address"
                            value={personalAddress} 
                            placeholder=" " 
                            onChange={(e) => onChange(e)}
                        />
                        <label className="move-label personal-address-label" htmlFor="personal-address"><span>Адрес</span></label>
                    </div>
                    <form className="form-buttons" onSubmit={(e) => updatePersonalAddress(e)}>
                        <Link to={'/profile?cat=self-info'} className="cancel-button" role="button">Отмена</Link>
                        <button 
                            type="submit" 
                            className={personalAddress !== currentPersonalAddress && personalAddress ? "submit-button submit-button-active" : "submit-button"}
                            disabled={personalAddress !== currentPersonalAddress && personalAddress ? false : true}
                        >Сохранить</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
    );
}


export default connect(null, { updateProfile })(ProfileFormPersonalAddress);
