import React, { useState } from "react";

import HeaderContext from "./HeaderContext";
import MainContext from "./MainContext";
import FooterContext from "./FooterContext";
import { ThemeProvider } from "../context/ThemeContext";
import { LanguageProvider } from "../context/LanguageContext";

const MyPageContext = () => {
  const [auth, setAuth] = useState(null);

  const handleAuth = (e) => {
    if (auth) {
      setAuth(null);
    } else {
      setAuth(true);
    }
  };
  return (
    <div className="myPage">
      <LanguageProvider>
        <ThemeProvider>
          <HeaderContext auth={auth} handleAuth={handleAuth} />
          <MainContext auth={auth} />
          <FooterContext />
        </ThemeProvider>
      </LanguageProvider>
    </div>
  );
};

export default MyPageContext;
