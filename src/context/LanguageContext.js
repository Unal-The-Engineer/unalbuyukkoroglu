import React, { createContext, useState, useContext } from "react";

// Dil context'ini oluştur
const LanguageContext = createContext();

// Dil sağlayıcı bileşeni
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en"); // Varsayılan dil İngilizce

  // Dili değiştirme fonksiyonu
  const toggleLanguage = () => {
    setLanguage(language === "en" ? "tr" : "en");
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Dil hook'u
export const useLanguage = () => useContext(LanguageContext); 