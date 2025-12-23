import React, { useState } from "react";
import styles from "./Activities.module.css";

const ArtModal = ({ isOpen, onClose, images }) => {
  const [activeImage, setActiveImage] = useState(null);

  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose}>
          ×
        </button>

        {/* GRID IMAGE */}
        <div className={styles.imageGrid}>
          {images.map((img, index) => (
            <div key={index} className={styles.imageItem} onClick={() => setActiveImage(img)}>
              <img src={img} alt={`art-${index}`} />
            </div>
          ))}
        </div>

        {/* FULL VIEW */}
        {activeImage && (
          <div className={styles.fullOverlay} onClick={() => setActiveImage(null)}>
            <img src={activeImage} alt="full-view" />
          </div>
        )}
      </div>
    </div>
  );
};

export default ArtModal;
