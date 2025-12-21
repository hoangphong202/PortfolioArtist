import React from "react";
import { ReactTyped } from "react-typed";
import styles from "./Main.module.css";
import Btn from "../Button/Btn";
import Loader from "./Loader.jsx";
import { useTranslation } from "react-i18next";

function Main() {
  const { t } = useTranslation();

  return (
    <div id="home" className={styles.main_container}>
      <div className={styles.container}>
        <p className={styles.hello}>
          {t("main.hello")} <span>Hoang Trung Phong</span>
        </p>

        <h2 className={styles.title}>
          {t("main.im")}{" "}
          <span>
            <ReactTyped strings={t("main.roles", { returnObjects: true })} typeSpeed={100} backSpeed={60} backDelay={1500} loop />
          </span>
        </h2>

        <p className={styles.description}>{t("main.desc1")}</p>

        <p className={styles.description}>{t("main.desc2")}</p>

        <div className={styles.btn_container}>
          <Btn onClick={() => window.open("https://drive.google.com/file/d/1kkaaRBwSVevlXdZDWZ1ChIv68qbiKGjQ/view", "_blank")}>{t("main.viewCV")}</Btn>
        </div>
      </div>

      <Loader />
    </div>
  );
}

export default Main;
