import React, { useState }  from "react";
import { ReactComponent as SearchIcon } from '../../../assets/icons/search-icon.svg';
import { ReactComponent as DottedMenu } from '../../../assets/icons/dotted-menu.svg';
import { ReactComponent as QuestionMark } from '../../../assets/icons/question-mark.svg';
import { Link } from "react-router-dom";
import { useTypedSelector } from "../../../hooks/redux";
import '../Profile.css';
import Settings from "../../../components/Settings/Settings";


interface ProfileHeaderProps extends React.PropsWithChildren {

}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({ children }) => {
        // state for header box-shadow 
        const [isSrolling, setIsScrolling] = useState<boolean>(false);
        
        const [inputFocused, setInputFocused] = useState<boolean>(false);

        const [isSettingsActive, setIsSettingsActive] = useState<boolean>(false);

        const avatarPath = useTypedSelector(state => state.profile.profile.avatar)

        function addBoxShadow() {
            if(window.scrollY > 64) 
                setIsScrolling(true)
            else
                setIsScrolling(false);
        }
    
        document.addEventListener('scroll', addBoxShadow)

    return (
        <header className={isSrolling ? 'profile-header header-shadow' : 'profile-header'}>
            <div className="inner__header">
                <div className="logo">
                    <Link to="/" className="logo-link">
                        <span className="logo-icon" role={"button"}>

                        </span>
                        <span className="logo-text">
                            Аккаунт
                        </span>
                    </Link>
                </div>
                <div className={inputFocused ? 'search-block search-block-focused' : 'search-block'}>
                    <div className={inputFocused ? "search-input search-input-focused": 'search-input'}>
                        <span>
                            <div>
                                <SearchIcon />
                            </div>
                        </span>
                        <input 
                            onFocus={() => setInputFocused(true)}
                            onBlur={() => setInputFocused(false)}
                            type="text"
                            placeholder="Поиск в аккаунте Google"
                        />
                    </div>
                </div>
                <div className="icons">
                    <div className="icons-search" role={"button"}><SearchIcon /></div>
                    <span><QuestionMark /></span>
                    <span><DottedMenu /></span>
                    <div className="icons-avatar" onClick={() => setIsSettingsActive(prev => !prev)}>
                        <img src={`${process.env.REACT_APP_API_URL}${avatarPath}`} alt="avatar" />
                    </div>
                    {isSettingsActive && <Settings />}
                </div>
            </div>
            {children}
        </header>
    );
}

export default ProfileHeader;
