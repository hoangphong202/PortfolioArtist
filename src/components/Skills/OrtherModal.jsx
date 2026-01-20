import React from "react";
import { MdClose } from "react-icons/md";
import { FaEllipsisH } from "react-icons/fa";
import styles from "./OrtherModal.module.css";

import w from "../../assets/logo/Office/w.png";
import e from "../../assets/logo/Office/e.png";
import p from "../../assets/logo/Office/p.png";

import vn from "../../assets/logo/country/VN.png";
import en from "../../assets/logo/country/EN.png";
import jp from "../../assets/logo/country/JP.png";

import { useTranslation } from "react-i18next";

function OrtherModal({ isOpen, onClose }) {
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
              <FaEllipsisH className={styles.techIcon} />
              <h2>{t("skills.items.others.title")}</h2>
            </div>
          </div>
        </div>

        <hr className={styles.modalDivider} />

        {/* Office Tools */}
        <div className={styles.techSection}>
          <h3>{t("skills.items.others.detail.office.title")}</h3>
          <div className={styles.iconGrid}>
            <div>
              <img src={w} alt="Word" className={styles.imgLogo} />
              <p>{t("skills.items.others.detail.office.word")}</p>
            </div>
            <div>
              <img src={e} alt="Excel" className={styles.imgLogo} />
              <p>{t("skills.items.others.detail.office.excel")}</p>
            </div>
            <div>
              <img src={p} alt="PowerPoint" className={styles.imgLogo} />
              <p>{t("skills.items.others.detail.office.powerpoint")}</p>
            </div>
          </div>
        </div>

        {/* Languages */}
        <div className={styles.techSection}>
          <h3>{t("skills.items.others.detail.languages.title")}</h3>
          <div className={styles.iconGrid}>
            <div>
              <img src={vn} alt="Vietnamese" className={styles.imgLogo} />
              <p>{t("skills.items.others.detail.languages.vi")}</p>
            </div>
            <div>
              <img src={en} alt="English" className={styles.imgLogo} />
              <p>{t("skills.items.others.detail.languages.en")}</p>
            </div>
            <div>
              <img src={jp} alt="Japanese" className={styles.imgLogo} />
              <p>{t("skills.items.others.detail.languages.jp")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrtherModal;
