
import { useTranslation } from "react-i18next";
import styles from "./Experience.module.css";
import fullbridge from "../../assets/logo/company/fullbridge.png";
import urban from "../../assets/logo/company/urban.png";
import ohstem from "../../assets/logo/company/ohstem.jpg";

const experiences = [
  {
    id: "fullbridge",
    year: "08/2026 — PRESENT",
    role: "DPP DESIGNER",
    company: "Fullbridge",
    logo: fullbridge,
    descriptionKey: "fullbridge.description",
    responsibilitiesKey: "fullbridge.responsibilities",
    skills: [
      "DPP Production",
      "Prepress",
      "Photoshop",
      "Illustrator",
      "InDesign",
    ],
    // images: [
    //   "/images/fullbridge/work-1.jpg",
    //   "/images/fullbridge/work-2.jpg",
    // ],
  },
  {
    id: "ohstem",
    year: "08/2024 — 10/2024",
    role: "INTERN — FRONT-END DEVELOPER",
    company: "0hStem Company",
    logo: ohstem,
    projectKey: "ohstem.project",
    descriptionKey: "ohstem.description",
    responsibilitiesKey: "ohstem.responsibilities",
    skills: [
      "ReactJS",
      "Front-end",
      "UI Development",
      "UI Optimization",
      "Bug Fixing",
    ],
  },
  {
    id: "urban",
    year: "04/2024 — 07/2024",
    role: "INTERN — FRONT-END / BACK-END",
    company: "Urban VietNam Co.,Ltd",
    logo: urban,
    projectKey: "urban.project",
    descriptionKey: "urban.description",
    responsibilitiesKey: "urban.responsibilities",
    skills: [
      "ReactJS",
      "RESTful API",
      "CRUD",
      "Image Upload",
      "Front-end",
      "Back-end",
    ],
  },
];

export default function Experience() {
  const { t } = useTranslation();

  return (
    <section
      className={styles.experience_section}
      id="experience"
    >
      <div className={styles.experience_header}>
        <div>
          <h2>{t("experience.title")}</h2>
        </div>
      </div>

      <div className={styles.timeline}>
        {experiences.map((item, index) => (
          <article
            className={styles.experience_item}
            key={`${item.company}-${item.year}`}
          >
            <div className={styles.timeline_left}>
              <span className={styles.dot}></span>

              {index !== experiences.length - 1 && (
                <span className={styles.line}></span>
              )}

              <span className={styles.year}>
                {t(`experience.items.${item.id}.year`, {
                  defaultValue: item.year,
                })}
              </span>
            </div>

            <div className={styles.experience_content}>
              <div className={styles.company_info}>
                <div className={styles.logo_box}>
                  {item.logo ? (
                    <img
                      src={item.logo}
                      alt={`${item.company} logo`}
                      className={styles.company_logo}
                    />
                  ) : (
                    <span className={styles.logo_fallback}>
                      {item.company.charAt(0)}
                    </span>
                  )}
                </div>

                <div>
                  <p className={styles.role}>
                    {t(`experience.items.${item.id}.role`, {
                      defaultValue: item.role,
                    })}
                  </p>

                  <h3>{item.company}</h3>
                </div>
              </div>

              {item.projectKey && (
                <div className={styles.project_block}>
                  <span className={styles.block_label}>
                    {t("experience.project")}
                  </span>

                  <h4>{t(`experience.items.${item.id}.project`)}</h4>
                </div>
              )}

              <p className={styles.description}>
                {t(`experience.items.${item.id}.description`)}
              </p>

              <div className={styles.responsibilities}>
                <span className={styles.block_label}>
                  {t("experience.responsibilities")}
                </span>

                <ul>
                  {t(
                    `experience.items.${item.id}.responsibilities`,
                    { returnObjects: true }
                  ).map((responsibility, responsibilityIndex) => (
                    <li key={`${item.id}-${responsibilityIndex}`}>
                      <span className={styles.bullet}>+</span>
                      <span>{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.skills_block}>
                <span className={styles.block_label}>
                  {t("experience.skills")}
                </span>

                <div className={styles.tags}>
                  {item.skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </div>

              {item.images && item.images.length > 0 && (
                <div className={styles.work_block}>
                  <span className={styles.block_label}>
                    {t("experience.selectedWork")}
                  </span>

                  <div className={styles.work_images}>
                    {item.images.map((image, imageIndex) => (
                      <div
                        className={styles.image_wrapper}
                        key={image}
                      >
                        <img
                          src={image}
                          alt={t("experience.workImageAlt", {
                            company: item.company,
                            number: imageIndex + 1,
                          })}
                        />

                        <span>
                          {String(imageIndex + 1).padStart(2, "0")}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}