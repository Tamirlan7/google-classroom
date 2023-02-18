import React from "react";
import { useTypedSelector } from "../../hooks/redux";
import {ReactComponent as LogoutIcon} from '../../assets/icons/logout.svg';
import AddUserIcon from '../../assets/images/user-add.png';
import './Settings.css';
import defaultImg from '../../assets/images/default-avatar.png'
import { Link } from "react-router-dom";


const Settings: React.FC = () => {

    const { name, email, avatar } = useTypedSelector(state => state.profile.profile) 

    return (
        <div className="settings">
            <div className="settings__manage">
                <div className="settings-manage__info">
                    <div className="settings__avatar">
                        <div className="settings-avatar__img">
                            <img src={defaultImg} alt="avatar" />
                        </div>
                    </div>
                    <div className="settings__name">
                        <small className="settings-name__name">{name ? name : 'Тамирлан Жукасаев'}</small>
                        <small className="settings-name__email">{email ? email : 'zukasaevtamirlan1@gmail.com'}</small>
                    </div>
                </div>
                <div className="settings-manage__button">
                    <Link className="manage-button__button" role={"button"} to={'/profile?cat=self-info'}>Управление аккаунтом Google </Link>
                </div>
            </div>
            <button className="settings__add">
                <span className="settings-add__icon"><LogoutIcon /></span>
                <span className="settings-add__text">Добавить аккаунт</span>
            </button>
            <button className="settings__logout">
                <span className="settings-logout__icon">
                    <img src={AddUserIcon} alt="user add" />
                </span>
                <span className="settings-logout__text">Выйти</span>
            </button>
            <hr />
            <div className="settings-footer">
                <small>Политика конфеденциальности</small>
                <small>Условия использования</small>
            </div>
        </div>
    )
}


export default Settings;