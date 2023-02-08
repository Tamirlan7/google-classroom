import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as DottedMenu } from '../../../assets/icons/dotted-menu.svg';
import { ReactComponent as QuestionMark } from '../../../assets/icons/question-mark.svg';
import avatarImg from '../../../assets/images/default-avatar.png';

const ProfileForm: React.FC = () => {

    return (
        <div className='field-page'>
            <header className='profile-header'>
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
                    <div className="icons">
                        <span><QuestionMark /></span>
                        <span><DottedMenu /></span>
                        <div className="icons-avatar"><img src={avatarImg} alt="avatar" /></div>
                    </div>
                </div>
            </header>
            <div className='field-content'>

            </div>
        </div>
    )
}

export default ProfileForm;
