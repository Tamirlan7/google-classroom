import React from "react";
import ProfileField from "./ProfileField";
import emailImg from '../../../assets/images/email.png'
import { IProfileField } from "../../../types/types";
import { useTypedSelector } from "../../../hooks/redux";

const ProfileContactForm: React.FC = () => {

    const {email, phone} = useTypedSelector(state => state.profile.profile)

    const profileFields: IProfileField[] = [
        {fieldName: 'Электронная почта', value: email, link: 'email'},
        {fieldName: 'Телефон', value: phone, link: 'phone'},
    ]

    return (
        <div className="profile-settings profile-contact">
            <div className="profile-settings__header">
                <h2>Контактная информация</h2>
            </div>
            <form className="profile-form profile-contact__form">
                {profileFields.map((field, index) => 
                <ProfileField link={field.link} fieldName={field.fieldName} value={field.value} key={index} />)}
            </form>
            <div className="profile-contact__footer">
                <h3>Другие варианты</h3>
                <button className="profile-contact-btn">
                    <figure>
                        <img src={emailImg} alt="email" />
                    </figure>
                    <big>Настройки сообщения от Google</big>
                </button>
            </div>
        </div>
    );
}


export default ProfileContactForm;
