import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as DottedMenu } from '../../../assets/icons/dotted-menu.svg';
import { ReactComponent as QuestionMark } from '../../../assets/icons/question-mark.svg';
import { ReactComponent as ArrowLeft } from '../../../assets/icons/arrow-left.svg'
import './ProfileForm.css';
import { useTypedSelector } from '../../../hooks/redux';
import Settings from '../../../components/Settings/Settings';
import { useOutsideClick } from '../../../hooks/useClick';

interface ProfileFormHeaderProps extends React.PropsWithChildren {
    title: string
}

const ProfileFormHeader: React.FC<ProfileFormHeaderProps> = ({ title }) => {
    const [isScrolling, setIsScrolling] = useState<boolean>(false);
    const avatarPath = useTypedSelector(state => state.profile.profile.avatar);
    const [isSettingsActive, setIsSettingsActive] = useState<boolean>(false)

    function closeSettings() {
        setIsSettingsActive(false)
    }

    const avatarIconRef = React.useRef<HTMLDivElement>(null)
    const settingsRef = React.useRef<HTMLDivElement>(null)
    useOutsideClick(settingsRef, closeSettings, avatarIconRef);

    function openSettings() {
        if(isSettingsActive)
            setIsSettingsActive(false)

        else setIsSettingsActive(true)
    }

    console.log('ProfileFormHeader render');
    function addBoxShadow() {
        if(window.scrollY > 64) 
            setIsScrolling(true)
        else
            setIsScrolling(false);
    }

    document.addEventListener('scroll', addBoxShadow)

    return (
        <header className={isScrolling ? 'profile-header header-shadow field-header' : 'profile-header field-header'}>
            <div className='inner__header field-inner__header'>
                <div className="logo field-logo" >
                    <Link to="/" className="logo-link">
                        <span className="logo-icon" role={"button"}>
                        </span>
                        <span className="logo-text">
                            Аккаунт
                        </span>
                    </Link>
                </div>
                <div className="icons">
                    <span><QuestionMark /></span>
                    <span><DottedMenu /></span>
                    <div className="icons-avatar" ref={avatarIconRef}onClick={openSettings}>
                        <img src={`${process.env.REACT_APP_API_URL}${avatarPath}`} alt="avatar" />
                    </div>
                    {isSettingsActive && <Settings settingsRef={settingsRef} />}
                </div>
            </div>
            <div className='field-title'>
                <div className={isScrolling ? 'inner__field-title inner__field-title-scroll' : 'inner__field-title'}>
                    <Link to={'/profile?cat=self-info'}>
                        <ArrowLeft />
                    </Link>
                    <h1>{title}</h1>
                </div>
            </div>
        </header>
    )
}

export default React.memo(ProfileFormHeader);
