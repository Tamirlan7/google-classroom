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

const ProfileFormBusinessAddress: React.FC<ProfileFormPersonalAddressProps> = ({ updateProfile }) => {
    const currentBusinessAddress = useTypedSelector(state => state.profile.profile.business_address)
    const [businessAddress, setBusinessAddress] = useState<string>('')
    
    useEffect(() => {
        if(currentBusinessAddress)
            setBusinessAddress(currentBusinessAddress)

    }, [currentBusinessAddress])

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
        setBusinessAddress(e.target.value)

    function updateBusinessAddress(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        updateProfile({business_address: businessAddress})
    }

    return (
        <div className='field-page field__personal__adress-page'>
            <ProfileFormHeader title="Рабочий адрес" />
            <div className='field-page__content field-page__personal__adress-content'>
                <div className="inner-field__content inner-field-personal__adress__content">
                    <div className="privacy-info">
                        <p>
                        Домашний и рабочий адреса используются для персонализации сервисов Google (например, чтобы показывать результаты поиска поблизости от вашего дома или прокладывать маршруты до места работы на Картах) и для подбора более подходящей рекламы. Адреса можно удалить в любой момент. <span>Подробнее…</span>
                        </p>
                    </div>
                    <div className="field-form">
                        <div className="move-input__field-form">
                            <input 
                                className="move-input" 
                                type="text" 
                                name="business-address" 
                                placeholder=" "
                                value={businessAddress} 
                                onChange={(e) => onChange(e)}
                            />
                            <label className="move-label" htmlFor="business-address"><span>Адрес</span></label>
                        </div>
                        <form className="form-buttons" onSubmit={(e) => updateBusinessAddress(e)}>
                            <Link to={'/profile?cat=self-info'} className="cancel-button" role="button">Отмена</Link>
                            <button 
                                type="submit" 
                                className={businessAddress !== currentBusinessAddress && businessAddress ? "submit-button submit-button-active" : "submit-button"} 
                                disabled={businessAddress !== currentBusinessAddress && businessAddress ? false : true}
                            >Сохранить</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default connect(null, { updateProfile })(ProfileFormBusinessAddress);
