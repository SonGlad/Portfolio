import { AboutStyled } from "./About.styled";
import { LeftAnimation } from "./LeftAnimation/LeftAnimation";
import { RightAnimation } from "./RightAnimation/RightAnimation";
import { useInView } from 'react-intersection-observer';
import { useWindowSize } from "../../custom-hooks/hooks";
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from "react";
import IrexLogo from "../../assets/images/iReX_logo.png";
import Construction from "../../assets/svg-icons/construction.svg";
import TemplateIcon from "../../assets/svg-icons/template.svg";
import UserIcon from "../../assets/svg-icons/user.svg";
import IconHandsBound from "../IconList/HandsBound";




export const AboutUsSection = () => {
    const { renderMob } = useWindowSize();
    const { t } = useTranslation();
    const [parts, setParts] = useState(null)


    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.2,
    });
    const { ref: leftRef, inView: inViewLeft } = useInView({
        triggerOnce: false,
        threshold: 0.1,
    });
    const { ref: rightRef, inView: inViewRight } = useInView({
        triggerOnce: false,
        threshold: 0.2,
    });
    const { ref: descrRef, inView: inViewDescription } = useInView({
        triggerOnce: false,
        threshold: 0.1,
    });


    useEffect(() => {
        setParts(t("profile.about1").split("iReX"))
    },[t])

      
    return (
        <AboutStyled>
            <h1 className="about-title">{t("about.sectionTitle1")} <span>{t("about.sectionTitle2")}</span></h1>
            <div className="description-cont" ref={descrRef} id="descriptionCont">
                <ul className={`description-list ${inViewDescription ? "active" : ""}`}>
                    <li className="description-item">
                        <TemplateIcon className="description-icon" width={24} height={24}/>
                        <h3 className="description-title">{t("hero.descriptionTitle1")}</h3>
                        <p className="description-text">{t("hero.description1")}</p>
                    </li>
                    <li className="description-item">
                        <Construction className="description-icon" width={24} height={24}/>
                        <h3 className="description-title">{t("hero.descriptionTitle2")}</h3>
                        <p className="description-text">{t("hero.description2")}</p>
                    </li>
                    <li className="description-item">
                        <div className="icon-cont">
                            <UserIcon className="description-icon-user" width={24} height={24}/>
                            <IconHandsBound className="description-icon-hands" width={24} height={24}/>
                        </div>
                        <h3 className="description-title">{t("hero.descriptionTitle3")}</h3>
                        <p className="description-text">{t("hero.description3")}</p>
                    </li>
                </ul>
            </div>
            {renderMob ? (
                <div className="content-div">
                    <div className='animation-container'>
                        <div className="about-cont">
                            <div className="shadow0">
                                <div className="about-img-cont">
                                    <img className="about-img" src={IrexLogo} alt="my_picture" width={270}/>
                                    <span className="circle-filter"></span>
                                    <span className="circle-spin1"></span>
                                    <span className="circle-spin2"></span>
                                </div>
                            </div>
                            <div className='shadow-div'>
                                <p className="about-content-text">
                                    {parts ? (
                                        <>
                                        {parts[0]}<span>iReX</span>{parts[1]}
                                        </>
                                    ) : (
                                        <>
                                            ...Loading
                                        </>
                                    )}
                                </p>
                            </div>
                        </div>
                        <div className="coding-container-left">
                            <div className='shadow1 order-one'>
                                <LeftAnimation />
                            </div>
                            <div className='shadow-div order-two'>
                                <p className="about-content-text">{t("profile.about2")}</p>
                            </div>
                        </div>
                        <div className="coding-container-right">
                            <div className="shadow2">
                                <RightAnimation />
                            </div>
                            <div className='shadow-div'>
                                <p className="about-content-text">{t("profile.about3")}</p>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="content-div">
                    <div className={`about-cont ${inView ? 'active' : ''}`} ref={ref} id='descriptionOne'>
                        <div className="shadow0">
                            <div className="about-img-cont">
                                <img className="about-img" src={IrexLogo} alt="my_picture" width={270}/>
                                <span className="circle-filter"></span>
                                <span className="circle-spin1"></span>
                                <span className="circle-spin2"></span>
                            </div>
                        </div>
                        <div className='shadow-div'>
                            <p className="about-content-text">
                                {parts ? (
                                    <>
                                    {parts[0]}<span>iReX</span>{parts[1]}
                                    </>
                                ) : (
                                    <>
                                        ...Loading
                                    </>
                                )}
                            </p>
                        </div>
                    </div>
                    <div className={`coding-container-left ${inViewLeft ? 'active' : ''}`} ref={leftRef} id='descriptionTwo'>
                        <div className='shadow1 order-one'>
                            <LeftAnimation />
                        </div>
                        <div className='shadow-div order-two'>
                            <p className="about-content-text">{t("profile.about2")}</p>
                        </div>
                    </div>
                    <div className={`coding-container-right ${inViewRight ? 'active' : ''}`} ref={rightRef} id='descriptionThree'>
                        <div className="shadow2">
                            <RightAnimation />
                        </div>
                        <div className='shadow-div'>
                            <p className="about-content-text">{t("profile.about3")}</p>
                        </div>
                    </div>
                </div>
            )}
        </AboutStyled>
    )
};