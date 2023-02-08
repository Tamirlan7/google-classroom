import React from "react";
import '../Profile.css';
import reviewImg from '../../../assets/images/review-img.png';
import responsibleReviewImg from '../../../assets/images/responsible-review-img.png';
import ProfileField from "./ProfileField";
import { IProfileField } from "../../../types/types";


interface ProfileMainFormProps extends React.PropsWithChildren {

}

const ProfileMainForm: React.FC<ProfileMainFormProps> = () => {

    const profileFields: IProfileField[] = [
        {
            fieldName: 'Имя',
            conditionName: 'name'
        },
        {
            fieldName: 'Дата рождения',
            conditionName: 'birthday'
        },
        {
            fieldName: 'Пол',
            conditionName: 'gender'
        }
    ]

    return (
        <React.Fragment>
                <div className="profile__review">
                    <div className="profile__review-text">
                        <h1>
                            Данные вашего профиля в сервисах Google
                            <figure className="profile__review-responsible__img">
                                <img src={responsibleReviewImg} alt="los angeles" />
                            </figure>
                        </h1>
                        <p>Здесь можно посмотреть или изменить личную информацию. Некоторые данные, например контактные, можно сделать доступными всем, чтобы с вами было проще связаться. Также здесь содержатся сводные данные ваших профилей.</p>
                    </div>
                    <figure className="profile__review-img">
                        <img src={reviewImg} alt="bams" />
                    </figure>
                </div>  
                <div className="profile-settings profile-main-form">
                    <div className="profile-settings__header">
                        <h2 className="mb-5">Основная информация</h2>
                        <p>Некоторая информация может быть видна другим пользователям сервисов Google. <span>Подробнее...</span></p>
                    </div>
                    <form className="profile-form profile-main__info">
                        <div className="profile-input profile-avatar">
                            <div className="profile-field__name">
                                <small>Фотография</small>
                                <p className="responsible-value">Добавьте фото в аккаунт, чтобы другим пользователям было проще вас узнать.</p>
                            </div>
                            <div className="profile-field__value">
                                <p>Добавьте фото в аккаунт, чтобы другим пользователям было проще вас узнать.</p>
                                <img src="" alt="avatar" />
                            </div>
                        </div>
                            {profileFields.map((field, index) => 
                            <ProfileField fieldName={field.fieldName} conditionName={field.conditionName} key={index} />)}
                    </form>
                </div>
        </React.Fragment>
    );
}


export default ProfileMainForm;
