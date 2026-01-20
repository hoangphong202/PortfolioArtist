import React from "react";
import { MdClose } from "react-icons/md";
import { FaPalette } from "react-icons/fa";
import styles from "./DrawModal.module.css";

import csp from "../../assets/logo/draw/csp.png";
import pts from "../../assets/logo/draw/pts.png";
import mp from "../../assets/logo/draw/mp.png";
import ib from "../../assets/logo/draw/ib.png";
import l2d from "../../assets/logo/draw/l2D.png";
import ae from "../../assets/logo/design/AE.png";
import spine from "../../assets/logo/design/spine.png";

import { useTranslation } from "react-i18next";

function DrawModal({ isOpen, onClose }) {
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
              <FaPalette className={styles.techIcon} />
              <h2>{t("skills.items.drawing.title")}</h2>
            </div>
          </div>
        </div>

        <hr className={styles.modalDivider} />

        {/* Drawing Apps */}
        <div className={styles.techSection}>
          <h3>{t("skills.items.drawing.detail.drawing.title")}</h3>
          <div className={styles.iconGrid}>
            <div>
              <img src={csp} alt="Clip Studio Paint" className={styles.imgLogo} />
              <p>{t("skills.items.drawing.detail.drawing.csp")}</p>
            </div>
            <div>
              <img src={pts} alt="Photoshop" className={styles.imgLogo} />
              <p>{t("skills.items.drawing.detail.drawing.photoshop")}</p>
            </div>
            <div>
              <img src={mp} alt="MediBang Paint" className={styles.imgLogo} />
              <p>{t("skills.items.drawing.detail.drawing.medibang")}</p>
            </div>
            <div>
              <img src={ib} alt="ibisPaint" className={styles.imgLogo} />
              <p>{t("skills.items.drawing.detail.drawing.ibis")}</p>
            </div>
          </div>
        </div>

        {/* Animation / Motion */}
        <div className={styles.techSection}>
          <h3>{t("skills.items.drawing.detail.animation.title")}</h3>
          <div className={styles.iconGrid}>
            <div>
              <img src={l2d} alt="Live2D" className={styles.imgLogo} />
              <p>{t("skills.items.drawing.detail.animation.live2d")}</p>
            </div>
            <div>
              <img src={spine} alt="Spine" className={styles.imgLogo} />
              <p>{t("skills.items.drawing.detail.animation.spine")}</p>
            </div>
            <div>
              <img src={ae} alt="After Effects" className={styles.imgLogo} />
              <p>{t("skills.items.drawing.detail.animation.aftereffects")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DrawModal;
