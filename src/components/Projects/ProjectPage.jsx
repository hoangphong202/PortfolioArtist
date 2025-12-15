import React, { useState } from "react";
import { Code, Palette, Image } from "lucide-react";
import DevSection from "./DevSection";

import styles from "./ProjectsPage.module.css";
import IllustrationSection from "./IllustrationSection";
import DesignSection from "./DesignSection";

const ProjectPage = () => {
  const [activeTab, setActiveTab] = useState("illustration");

  return (
    <div className={styles.projectPage} id="projects">
      <div className={styles.header}>
        <h1 className={styles.title}>PROJECTS</h1>
        <p className={styles.subtitle}>Explore my works and creative endeavors</p>

        <div className={styles.tabContainer}>
          <button onClick={() => setActiveTab("illustration")} className={`${styles.tab} ${activeTab === "illustration" ? styles.active : ""}`}>
            <Image size={20} />
            <span>Illustration</span>
          </button>

          <button onClick={() => setActiveTab("design")} className={`${styles.tab} ${activeTab === "design" ? styles.active : ""}`}>
            <Palette size={20} />
            <span>Design</span>
          </button>

          <button onClick={() => setActiveTab("dev")} className={`${styles.tab} ${activeTab === "dev" ? styles.active : ""}`}>
            <Code size={20} />
            <span>Web Projects</span>
          </button>
        </div>
      </div>

      <div className={styles.sectionContainer}>
        {activeTab === "dev" && <DevSection />}
        {activeTab === "design" && <DesignSection />}
        {activeTab === "illustration" && <IllustrationSection />}
      </div>
    </div>
  );
};

export default ProjectPage;
