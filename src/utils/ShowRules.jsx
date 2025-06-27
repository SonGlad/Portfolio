import Error from "../assets/svg-icons/error.svg";
import Correct from "../assets/svg-icons/correct.svg";


export const ShowRules = (values, touched, errors, t) => {


  const getFieldName = (fieldName, t) => {
    switch (fieldName) {
      case 'name':
        return {
          label: t("contact.form.labelValue1"),
          message: t("contact.form.nameCorrect")
        };
      case 'email':
        return {
          label: t("contact.form.labelValue2"),
          message: t("contact.form.emailCorrect")
        };
      case 'phone':
        return {
          label: t("contact.form.labelValue3"),
          message: t("contact.form.phoneCorrect")
        };
      default:
        return {
          label: fieldName.charAt(0).toUpperCase() + fieldName.slice(1),
          message: 'is correct'
        };
    }
  };



  const getInputClass = (fieldName) => {
    return !values[fieldName]
      ? ""
      : touched && errors[fieldName]
      ? "ErrorInput"
      : "SuccessInput";
  };



  const getInputAlert = (fieldName) => {
    const { label, message } = getFieldName(fieldName, t)
    return !values[fieldName] ? (
      ""
    ) : touched && errors[fieldName] ? (
      <>
        <p className="ErrorText">{errors[fieldName]}</p>
        <div className="ImgError"><Error/></div>
      </>
    ) : (
      <>
        <p className="SuccessText">{`${label} ${message}`}</p>
        <div className="ImgCorrect"><Correct/></div>
      </>
    );
  };

  return { getInputClass, getInputAlert };
};