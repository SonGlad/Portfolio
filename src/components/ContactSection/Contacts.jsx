import { ContactsStyled } from "./Contacts.styled";
import { ContactInfo } from "./ContactInfo/ContactInfo";
import { ContactForm } from "./ContactForm/ContactForm";
import { useInView } from 'react-intersection-observer';
import { useTranslation } from "react-i18next";



export const Contacts = ({openContactModal, setSuccess, setIsLoading}) => {
    const { t } = useTranslation();
    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.1,
    });


    return(
        <ContactsStyled>
            <h1 className="about-title">{t("contact.title1")} <span>{t("contact.title2")}</span></h1>
                <div className="content-container" ref={ref}>
                    {inView && (
                        <>
                            <ContactInfo />
                            <div className="form-container">
                                <span className="animated-span-upper">
                                    <span className="animated-span-lower">
                                        <ContactForm
                                            openContactModal={openContactModal}
                                            setSuccess={setSuccess}
                                            setIsLoading={setIsLoading}
                                        />
                                    </span>
                                </span>
                            </div>
                        </>
                    )}
                </div>
        </ContactsStyled>
    )
};