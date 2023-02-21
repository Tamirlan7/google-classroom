import React from 'react';
import ProfileFormHeader from './ProfileFormHeader';
import { ReactComponent as ArrowRight } from '../../../assets/icons/arrow-right.svg';
import { ReactComponent as InfoIcon } from '../../../assets/icons/info.svg';
import { useNavigate } from 'react-router-dom';
import { useTypedSelector } from '../../../hooks/redux';
import flagImg from '../../../assets/images/kazakhstan.png';


const ProfileFormPhone: React.FC = () => {
    const navigate = useNavigate();
    const phone = useTypedSelector(state => state.profile.profile.phone)
    console.log('ProfileFormPhone render');
    return (
        <div className='field-page field__phone-page'>
        <ProfileFormHeader  title="Номер телефона" />
        <div className='field-page__content field-page__phone-content'>
            <div className="inner-field__content inner-field-phone__content">
                <div className='privacy-info'>
                    <p className='privacy-text'>Этот номер телефона добавлен в ваш аккаунт Google.</p>
                </div>
                <div className='field-phone-content' onClick={() => navigate('/profile/phone/edit')}>
                    <div className='flag-block'>
                        <img src={flagImg} alt="flag" />
                    </div>
                    <div className='field-value'>
                        <div className='phone'>
                            <p>{phone ? phone : 'Номер не определен'}</p>
                        </div>
                        <div className='phone-confirm'>
                            <p>Номер не подтвержден</p>
                        </div>
                    </div>
                    <div className='arrow-right'>
                        <ArrowRight />
                    </div>
                </div>
                <div className='phone-info'>
                    <span>
                        <InfoIcon />
                    </span>
                    <small>Некоторых номеров может не быть на этой странице. Если вы не видите номер, который добавили в сервис Google, перейдите в настройки сервиса.</small>
                </div>
            </div>
        </div>
    </div>
    );
}


export default ProfileFormPhone;
