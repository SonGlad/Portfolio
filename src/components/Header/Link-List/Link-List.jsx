import { LinkListStyled } from "./Link-List.styled";
import HomeIcon from "../../../assets/svg-icons//home.svg";
import AboutIcon from "../../../assets/svg-icons//user.svg";
import SkillsIcon from "../../../assets/svg-icons//skills.svg";
import PortfolioIcon from "../../../assets/svg-icons//portfolio.svg";
import ContactIcon from "../../../assets/svg-icons//contact.svg";
import { useInView } from 'react-intersection-observer';
import ScrollIntoView from 'react-scroll-into-view';
import { useTranslation } from 'react-i18next';
import { useWindowSize } from "../../../custom-hooks/hooks";




export const LinkList = ({toggleMenuBox}) => {
    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.1,
    });
    const { t } = useTranslation();
    const { renderPC } = useWindowSize();



    return(
        <LinkListStyled>
            <ul ref={ref} className={`link-list ${inView ? 'visible' : ''}`}>
                <li className="link-list-item" style={{'--i': 1}}>
                    <ScrollIntoView selector={renderPC ? "#HeroSection" : "#Canvas"} className='nav-link' onClick={toggleMenuBox}>
                        <HomeIcon className="header-icon" width={16} height={16}/>
                        <span className="header-link-text">{t('header.navMenu1')}</span>
                    </ScrollIntoView>
                </li>
                <li className="link-list-item" style={{'--i': 2}}>
                    <ScrollIntoView selector='#AboutSection' className='nav-link' onClick={toggleMenuBox}>
                        <AboutIcon className="header-icon" width={16} height={16}/>
                        <span className="header-link-text">{t('header.navMenu2')}</span>
                    </ScrollIntoView>
                </li>
                <li className="link-list-item" style={{'--i': 3}}>
                    <ScrollIntoView selector='#StackSection' className='nav-link' onClick={toggleMenuBox}>
                        <SkillsIcon className="header-icon" width={16} height={16}/>
                        <span className="header-link-text">{t('header.navMenu3')}</span>
                    </ScrollIntoView>
                </li>
                <li className="link-list-item" style={{'--i': 4}}>
                    <ScrollIntoView selector='#PortfolioSection' className='nav-link' onClick={toggleMenuBox}>
                        <PortfolioIcon className="header-icon" width={16} height={16}/>
                        <span className="header-link-text">{t('header.navMenu4')}</span>
                    </ScrollIntoView>
                </li>
                <li className="link-list-item" style={{'--i': 5}}>
                    <ScrollIntoView selector='#ContactSection' className='nav-link' onClick={toggleMenuBox}>
                        <ContactIcon className="header-icon" width={16} height={16}/>
                        <span className="header-link-text">{t('header.navMenu5')}</span>
                    </ScrollIntoView>
                </li>
            </ul> 
        </LinkListStyled>
    )
};