import React from "react";
import ProfileField from "./ProfileField";
import { IProfileField } from "../../../types/types";
import { useTypedSelector } from "../../../hooks/redux";


interface ProfileAddressFormProps extends React.PropsWithChildren {

}

const ProfileAddressForm: React.FC<ProfileAddressFormProps> = () => {

    const {personal_address, business_address, other_addresses} = useTypedSelector(state => state.profile.profile)

    const profileFields: IProfileField[] = [
        {
            fieldName: 'Личный',
            value: personal_address,
            link: 'personal-address'
        },
        {
            fieldName: 'Рабочий',
            value: business_address,
            link: 'business-address'
        },
        {
            fieldName: 'Другие адреса',
            value: other_addresses,
            link: 'other-addresses'
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
                <ProfileField link={field.link} fieldName={field.fieldName} value={field.value} key={index} />)}
            </form>
        </div>
    );
}


export default ProfileAddressForm;
