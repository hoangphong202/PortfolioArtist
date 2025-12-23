import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import styles from "./Activities.module.css";
import ArtModal from "./ArtModal";

import art1 from "../../assets/activities/1.png";
import art2 from "../../assets/activities/2.png";

/* ===== DATA (KEY ONLY) ===== */
const activities = [
  {
    key: "isshou",
    images: null,
  },
  {
    key: "ardenlolo",
    images: [art1, art2],
  },
  {
    key: "artstreet",
    images: null,
  },
  {
    key: "wallnewspaper",
    images: null,
  },
];

/* ===== COMPONENT ===== */
const Activities = () => {
  const { t } = useTranslation();
  const [openModal, setOpenModal] = useState(false);
  const [modalImages, setModalImages] = useState([]);

  return (
    <section className={styles.activities} id="activities">
      <h2 className={styles.title}>{t("activities.title")}</h2>
      <p className={styles.activitiesDescription}>{t(`activities.description`)}</p>

      <div className={styles.grid}>
        {activities.map((item, index) => {
          const data = t(`activities.items.${item.key}`, {
            returnObjects: true,
          });

          return (
            <div className={styles.card} key={index}>
              <h3>{data.title}</h3>
              <p className={styles.role}>{data.role}</p>

              <ul>
                {data.description.map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
              </ul>

              <div className={styles.tags}>
                {data.tags.map((tag, i) => (
                  <span key={i}>{tag}</span>
                ))}
              </div>

              {item.images && (
                <button
                  className={styles.viewBtn}
                  onClick={() => {
                    setModalImages(item.images);
                    setOpenModal(true);
                  }}
                >
                  {t("activities.view")}
                </button>
              )}
            </div>
          );
        })}
      </div>

      <ArtModal isOpen={openModal} images={modalImages} onClose={() => setOpenModal(false)} />
    </section>
  );
};

export default Activities;
