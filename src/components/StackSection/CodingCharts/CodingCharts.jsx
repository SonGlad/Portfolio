import { CodingChartsStyled } from "./CodingCharts.styled";
import { Chart } from "./Charts/Charts";
import { useInView } from 'react-intersection-observer';
import DefaultPicture from "../../../assets/images/bg_image.webp";
import { useTranslation } from 'react-i18next';



export const CodingCharts = () => {
    const { t } = useTranslation();

    const [refItem1, refItem1InView] = useInView({ 
        triggerOnce: false, 
        threshold: 0.2,
    });
    const [refItem2, refItem2InView] = useInView({ 
        triggerOnce: false, 
        threshold: 0.2,
    });
    const [refItem3, refItem3InView] = useInView({ 
        triggerOnce: false, 
        threshold: 0.2,
    });
    const [refItem4, refItem4InView] = useInView({ 
        triggerOnce: false, 
        threshold: 0.2,
    });
    const [refItem5, refItem5InView] = useInView({ 
        triggerOnce: false, 
        threshold: 0.2,
    });
    const [refItem6, refItem6InView] = useInView({ 
        triggerOnce: false, 
        threshold: 0.2,
    });
  
    

    return(
        <CodingChartsStyled>
            <ul className="phases-list">
                <li className={`phases-item ${refItem1InView ? 'active1' : ''}`} ref={refItem1}>
                    <div className="phases-styles small-screen">
                        <div className="context">
                            <div className="border-inner">
                                <p>01</p>
                            </div>
                            <div className="absolute"></div>
                        </div>
                        <div className="border-to-bottom"></div>
                    </div>
                    <div className="phases-content-cont">
                        <div className="padding-cont image-padding-cont">
                            <div className="image-cont" 
                                style={{backgroundImage:`url(${t("profile.steps.projectPlanning.img") 
                                || DefaultPicture})`}}
                            ></div>
                        </div>
                        <div className="phases-styles wide-screen">
                            <div className="context">
                                <div className="border-inner">
                                    <p>01</p>
                                </div>
                                <div className="absolute"></div>
                            </div>
                            <div className="border-to-bottom"></div>
                        </div>
                        <div className="padding-cont content-padding-cont">
                            <div className="text-cont">
                                <div className="tetx-and-title">
                                    <h3 className="text-title">{t("profile.steps.projectPlanning.name")}</h3>
                                    <p className="text">{t("profile.steps.projectPlanning.description")}</p>
                                </div>
                                <Chart
                                    value={t("profile.steps.projectPlanning.value")}
                                    projectTime={t("stack.projectTime")}
                                />
                            </div>
                        </div>
                    </div>
                </li>
                <li className={`phases-item ${refItem2InView ? 'active2' : ''}`} ref={refItem2}>
                    <div className="phases-styles small-screen">
                        <div className="context">
                            <div className="border-inner">
                                <p>02</p>
                            </div>
                            <div className="absolute"></div>
                        </div>
                        <div className="border-to-bottom"></div>
                    </div>
                    <div className="phases-content-cont">
                        <div className="padding-cont image-padding-cont order-one">
                            <div className="image-cont" 
                                style={{backgroundImage:`url(${t("profile.steps.designPrototyping.img") 
                                || DefaultPicture})`}}
                            ></div>
                        </div>
                        <div className="phases-styles wide-screen order-two">
                            <div className="context">
                                <div className="border-inner">
                                    <p>02</p>
                                </div>
                                <div className="absolute"></div>
                            </div>
                            <div className="border-to-bottom"></div>
                        </div>
                        <div className="padding-cont content-padding-cont order-three">
                            <div className="text-cont">
                                <div className="tetx-and-title">
                                    <h3 className="text-title">{t("profile.steps.designPrototyping.name")}</h3>
                                    <p className="text">{t("profile.steps.designPrototyping.description")}</p>
                                </div>
                                <Chart
                                    value={t("profile.steps.projectPlanning.value")}
                                    projectTime={t("stack.projectTime")}
                                />
                            </div>
                        </div>
                    </div>
                </li>
                <li className={`phases-item ${refItem3InView ? 'active3' : ''}`} ref={refItem3}>
                    <div className="phases-styles small-screen">
                        <div className="context">
                            <div className="border-inner">
                                <p>03</p>
                            </div>
                            <div className="absolute"></div>
                        </div>
                        <div className="border-to-bottom"></div>
                    </div>
                    <div className="phases-content-cont">
                        <div className="padding-cont image-padding-cont">
                            <div className="image-cont" 
                                style={{backgroundImage:`url(${t("profile.steps.backend.img") 
                                || DefaultPicture})`}}
                            ></div>
                        </div>
                        <div className="phases-styles wide-screen">
                            <div className="context">
                                <div className="border-inner">
                                    <p>03</p>
                                </div>
                                <div className="absolute"></div>
                            </div>
                            <div className="border-to-bottom"></div>
                        </div>
                        <div className="padding-cont content-padding-cont">
                            <div className="text-cont">
                                <div className="tetx-and-title">
                                    <h3 className="text-title">{t("profile.steps.backend.name")}</h3>
                                    <p className="text">{t("profile.steps.backend.description")}</p>
                                </div>
                                <Chart
                                    value={t("profile.steps.projectPlanning.value")}
                                    projectTime={t("stack.projectTime")}
                                />
                            </div>
                        </div>
                    </div>
                </li>
                <li className={`phases-item ${refItem4InView ? 'active4' : ''}`} ref={refItem4}>
                    <div className="phases-styles small-screen">
                        <div className="context">
                            <div className="border-inner">
                                <p>04</p>
                            </div>
                            <div className="absolute"></div>
                        </div>
                        <div className="border-to-bottom"></div>
                    </div>
                    <div className="phases-content-cont">
                        <div className="padding-cont image-padding-cont order-one">
                            <div className="image-cont" 
                                style={{backgroundImage:`url(${t("profile.steps.frontend.img") 
                                || DefaultPicture})`}}
                            ></div>
                        </div>
                        <div className="phases-styles wide-screen order-two">
                            <div className="context">
                                <div className="border-inner">
                                    <p>04</p>
                                </div>
                                <div className="absolute"></div>
                            </div>
                            <div className="border-to-bottom"></div>
                        </div>
                        <div className="padding-cont content-padding-cont order-three">
                            <div className="text-cont">
                                <div className="tetx-and-title">
                                    <h3 className="text-title">{t("profile.steps.frontend.name")}</h3>
                                    <p className="text">{t("profile.steps.frontend.description")}</p>
                                </div>
                                <Chart
                                    value={t("profile.steps.projectPlanning.value")}
                                    projectTime={t("stack.projectTime")}
                                />
                            </div>
                        </div>
                    </div>
                </li>
                <li className={`phases-item ${refItem5InView ? 'active5' : ''}`} ref={refItem5}>
                    <div className="phases-styles small-screen">
                        <div className="context">
                            <div className="border-inner">
                                <p>05</p>
                            </div>
                            <div className="absolute"></div>
                        </div>
                        <div className="border-to-bottom"></div>
                    </div>
                    <div className="phases-content-cont">
                        <div className="padding-cont image-padding-cont">
                            <div className="image-cont" 
                                style={{backgroundImage:`url(${t("profile.steps.testing.img")
                                || DefaultPicture})`}}
                            ></div>
                        </div>
                        <div className="phases-styles wide-screen">
                            <div className="context">
                                <div className="border-inner">
                                    <p>05</p>
                                </div>
                                <div className="absolute"></div>
                            </div>
                            <div className="border-to-bottom"></div>
                        </div>
                        <div className="padding-cont content-padding-cont">
                            <div className="text-cont">
                                <div className="tetx-and-title">
                                    <h3 className="text-title">{t("profile.steps.testing.name")}</h3>
                                    <p className="text">{t("profile.steps.testing.description")}</p>
                                </div>
                                <Chart
                                    value={t("profile.steps.projectPlanning.value")}
                                    projectTime={t("stack.projectTime")}
                                />
                            </div>
                        </div>
                    </div>
                </li>
                <li className={`phases-item ${refItem6InView ? 'active6' : ''}`} ref={refItem6}>
                    <div className="phases-styles small-screen">
                        <div className="context">
                            <div className="border-inner">
                                <p>06</p>
                            </div>
                            <div className="absolute"></div>
                        </div>
                        <div className="border-to-bottom"></div>
                    </div>
                    <div className="phases-content-cont">
                        <div className="padding-cont image-padding-cont order-one">
                            <div className="image-cont" 
                                style={{backgroundImage:`url(${t("profile.steps.deploying.img") 
                                || DefaultPicture})`}}
                            ></div>
                        </div>
                        <div className="phases-styles wide-screen order-two">
                            <div className="context">
                                <div className="border-inner">
                                    <p>06</p>
                                </div>
                                <div className="absolute"></div>
                            </div>
                            <div className="border-to-bottom"></div>
                        </div>
                        <div className="padding-cont content-padding-cont order-three">
                            <div className="text-cont">
                                <div className="tetx-and-title">
                                    <h3 className="text-title">{t("profile.steps.deploying.name")}</h3>
                                    <p className="text">{t("profile.steps.deploying.description")}</p>
                                </div>
                                <Chart
                                    value={t("profile.steps.projectPlanning.value")}
                                    projectTime={t("stack.projectTime")}
                                />
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </CodingChartsStyled>
    )
};
