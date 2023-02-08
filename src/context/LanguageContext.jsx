import { createContext, useState } from "react";

const LanguageContext = createContext();
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
const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(initialLanguage);
  const [text, setText] = useState(translations[language]);
  const handleLanguage = (e) => {
    if (e.target.value == "es") {
      setLanguage("es");
      setText(translations.es);
    } else {
      setLanguage("en");
      setText(translations.en);
    }
  };
  const data = { text, handleLanguage };

  return (
    <LanguageContext.Provider value={data}>{children}</LanguageContext.Provider>
  );
};

export default LanguageContext;
export { LanguageProvider };
