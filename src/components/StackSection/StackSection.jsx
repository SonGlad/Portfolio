import { StackSectionStyled } from "./StackSection.styled";
import { Icons } from "./ReactIcons/Icons";
import { Projects } from "./ProjectList/Project";
import { CodingCharts } from "./CodingCharts/CodingCharts";
import { useTranslation } from 'react-i18next';



export const StackSection = () => {
    const { t } = useTranslation();


    return(
        <StackSectionStyled>
            <h1 className="main-education-title">{t("stack.sectionTitle1")} <span>{t("stack.sectionTitle2")}</span></h1>
            <div className="content-div">
                <Icons/>
                <h2 className="statistics-title">{t("stack.subTitle1")} <span>{t("stack.subTitle2")}</span></h2>
                <h3 className="title">{t("stack.subAubTitle1")} <span>{t("stack.subAubTitle2")}</span> {t("stack.subAubTitle3")}</h3>
                <div className="projects-descr-maincont">
                    <div className="projects-descr-cont">
                        <p className="projects-descr-text">{t("profile.about5")}</p>
                    </div>
                </div>
                <Projects/>
                <h3 className="title">{t("stack.subAubTitle4")} <span>{t("stack.subAubTitle5")}</span> {t("stack.subAubTitle6")}</h3>
                <h4 className="title-descr">{t("stack.lastTitle1")} <span>{t("stack.lastTitle2")}</span> {t("stack.lastTitle3")} <span>{t("stack.lastTitle4")}</span> {t("stack.lastTitle5")}</h4>
                <CodingCharts/>
            </div>
        </StackSectionStyled>
    )
};