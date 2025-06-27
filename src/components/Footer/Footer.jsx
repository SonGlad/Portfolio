import { FooterStyled } from "./Footer.styled";
import { Container } from "../Container/Container";
import { NavLink } from "react-router-dom";
import FacebookIcon from "../../assets/svg-icons/facebook.svg";
import TelegramIcon from "../../assets/svg-icons/telegram.svg";
import LinkedinIcon from "../../assets/svg-icons/linkedin.svg";
import GitHubIcon from "../../assets/svg-icons/github.svg";
import Logo from "../../assets/images/iReX_logo.png";
import { useInView } from 'react-intersection-observer';
import ScrollIntoView from 'react-scroll-into-view';
import { useTranslation } from "react-i18next";



export const Footer = () => {
    const { t } = useTranslation();
    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.1,
    });

    const currentYear = new Date().getFullYear();


    return (
        <FooterStyled>
            <Container>
                <div ref={ref} className={`footer-container ${inView ? 'visible' : ''}`}>
                    <ScrollIntoView selector="#HeroSection">
                        <div className="footer-left-cont order-one">
                            <p className="footer-text-left"><span>{t("profile.name1")}</span> {t("profile.name2")}</p>
                        </div>
                    </ScrollIntoView>
                    <div className="footer-center-cont order-two">
                        <p className="footer-text-center">Copyright<span> &#169; </span>{currentYear}</p>
                        <div className="cont-for-foo-pic">
                            <img className="footer-img" src={Logo} alt="irex_logo"/>
                        </div>
                    </div>
                    <div className="footer-right-cont order-three">
                        <p className="footer-text-right">{t("footer.text1")} <span>{t("footer.text2")}</span> {t("footer.text3")}:</p>
                        <ul className="footer-social-list">
                            <li className="footer-social-item">
                                <NavLink className="footer-social-link" to={t("profile.github_link")}
                                    aria-label="GitHub link"
                                    target="_blank"
                                    rel="noreferrer noopener">
                                    <GitHubIcon className="footer-icon" width={22} height={22}/>
                                </NavLink>
                            </li>
                            <li className="footer-social-item">
                                <NavLink className="footer-social-link" to={t("profile.facebook_link")}
                                    aria-label="Facebook link"
                                    target="_blank"
                                    rel="noreferrer noopener">
                                    <FacebookIcon className="footer-icon" width={22} height={22}/>
                                </NavLink>
                            </li>
                            <li className="footer-social-item">
                                <NavLink className="footer-social-link" to={t("profile.linkedin_link")}
                                    aria-label="Linkedin link"
                                    target="_blank"
                                    rel="noreferrer noopener">
                                    <LinkedinIcon className="footer-icon" width={20} height={20}/>
                                </NavLink>
                            </li>
                            <li className="footer-social-item">
                                <NavLink className="footer-social-link" to={t("profile.telegram_link")}
                                    aria-label="Telegram link"
                                    target="_blank"
                                    rel="noreferrer noopener">
                                    <TelegramIcon className="footer-icon" width={20} height={20}/>
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </Container>
        </FooterStyled>
    )
};