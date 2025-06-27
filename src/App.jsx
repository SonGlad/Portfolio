import Facebook1 from "./tracking/Facebook1";
import Facebook2 from "./tracking/Facebook2";
import { useState, useEffect} from "react";
import { useTranslation } from 'react-i18next';
import { Header } from "./components/Header/Header";
import { HeroSection, AboutSection, StackSectionS, PortfolioSectionS, ContactSection } from "./components/Section/Section";
import { Container } from "./components/Container/Container";
import { CanvasComponent } from "./components/Canvas/Canvas";
import { Backdrop } from "./components/Backdrop/Backdrop";
import { useWindowSize } from "./custom-hooks/hooks";
import { AboutUsSection } from "./components/AboutSection/About";
import { StackSection } from "./components/StackSection/StackSection";
import { PortfolioSection } from "./components/PortfolioSection/Portfolio";
import { Modal } from "./components/Modal/Modal";
import { Contacts } from "./components/ContactSection/Contacts";
import { FormLoading } from "./components/CustomLoaders/CustomLoaders";
import { Footer } from "./components/Footer/Footer";


export const App= () => {
  const { i18n } = useTranslation();
  const savedLang = localStorage.getItem('language');
  const initialLang = savedLang || i18n.language.split('-')[0].toUpperCase();
  const [langValue, setLangValue] = useState(initialLang);
  const [langToShow, setLangToShow] = useState(initialLang);
  const { renderPC } = useWindowSize();
  const [portfolioModalData, setPortfolioModalData] = useState(null);
  const [isPortfolioModal, setPortfolioModal] = useState(false);
  const [isContactModal, setContactModal] = useState(false);
  const [isSuccess, setSuccess] = useState(true);
  const [isLoading, setIsLoading] = useState(false);


  const langArray = [
    {'lang': 'EN'},
    {'lang': 'RU'},
    {'lang': 'UA'},
  ];


  useEffect(() => {
    switch(langValue){
      case "EN":
        document.documentElement.lang = 'en'
        break;
      case "UA":
        document.documentElement.lang = 'uk'
        break;
      case "RU":
        document.documentElement.lang = 'ru'
        break;
      default:
        document.documentElement.lang = 'en'
    }
  },[langValue])
  

  useEffect(() => {
    localStorage.setItem('language', langValue);
    i18n.changeLanguage(langValue.toLowerCase());
  },[i18n, langValue]);


  useEffect(() => {
    const languageCode = langValue.split('-')[0];
    setLangToShow(languageCode);
  },[langValue]);


  const openPortfolioModal = () => {
    if (isContactModal) {
      setContactModal(false);
    }
    setPortfolioModal(true);
  };
  
  const closePortfolioModal = () => {
    setPortfolioModal(false);
  };
  

  const openContactModal = () => {
    if (isPortfolioModal) {
      setPortfolioModal(false);
    }
    setContactModal(true);
  };

  const closeContactModal = () => {
    setContactModal(false);
  };


  useEffect(() => {
    if (isPortfolioModal || isContactModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isPortfolioModal, isContactModal]);

  

  return (
    <>
      {/* <Facebook1/> */}
      {isContactModal && <Facebook2/>}
      {isLoading && <FormLoading/>}
      <Backdrop/>
      <Header
        langArray={langArray}
        setLangValue={setLangValue}
        langToShow={langToShow}
        />
      <main stlyle={{position: "relative"}}>

        <CanvasComponent langToShow={langToShow} propsId={'Canvas'}/>

        {renderPC && 
          <HeroSection propsId={'HeroSection'}>
            <Container>
            </Container>
          </HeroSection>
        }

        <AboutSection propsId={'AboutSection'}>
          <Container>
            <AboutUsSection/>
          </Container>
        </AboutSection>

        <StackSectionS propsId={'StackSection'}>
          <Container>
            <StackSection/>
          </Container>
        </StackSectionS>

        <PortfolioSectionS propsId={'PortfolioSection'}>
          <Container>
            <PortfolioSection
              openPortfolioModal={openPortfolioModal}
              setPortfolioModalData={setPortfolioModalData}
            />
          </Container>
        </PortfolioSectionS>

        <ContactSection propsId={'ContactSection'}>
          <Container>
            <Contacts
              openContactModal={openContactModal}
              setSuccess={setSuccess}
              setIsLoading={setIsLoading}
            />
          </Container>
        </ContactSection>
      </main>
      <Footer/>

      {(isPortfolioModal || isContactModal) && 
        <Modal
          isPortfolioModal={isPortfolioModal}
          isContactModal={isContactModal}
          closePortfolioModal={closePortfolioModal}
          closeContactModal={closeContactModal}
          portfolioModalData={portfolioModalData}
          isSuccess={isSuccess}
        />
      }
    </>
  );
};


