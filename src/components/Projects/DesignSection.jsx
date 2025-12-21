import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import styles from "./DesignSection.module.css";

// Poster
import poster1 from "../../assets/design/poster/1.png";
import poster2 from "../../assets/design/poster/2.png";
import poster3 from "../../assets/design/poster/3.png";
import poster4 from "../../assets/design/poster/4.png";
import poster5 from "../../assets/design/poster/5.png";
import poster6 from "../../assets/design/poster/6.png";
import poster7 from "../../assets/design/poster/7.jpg";
import poster8 from "../../assets/design/poster/8.jpg";

// Vocabulary
import voc1 from "../../assets/design/vocabulary/1.png";
import voc2 from "../../assets/design/vocabulary/2.png";
import voc3 from "../../assets/design/vocabulary/3.png";
import voc4 from "../../assets/design/vocabulary/4.png";
import voc5 from "../../assets/design/vocabulary/5.png";
import voc6 from "../../assets/design/vocabulary/6.png";
import voc7 from "../../assets/design/vocabulary/7.png";
import voc8 from "../../assets/design/vocabulary/8.png";

const designs = [
  { src: poster1, category: "poster" },
  { src: poster2, category: "poster" },
  { src: poster7, category: "poster" },
  { src: poster8, category: "poster" },
  { src: poster3, category: "poster" },
  { src: poster4, category: "poster" },
  { src: poster5, category: "poster" },
  { src: poster6, category: "poster" },

  { src: voc1, category: "vocabulary" },
  { src: voc2, category: "vocabulary" },
  { src: voc3, category: "vocabulary" },
  { src: voc4, category: "vocabulary" },
  { src: voc5, category: "vocabulary" },
  { src: voc6, category: "vocabulary" },
  { src: voc7, category: "vocabulary" },
  { src: voc8, category: "vocabulary" },
];

const categoryKeys = ["all", "poster", "vocabulary"];

const DesignSection = () => {
  const { t } = useTranslation();
  const [startIndex, setStartIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [lightbox, setLightbox] = useState({ open: false, src: "" });
  const [allRandom, setAllRandom] = useState([]);

  const visibleCount = 4;

  useEffect(() => {
    setStartIndex(0);
    if (selectedCategory === "all") {
      setAllRandom([...designs].sort(() => Math.random() - 0.5));
    }
  }, [selectedCategory]);

  const filtered = selectedCategory === "all" ? allRandom : designs.filter((d) => d.category === selectedCategory);

  const next = () => {
    if (startIndex + visibleCount < filtered.length) setStartIndex(startIndex + 1);
  };

  const prev = () => {
    if (startIndex > 0) setStartIndex(startIndex - 1);
  };

  const openLightbox = (src) => setLightbox({ open: true, src });
  const closeLightbox = () => setLightbox({ open: false, src: "" });

  return (
    <div className={styles.wrapper}>
      {/* Filter */}
      <div className={styles.filterBar}>
        {categoryKeys.map((key) => (
          <button key={key} className={`${styles.filterBtn} ${selectedCategory === key ? styles.active : ""}`} onClick={() => setSelectedCategory(key)}>
            {t(`design.categories.${key}`)}
          </button>
        ))}
      </div>

      {/* Carousel */}
      <div className={styles.carousel}>
        <button className={styles.arrowLeft} onClick={prev} disabled={startIndex === 0}>
          <ChevronLeft size={26} />
        </button>

        <div className={styles.sliderContainer}>
          <div
            className={styles.slider}
            style={{
              transform: `translateX(-${startIndex * (100 / visibleCount)}%)`,
            }}
          >
            {filtered.map((item, i) => (
              <div className={styles.card} key={i}>
                <img src={item.src} alt={t("design.imageAlt")} className={styles.image} onClick={() => openLightbox(item.src)} />
                <span className={styles.tag}>{t(`design.categories.${item.category}`)}</span>
              </div>
            ))}
          </div>
        </div>

        <button className={styles.arrowRight} onClick={next} disabled={startIndex + visibleCount >= filtered.length}>
          <ChevronRight size={26} />
        </button>
      </div>

      {/* Lightbox */}
      {lightbox.open && (
        <div className={styles.lightbox} onClick={closeLightbox}>
          <img src={lightbox.src} alt={t("design.fullView")} className={styles.lightboxImage} />
        </div>
      )}
    </div>
  );
};

export default DesignSection;
