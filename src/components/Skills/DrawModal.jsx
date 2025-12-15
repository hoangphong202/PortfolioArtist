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

function DrawModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.techModal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalHeaderAll}>
          <MdClose className={styles.closeBtn} onClick={onClose} />

          <div className={styles.modalHeader}>
            <div className={styles.techTitle}>
              <FaPalette className={styles.techIcon} />
              <h2>Drawing / Illustration</h2>
            </div>
          </div>
        </div>

        <hr className={styles.modalDivider} />

        <div className={styles.techSection}>
          <h3>Drawing Apps</h3>
          <div className={styles.iconGrid}>
            <div>
              <img src={csp} alt="Clip Studio Paint" loading="lazy" className={styles.imgLogo} />
              <p>Clip Studio Paint</p>
            </div>
            <div>
              <img src={pts} alt="Clip Studio Paint" loading="lazy" className={styles.imgLogo} />
              <p>Photoshop</p>
            </div>
            <div>
              <img src={mp} alt="Media paint" loading="lazy" className={styles.imgLogo} />
              <p>Media paint</p>
            </div>
            <div>
              <img src={ib} alt="ibisPaint" loading="lazy" className={styles.imgLogo} />
              <p>ibisPaint</p>
            </div>
          </div>
        </div>

        <div className={styles.techSection}>
          <h3>Animation / Motion Tools</h3>
          <div className={styles.iconGrid}>
            <div>
              <img src={l2d} alt="Live 2D" loading="lazy" className={styles.imgLogo} />
              <p>Live 2D</p>
            </div>

            <div>
              <img src={spine} alt="Spine" loading="lazy" className={styles.imgLogo} />
              <p>Spine</p>
            </div>
            <div>
              <img src={ae} alt="after effect" loading="lazy" className={styles.imgLogo} />
              <p>After effect</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DrawModal;
