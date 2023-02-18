import React from "react";
import './Profile.css';
import ProfileMainForm from "./ProfileComponents/ProfileMainForm";
import ProfileNavbar from "./ProfileComponents/ProfileNavbar";
import ProfileHeader from "./ProfileComponents/ProfileHeader";
import ProfileContactForm from "./ProfileComponents/ProfileContactForm";
import ProfileAddressForm from "./ProfileComponents/ProfileAddressForm";
import ProfileResponsibleNavbar from "./ProfileComponents/ProfileResponsibleNavbar";



const Profile: React.FC = () => {
    
    return (
        <div className="profile">
            <ProfileHeader> 
                <ProfileResponsibleNavbar />
            </ProfileHeader>
            <div className="profile-body">
                <ProfileNavbar />
                <div className="profile-container">
                    <div className="profile-content">
                        <header className="profile-content__header">
                            <h1>Личная информация</h1>
                            <p>Сведения о вас и ваших настройках в сервисах Google</p>
                        </header>
                        <div className="profile-content__body">
                            <ProfileMainForm />
                            <ProfileContactForm />
                            <ProfileAddressForm />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Profile;
