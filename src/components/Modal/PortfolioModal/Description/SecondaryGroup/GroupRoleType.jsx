import { useTranslation } from 'react-i18next';
import { SecondaryGroupStyled } from "./SecondaryGroup.styled";


export const GroupRoleType = ({type}) => {
    const { t } = useTranslation();
    

    return(
        <SecondaryGroupStyled>
            <li className="seconadry-group-item">
                <p><strong>{t("portfolioModal.type")}:</strong></p>
                <p>{type}</p>
            </li>
        </SecondaryGroupStyled>
    )
};