import { useContext } from "react";
import LanguageContext from "../context/LanguageContext";
import ThemeContext from "../context/ThemeContext";

const MainContext = ({ auth }) => {
  const { theme } = useContext(ThemeContext);
  const { text } = useContext(LanguageContext);
  return (
    <main className={theme}>
      {auth ? (
        <p>
          <p>{text.mainHello}</p>
        </p>
      ) : (
        <p>{text.mainWelcome}</p>
      )}
      <p></p>

      <p>{text.mainContent} </p>
    </main>
  );
};

export default MainContext;
