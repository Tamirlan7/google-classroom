import React, { useState }  from "react";
import { ReactComponent as SearchIcon } from '../../../assets/icons/search-icon.svg';
import { ReactComponent as DottedMenu } from '../../../assets/icons/dotted-menu.svg';
import { ReactComponent as QuestionMark } from '../../../assets/icons/question-mark.svg';
import avatarImg from '../../../assets/images/default-avatar.png';
import { Link } from "react-router-dom";
import '../Profile.css';


interface ProfileHeaderProps extends React.PropsWithChildren {

}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({ children }) => {
        // state for header box-shadow 
        const [boxShadow, setBoxShadow] = useState<boolean>(false);
        
        const [inputFocused, setInputFocused] = useState<boolean>(false);

        function addBoxShadow() {
            if(window.scrollY > 64) 
                setBoxShadow(true)
            else
                setBoxShadow(false);
        }
    
        document.addEventListener('scroll', addBoxShadow)

    return (
        <header className={boxShadow ? 'profile-header header-shadow' : 'profile-header'}>
            <div>
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
                    <div className="icons-avatar"><img src={avatarImg} alt="avatar" /></div>
                </div>
            </div>
            {children}
        </header>
    );
}

export default ProfileHeader;
