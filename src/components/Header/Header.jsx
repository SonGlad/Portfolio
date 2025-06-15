import {Container} from "../Container/Container";
import { StyledHeader } from "./Header.styled";
import MobMenuBurger from "../../assets/svg-icons/mobile-menu.svg";
import CloseIcon from "../../assets/svg-icons/close.svg";
import { LinkList } from "./Link-List/Link-List";
import { useCallback, useEffect, useRef, useState} from "react";
import Logo from "../../assets/images/iReX_logo.png";
import ScrollIntoView from 'react-scroll-into-view';
import { useWindowSize } from "../../custom-hooks/hooks";



export const Header = ({langArray, setLangValue, langToShow}) => {   
    const [mobMenu, setMobMenu] = useState(false);
    const [activeLangCont, setActiveLangCont] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const mobileMenu = useRef(null);
    const langCont = useRef(null);
    const { renderMob } = useWindowSize();


    const handleScroll = useCallback(() => {
        if (window.scrollY > 60) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    },[]);

   
    const toggleLangMenu = () => {
        setActiveLangCont(prevState => !prevState);
    };

    const chosenLanguage = (value) => {
        setLangValue(value);
        toggleLangMenu();
    };
    

    const toggleMenuBox = (event) => {
        setMobMenu(prevState => !prevState);
        if (!mobMenu) {
            event.stopPropagation();
        }
    };
  


    const changeIcon = () => {
        if(!mobMenu){
            return <MobMenuBurger className="burger-icon" width={32} height={22}/>
        } else {
            return <CloseIcon className="menu-close-icon" width={22} height={22}/>
        }
    };


    const toggleMobMenuCont = () => {
        return mobMenu ? 'is-active' : '';
    };

    const handleKeyPress = useCallback(event => {
        if (event.key === 'Escape') {
            if(activeLangCont){
                setActiveLangCont(false);
            }
        }
    },[activeLangCont]);


    const onBackdropClick = useCallback(event => {
        if(mobileMenu.current && !mobileMenu.current.contains(event.target)){                        
            setMobMenu(false);
        }
        if(langCont.current && !langCont.current.contains(event.target)) {
            setActiveLangCont(false);
        }
    },[setMobMenu, setActiveLangCont]);


    useEffect(() => {
        document.addEventListener('click', onBackdropClick);
        document.addEventListener('keydown', handleKeyPress);
        window.addEventListener("scroll", handleScroll);

        return () => {
            document.removeEventListener('click', onBackdropClick);
            document.removeEventListener('keydown', handleKeyPress);
            window.removeEventListener("scroll", handleScroll);
        }
    },[handleKeyPress, handleScroll, onBackdropClick]);



    return(
        <StyledHeader $headerBackground={isScrolled}>
            <Container>
                <div className='header-container'>
                    <ScrollIntoView className="logo-link order-one" selector="#HeroSection">
                        <img className="header-logo" src={Logo} alt="logo"/> 
                    </ScrollIntoView>
                    <div className="lang-cont order-two" ref={langCont}>
                        <button
                            type="buttton" 
                            className="lang-btn"
                            aria-expanded="false"
                            aria-controls="language-button"
                            aria-label="Language Button" 
                            onClick={toggleLangMenu}
                        >
                            {langToShow}
                        </button>
                        <div className={`chose-lang-cont ${activeLangCont ? 'open' : ''}`}>
                            <ul className="lang-list">
                                {langArray && langArray.filter(({ lang }) => lang !== langToShow).map(({lang}, index) => (
                                    <li key={index} className="lang-item" onClick={() => chosenLanguage(lang)}>
                                        <p className="lang-text">{lang}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    {renderMob ? (
                        <div className="mobilemenu order-three" ref={mobileMenu}>
                            <button 
                                type='button'
                                onClick={toggleMenuBox} 
                                className='mob-menu-btn'
                                aria-label="Mobile Menu"
                                aria-expanded="false"
                                aria-controls="language-button"
                            >
                                {changeIcon()}
                            </button>
                            <div className={`mob-menu ${toggleMobMenuCont()}`}>
                                <nav className="navigation">
                                    <LinkList 
                                        toggleMenuBox={toggleMenuBox}
                                    />
                                </nav>
                            </div>
                        </div>
                    ) : (
                        <div className="main-menu order-three">
                            <nav className="navigation">
                                <LinkList
                                    toggleMenuBox={toggleMenuBox}
                                />
                            </nav>
                        </div>
                    )}
                </div>
            </Container>
        </StyledHeader>
    )
}; 