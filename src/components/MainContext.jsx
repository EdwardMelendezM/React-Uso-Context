import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

const MainContext = ({ text, auth }) => {
  const { theme } = useContext(ThemeContext);
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
