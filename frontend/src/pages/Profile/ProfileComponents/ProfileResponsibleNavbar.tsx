import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';


const ProfileResponsibleNavbar: React.FC = () => {
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
        <nav className="profile-responsible-navbar">
            <ul className="profile-responsible-menu">
                <li className={query === 'main' ? "profile-responsible-menu__item profile-responsible-menu__item-active" : "profile-responsible-menu__item"}>
                    <Link 
                    to={'/profile?cat=main'} 
                    className={query === 'main' ? "profile-responsible-menu__link profile-responsible-menu__link-active" : "profile-responsible-menu__link"} 
                    onClick={() => changeQuery('main')}>
                        <div className='menu-link-text'>Главная</div>
                        <div className={query === 'main' ?'menu-link__border menu-link__border-active' : 'menu-link__border'}></div>
                    </Link>
                </li>
                <li className={query === 'self-info' ? "profile-responsible-menu__item profile-responsible-menu__item-active" : "profile-responsible-menu__item"}>
                    <Link 
                    to={'/profile?cat=self-info'} 
                    className={query === 'self-info' ? "profile-responsible-menu__link profile-responsible-menu__link-active" : "profile-responsible-menu__link"}
                    onClick={() => changeQuery('self-info')}>
                        <div className='menu-link-text'>Личная Информация</div>
                        <div className={query === 'self-info' ?'menu-link__border menu-link__border-active' : 'menu-link__border'}></div>
                    </Link>
                </li>
                <li className={query === 'self-data' ? "profile-responsible-menu__item profile-responsible-menu__item-active" : "profile-responsible-menu__item"} >
                    <Link 
                    to={'/profile?cat=self-data'} 
                    className={query === 'self-data' ? "profile-responsible-menu__link profile-responsible-menu__link-active" : "profile-responsible-menu__link"}
                    onClick={() => changeQuery('self-data')}>
                        <div className='menu-link-text'>Данные и конфиденциальность</div>
                        <div className={query === 'self-data' ?'menu-link__border menu-link__border-active' : 'menu-link__border'}></div>
                    </Link>
                </li>
                <li className={query === 'security' ? "profile-responsible-menu__item profile-responsible-menu__item-active" : "profile-responsible-menu__item"}>
                    <Link 
                    to={'/profile?cat=security'} 
                    className={query === 'security' ? "profile-responsible-menu__link profile-responsible-menu__link-active" : "profile-responsible-menu__link"} 
                    onClick={() => changeQuery('security')}>
                        <div className='menu-link-text'>Безопасность</div>
                        <div className={query === 'security' ?'menu-link__border menu-link__border-active' : 'menu-link__border'}></div>
                    </Link>
                </li>
                <li className={query === 'access' ? "profile-responsible-menu__item profile-responsible-menu__item-active" : "profile-responsible-menu__item"}>
                    <Link 
                    to={'/profile?cat=access'} 
                    className={query === 'access' ? "profile-responsible-menu__link profile-responsible-menu__link-active" : "profile-responsible-menu__link"} 
                    onClick={() => changeQuery('access')}>
                        <div className='menu-link-text'>Настройки доступа</div>
                        <div className={query === 'access' ?'menu-link__border menu-link__border-active' : 'menu-link__border'}></div>
                    </Link>
                </li>
                <li className={query === 'payment' ? "profile-responsible-menu__item profile-responsible-menu__item-active" : "profile-responsible-menu__item"}>
                    <Link 
                    to={'/profile?cat=payment'} 
                    className={query === 'payment' ? "profile-responsible-menu__link profile-responsible-menu__link-active" : "profile-responsible-menu__link"} 
                    onClick={() => changeQuery('payment')}>
                        <div className='menu-link-text'>Платежи и подписки</div>
                        <div className={query === 'payment' ?'menu-link__border menu-link__border-active' : 'menu-link__border'}></div>
                    </Link>
                </li>
            </ul>
        </nav>
    );
}


export default ProfileResponsibleNavbar;
