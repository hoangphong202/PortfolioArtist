import React from "react";
import styles from "./About.module.css";
import avatar from "../../assets/avatar.png";
import { Mail, Phone, MapPin } from "lucide-react";
import { useTranslation, Trans } from "react-i18next";

function About() {
  const { t } = useTranslation();

  // LẤY DATA TỪ i18n
  const hardSkills = t("about.hardSkills", { returnObjects: true });
  const softSkills = t("about.softSkills", { returnObjects: true });

  return (
    <section id="about" className={styles.about_section}>
      <h2 className={styles.title}>{t("about.title")}</h2>

      <div className={styles.wrapper}>
        {/* LEFT */}
        <div className={styles.profile_card}>
          <div className={styles.image_container}>
            <img src={avatar} alt="Profile" className={styles.avatar} />
          </div>

          <div className={styles.profile_info}>
            <h2 className={styles.name}>{t("about.name")}</h2>
            <p className={styles.job_title}>2D Artist / Illustrator</p>

            <div className={styles.contact_list}>
              <div className={styles.contact_item}>
                <Mail size={16} color="#00ffcc" />
                <span>hoangtrungphongit202@gmail.com</span>
              </div>
              <div className={styles.contact_item}>
                <Phone size={16} color="#00ffcc" />
                <span>0356344088</span>
              </div>
              <div className={styles.contact_item}>
                <MapPin size={16} color="#00ffcc" />
                <span>TP. Hồ Chí Minh, VN</span>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className={styles.content_right}>
          <div className={styles.bio_text}>
            <p>
              <Trans i18nKey="about.p1" components={{ 1: <span className={styles.highlight} /> }} />
            </p>
            <p>
              <Trans i18nKey="about.p2" components={{ 1: <span className={styles.highlight} /> }} />
            </p>
            <p>
              <Trans i18nKey="about.p3" components={{ 1: <span className={styles.highlight} /> }} />
            </p>
            <p>
              <Trans i18nKey="about.p4" components={{ 1: <span className={styles.highlight} /> }} />
            </p>
          </div>

          <div className={styles.skills_container}>
            {/* HARD SKILLS */}
            <div className={styles.skill_box}>
              <h3 className={styles.skill_title}>{t("about.hardSkillsTitle")}</h3>
              <div className={styles.tags}>
                {hardSkills.map((skill, index) => (
                  <span key={index} className={styles.tag}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* SOFT SKILLS */}
            <div className={styles.skill_box}>
              <h3 className={styles.skill_title}>{t("about.softSkillsTitle")}</h3>
              <div className={styles.tags}>
                {softSkills.map((skill, index) => (
                  <span key={index} className={styles.tag}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className={styles.btn_wrapper}>
            <button className={styles.cv_button} onClick={() => window.open("https://drive.google.com/file/d/1g7ynzR6t-wbNM1lx47OxykZ9mGMyY309/view?usp=drive_link", "_blank")}>
              {t("about.viewCV")}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
