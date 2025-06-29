import { ThirdGroupStyled } from "./ThirdGroup.styled";
import { nanoid } from "nanoid";
import { NavLink } from "react-router-dom";
import LinkSvg from "../../../../../assets/svg-icons/link2.svg";
import { useState, useEffect, useRef } from "react";
import { useTranslation } from 'react-i18next';


export const Libraries = ({libraries}) => {
    const [expanded, setExpanded] = useState();
    const collaboratorsRef = useRef();
    const { t } = useTranslation();


    const handleButtonClick = () => {
        setExpanded(!expanded);
    };
    const handleButtonClose = () => {
        setExpanded(false);
    };


    useEffect(() => {
        const handleClickOutside = (event) => {
            if (collaboratorsRef.current && !collaboratorsRef.current.contains(event.target)) {
                setExpanded(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [collaboratorsRef]);

    
    return(
        <ThirdGroupStyled>
            <div className="collaborators-text">
                <p><strong>{t("portfolioModal.libraries")}:</strong></p>
            </div>
            <div className="collaborators-div" ref={collaboratorsRef}>
                <ul className={`collaborators-list ${expanded ? 'list-3' : ''}`}>
                    <button className={`drop-btn ${expanded ? 'active' : ''}`} 
                        type="button" onClick={handleButtonClick}>{t("portfolioModal.seaAllButton")}
                    </button>
                    {libraries.map(({name, link}) => (
                        <li key={nanoid()} className="collaborators-item" onClick={handleButtonClose}>
                            <NavLink className="repository-link" to={link}
                                aria-label="technical task link"
                                target="_blank"
                                rel="noreferrer noopener" 
                            >
                                <LinkSvg className="svg-link" width={16} height={16}/>
                                {name}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
        </ThirdGroupStyled>
    )
};