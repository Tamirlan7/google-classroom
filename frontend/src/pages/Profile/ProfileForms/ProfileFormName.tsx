import React from 'react';
import ProfileFormHeader from './ProfileFormHeader';
import PeopleImg from '../../../assets/images/people.png';
import { ReactComponent as Pencil } from '../../../assets/icons/pencil.svg';
import { useTypedSelector } from '../../../hooks/redux';
import { Link } from 'react-router-dom';
 
const ProfileFormName: React.FC = () => {
    const { name, surname, nickname } = useTypedSelector(state => state.profile.profile)
    console.log('ProfileFormName render');
    return (
        <div className='field-page field__name-page'>
            <ProfileFormHeader title="Имя" />
            <div className='field-page__content field-page__name-content'>
                <div className='field-form'>
                    <div className='field-form__input-block'>
                        <div className='field-form-input'>
                            <div>
                                <small className='field-input-label'>Имя</small>
                                <div className='field-input-value'>{name && surname ? `${name} ${surname}` : 'Имя не определено'}</div>
                            </div>
                            <div className='field-form-edit-icon'>
                                <Link to={'/profile/name/edit'} role={'button'}>
                                    <Pencil />
                                </Link>
                            </div>
                        </div>
                        <hr />
                        <div className='field-form-input'>
                            <div>
                                <small className='field-input-label'>Псевдоним</small>
                                <div className='field-input-value'>{nickname ? nickname : 'Псевдоним не определен'}</div>
                            </div>
                            <div className='field-form-edit-icon'>
                                <Link to={'/profile/nickname/edit'}>
                                    <Pencil />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className='field-form__info'>
                        <h3>Кто может видеть ваше имя</h3>
                        <div className='field-form__info-text'>
                            <figure>
                                <img src={PeopleImg} alt="people" />
                            </figure>
                            <p>Эту информацию смогут увидеть любые пользователи, которые будут общаться с вами или просматривать созданный вами контент в сервисах Google.
                                <span> Подробнее…</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileFormName;
