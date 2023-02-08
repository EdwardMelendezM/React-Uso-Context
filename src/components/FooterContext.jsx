import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

const FooterContext = ({ text }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <footer className={theme}>
      <h4>{text.footerTitle}</h4>
    </footer>
  );
};

export default FooterContext;
