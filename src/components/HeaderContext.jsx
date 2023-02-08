import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import LanguageContext from "../context/LanguageContext";
import AuthContext from "../context/AuthContext";

const HeaderContext = () => {
  const { theme, handleTheme } = useContext(ThemeContext);
  const { text, handleLanguage } = useContext(LanguageContext);
  const { auth, handleAuth } = useContext(AuthContext);
  return (
    <header className={theme}>
      <h2>{text.headerTitle}</h2>
      <h3>{text.headerSubtitle}</h3>
      <select name="languaje" onChange={handleLanguage}>
        <option value="es">ES</option>
        <option value="en">EN</option>
      </select>
      <input
        type="radio"
        name="theme"
        id="light"
        value="light"
        onClick={handleTheme}
      />
      <label htmlFor="light">{text.headerLight}</label>
      <input
        type="radio"
        name="theme"
        id="dark"
        value="dark"
        onClick={handleTheme}
      />
      <label htmlFor="dark">{text.headerDark}</label>
      <button onClick={handleAuth}>
        {auth ? text.bottonLogout : text.buttonLogin}
      </button>
    </header>
  );
};

export default HeaderContext;
