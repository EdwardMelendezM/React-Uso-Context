import React, { useState } from "react";

import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
const inititalTheme = "light";
const initialLanguage = "es";

const translations = {
  es: {
    headerTitle: "Mi aplicacion SIN CONTEXT API",
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
    headerTitle: "My application without content api",
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
const MyPage = () => {
  const [theme, setTheme] = useState(inititalTheme);
  const [language, setLanguage] = useState(initialLanguage);
  const [text, setText] = useState(translations[language]);
  const [auth, setAuth] = useState(null);

  const handleTheme = (e) => {
    console.log(e.target.value);
    if (e.target.value == "light") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };
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
      <Header
        theme={theme}
        handleTheme={handleTheme}
        text={text}
        handleLanguage={handleLanguage}
        auth={auth}
        handleAuth={handleAuth}
      />
      <Main theme={theme} text={text} auth={auth} />
      <Footer theme={theme} text={text} />
    </div>
  );
};

export default MyPage;
