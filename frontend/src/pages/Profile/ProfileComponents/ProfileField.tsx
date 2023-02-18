import React from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as ArrowRight } from '../../../assets/icons/arrow-right.svg';


interface ProfileFieldProps extends React.PropsWithChildren {
    fieldName: string
    value: string | undefined
    link: string
}


const ProfileField: React.FC<ProfileFieldProps> = ({ fieldName, value, link }) => {
    const navigate = useNavigate();

    return (
        <div className="profile-input" onClick={() => navigate(link)}>
            <div className="profile-field__name">
                <small>{fieldName}</small>
                <p className="responsible-value">Не выбран</p>
            </div>
            <div className="profile-field__value">
                <p>{value?.trim() ? value : 'не выбран'}</p>
                <span className="arrow__icon-block">
                    <ArrowRight />
                </span>
            </div>
        </div>
    );
}


export default ProfileField;
