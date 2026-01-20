import React from "react";
import { MdClose } from "react-icons/md";
import { FaPaintBrush } from "react-icons/fa";
import styles from "./DesignModal.module.css";

import csp from "../../assets/logo/draw/csp.png";
import pts from "../../assets/logo/draw/pts.png";
import pa from "../../assets/logo/design/Pa.png";
import fm from "../../assets/logo/design/fm.png";
import cv from "../../assets/logo/design/Cv.png";
import am from "../../assets/logo/design/am.png";
import av from "../../assets/logo/design/av.png";
import ae from "../../assets/logo/design/AE.png";
import c from "../../assets/logo/design/c.png";

import { useTranslation } from "react-i18next";

function DesignModal({ isOpen, onClose }) {
  const { t } = useTranslation();
  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.techModal} onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className={styles.modalHeaderAll}>
          <MdClose className={styles.closeBtn} onClick={onClose} />

          <div className={styles.modalHeader}>
            <div className={styles.techTitle}>
              <FaPaintBrush className={styles.techIcon} />
              <h2>{t("skills.items.graphic.title")}</h2>
            </div>
          </div>
        </div>

        <hr className={styles.modalDivider} />

        {/* Design Apps */}
        <div className={styles.techSection}>
          <h3>{t("skills.items.graphic.detail.design.title")}</h3>
          <div className={styles.iconGrid}>
            <div>
              <img src={fm} alt="Figma" className={styles.imgLogo} />
              <p>{t("skills.items.graphic.detail.design.figma")}</p>
            </div>
            <div>
              <img src={cv} alt="Canva" className={styles.imgLogo} />
              <p>{t("skills.items.graphic.detail.design.canva")}</p>
            </div>
            <div>
              <img src={pa} alt="PicsArt" className={styles.imgLogo} />
              <p>{t("skills.items.graphic.detail.design.picsart")}</p>
            </div>
            <div>
              <img src={csp} alt="Clip Studio Paint" className={styles.imgLogo} />
              <p>{t("skills.items.graphic.detail.design.csp")}</p>
            </div>
            <div>
              <img src={pts} alt="Photoshop" className={styles.imgLogo} />
              <p>{t("skills.items.graphic.detail.design.photoshop")}</p>
            </div>
          </div>
        </div>

        {/* Motion & Audio */}
        <div className={styles.techSection}>
          <h3>{t("skills.items.graphic.detail.motion.title")}</h3>
          <div className={styles.iconGrid}>
            <div>
              <img src={av} alt="Avee Player" className={styles.imgLogo} />
              <p>{t("skills.items.graphic.detail.motion.avee")}</p>
            </div>
            <div>
              <img src={am} alt="Alight Motion" className={styles.imgLogo} />
              <p>{t("skills.items.graphic.detail.motion.alight")}</p>
            </div>
            <div>
              <img src={c} alt="CapCut" className={styles.imgLogo} />
              <p>{t("skills.items.graphic.detail.motion.capcut")}</p>
            </div>
            <div>
              <img src={ae} alt="After Effects" className={styles.imgLogo} />
              <p>{t("skills.items.graphic.detail.motion.aftereffects")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DesignModal;
