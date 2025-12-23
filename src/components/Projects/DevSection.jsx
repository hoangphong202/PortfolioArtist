import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import DevModal from "./DevModal";
import styles from "./DevSection.module.css";

import wc1 from "../../assets/projects/weatherchill/1.png";
import wc2 from "../../assets/projects/weatherchill/2.png";
import wc3 from "../../assets/projects/weatherchill/3.png";
import wc4 from "../../assets/projects/weatherchill/4.png";
import wc5 from "../../assets/projects/weatherchill/5.png";
import wc6 from "../../assets/projects/weatherchill/6.png";
import wc7 from "../../assets/projects/weatherchill/7.png";

import nihon1 from "../../assets/projects/nihongo/1.jpg";
import nihon2 from "../../assets/projects/nihongo/2.jpg";
import nihon3 from "../../assets/projects/nihongo/3.jpg";
import nihon4 from "../../assets/projects/nihongo/4.jpg";
import nihon5 from "../../assets/projects/nihongo/5.jpg";

import shop1 from "../../assets/projects/shopanime/1.jpg";
import shop2 from "../../assets/projects/shopanime/2.jpg";

import p1 from "../../assets/projects/portfolio/1p.png";

const DevSection = () => {
  const { t } = useTranslation();
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "WeatherChill",
      descKey: "dev.projects.weatherchill.desc",
      tags: ["HTML", "CSS", "JS", "Java"],
      images: [wc2, wc1, wc6, wc3, wc4, wc5, wc7],
      githubBE: "https://github.com/hoangphong202/WeatherChill",
    },
    {
      title: "Nihongo Learning",
      descKey: "dev.projects.nihongo.desc",
      tags: ["HTML", "CSS", "ReactJS", "Java"],
      images: [nihon1, nihon2, nihon3, nihon4, nihon5],
      githubFE: "https://github.com/hoangphong202/japan_fe",
      githubBE: "https://github.com/hoangphong202/japan_be",
    },
    {
      title: "Shop Anime",
      descKey: "dev.projects.shopanime.desc",
      tags: ["HTML", "CSS", "ReactJS", "Java"],
      images: [shop1, shop2],
      githubFE: "https://github.com/hoangphong202/ShopAnimeFE",
      githubBE: "https://github.com/hoangphong202/ShopAnime",
    },
    {
      title: "Portfolio",
      descKey: "dev.projects.portfolio.desc",
      tags: ["HTML", "CSS", "ReactJS"],
      images: [p1],
      githubFE: "https://github.com/hoangphong202/PortfolioArtist",
      link: "https://hoangphong202.github.io/PortfolioArtist/",
    },
  ];

  return (
    <div className={styles.devContainer}>
      {projects.map((p, i) => (
        <div key={i} className={styles.card} onClick={() => setSelectedProject(p)}>
          <div className={styles.imageWrapper}>
            <img src={p.images[0]} alt={p.title} className={styles.image} />
          </div>

          <div className={styles.cardContent}>
            <h3 className={styles.cardTitle}>{p.title}</h3>
            <p className={styles.cardDesc}>{t(p.descKey)}</p>

            <div className={styles.tagRow}>
              {p.tags.map((tag, idx) => (
                <span key={idx} className={styles.tag}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}

      {selectedProject && <DevModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
    </div>
  );
};

export default DevSection;
