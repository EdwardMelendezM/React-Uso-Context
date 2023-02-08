import React, { useState } from "react";

import HeaderContext from "./HeaderContext";
import MainContext from "./MainContext";
import FooterContext from "./FooterContext";
import { ThemeProvider } from "../context/ThemeContext";

const initialLanguage = "es";

const translations = {
  es: {
    headerTitle: "Mi aplicacion CON CONTEXT API",
    headerSubtitle: "Mi cabecera",
    headerLight: "Claro",
    headerDark: "Oscuro",
    buttonLogin: "Iniciar Sesion",
    bottonLogout: "Cerrar Sesion",
    mainWelcome: "Bienvenido usuario",
    mainHello: "Hola usuario",
    mainContent: "Mi contenido principal",
    footerTitle: "Mi pie de pagina",
  },
  en: {
    headerTitle: "My application with content api",
    headerSubtitle: "My header",
    headerLight: "Light",
    headerDark: "Dark",
    buttonLogin: "Login",
    bottonLogout: "Logout",
    mainWelcome: "Welcome",
    mainHello: "Hello user",
    mainContent: "My main content",
    footerTitle: "My footer",
  },
};
const MyPageContext = () => {
  const [language, setLanguage] = useState(initialLanguage);
  const [text, setText] = useState(translations[language]);
  const [auth, setAuth] = useState(null);

  const handleLanguage = (e) => {
    if (e.target.value == "es") {
      setLanguage("es");
      setText(translations.es);
    } else {
      setLanguage("en");
      setText(translations.en);
    }
  };
  const handleAuth = (e) => {
    if (auth) {
      setAuth(null);
    } else {
      setAuth(true);
    }
  };
  return (
    <div className="myPage">
      <ThemeProvider>
        <HeaderContext
          text={text}
          handleLanguage={handleLanguage}
          auth={auth}
          handleAuth={handleAuth}
        />
        <MainContext text={text} auth={auth} />
        <FooterContext text={text} />
      </ThemeProvider>
    </div>
  );
};

export default MyPageContext;
