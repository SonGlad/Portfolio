import { ContactModalStyled } from "./ContactModal.styled";
import CloseIcon from "../../../assets/svg-icons/close.svg";
import SuccsessIcon from "../../../assets/svg-icons/ok.svg";
import ErrorIcon from "../../../assets/svg-icons/error-logo.svg";
import { useTranslation } from 'react-i18next';



export const ContactModal = ({handleClickClose, isSuccess}) => {
    const { t } = useTranslation();

    return(
        <ContactModalStyled>
            <button className="close-btn" type="button" onClick={handleClickClose}>
                <CloseIcon className="icon" width={12} height={12}/>
            </button>
            {isSuccess ? (
                <div className="content-container">
                    <div className="shadow-div">
                        <div className="content">
                            <SuccsessIcon className="modal-icon" width={24} height={24}/>
                            <p className="contact-modal-text sucsess">{t("contactModal.text1")}</p>
                        </div>
                        <p className="contact-modal-text">{t("contactModal.text2")}</p>
                    </div>
                    <button type='button' className="continue-btn" 
                        onClick={handleClickClose}
                    >
                        {t("contactModal.buttonText")}
                    </button>
                </div>
            ):(
                <div className="content-container">
                    <div className="shadow-div">
                        <div className="content">
                            <ErrorIcon className="modal-icon" width={24} height={24}/>
                            <p className="contact-modal-text error">{t("contactModal.text3")}</p>
                        </div>
                        <p className="contact-modal-text">{t("contactModal.text4")}</p>
                    </div>
                    <button type='button' className="continue-btn" 
                        onClick={handleClickClose}
                    >
                        {t("contactModal.buttonText")}
                    </button>
                </div>
            )}
        </ContactModalStyled>
    )
};