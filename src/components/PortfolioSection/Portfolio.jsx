import { PortfolioStyled } from "./Portfolio.styled";
import BackgroundImg from "../../assets/images/bg_image.webp";
import BookIcon from "../../assets/svg-icons/open-book.svg";
import { useEffect, useState, useMemo } from "react";
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next';



export const PortfolioSection = ({openPortfolioModal, setPortfolioModalData}) => {
    const [filterType, setFilterType] = useState('All');
    const [portfolioData, setPortfolioData] = useState([]);
    const [buttonName, setButtonName] = useState([]);
    const [isAnimated, setIsAnimated] = useState(false);
    const { t } = useTranslation();

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });


    const portfolio = useMemo(() => {
        return t("projects", { returnObjects: true });
    }, [t]);
    

    useEffect(() => {
        if (portfolio) {
            setPortfolioData(portfolio);
        }
    },[portfolio]);


    const buttonValue = useMemo(() => {
        return portfolioData
            .flatMap(({type, translation }) => {
                const result = [];

                if (type) {
                    const types = type.split(',').map(t => t.trim());
                    const translatedTypes = translation.split(',').map(t => t.trim());

                    types.forEach((singleType, typeIndex) => {
                        result.push({
                            type: singleType,
                            value: translatedTypes[typeIndex] || translation,  
                        });
                    });
                }
                return result;
            })
            .filter((component, index, self) =>
                index === self.findIndex((item) => item.type === component.type));
    }, [portfolioData]);


    useEffect(() => {
        if (portfolioData) {
            setButtonName(buttonValue);
        }
    }, [buttonValue, portfolioData]);


    const handleFilter = (type) => {
        setIsAnimated(true);
        setFilterType(type);
        setTimeout(() => {
            setIsAnimated(false);
        },50);
    };


    const filteredComponents = portfolioData.filter((item) => {
        const types = item.type ? item.type.split(',').map(t => t.trim()) : [];

        switch (filterType) {
            case 'All':
                return true
            case 'Landing':
                return types.includes('Landing');
            case 'Team':
                return types.includes('Team');
            case 'Backend':
                return types.includes('Backend');
            case 'FullStack':
                return types.includes('FullStack');
            case 'CRM':
                return types.includes('CRM');
            default:
                return true;
        }
    }).sort((a, b) => {
        return new Date(b.createdAt) - new Date(a.createdAt);
    });
   

    const openModal = (id) => {
        const itemDetails = portfolioData.find((item) => item.id === id);
        setPortfolioModalData(itemDetails);
        openPortfolioModal();
    };


    return(
        <PortfolioStyled>
            <h1 className="potfolio-title"><span>{t("portfolio.sectionTitle1")} </span>{t("portfolio.sectionTitle2")}</h1>
            <div className="content-div">
                <ul className="filter-list">
                    <li className="filter-item">
                        <button className="filter-button indi-animation" type="button" 
                            onClick={() => handleFilter('All')}
                        >{t("portfolio.buttonAll")}
                        </button>
                    </li>
                    {buttonName && buttonName.map(({type, value}, index) => (
                        <li className="filter-item" key={index}>
                            <button className="filter-button indi-animation" type="button" 
                                onClick={() => handleFilter(type)}
                            >{value}
                            </button>
                        </li>
                    ))}
                </ul>
                <ul className={`cols ${inView ? 'active' : ''} ${isAnimated ? 'animate' : ''}`} ref={ref}>
                    {filteredComponents.map(({id, name, coverImage, description, translation}, index) => (
                        <li key={`${id}-${filterType}-${index}`} className="col" style={{'--i': index + 1}}>
                            <div className="container">
                                <div className="front" style={{backgroundImage: 
                                    `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), 
                                    url(${coverImage || BackgroundImg})`}}
                                    >
                                    <div className="inner">
                                        <p>{name}</p>
                                        <span>{translation}</span>
                                    </div>
                                </div>
                                <div className="back">
                                    <div className="inner">
                                        <p>{description}</p>
                                        <button type="button" className="open-button" onClick={() => openModal(id)}>
                                            <BookIcon className="icon" width={24} height={24}/>
                                            {t("portfolio.seeMore")}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </PortfolioStyled>
    )
};