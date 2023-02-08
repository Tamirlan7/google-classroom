import React from "react";
import ProfileField from "./ProfileField";
import { IProfileField } from "../../../types/types";


interface ProfileAddressFormProps extends React.PropsWithChildren {

}

const ProfileAddressForm: React.FC<ProfileAddressFormProps> = () => {

    const profileFields: IProfileField[] = [
        {
            fieldName: 'Личный',
            conditionName: 'personalAddress'
        },
        {
            fieldName: 'Рабочий',
            conditionName: 'businessAddress'
        },
        {
            fieldName: 'Другие адреса',
            conditionName: 'otherAddresses'
        },
    ]

    return (
        <div className="profile-settings profile-form-settings">
            <div className="profile-settings__header">
                <h2 className="mb-5">Адреса</h2>
                <p>Домашний и рабочий адреса используются для персонализации сервисов Google и подбора более подходящей рекламы. Эти адреса видны только вам.</p>
                <br />
                <p>Вы можете добавлять адреса в свой профиль Google и указывать, смогут ли их видеть другие пользователи. <span>Подробнее...</span></p>
            </div>
            <form className="profile-form profile-address__info">
                {profileFields.map((field, index) => 
                <ProfileField fieldName={field.fieldName} conditionName={field.conditionName} key={index} />)}
            </form>
        </div>
    );
}


export default ProfileAddressForm;
