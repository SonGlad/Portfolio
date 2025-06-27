import * as Yup from "yup";


const ContactFormSchema = (t) => Yup.object().shape({
  name: Yup.string()
    .trim()
    .matches(/^[A-Za-zА-Яа-яЁёІіЇїЄєҐґ\s]+$/, { message: t("contact.form.validationNameMatches"), excludeEmptyString: true })
    .min(2, t("contact.form.validationNameMin"))
    .max(40, t("contact.form.validationNameMax"))
    .required(t("contact.form.validationNameRequired")),
  email: Yup.string()
    .trim()
    .matches(/^[A-Za-zА-Яа-яЁёІіЇїЄєҐґ0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/, t("contact.form.validationEmailMatches"))
    .email(t("contact.form.validationEmail"))
    .required(t("contact.form.validationEmailRequired")),
  phone: Yup.string()
    .matches(/^\d+$/, t("contact.form.validationPhoneMatches"))
    .min(11, t("contact.form.validationPhoneMin"))
    .max(15, t("contact.form.validationPhoneMax"))
    .required(t("contact.form.validationPhoneRequired")),
});



export {
  ContactFormSchema,
};
