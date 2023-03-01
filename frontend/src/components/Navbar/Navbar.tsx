import { Link } from 'react-router-dom'
import {ReactComponent as HomeIcon} from '../../assets/icons/home.svg'
import {ReactComponent as CalendarIcon} from '../../assets/icons/calendar.svg'
import './Navbar.css'


interface NavbarProps {
    navbarRef: React.RefObject<HTMLMenuElement>
}

const Navbar: React.FC<NavbarProps> = ({ navbarRef }) => {

    function getPathname(): string {
        /* 
            URL's pathname
            for example https://example.com/`pathname`/
        */

        return window.location.pathname
    }

    return (
        <nav className='navbar' ref={navbarRef}>
            <div className='navbar-menu'>
                <Link to="/" className='navbar-menu__link courses-link'>
                    <div className={getPathname() === '/' ? 'link-bg ling-bg__light-blue' : 'ling-bg'}></div>
                    <span className='menu-icon courses__img'>
                        <HomeIcon />
                    </span>
                    <span className='menu-text courses__text'>Курсы</span>
                </Link>
                <Link to="/calendar" className='navbar-menu__link calendar-link'>
                    <div className={getPathname() === '/calendar' ? 'link-bg ling-bg__light-blue' : 'ling-bg'}></div>
                    <span className='menu-icon calendar__img'>
                        <CalendarIcon />
                    </span>
                    <span className='menu-text calendar__text'>Календарь</span>
                </Link>
                <span role={'separator'} className='separator'></span>
                <div className='courses-list' role={'section'}>
                    <div className='courses-list__title'>Курсы, слушателем которых я являюсь</div>
                    
                </div>
            </div>
        </nav>
    )
}


export default Navbar
