import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
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

const illustrations = [
  // Poster
  { src: poster1, category: "Poster" },
  { src: poster2, category: "Poster" },
  { src: poster7, category: "Poster" },
  { src: poster8, category: "Poster" },
  { src: poster3, category: "Poster" },
  { src: poster4, category: "Poster" },
  { src: poster5, category: "Poster" },
  { src: poster6, category: "Poster" },

  // Vocabulary
  { src: voc1, category: "Vocabulary" },
  { src: voc2, category: "Vocabulary" },
  { src: voc3, category: "Vocabulary" },
  { src: voc4, category: "Vocabulary" },
  { src: voc5, category: "Vocabulary" },
  { src: voc6, category: "Vocabulary" },
  { src: voc7, category: "Vocabulary" },
  { src: voc8, category: "Vocabulary" },
];

const categories = ["All", "Poster", "Vocabulary"];

const DesignSection = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [lightbox, setLightbox] = useState({ open: false, src: "" });
  const [allRandom, setAllRandom] = useState([]);

  const visibleCount = 4;

  React.useEffect(() => {
    setStartIndex(0); // reset slider
    if (selectedCategory === "All") {
      setAllRandom([...illustrations].sort(() => Math.random() - 0.5));
    }
  }, [selectedCategory]);

  const filtered = selectedCategory === "All" ? allRandom : illustrations.filter((i) => i.category === selectedCategory);

  const next = () => {
    if (startIndex + visibleCount < filtered.length) setStartIndex(startIndex + 1);
  };
  const prev = () => {
    if (startIndex > 0) setStartIndex(startIndex - 1);
  };

  React.useEffect(() => setStartIndex(0), [selectedCategory]);

  // Mở lightbox
  const openLightbox = (src) => setLightbox({ open: true, src });
  const closeLightbox = () => setLightbox({ open: false, src: "" });

  return (
    <div className={styles.wrapper}>
      {/* Bộ lọc thể loại */}
      <div className={styles.filterBar}>
        {categories.map((cat) => (
          <button key={cat} className={`${styles.filterBtn} ${selectedCategory === cat ? styles.active : ""}`} onClick={() => setSelectedCategory(cat)}>
            {cat}
          </button>
        ))}
      </div>

      {/* Slider */}
      <div className={styles.carousel}>
        <button className={styles.arrowLeft} onClick={prev} disabled={startIndex === 0}>
          <ChevronLeft size={26} />
        </button>

        <div className={styles.sliderContainer}>
          <div className={styles.slider} style={{ transform: `translateX(-${startIndex * (100 / visibleCount)}%)` }}>
            {filtered.map((item, i) => (
              <div className={styles.card} key={i}>
                <img
                  src={item.src}
                  alt={item.title}
                  className={styles.image}
                  onClick={() => openLightbox(item.src)} // click mở ảnh full
                />
                <p className={styles.title}>{item.title}</p>
                <span className={styles.tag}>{item.category}</span>
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
          <img src={lightbox.src} alt="Full view" className={styles.lightboxImage} />
        </div>
      )}
    </div>
  );
};

export default DesignSection;
