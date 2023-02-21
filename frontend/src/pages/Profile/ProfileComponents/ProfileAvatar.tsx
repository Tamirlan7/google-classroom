import React, { useState, useEffect } from "react";
import ModalWindow from "../../../UI/ModalWindow/ModalWindow";
import {ReactComponent as CloseIcon} from '../../../assets/icons/close.svg'; 
import {ReactComponent as ThreeDots} from '../../../assets/icons/three-dots.svg'; 
import {ReactComponent as ArrowLeft} from '../../../assets/icons/arrow-left.svg';
import ArrowLeftImg from '../../../assets/icons/arrow-left.svg';
import peopleImg from '../../../assets/images/people.png';
import camera from '../../../assets/images/camera.png';
import hugeUser from '../../../assets/images/huge-user.png';
import { useTypedSelector } from "../../../hooks/redux";
import {ReactComponent as ComputerIcon} from '../../../assets/icons/computer.svg';
import {ReactComponent as CameraIcon} from '../../../assets/icons/camera.svg';
import { IProfile } from "../../../types/types";
import { connect } from "react-redux";
import { updateProfile } from "../../../actions/profile/action";


interface ProfileAvatarProps {
    isAvatar: boolean
    setIsAvatar: (value: boolean) => void
    updateProfile: (profile: IProfile) => void
}

const ProfileAvatar: React.FC<ProfileAvatarProps> = ({ isAvatar, setIsAvatar, updateProfile }) => {
    const [isEditAvatar, setIsEditAvatar] = useState<boolean>(false);
    const [isSaveAvatar, setIsSaveAvatar] = useState<boolean>(false);

    const [isDragging, setIsDragging] = useState<boolean>(false);

    const avatarPath = useTypedSelector(state => state.profile.profile.avatar)
    const [avatar, setAvatar] = useState<File | null>(null);
    const [avatarSrc, setAvatarSrc] = useState<string>('');
    
    useEffect(() => {
        if(avatarSrc) {
            setIsEditAvatar(false)
            setIsAvatar(false)
            setIsSaveAvatar(true);
        }
    }, [avatarSrc])
    
    function onChange(e: React.ChangeEvent<HTMLInputElement>) {
        if(e.target.files) {
            const file = e.target.files[0]

            setAvatar(file)
            setAvatarSrc(URL.createObjectURL(file))
        }
    }

    function changeAvatar (e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        updateProfile({avatar})

        setIsSaveAvatar(false);
    }

    function onDragOverHandler(e: React.DragEvent) {
        e.preventDefault()
        e.stopPropagation()
        
        setIsDragging(true)
    }

    function onDragLeaveHandler(e: React.DragEvent) {
        e.preventDefault()
        e.stopPropagation()
        
        setIsDragging(false)
    }

    function onDragEnterHandler(e: React.DragEvent) {
        e.preventDefault()
        e.stopPropagation()
    }

    function onDropHandler (e: React.DragEvent) {
        e.preventDefault();
        e.stopPropagation();
        const file = e.dataTransfer.files[0];
        setAvatar(file);
        setAvatarSrc(URL.createObjectURL(file));
    }

    // AVATAR SAVE

    if(avatarSrc) {
        return (
            <ModalWindow 
                className="save-avatar__modal-window" 
                active={isSaveAvatar} 
                setActive={setIsSaveAvatar}
            >
                <header className="avatar-edit__header avatar-header">
                    <div onClick={() => { 
                            setIsEditAvatar(true);
                            setAvatarSrc('');
                            setIsSaveAvatar(false);
                        }} className="avatar-close">
                        <img src={ArrowLeftImg} alt="arrow left" />
                    </div>
                    <div className="avatar-title save-avatar__title">
                        <h2>Кадрирование и поворот</h2>
                    </div>
                    <div className="avatar-menu">
                        <ThreeDots />  
                    </div>
                </header>
                <main 
                    className="save-avatar__main"
                >
                    <div className="save-avatar__img">
                        <img src={avatarSrc} alt="preview" />
                    </div>
                    <form className="save-avatar__button" onSubmit={(e) => changeAvatar(e)}>
                        <button type="submit">Сохранить как фото профиля</button>
                    </form>
                </main>
            </ModalWindow>
        )
    }

    // AVATAR EDIT 

    if (isEditAvatar) {
        return (
            <ModalWindow 
                className="avatar-edit__modal-window"
                active={isEditAvatar} 
                setActive={setIsEditAvatar}
            >
                <header className="avatar-edit__header avatar-header">
                    <div onClick={() => { setIsEditAvatar(false); setIsAvatar(true) }} className="avatar-close">
                        <ArrowLeft />
                    </div>
                    <div className="avatar-title">
                        <h2>Добавить фото профиля</h2>
                    </div>
                    <div className="avatar-menu">
                        <ThreeDots />    
                    </div>
                </header>
                <hr className="avatar-hr" />
                <main 
                    className={isDragging ? "avatar-edit__main avatar-edit__main-drag" : "avatar-edit__main"}
                    onDrop={(e) => onDropHandler(e)}
                    onDragEnter={(e) => onDragEnterHandler(e)}
                    onDragOver={(e) => onDragOverHandler(e)}
                    onDragLeave={(e) => onDragLeaveHandler(e)}
                >
                    <div className="avatar-edit__image">
                        <img src={hugeUser} alt="huge user" />
                    </div>
                    <div className="avatar-edit__text">
                        <h2>Перетащите фото сюда.</h2>
                    </div>
                    <div className="avatar-edit__or">
                        ИЛИ
                    </div>
                    <form className="avatar-edit__buttons">
                        <label>
                            <input 
                                type="file"
                                className="avatar-edit__file-input"
                                name="avatar"
                                accept="image/png, image/jpeg, image/jpg"
                                onChange={(e) => onChange(e)}
                            />
                            <figure><ComputerIcon /></figure>
                            <span>Загрузить с компьютера</span>
                        </label>
                        <button>
                            <figure><CameraIcon /></figure>
                            <span>Сделайте снимок</span>
                        </button>
                    </form>
                </main>
            </ModalWindow>
        )
    }

    // MAIN AVATAR MODAL WINDOW

    return (
        <ModalWindow className="avatar-modal-window" active={isAvatar} setActive={setIsAvatar}>
            <header className="avatar-header">
                <div className="avatar-close" onClick={() => setIsAvatar(false)}>
                    <CloseIcon />
                </div>
                <div className="avatar-logo">
                    <div className="logo-link">
                        <span className="logo-icon" role={"button"}>

                        </span>
                        <span className="logo-text">
                            Аккаунт
                        </span>
                    </div>
                </div>
                <div className="avatar-menu">
                    <ThreeDots />
                </div>
            </header>
            <main className="avatar-main">
                <div className="avatar-info">
                    <h4>Фото профиля</h4>
                    <p>По фото профиля другие люди смогут вас узнавать, а вам будет проще определять, в какой аккаунт вы вошли.</p>
                    <div className="avatar-privacy">
                        <div>
                            <img src={peopleImg} alt="people" />
                        </div>
                        <p>Фото профиля видно в сервисах Google. <span>Подробнее...</span></p>
                    </div>
                </div>
                <hr className="avatar-hr" />
                <div className="avatar-block">
                    <div className="avatar-block__inner">
                        <img src={`${process.env.REACT_APP_API_URL}${avatarPath}`} alt="avatar" />
                    </div>
                </div>
                <div className="avatar-add">
                    <button onClick={() => {setIsEditAvatar(true); setIsAvatar(false)}}>
                        <span className="camera-icon"><img src={camera} alt="camera" /></span>
                        <span className="avatar-add-text">Добавить фото профиля</span>
                    </button>   
                </div>
            </main>
        </ModalWindow>
    )
}

export default connect(null, { updateProfile })(ProfileAvatar)
