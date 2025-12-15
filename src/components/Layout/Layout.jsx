import React, { useState, useEffect, useRef } from "react";
import styles from "./Layout.module.css";

function Layout() {
  // State to track the currently active section
  const [activeSection, setActiveSection] = useState("home");
  const scrollTimeoutRef = useRef(null);

  // Function to handle scroll events
  const handleScroll = () => {
    const sections = ["home", "about", "skills", "projects", "contact"];
    const viewportMid = window.innerHeight / 2; // Middle of the viewport

    // Check which section is currently in view
    for (const sectionId of sections) {
      const element = document.getElementById(sectionId);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= viewportMid && rect.bottom >= viewportMid) {
          setActiveSection(sectionId); // Update active section
          break;
        }
      }
    }
  };

  useEffect(() => {
    // Debounce scroll handling to improve performance
    const onScroll = () => {
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
      scrollTimeoutRef.current = setTimeout(handleScroll, 100);
    };

    window.addEventListener("scroll", onScroll);
    handleScroll(); // Initial check on mount

    return () => {
      window.removeEventListener("scroll", onScroll);
      clearTimeout(scrollTimeoutRef.current);
    };
  }, []);

  // Function to handle navigation link clicks
  const handleClick = (sectionId, e) => {
    if (e && e.preventDefault) e.preventDefault();
    setActiveSection(sectionId); // Update active section
    const targetElement = document.getElementById(sectionId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" }); // Smooth scroll to section
    }
  };

  return (
    <div className={styles.main_container}>
      <header className={styles.container}>
        <h1 className={styles.logo}>HOANGTRUNGPHONG</h1>
        <nav className={styles.navLinks}>
          {["home", "about", "skills", "projects", "contact"].map((section) => (
            <a key={section} href={`#${section}`} onClick={(e) => handleClick(section, e)} className={`${styles.link} ${activeSection === section ? styles.active : ""}`}>
              {section.charAt(0).toUpperCase() + section.slice(1)} {/* Capitalize section name */}
            </a>
          ))}
        </nav>
      </header>
    </div>
  );
}

export default Layout;
