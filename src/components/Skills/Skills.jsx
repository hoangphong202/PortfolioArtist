import React, { useState } from "react";
import { FaCode, FaEllipsisH, FaPaintBrush, FaPalette } from "react-icons/fa";
import { MdDesignServices } from "react-icons/md";
import styles from "./Skills.module.css";
import TechnologyModal from "./TechnologyModal";
import OrtherModal from "./OrtherModal";
import DrawModal from "./DrawModal";
import DesignModal from "./DesignModal";
import UIDesignModal from "./UIDesignModal";

Skills.propTypes = {};

function Skills(props) {
  const [selectedSkill, setSelectedSkill] = useState(null);

  const skills = [
    {
      icon: <FaPalette />,
      title: "Drawing / Illustration",
      description:
        "I enjoy drawing anime characters and backgrounds, focusing on color harmony and mood. This hobby strengthens my creativity and visual sense, which supports my design and front-end work.",
    },

    {
      icon: <MdDesignServices />,
      title: "UI/UX Design",
      description:
        "With both design sense and coding skills, I can transform UI/UX ideas into interactive, responsive web interfaces. I focus on building designs that are visually appealing, accessible, and consistent across devices.",
    },
    {
      icon: <FaPaintBrush />,
      title: "Graphic Design",
      description: "I have experience designing posters and visual content for clubs and events. I focus on creating clean, aesthetic designs that clearly convey messages and enhance visual appeal.",
    },
    {
      icon: <FaCode />,
      title: "Web Developer",
      description:
        "I'm capable of developing complete web applications on both Front-end and Back-end. My main technologies include ReactJS, Node.js, and Java, which allow me to build efficient and scalable systems with clean and user-friendly interfaces.",
    },
    {
      icon: <FaEllipsisH />,
      title: "OTHERS",
      description:
        "Good at teamwork, communication, and time management. Skilled in problem-solving and adapting to new technologies. Familiar with Figma, Photoshop, Illustrator. Japanese level: equivalent JLPT N3.",
    },
  ];

  return (
    <section className={styles.skillsSection} id="skills">
      <h2 className={styles.skillsTitle}>SKILLS</h2>
      <p className={styles.subtitle}>A showcase of my technical and creative abilities</p>
      <div className={styles.skillsGrid}>
        {skills.map((skill, index) => (
          <div className={styles.skillCard} key={index}>
            <div className={styles.skillIcon}>{skill.icon}</div>
            <h3 className={styles.skillName}>{skill.title}</h3>
            <p className={styles.skillDescription}>{skill.description}</p>
            <button className={styles.viewBtn} onClick={() => setSelectedSkill(skill.title)}>
              View
            </button>
          </div>
        ))}
      </div>
      {selectedSkill === "Drawing / Illustration" && <DrawModal isOpen onClose={() => setSelectedSkill(null)} />}
      {selectedSkill === "UI/UX Design" && <UIDesignModal isOpen onClose={() => setSelectedSkill(null)} />}
      {selectedSkill === "Graphic Design" && <DesignModal isOpen onClose={() => setSelectedSkill(null)} />}
      {selectedSkill === "Web Developer" && <TechnologyModal isOpen onClose={() => setSelectedSkill(null)} />}
      {selectedSkill === "OTHERS" && <OrtherModal isOpen onClose={() => setSelectedSkill(null)} />}
    </section>
  );
}

export default Skills;
