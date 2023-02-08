import React from "react";
import { ReactComponent as ArrowRight } from '../../../assets/icons/arrow-right.svg';


interface ProfileFieldProps extends React.PropsWithChildren {
    fieldName: string
    conditionName: string;
}


const ProfileField: React.FC<ProfileFieldProps> = ({ fieldName, conditionName }) => {

    return (
        <div className="profile-input">
            <div className="profile-field__name">
                <small>{fieldName}</small>
                <p className="responsible-value">Не выбран</p>
            </div>
            <div className="profile-field__value">
                <p>Не выбран</p>
                {/* <p>{conditionName ? conditionName : '{inputName} не определена'}</p> */}
                <span className="arrow__icon-block">
                    <ArrowRight />
                </span>
            </div>
        </div>
    );
}


export default ProfileField;
