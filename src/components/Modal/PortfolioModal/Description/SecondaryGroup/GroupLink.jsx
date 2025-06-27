import { SecondaryGroupStyled } from "./SecondaryGroup.styled";
import { NavLink } from "react-router-dom";
import LinkSvg from "../../../../../assets/svg-icons/link2.svg";
import { useTranslation } from 'react-i18next';


export const GroupLink = ({technical, figma}) => {
    const { t } = useTranslation();

    
    return(
        <SecondaryGroupStyled>
            <li className="seconadry-group-item">
                <p><strong>{t("portfolioModal.techTask")}:</strong></p>
                {technical ? (
                    <NavLink className="repository-link" to={technical}
                        aria-label="technical task link"
                        target="_blank"
                        rel="noreferrer noopener"
                    >
                        <LinkSvg className="svg-link" width={16} height={16}/>
                        {t("portfolioModal.available")}
                    </NavLink>
                ) : (
                    <p>{t("portfolioModal.na")}</p>
                )}
            </li>
            <li className="seconadry-group-item">
                <p><strong>{t("portfolioModal.figmaLink")}:</strong></p>
                {figma ? (
                    <NavLink className="repository-link" to={figma}
                        aria-label="repository link"
                        target="_blank"
                        rel="noreferrer noopener"
                    >
                        <LinkSvg className="svg-link" width={16} height={16}/>
                        {t("portfolioModal.available")}
                    </NavLink>
                ) : (
                    <p>{t("portfolioModal.na")}</p>
                )}
            </li>
        </SecondaryGroupStyled>
    )
};