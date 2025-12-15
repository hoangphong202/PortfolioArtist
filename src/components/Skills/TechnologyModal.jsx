import React from "react";
import { MdClose, MdSecurity } from "react-icons/md";
import { FaCode, FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap, FaDatabase, FaGit, FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { SiSpringboot, SiMysql, SiPostman, SiJsonwebtokens } from "react-icons/si";
import styles from "./TechnologyModal.module.css";
import { VscVscode } from "react-icons/vsc";
import jv from "../../assets/logo/code/jv.png";
import ij from "../../assets/logo/code/ij.png";

function TechnologyModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.techModal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalHeaderAll}>
          <MdClose className={styles.closeBtn} onClick={onClose} />

          <div className={styles.modalHeader}>
            <div className={styles.techTitle}>
              <FaCode className={styles.techIcon} />
              <h2>Technology</h2>
            </div>
          </div>
        </div>

        <hr className={styles.modalDivider} />

        <div className={styles.techSection}>
          <h3>Front-End</h3>
          <div className={styles.iconGrid}>
            <div>
              <FaHtml5 color="#E34C26" />
              <p>HTML</p>
            </div>
            <div>
              <FaCss3Alt color="#1572B6" />
              <p>CSS</p>
            </div>
            <div>
              <FaJs color="#F7DF1E" />
              <p>JavaScript</p>
            </div>
            <div>
              <FaReact color="#61DAFB" />
              <p>ReactJS</p>
            </div>
            <div>
              <FaBootstrap color="#7952B3" />
              <p>Bootstrap</p>
            </div>
          </div>
        </div>

        <div className={styles.techSection}>
          <h3>Back-End</h3>
          <div className={styles.iconGrid}>
            <div>
              <img src={jv} alt="java" loading="lazy" className={styles.imgLogo} />
              <p>Java</p>
            </div>
            <div>
              <SiSpringboot color="#6DB33F" />
              <p>Spring Boot</p>
            </div>
            <div>
              <FaExternalLinkAlt color="#00BFFF" />
              <p>Restful API</p>
            </div>
            <div>
              <SiJsonwebtokens color="#FF5722" /> {/* nếu có icon JWT */}
              <p>JWT</p>
            </div>
            <div>
              <MdSecurity color="#4CAF50" /> {/* hoặc icon bảo mật khác */}
              <p>Security</p>
            </div>
            <div>
              <SiMysql color="#00758F" />
              <p>MySQL</p>
            </div>
            <div>
              <FaDatabase color="#FFC107" />
              <p>SQL Server</p>
            </div>
          </div>
        </div>

        <div className={styles.techSection}>
          <h3>Tools</h3>
          <div className={styles.iconGrid}>
            <div>
              <SiPostman color="#FF6C37" />
              <p>Postman</p>
            </div>
            <div>
              <FaGit color="#F05032" />
              <p>Git</p>
            </div>
            <div>
              <FaGithub color="#fff" />
              <p>GitHub</p>
            </div>
            <div>
              <VscVscode color="#0091dfff" />
              <p>VSCode</p>
            </div>
            <div>
              <img src={ij} alt="intellij" loading="lazy" className={styles.imgLogo} />
              <p>IntelliJ</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TechnologyModal;
