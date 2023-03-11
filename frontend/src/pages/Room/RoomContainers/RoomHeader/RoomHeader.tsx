import React from "react"
import './RoomHeader.css'
import { ReactComponent as MenuIcon } from '../../../../assets/icons/menu.svg';
import Navbar from "../../../../components/Navbar/Navbar";
import { useOutsideClick } from "../../../../hooks/useClick";
import { Link } from "react-router-dom";
import {ReactComponent as SettingsIcon} from '../../../../assets/icons/settings.svg'
import { ReactComponent as DottedMenuIcon } from '../../../../assets/icons/dotted-menu.svg';
import Settings from "../../../../components/Settings/Settings";
import { useTypedSelector } from "../../../../hooks/redux";


interface RoomHeaderProps {
    title: string
    section?: string
    theme_color: string
    code: string
}

const RoomHeader: React.FC<RoomHeaderProps> = React.memo(({ code, theme_color, title, section }) => {
    const [isMenuOpen, setIsMenuOpen] = React.useState<boolean>(false)
    const [ isScrolling, setIsScrolling ] = React.useState<boolean>(false);
    const [ isSettingsActive, setIsSettingsActive ] = React.useState<boolean>(false)
    const { avatar } = useTypedSelector(state => state.profile.profile)
    const currentUrlPathname = window.location.pathname

    const navbarRef = React.useRef<HTMLMenuElement>(null)
    useOutsideClick(navbarRef, closeNavbar);

    function openSettings() {
        if(isSettingsActive)
            setIsSettingsActive(false)
        
        else setIsSettingsActive(true)
    }

    function closeSettings () {
        setIsSettingsActive(false)
    }

    const avatarIconRef = React.useRef<HTMLDivElement>(null)
    const settingsRef = React.useRef<HTMLDivElement>(null)
    useOutsideClick(settingsRef, closeSettings, avatarIconRef);

    function closeNavbar() {
        setIsMenuOpen(false)
    }
    const addBoxShadow = React.useCallback(() => {
        if(window.scrollY > 64) 
            setIsScrolling(true)
        else
            setIsScrolling(false);
    }, [])

    const navLinks = [
        {link: `/room/${code}`, text: 'Лента'},
        {link: '/', text: 'Задания'},
        {link: '/', text: 'Пользователи'},
        {link: '/', text: 'Оценки'},
    ]

    React.useEffect(() => {
        document.addEventListener('scroll', addBoxShadow)

        return () => {
            document.removeEventListener('scroll', addBoxShadow)
        }
    }) 


    return (
        <header className={isScrolling ? "room-details__header header-shadow" : "room-details__header"}>
            <div className="room-details__header-inner">
                <div className="room-details__header-title">
                    <div 
                            className="room-details__menu-icon" 
                            onClick={() => setIsMenuOpen(true)}
                        >
                            <MenuIcon />
                        </div>
                        {isMenuOpen && <Navbar navbarRef={navbarRef} />}
                    <div className={`room-details__title room-details__title-${theme_color}`}>
                        <span className="room-details__title-title">{title}</span>
                        <small className="room-details__title-section">{section}</small>
                    </div>
                </div>
                <ul className="room-details__nav">
                    {navLinks.map(link => (
                        <li className="room-details__nav-item">
                            <Link 
                            to={link.link} 
                            className={link.link === currentUrlPathname 
                            ? `room-details__nav-link room-details__nav-link__active room-details__nav-link__active-${theme_color}`
                            : `room-details__nav-link`}
                            >{link.text}</Link>
                        </li>
                    ))}
                </ul>
                <div className="room-details__icons">
                    <figure role={'button'} className="room-details__icon">
                        <SettingsIcon />
                    </figure>
                    <figure role={'button'} className="room-details__apps room-details__icon">
                        <DottedMenuIcon />
                    </figure>
                    <span className="room-details__avatar" ref={avatarIconRef} onClick={openSettings}>
                        <img src={`${process.env.REACT_APP_API_URL}${avatar}`} alt="avatar" />
                    </span>
                    {isSettingsActive && <Settings settingsRef={settingsRef}/>}
                </div>
            </div>
            <div className="room-details__nav-responsible-block">
                <ul className="room-details__nav-responsible">
                    {navLinks.map(link => (
                        <li className="room-details__nav-item">
                            <Link 
                            to={link.link} 
                            className={link.link === currentUrlPathname 
                            ? `room-details__nav-link room-details__nav-link__active room-details__nav-link__active-${theme_color}`
                            : `room-details__nav-link`}
                            >{link.text}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </header>
    )
})


export default RoomHeader;
