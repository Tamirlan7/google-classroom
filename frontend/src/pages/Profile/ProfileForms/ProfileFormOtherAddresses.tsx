import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useTypedSelector } from "../../../hooks/redux";
import { IProfile } from "../../../types/types";
import ProfileFormHeader from "./ProfileFormHeader";
import { updateProfile } from "../../../actions/profile/action";
import { Link } from "react-router-dom";


interface ProfileFormOtherAddressesProps {
    updateProfile: (profile: IProfile) => void
}

const ProfileFormOtherAddresses: React.FC<ProfileFormOtherAddressesProps> = ({ updateProfile }) => {

    const currentOtherAddresses = useTypedSelector(state => state.profile.profile.other_addresses)
    const [otherAddresses, setOtherAddresses] = useState<string>('')
    
    useEffect(() => {
        if(currentOtherAddresses)
            setOtherAddresses(currentOtherAddresses)

    }, [currentOtherAddresses])

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
        setOtherAddresses(e.target.value)

    function updateOtherAddresses(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        updateProfile({other_addresses: otherAddresses})
        console.log('submitted')
    }
    return (
        <div className='field-page field__personal__adress-page'>
            <ProfileFormHeader title="Адрес" />
            <div className='field-page__content field-page__personal__adress-content'>
                <div className="inner-field__content inner-field-personal__adress__content">
                    <div className="field-form">
                        <div className="move-input__field-form">
                            <input 
                                className="move-input other-addresses-input" 
                                type="text" 
                                name="other-addresses" 
                                placeholder=" " 
                                value={otherAddresses}
                                onChange={(e) => onChange(e)}
                            />
                            <label className=" move-label other-addresses-label" htmlFor="personal-address"><span>Адрес</span></label>
                        </div>
                        <form className="form-buttons" onSubmit={(e) => updateOtherAddresses(e)}>
                            <Link to={'/profile?cat=self-info'} className="cancel-button" role="button">Отмена</Link>
                            <button 
                                type="submit" 
                                className={otherAddresses !== currentOtherAddresses && otherAddresses ? "submit-button submit-button-active" : "submit-button"} 
                                disabled={otherAddresses !== currentOtherAddresses && otherAddresses ? false : true}
                            >Сохранить</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default connect(null, { updateProfile })(ProfileFormOtherAddresses);
