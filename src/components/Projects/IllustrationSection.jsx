import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import styles from "./IllustrationSection.module.css";
import { useTranslation } from "react-i18next";

// Character
import char1 from "../../assets/illustrations/character/1.png";
import char2 from "../../assets/illustrations/character/2.png";
import char3 from "../../assets/illustrations/character/3.png";
import char4 from "../../assets/illustrations/character/4.png";
import char5 from "../../assets/illustrations/character/5.png";
import char6 from "../../assets/illustrations/character/6.png";
import char7 from "../../assets/illustrations/character/7.png";
import char8 from "../../assets/illustrations/character/8.png";
import char9 from "../../assets/illustrations/character/9.png";
import char10 from "../../assets/illustrations/character/10.png";
import char11 from "../../assets/illustrations/character/11.png";
import char12 from "../../assets/illustrations/character/12.png";
import char13 from "../../assets/illustrations/character/13.png";
import char14 from "../../assets/illustrations/character/14.png";
import char15 from "../../assets/illustrations/character/15.png";

// Background
import bg1 from "../../assets/illustrations/background/1.png";
import bg2 from "../../assets/illustrations/background/2.png";
import bg3 from "../../assets/illustrations/background/3.png";
import bg4 from "../../assets/illustrations/background/4.png";
import bg5 from "../../assets/illustrations/background/5.png";
import bg6 from "../../assets/illustrations/background/6.png";
import bg7 from "../../assets/illustrations/background/7.png";
import bg8 from "../../assets/illustrations/background/8.png";
import bg9 from "../../assets/illustrations/background/9.png";
import bg10 from "../../assets/illustrations/background/10.png";
import bg11 from "../../assets/illustrations/background/11.jpg";
import bg12 from "../../assets/illustrations/background/12.jpg";
import bg13 from "../../assets/illustrations/background/13.png";
import bg14 from "../../assets/illustrations/background/14.png";

// Sketch / Line
import line1 from "../../assets/illustrations/line/1.png";
import line2 from "../../assets/illustrations/line/2.png";
import line3 from "../../assets/illustrations/line/3.png";
import line4 from "../../assets/illustrations/line/4.png";
import line5 from "../../assets/illustrations/line/5.png";
import line6 from "../../assets/illustrations/line/6.png";
import line7 from "../../assets/illustrations/line/7.png";
import line8 from "../../assets/illustrations/line/8.png";
import line9 from "../../assets/illustrations/line/9.png";
import line10 from "../../assets/illustrations/line/10.png";
import line11 from "../../assets/illustrations/line/11.png";
import line12 from "../../assets/illustrations/line/12.png";
import line13 from "../../assets/illustrations/line/13.png";
import line14 from "../../assets/illustrations/line/14.png";
import line15 from "../../assets/illustrations/line/15.png";
import line16 from "../../assets/illustrations/line/16.png";

const illustrations = [
  { src: char6, category: "character" },
  { src: char3, category: "character" },
  { src: char15, category: "character" },
  { src: char13, category: "character" },
  { src: char8, category: "character" },
  { src: char1, category: "character" },
  { src: char2, category: "character" },
  { src: char4, category: "character" },
  { src: char5, category: "character" },
  { src: char7, category: "character" },
  { src: char9, category: "character" },
  { src: char10, category: "character" },
  { src: char11, category: "character" },
  { src: char12, category: "character" },
  { src: char14, category: "character" },

  { src: bg1, category: "background" },
  { src: bg13, category: "background" },
  { src: bg14, category: "background" },
  { src: bg5, category: "background" },
  { src: bg11, category: "background" },
  { src: bg2, category: "background" },
  { src: bg12, category: "background" },
  { src: bg3, category: "background" },
  { src: bg4, category: "background" },
  { src: bg6, category: "background" },
  { src: bg7, category: "background" },
  { src: bg8, category: "background" },
  { src: bg9, category: "background" },
  { src: bg10, category: "background" },

  { src: line1, category: "sketch" },
  { src: line2, category: "sketch" },
  { src: line3, category: "sketch" },
  { src: line4, category: "sketch" },
  { src: line5, category: "sketch" },
  { src: line16, category: "sketch" },
  { src: line7, category: "sketch" },
  { src: line8, category: "sketch" },
  { src: line9, category: "sketch" },
  { src: line10, category: "sketch" },
  { src: line11, category: "sketch" },
  { src: line12, category: "sketch" },
  { src: line13, category: "sketch" },
  { src: line14, category: "sketch" },
  { src: line15, category: "sketch" },
];

const categoryKeys = ["all", "character", "background", "sketch"];

const IllustrationSection = () => {
  const { t } = useTranslation();
  const [startIndex, setStartIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [lightbox, setLightbox] = useState({ open: false, src: "" });
  const [allRandom, setAllRandom] = useState([]);

  const visibleCount = 3;

  useEffect(() => {
    setStartIndex(0);
    if (selectedCategory === "all") {
      setAllRandom([...illustrations].sort(() => Math.random() - 0.5));
    }
  }, [selectedCategory]);

  const filtered = selectedCategory === "all" ? allRandom : illustrations.filter((i) => i.category === selectedCategory);

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
            {t(`illustration.categories.${key}`)}
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
                <img src={item.src} alt={t("illustration.imageAlt")} className={styles.image} onClick={() => openLightbox(item.src)} />
                <span className={styles.tag}>{t(`illustration.categories.${item.category}`)}</span>
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
          <img src={lightbox.src} alt={t("illustration.fullView")} className={styles.lightboxImage} />
        </div>
      )}
    </div>
  );
};

export default IllustrationSection;
