import React from "react";
import { ReactComponent as MenuIcon } from '../../../../assets/icons/menu.svg';
import { ReactComponent as DottedMenuIcon } from '../../../../assets/icons/dotted-menu.svg';
import { ReactComponent as AddIcon } from '../../../../assets/icons/add.svg';
import { useOutsideClick } from "../../../../hooks/useClick";
import { useTypedSelector } from "../../../../hooks/redux";
import Settings from "../../../../components/Settings/Settings";
import Navbar from "../../../../components/Navbar/Navbar";
import './MainHeader.css'
import AddCourseForm from "../../../../components/AddCourse/AddCourseForm";


const MainHeader: React.FC = () => {
    const [ isSettingsActive, setIsSettingsActive ] = React.useState<boolean>(false)
    const [ isMenuOpen, setIsMenuOpen ] = React.useState<boolean>(false)
    const [ isAddCourse, setIsAddCourse ] = React.useState<boolean>(false);
    const [ isScrolling, setIsScrolling ] = React.useState<boolean>(false);

    const { avatar } = useTypedSelector(state => state.profile.profile)

    function openSettings() {
        setIsSettingsActive(true)
    }

    function closeSettings() {
        setIsSettingsActive(false)
    }

    function closeNavbar() {
        setIsMenuOpen(false)
    }

    function closeAddCourse() {
        setIsAddCourse(false)
    }

    const addBoxShadow = React.useCallback(() => {
        if(window.scrollY > 64) 
            setIsScrolling(true)
        else
            setIsScrolling(false);
    }, [])


    React.useEffect(() => {

        return () => {
            document.removeEventListener('scroll', addBoxShadow)
        }
    }) 

    document.addEventListener('scroll', addBoxShadow)


    const navbarRef = React.useRef<HTMLMenuElement>(null)
    useOutsideClick(navbarRef, closeNavbar);

    const addCourseRef = React.useRef<HTMLUListElement>(null)
    useOutsideClick(addCourseRef, closeAddCourse);

    const settingsRef = React.useRef<HTMLDivElement>(null)
    useOutsideClick(settingsRef, closeSettings);

    return (
        <header className={isScrolling ? "main-header header-shadow" : "main-header"}>
            <div className="main-header__left">
                <div 
                    className="main-nav" 
                    onClick={() => setIsMenuOpen(true)}
                >
                    <MenuIcon />
                </div>
                {isMenuOpen && <Navbar navbarRef={navbarRef} />}
                <div className="main-logo main-logo__link" data-testid="logo">
                    <span className="main-logo__icon" role={"button"}>
                            
                    </span>
                    <span className="main-logo__text">
                        Класс
                    </span>
                </div>
            </div>
            <div className="main-header__right">
                <div 
                    role={'button'} 
                    className="main-header__create"
                    onClick={() => setIsAddCourse(true)}
                >
                    <AddIcon />
                </div>
                {isAddCourse && <AddCourse addCourseRef={addCourseRef} />}
                <div className="main-header__apps">
                    <DottedMenuIcon />
                </div>
                <div className="main-header__avatar">
                    <div className="icons-avatar" onClick={openSettings}>
                        <img src={`${process.env.REACT_APP_API_URL}${avatar}`} alt="avatar" />
                    </div>
                    {isSettingsActive && <Settings settingsRef={settingsRef} />}
                </div>
            </div>
        </header>
    )
}

function AddCourse({ addCourseRef }: {addCourseRef: React.Ref<HTMLUListElement>}) {
    const [isAddCourseForm, setIsAddCourseForm] = React.useState<boolean>(false)

    return (
        <ul ref={addCourseRef} className='add-course__list'>
            <li className="add-course__list-item">
                Присоединиться
            </li>
            <li className="add-course__list-item" onClick={() => setIsAddCourseForm(true)}>
                Создать курс
            </li>
            <AddCourseForm setIsConfirmedModal={setIsAddCourseForm} isConfirmedModal={isAddCourseForm} />
        </ul>
    )
}


export default MainHeader;
