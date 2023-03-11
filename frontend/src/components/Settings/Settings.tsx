import React from "react";
import { useTypedSelector } from "../../hooks/redux";
import {ReactComponent as LogoutIcon} from '../../assets/icons/logout.svg';
import AddUserIcon from '../../assets/images/user-add.png';
import './Settings.css';
import { Link, useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../../actions/auth/actions";


interface SettingsProps {
    settingsRef: React.RefObject<HTMLDivElement>
    logout: () => void
}

const Settings: React.FC<SettingsProps> = ({ settingsRef, logout }) => {
    const navigate = useNavigate()
    const { name, surname, email, avatar } = useTypedSelector(state => state.profile.profile) 

    function onLogout(): void {
        logout()
        navigate('/login')
    }

    return (
        <div className={'settings'} ref={settingsRef}>
            <div className="settings__manage">
                <div className="settings-manage__info">
                    <div className="settings__avatar">
                        <div className="settings-avatar__img">
                            <img src={`${process.env.REACT_APP_API_URL}${avatar}`} alt="avatar" />
                        </div>
                    </div>
                    <div className="settings__name">
                        <small className="settings-name__name">{name ? `${name} ${surname}` : 'Нет имени'}</small>
                        <small className="settings-name__email">{email ? email : 'Нет почты'}</small>
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
            <div onClick={() => onLogout()} className="settings__logout">
                <span className="settings-logout__icon">
                    <img src={AddUserIcon} alt="user add" />
                </span>
                <span className="settings-logout__text">Выйти</span>
            </div>
            <hr />
            <div className="settings-footer">
                <small>Политика конфеденциальности</small>
                <small>Условия использования</small>
            </div>
        </div>
    )
}


export default connect(null, { logout })(Settings);