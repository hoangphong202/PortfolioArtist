import React, { useState } from "react";
import { Code, Palette, Image } from "lucide-react";
import { useTranslation } from "react-i18next";

import DevSection from "./DevSection";
import IllustrationSection from "./IllustrationSection";
import DesignSection from "./DesignSection";

import styles from "./ProjectsPage.module.css";

const ProjectPage = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState("illustration");

  return (
    <div className={styles.projectPage} id="projects">
      <div className={styles.header}>
        <h1 className={styles.title}>{t("projects.title")}</h1>
        <p className={styles.subtitle}>{t("projects.subtitle")}</p>

        <div className={styles.tabContainer}>
          <button onClick={() => setActiveTab("illustration")} className={`${styles.tab} ${activeTab === "illustration" ? styles.active : ""}`}>
            <Image size={20} />
            <span>{t("projects.tabs.illustration")}</span>
          </button>

          <button onClick={() => setActiveTab("design")} className={`${styles.tab} ${activeTab === "design" ? styles.active : ""}`}>
            <Palette size={20} />
            <span>{t("projects.tabs.design")}</span>
          </button>

          <button onClick={() => setActiveTab("dev")} className={`${styles.tab} ${activeTab === "dev" ? styles.active : ""}`}>
            <Code size={20} />
            <span>{t("projects.tabs.dev")}</span>
          </button>
        </div>
      </div>

      <div className={styles.sectionContainer}>
        {activeTab === "illustration" && <IllustrationSection />}
        {activeTab === "design" && <DesignSection />}
        {activeTab === "dev" && <DevSection />}
      </div>
    </div>
  );
};

export default ProjectPage;
