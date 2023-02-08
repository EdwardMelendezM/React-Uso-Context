import React, { useState } from "react";

import HeaderContext from "./HeaderContext";
import MainContext from "./MainContext";
import FooterContext from "./FooterContext";
import { ThemeProvider } from "../context/ThemeContext";
import { LanguageProvider } from "../context/LanguageContext";
import { AuthProvider } from "../context/AuthContext";

const MyPageContext = () => {
  return (
    <div className="myPage">
      <LanguageProvider>
        <ThemeProvider>
          <AuthProvider>
            <HeaderContext />
            <MainContext />
          </AuthProvider>
          <FooterContext />
        </ThemeProvider>
      </LanguageProvider>
    </div>
  );
};

export default MyPageContext;
