import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import styles from "./Layout.module.css";

function Layout() {
  const { t, i18n } = useTranslation();
  const [activeSection, setActiveSection] = useState("home");
  const scrollTimeoutRef = useRef(null);

  const changeLang = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang);
  };

  const handleScroll = () => {
    const sections = ["home", "about", "skills", "projects", "contact"];
    const viewportMid = window.innerHeight / 2;

    for (const sectionId of sections) {
      const element = document.getElementById(sectionId);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= viewportMid && rect.bottom >= viewportMid) {
          setActiveSection(sectionId);
          break;
        }
      }
    }
  };

  useEffect(() => {
    const onScroll = () => {
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
      scrollTimeoutRef.current = setTimeout(handleScroll, 100);
    };

    window.addEventListener("scroll", onScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      clearTimeout(scrollTimeoutRef.current);
    };
  }, []);

  const handleClick = (sectionId, e) => {
    e.preventDefault();
    setActiveSection(sectionId);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={styles.main_container}>
      <header className={styles.container}>
        <h1 className={styles.logo}>HOANGTRUNGPHONG</h1>

        <nav className={styles.navLinks}>
          {["home", "about", "skills", "projects", "contact"].map((section) => (
            <a key={section} href={`#${section}`} onClick={(e) => handleClick(section, e)} className={`${styles.link} ${activeSection === section ? styles.active : ""}`}>
              {t(`nav.${section}`)}
            </a>
          ))}
        </nav>

        <div className={styles.langSwitch}>
          <button className={i18n.language === "vi" ? styles.activeLang : ""} onClick={() => changeLang("vi")}>
            VI
          </button>
          <button className={i18n.language === "en" ? styles.activeLang : ""} onClick={() => changeLang("en")}>
            EN
          </button>
        </div>
      </header>
    </div>
  );
}

export default Layout;
