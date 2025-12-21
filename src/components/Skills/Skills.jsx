import React, { useState } from "react";
import { FaCode, FaEllipsisH, FaPaintBrush, FaPalette } from "react-icons/fa";
import { MdDesignServices } from "react-icons/md";
import styles from "./Skills.module.css";
import TechnologyModal from "./TechnologyModal";
import OrtherModal from "./OrtherModal";
import DrawModal from "./DrawModal";
import DesignModal from "./DesignModal";
import UIDesignModal from "./UIDesignModal";
import { useTranslation } from "react-i18next";

function Skills() {
  const { t } = useTranslation();
  const [selectedSkill, setSelectedSkill] = useState(null);

  const skills = [
    {
      id: "drawing",
      icon: <FaPalette />,
    },
    {
      id: "uiux",
      icon: <MdDesignServices />,
    },
    {
      id: "graphic",
      icon: <FaPaintBrush />,
    },
    {
      id: "web",
      icon: <FaCode />,
    },
    {
      id: "others",
      icon: <FaEllipsisH />,
    },
  ];

  return (
    <section className={styles.skillsSection} id="skills">
      <h2 className={styles.skillsTitle}>{t("skills.title")}</h2>
      <p className={styles.subtitle}>{t("skills.subtitle")}</p>

      <div className={styles.skillsGrid}>
        {skills.map((skill) => (
          <div className={styles.skillCard} key={skill.id}>
            <div className={styles.skillIcon}>{skill.icon}</div>

            <h3 className={styles.skillName}>{t(`skills.items.${skill.id}.title`)}</h3>

            <p className={styles.skillDescription}>{t(`skills.items.${skill.id}.description`)}</p>

            <button className={styles.viewBtn} onClick={() => setSelectedSkill(skill.id)}>
              {t("skills.view")}
            </button>
          </div>
        ))}
      </div>

      {selectedSkill === "drawing" && <DrawModal isOpen onClose={() => setSelectedSkill(null)} />}
      {selectedSkill === "uiux" && <UIDesignModal isOpen onClose={() => setSelectedSkill(null)} />}
      {selectedSkill === "graphic" && <DesignModal isOpen onClose={() => setSelectedSkill(null)} />}
      {selectedSkill === "web" && <TechnologyModal isOpen onClose={() => setSelectedSkill(null)} />}
      {selectedSkill === "others" && <OrtherModal isOpen onClose={() => setSelectedSkill(null)} />}
    </section>
  );
}

export default Skills;
