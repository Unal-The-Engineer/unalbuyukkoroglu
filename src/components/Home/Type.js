import React from "react";
import Typewriter from "typewriter-effect";
import { useLanguage } from "../../context/LanguageContext";

function Type() {
  const { language } = useLanguage();

  const englishString = "AI Developer";
  const turkishString = "AI Geliştirici";

  return (
    <Typewriter
      options={{
        strings: [language === "en" ? englishString : turkishString],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
