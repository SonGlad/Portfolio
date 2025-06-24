import { CodingChartsStyled } from "./CodingCharts.styled";
import { Chart } from "./Charts/Charts";
import DefaultPicture from "../../../assets/images/bg_image.webp";
import { useTranslation } from 'react-i18next';
import { useRef } from "react";
import { useScrollAnimation } from "../../../custom-hooks/allGSAPAnimations";


export const CodingCharts = () => {
    const { t } = useTranslation();
    const containerRef = useRef();

    useScrollAnimation({containerRef}); 

    // useGSAP(() => {
    //     if(!container.current) return;
    //     if(renderMob){
    //         gsap.timeline({
    //             scrollTrigger: {
    //                 trigger: '.phases-content-cont',
    //                 start: 'top bottom',
    //                 end: 'bottom center',
    //                 scrub: true,
    //                 markers: true

    //             }
    //         })
    //         .to('.phases-content-cont', 
    //             {
    //                 opacity: 1,
    //                 ease: 'power2.inOut'
    //             },
    //         )
    //     }
    //     return () => {
    //         ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    //     };
    // }, {scope: container})



    // useGSAP(() => {
    //     if (!container.current) return;
    //     // console.log(1);
        

    //         gsap.utils.toArray('.phases-content-cont').forEach((el) => {
    //             gsap.fromTo(
    //                 el,
    //                 { opacity: 0 },
    //                 {
    //                 opacity: 1,
    //                 ease: 'none',
    //                 scrollTrigger: {
    //                     trigger: el,
    //                     start: 'top bottom',
    //                     end: 'top 40%',
    //                     scrub: true,
    //                     markers: true
    //                 },
    //                 }
    //             );
    //         });


    //     return () => {
    //         ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    //     };

    // }, { scope: container });
      

    return(
        <CodingChartsStyled>
            <ul className="phases-list" ref={containerRef}>
                <li className="phases-item">
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
                <li className="phases-item">
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
                <li className="phases-item">
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
                <li className="phases-item">
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
                <li className="phases-item">
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
                <li className="phases-item">
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
