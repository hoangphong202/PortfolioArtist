import React from "react";
import { MdClose } from "react-icons/md";
import { FaPaintBrush } from "react-icons/fa";
import styles from "./GameModal.module.css";
import u from "../../assets/logo/game/unity.png";
import { useTranslation } from "react-i18next";

function GameModal({ isOpen, onClose }) {
  const { t } = useTranslation();
  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.techModal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalHeaderAll}>
          <MdClose className={styles.closeBtn} onClick={onClose} />
          <div className={styles.modalHeader}>
            <div className={styles.techTitle}>
              <FaPaintBrush className={styles.techIcon} />
              <h2>{t("skills.items.game.title")}</h2>
            </div>
          </div>
        </div>

        <hr className={styles.modalDivider} />

        <div className={styles.techSection}>
          <h3>{t("skills.items.game.tools")}</h3>
          <div className={styles.iconGrid}>
            <div>
              <img src={u} alt="Unity" loading="lazy" className={styles.imgLogo} />
              <p>Unity</p>
            </div>
          </div>
        </div>

        {/* <div className={styles.techSection}>
          <h3>Animation Tools</h3>
          <div className={styles.iconGrid}>
            <div>
              <img src={fm} alt="Live 2D" loading="lazy" className={styles.imgLogo} />
              <p>Figma</p>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default GameModal;
