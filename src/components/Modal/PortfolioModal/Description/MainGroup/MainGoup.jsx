import { MainGroupStyled } from "./MainGroup.styled";
import { NavLink } from "react-router-dom";
import Link2Icon from "../../../../../assets/svg-icons/link2.svg";
import { useTranslation } from 'react-i18next';


export const MainGroup = ({name, homepage}) => {
    const { t } = useTranslation();


    return(
        <MainGroupStyled>
            <li className="main-group-item">
                <p className="main-group-text">{t("portfolioModal.livePage")}:</p>
                <NavLink className="repository-link class-for-animation" to={homepage}
                    aria-label="Live page link"
                    target="_blank"
                    rel="noreferrer noopener"
                >
                    <Link2Icon className="svg-link" width={16} height={16}/>
                    <strong>{name}</strong>
                </NavLink>
            </li>
        </MainGroupStyled>
    )
};