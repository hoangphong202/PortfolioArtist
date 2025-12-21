import React, { useState } from "react";
import { MdClose, MdChevronLeft, MdChevronRight } from "react-icons/md";
import { FaReact, FaServer } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import styles from "./DevModal.module.css";

const DevModal = ({ project, onClose }) => {
  const { t } = useTranslation();
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev === project.images.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev === 0 ? project.images.length - 1 : prev - 1));
  };

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose}>
          <MdClose size={24} />
        </button>

        {/* Image slider */}
        <div className={styles.imageSlider}>
          <button className={styles.arrow} onClick={prevImage}>
            <MdChevronLeft size={28} />
          </button>

          <img src={project.images[currentImage]} alt={`${project.title}-${currentImage}`} className={styles.sliderImage} />

          <button className={styles.arrow} onClick={nextImage}>
            <MdChevronRight size={28} />
          </button>
        </div>

        <h2>{project.title}</h2>

        {/* i18n description */}
        <p>{t(project.descKey)}</p>

        <div className={styles.tagRow}>
          {project.tags.map((tag, idx) => (
            <span key={idx} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>

        <div className={styles.links}>
          {project.link && (
            <a href={project.link} target="_blank" rel="noreferrer">
              🔗 {t("devMoal.modal.liveDemo")}
            </a>
          )}

          {project.githubFE && (
            <a href={project.githubFE} target="_blank" rel="noreferrer">
              <FaReact style={{ marginRight: 5 }} />
              {t("devMoal.modal.githubFE")}
            </a>
          )}

          {project.githubBE && (
            <a href={project.githubBE} target="_blank" rel="noreferrer">
              <FaServer style={{ marginRight: 5 }} />
              {t("devMoal.modal.githubBE")}
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default DevModal;
