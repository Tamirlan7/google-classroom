import React, { useState } from "react";
import '../Profile.css';
import reviewImg from '../../../assets/images/review-img.png';
import responsibleReviewImg from '../../../assets/images/responsible-review-img.png';
import ProfileField from "./ProfileField";
import { IProfileField } from "../../../types/types";
import List from "../../../components/List";
import { useTypedSelector } from "../../../hooks/redux";
import ProfileAvatar from "./ProfileAvatar";


interface ProfileMainFormProps extends React.PropsWithChildren {

}

const ProfileMainForm: React.FC<ProfileMainFormProps> = () => {
    const avatarPath = useTypedSelector(state => state.profile.profile.avatar)
    const [isAvatar, setIsAvatar] = useState<boolean>(false)

    const { name, surname, birthday, gender } = useTypedSelector(state => state.profile.profile)
    
    const profileFields: IProfileField[] = [
        {
            fieldName: 'Имя',
            value: `${name} ${surname}`,
            link: 'name'
        },
        {
            fieldName: 'Дата рождения',
            value: dateFormatForUser(birthday),
            link: 'birthday'
        },
        {
            fieldName: 'Пол',
            value: genderFormatForUser(gender),
            link: 'gender'
        }
    ]

    return (
        <React.Fragment>
            <ProfileAvatar isAvatar={isAvatar} setIsAvatar={setIsAvatar} />
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
                    <div className="profile-input profile-avatar" onClick={() => setIsAvatar(true)}>
                        <div className="profile-field__name">
                            <small>Фотография</small>
                            <p className="responsible-value">Добавьте фото в аккаунт, чтобы другим пользователям было проще вас узнать.</p>
                        </div>
                        <div className="profile-field__value">
                            <p>Добавьте фото в аккаунт, чтобы другим пользователям было проще вас узнать.</p>
                            <div className="avatar-field-block">
                                <img src={`${process.env.REACT_APP_API_URL}${avatarPath}`} alt="avatar" />
                            </div>
                        </div>
                    </div>
                    <List items={profileFields} render={(field, index) => 
                        <ProfileField link={field.link} fieldName={field.fieldName} value={field.value} key={index} />} />
                </form>
            </div>
        </React.Fragment>
    );
}


function genderFormatForUser(gender: boolean | undefined | null): string | undefined {
    if(gender === undefined || gender === null)
        return undefined
    
    if (gender) 
        return 'Женский'
    
    return `Мужской`
}

function dateFormatForUser(birthday: string | undefined): string | undefined {
    if (!birthday) 
        return
    
    
    let [year, month, day] = birthday.split('-');

    month = month === '01' ? 'января'
    : month === '02' ? 'февраля'
    : month === '03' ? 'марта'
    : month === '04' ? 'апреля'
    : month === '05' ? 'мая'
    : month === '06' ? 'июня'
    : month === '07' ? 'июля'
    : month === '08' ? 'августа'
    : month === '09' ? 'сентября'
    : month === '10' ? 'октября'
    : month === '11' ? 'ноября'
    : 'декабря'

    year = `${year} г.`

    return `${day} ${month} ${year}`
}

export default ProfileMainForm;
