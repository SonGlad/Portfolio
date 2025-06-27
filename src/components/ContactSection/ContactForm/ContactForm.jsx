import { ContactFormStyled } from "./ContactForm.styled";
import UserIcon from "../../../assets/svg-icons/user.svg";
import EmailIcon from "../../../assets/svg-icons/contact.svg";
import PhoneIcon from "../../../assets/svg-icons/phone.svg";
import { useFormik } from "formik";
import { ContactFormSchema } from "../../../utils/ValidationSchema";
import { ShowRules } from "../../../utils/ShowRules";
import { useState, useEffect } from "react";
import emailjs from '@emailjs/browser';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css';
import { AsYouType } from 'libphonenumber-js';
import useGeoLocation from "react-ipgeolocation";
import { useTranslation } from "react-i18next";


const SERVICE_ID2 = import.meta.env.VITE_SERVICE_ID;
const TEMPLATE_ID2 = import.meta.env.VITE_TEMPLATE_ID;
const PUBLIC_KEY2 = import.meta.env.VITE_PUBLIC_KEY;


export const ContactForm = ({openContactModal, setSuccess, setIsLoading}) => {
    const [formChanged, setFormChanged] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState('');
    const location = useGeoLocation();
    const { t } = useTranslation();
    const country = location.country ? location.country.toLowerCase() : "";


    const {
        values,
        errors,
        touched,
        isValid,
        handleBlur,
        handleChange,
        handleSubmit,
        resetForm,
      } = useFormik({

        initialValues: {
            name: '',
            email: '',
            phone: phoneNumber,
            user_comment: '',
        },

        validationSchema: ContactFormSchema(t),

        onSubmit: (values) => {
            const phoneNumberWithPlus = '+' + phoneNumber;
            const formattedNumber = new AsYouType().input(phoneNumberWithPlus);
            
            setIsLoading(true);
            emailjs.send(SERVICE_ID2, TEMPLATE_ID2, {
                to_name: 'IReXWebDev',
                from_name: values.name,
                from_email: values.email,
                from_phone: formattedNumber,
                to_email: 'irexwebdevelopment@gmail.com',
                message: values.user_comment
            }, PUBLIC_KEY2)
            .then(() => {
                setIsLoading(false);
                setSuccess(true);
                openContactModal();
                setFormChanged(false);
                resetForm({
                    values: {
                        name: '',
                        email: '',
                        phone: '',
                        user_comment: '',
                    },
                })
                setPhoneNumber('')
                }, 
                (error) => {
                    setIsLoading(false);
                    setSuccess(false);
                    openContactModal();
                    console.error(error);
                }
            )
        },
    });


    const {
        getInputClass,
        getInputAlert,
    } = ShowRules(values, touched, errors, t);


    useEffect(() => {
        if (
          values.name !== '' ||
          values.email !== '' ||
          values.phone !== ''
        ) {
            setFormChanged(true);
        } 
    },[values.email, values.name, values.phone]);
    


    return(
        <ContactFormStyled onSubmit={handleSubmit} data-netlify="true">
            <label className="form-label" htmlFor="name" style={{'--i': 0}}>{t("contact.form.labelValue1")}
                <div className="form-group">
                    <input 
                        className={`form-field ${getInputClass("name")}`}
                        type="text" 
                        name="name"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        placeholder={t("contact.form.placeholdervalue1")}
                        id='name'
                        autoComplete="on"
                        required
                        onChange={handleChange}
                        value={values.name}
                        onBlur={handleBlur}
                    />
                    {getInputAlert("name")}
                    <UserIcon className="form-icon" width={20} height={20}/>
                </div>
            </label>
            <label className="form-label" htmlFor="email" style={{'--i': 1}}>{t("contact.form.labelValue2")}
                <div className="form-group">
                    <input 
                        className={`form-field ${getInputClass("email")}`}
                        type="email" 
                        name="email"
                        title=""
                        placeholder={t("contact.form.placeholdervalue2")}
                        id='email'
                        autoComplete="on"
                        required
                        onChange={handleChange}
                        value={values.email}
                        onBlur={handleBlur}
                    />
                    {getInputAlert("email")}
                    <EmailIcon className="form-icon" width={20} height={20}/>
                </div>
            </label>
            <label className="form-label" htmlFor="phone" style={{'--i': 2, "zIndex": '5'}}>{t("contact.form.labelValue3")}
                <div className="form-group">
                    <PhoneIcon className="form-icon" width={20} height={20}/>
                    <PhoneInput
                        inputProps={{
                            name: 'phone',
                            required: true,
                            autoFocus: false,
                            id: "phone",
                        }}
                        onBlur= {handleBlur} 
                        value={phoneNumber}
                        onChange={phone => {
                            handleChange({ target: { name: 'phone', value: phone } });
                            setPhoneNumber(phone);
                        }}
                        containerClass = 'form-label-pnone'
                        inputClass = {`form-field`}
                        buttonClass = "dropdown-cont"
                        country={country || 'ua'}
                        placeholder={t("contact.form.placeholdervalue3")}
                        autoFormat={true}
                        countryCodeEditable={false}
                        enableSearch={true}
                        disableSearchIcon={false}
                    />
                    {getInputAlert("phone")}
                </div>
            </label>
            <label className="form-label" htmlFor="user_comment" style={{'--i': 3}}>{t("contact.form.labelValue5")}
                <textarea 
                    className="form-comment" 
                    name="user_comment" 
                    id="user_comment" 
                    rows="6" 
                    placeholder={t("contact.form.placeholdervalue5")}
                    onChange={handleChange}
                    value={values.user_comment}
                    onBlur={handleBlur}
                ></textarea>
            </label>
            <div className="btn-cont">
                <button type="submit" className="submit-button"
                    disabled={!isValid || !formChanged}
                >{t("contact.form.submitBtn")}
                </button>
            </div>
        </ContactFormStyled>
    )
};