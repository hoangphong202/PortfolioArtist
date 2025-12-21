import React from "react";
import styles from "./About.module.css";
import avatar from "../../assets/avatar.png";
import Btn from "../Button/Btn";
import { useTranslation } from "react-i18next";

function About() {
  const { t } = useTranslation();

  return (
    <section id="about" className={styles.about_section}>
      <h2 className={styles.title}>{t("about.title")}</h2>

      <div className={styles.container}>
        <div className={styles.image_wrapper}>
          <img src={avatar} alt="About" className={styles.image} />
        </div>

        <div className={styles.text_content}>
          <h3 className={styles.hello}>
            {t("about.hello")} <span>{t("about.name")}</span>
          </h3>

          <p>{t("about.p1")}</p>
          <p>{t("about.p2")}</p>
          <p>{t("about.p3")}</p>
          <p>{t("about.p4")}</p>

          <div className={styles.btn_group}>
            <Btn onClick={() => window.open("https://drive.google.com/file/d/1kkaaRBwSVevlXdZDWZ1ChIv68qbiKGjQ/view", "_blank")}>{t("about.viewCV")}</Btn>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
