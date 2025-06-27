import { ContactInfoStyled } from "./ContactInfo.styled";
import { NavLink } from "react-router-dom";
import GitHubIcon from "../../../assets/svg-icons/github.svg"
import FacebookIcon from "../../../assets/svg-icons/facebook.svg";
import TelegramIcon from "../../../assets/svg-icons/telegram.svg";
import LinkedinIcon from "../../../assets/svg-icons/linkedin.svg";
import PhoneIcon from "../../../assets/svg-icons/phone.svg";
import EmailIcon from "../../../assets/svg-icons/contact.svg";
import { useTranslation } from "react-i18next";


export const ContactInfo = () => {
    const { t } = useTranslation();


    return(
        <ContactInfoStyled>
            <h2 className="container-title">{t("contact.subTitle")}</h2>
            <p className="contact-description">{t("profile.about4")}</p>
            <p className="contact-description">{t("profile.about6")}</p>
            <address className="page-contact">
                <ul className="contact-links">
                    <li className="contact-link-item contact-link-mail">
                        <a className="contact-link" href="mailto:irexwebdevelopment@gmail.com">
                            <EmailIcon className="contact-icon" width={18} height={18} />
                            <span>{t("profile.email")}</span>
                        </a>
                    </li>
                    <li className="contact-link-item contact-link-mail">
                        <a className="contact-link" href="mailto:okoshevy@gmail.com">
                            <EmailIcon className="contact-icon" width={18} height={18}/>
                            <span>{t("profile.email2")}</span>
                        </a>
                    </li>
                    <li className="contact-link-item contact-link-tel">
                        <a className="contact-link" href="tel:+30674838965">
                            <PhoneIcon className="contact-icon" width={18} height={18}/>
                            <span>{t("profile.phone")}</span>
                        </a>
                    </li>
                </ul>
            </address>
            <ul className="contact-social-list">
                <li className="contact-social-item">
                    <NavLink className="contact-social-link" to={t("profile.github_link")}
                        aria-label="GitHub link"
                        target="_blank"
                        rel="noreferrer noopener">
                        <GitHubIcon className="contact-social-icon" width={26} height={26}/>
                    </NavLink>
                </li>
                <li className="contact-social-item">
                    <NavLink className="contact-social-link" to={t("profile.facebook_link")}
                        aria-label="Facebook link"
                        target="_blank"
                        rel="noreferrer noopener">
                        <FacebookIcon className="contact-social-icon" width={26} height={26}/>
                    </NavLink>
                </li>
                <li className="contact-social-item">
                    <NavLink className="contact-social-link" to={t("profile.linkedin_link")}
                        aria-label="Linkedin link"
                        target="_blank"
                        rel="noreferrer noopener">
                        <LinkedinIcon className="contact-social-icon" width={24} height={24}/>
                    </NavLink>
                </li>
                <li className="contact-social-item">
                    <NavLink className="contact-social-link" to={t("profile.telegram_link")}
                        aria-label="Telegram link"
                        target="_blank"
                        rel="noreferrer noopener">
                        <TelegramIcon className="contact-social-icon" width={24} height={24}/>
                    </NavLink>
                </li>
            </ul>
        </ContactInfoStyled>
    )
};