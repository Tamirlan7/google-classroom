import React from "react";
import ProfileField from "./ProfileField";
import emailImg from '../../../assets/images/email.png'
import { IProfileField } from "../../../types/types";

const ProfileContactForm: React.FC = () => {

    const profileFields: IProfileField[] = [
        {fieldName: 'Телефон', conditionName: 'phone'},
        {fieldName: 'Электронная почта', conditionName: 'email'},
    ]

    return (
        <div className="profile-settings profile-contact">
            <div className="profile-settings__header">
                <h2>Контактная информация</h2>
            </div>
            <form className="profile-form profile-contact__form">
                {profileFields.map((field, index) => 
                <ProfileField fieldName={field.fieldName} conditionName={field.conditionName} key={index} />)}
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
