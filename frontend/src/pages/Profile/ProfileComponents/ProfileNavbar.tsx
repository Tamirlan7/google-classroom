import React from "react";
import { Link, useSearchParams } from "react-router-dom";
import '../Profile.css';
import userImg from '../../../assets/images/profile-img-gray.png'
import userInfo from '../../../assets/images/profile-info.png';
import checkboxImg from '../../../assets/images/checkbox.png';
import lockImg from '../../../assets/images/lock.png';
import peopleImg from '../../../assets/images/people.png';
import payment from '../../../assets/images/payment.png';


interface ProfileNavbarProps extends React.PropsWithChildren {

}


const ProfileNavbar: React.FC<ProfileNavbarProps> = () => {
    let [searchParams, setSearchParams] = useSearchParams();

    let [query, setQuery] = React.useState<string | null>(
      searchParams.get("cat")
    );

    function changeQuery(category: string) {
        setQuery(category);
        if (query)
            setSearchParams({query})
    }

    return (
        <nav className="profile-navbar">
            <ul className="profile-menu">
                <li className={query === 'main' ? "profile-menu__item profile-menu__item-active" : "profile-menu__item"}>
                    <img src={userImg} alt="user" />
                    <Link 
                    to={'/profile?cat=main'} 
                    className={query === 'main' ? "profile-menu__link profile-menu__link-active" : "profile-menu__link"} 
                    onClick={() => changeQuery('main')}>Главная</Link>
                </li>
                <li className={query === 'self-info' ? "profile-menu__item profile-menu__item-active" : "profile-menu__item"}>
                    <img src={userInfo} alt="" />
                    <Link 
                    to={'/profile?cat=self-info'} 
                    className={query === 'self-info' ? "profile-menu__link profile-menu__link-active" : "profile-menu__link"}
                    onClick={() => changeQuery('self-info')}>Личная Информация</Link>
                </li>
                <li className={query === 'self-data' ? "profile-menu__item profile-menu__item-active" : "profile-menu__item"} >
                    <img src={checkboxImg} alt="checkbox" />
                    <Link 
                    to={'/profile?cat=self-data'} 
                    className={query === 'self-data' ? "profile-menu__link profile-menu__link-active" : "profile-menu__link"}
                    onClick={() => changeQuery('self-data')}>Данные и конфиденциальность</Link>
                </li>
                <li className={query === 'security' ? "profile-menu__item profile-menu__item-active" : "profile-menu__item"}>
                    <img src={lockImg} alt="lock" />
                    <Link 
                    to={'/profile?cat=security'} 
                    className={query === 'security' ? "profile-menu__link profile-menu__link-active" : "profile-menu__link"} 
                    onClick={() => changeQuery('security')}>Безопасность</Link>
                </li>
                <li className={query === 'access' ? "profile-menu__item profile-menu__item-active" : "profile-menu__item"}>
                    <img src={peopleImg} alt="people" />
                    <Link 
                    to={'/profile?cat=access'} 
                    className={query === 'access' ? "profile-menu__link profile-menu__link-active" : "profile-menu__link"} 
                    onClick={() => changeQuery('access')}>Настройки доступа</Link>
                </li>
                <li className={query === 'payment' ? "profile-menu__item profile-menu__item-active" : "profile-menu__item"}>
                    <img src={payment} alt="payment" />
                    <Link 
                    to={'/profile?cat=payment'} 
                    className={query === 'payment' ? "profile-menu__link profile-menu__link-active" : "profile-menu__link"} 
                    onClick={() => changeQuery('payment')}>Платежи и подписки</Link>
                </li>
            </ul>
        </nav>
    );
}


export default ProfileNavbar;
