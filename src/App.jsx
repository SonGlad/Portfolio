import Facebook1 from "./tracking/Facebook1";
import Facebook2 from "./tracking/Facebook2";
import { useWindowSize }from "./custom-hooks/hooks";
import { useState, useEffect} from "react";
import { ParticlesComponent }from "./components/particles/particles";
import { useTranslation } from 'react-i18next';
import { Header } from "./components/Header/Header";
import { HeroSection, AboutSection, StackSectionS, PortfolioSectionS, ContactSection } from "./components/Section/Section";
import { Container } from "./components/Container/Container";
import { CanvasComponent } from "./components/Canvas/Canvas";


export const App= () => {
  const { renderPC } = useWindowSize();
  const { i18n } = useTranslation();
  const savedLang = localStorage.getItem('language');
  const initialLang = savedLang || i18n.language.split('-')[0].toUpperCase();
  const [langValue, setLangValue] = useState(initialLang);
  const [langToShow, setLangToShow] = useState(initialLang);


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
      case "RO":
        document.documentElement.lang = 'ro'
        break;
      case "UA":
        document.documentElement.lang = 'uk'
        break;
      case "RU":
        document.documentElement.lang = 'ru'
        break;
      default:
        document.documentElement.lang = 'ro'
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


  

  return (
    <>
      {/* <Facebook1/> */}
      {/* {isContactModal && <Facebook2/>} */}
      {/* {isLoading && <FormLoading/>} */}
      {renderPC && <ParticlesComponent id='particles'/>}
      <Header
        langArray={langArray}
        setLangValue={setLangValue}
        langToShow={langToShow}
      />
      <CanvasComponent/>
      <HeroSection propsId={'HeroSection'}>
        <Container>

        </Container>
      </HeroSection>
      <AboutSection propsId={'AboutSection'}>
        <Container>
          
        </Container>
      </AboutSection>
      <StackSectionS propsId={'StackSection'}>
        <Container>
          
        </Container>
      </StackSectionS>
      <PortfolioSectionS propsId={'PortfolioSection'}>
        <Container>
          
        </Container>
      </PortfolioSectionS>
      <ContactSection propsId={'ContactSection'}>
        <Container>

        </Container>
      </ContactSection>
    </>
  );
};


