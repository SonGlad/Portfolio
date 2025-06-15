import { StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './globalStyles/globaleStyles.styled.js';
import { theme } from './globalStyles/theme.js';
import { I18nextProvider } from 'react-i18next';
import i18n from "./i18n.js";
import { Loader } from './components/CustomLoaders/CustomLoaders.jsx';



const root = createRoot(document.getElementById('root'));



root.render(
  <StrictMode>
    <BrowserRouter basename='/'>
      <I18nextProvider i18n={i18n}>
        <Suspense fallback={<Loader/>}>
          <ThemeProvider theme={theme}>
            <GlobalStyle/>
            <App />
          </ThemeProvider>
        </Suspense>
      </I18nextProvider>
      </BrowserRouter>
  </StrictMode>,
)
