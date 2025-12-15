import React from "react";
import { MdClose } from "react-icons/md";
import { FaEllipsisH } from "react-icons/fa";
import styles from "./OrtherModal.module.css";
import w from "../../assets/logo/Office/w.png";
import e from "../../assets/logo/Office/e.png";
import p from "../../assets/logo/Office/p.png";
import vn from "../../assets/logo/country/VN.png";
import jp from "../../assets/logo/country/JP.png";
import en from "../../assets/logo/country/EN.png";

function OrtherModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.techModal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalHeaderAll}>
          <MdClose className={styles.closeBtn} onClick={onClose} />

          <div className={styles.modalHeader}>
            <div className={styles.techTitle}>
              <FaEllipsisH className={styles.techIcon} />
              <h2>Other Skills</h2>
            </div>
          </div>
        </div>

        <hr className={styles.modalDivider} />

        <div className={styles.techSection}>
          <h3>Office Tools</h3>
          <div className={styles.iconGrid}>
            <div>
              <img src={w} alt="word" loading="lazy" className={styles.imgLogo} />
              <p>Word</p>
            </div>
            <div>
              <img src={e} alt="excel" loading="lazy" className={styles.imgLogo} />
              <p>Excel</p>
            </div>
            <div>
              <img src={p} alt="powerpoint" loading="lazy" className={styles.imgLogo} />
              <p>Powerpoint</p>
            </div>
          </div>
        </div>

        <div className={styles.techSection}>
          <h3>Languages</h3>
          <div className={styles.iconGrid}>
            <div>
              <img src={vn} alt="Vietnamese" loading="lazy" className={styles.imgLogo} />
              <p>Vietnamese</p>
            </div>
            <div>
              <img src={en} alt="English" loading="lazy" className={styles.imgLogo} />
              <p>English</p>
            </div>
            <div>
              <img src={jp} alt="Japanese" loading="lazy" className={styles.imgLogo} />
              <p>Japanese</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrtherModal;
