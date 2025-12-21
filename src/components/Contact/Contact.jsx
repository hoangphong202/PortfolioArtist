import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import styles from "./Contact.module.css";
import { FiMail } from "react-icons/fi";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
  const { t } = useTranslation();

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section className={styles.contactSection} id="contact">
      <h2 className={styles.title}>{t("contact.title")}</h2>
      <p className={styles.subtitle}>{t("contact.subtitle")}</p>

      <div className={styles.container}>
        {/* LEFT INFO */}
        <div className={styles.info}>
          <div className={styles.infoItem}>
            <FiMail size={22} />
            <div>
              <h4>{t("contact.email.label")}</h4>
              <p>hoangtrungphongit202@gmail.com</p>
            </div>
          </div>

          <div className={styles.infoItem}>
            <FaPhoneAlt size={22} />
            <div>
              <h4>{t("contact.phone.label")}</h4>
              <p>0356344088</p>
            </div>
          </div>

          <div className={styles.infoItem}>
            <FaMapMarkerAlt size={22} />
            <div>
              <h4>{t("contact.location.label")}</h4>
              <p>{t("contact.location.value")}</p>
            </div>
          </div>
        </div>

        {/* RIGHT FORM */}
        <form className={styles.form} onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder={t("contact.form.name")} className={styles.input} value={form.name} onChange={handleChange} />

          <input type="email" name="email" placeholder={t("contact.form.email")} className={styles.input} value={form.email} onChange={handleChange} />

          <textarea name="message" placeholder={t("contact.form.message")} className={styles.textarea} value={form.message} onChange={handleChange} />

          <button type="submit" className={styles.sendBtn}>
            {t("contact.form.send")}
          </button>

          <p className={styles.notice}>{t("contact.notice")}</p>
        </form>
      </div>
    </section>
  );
};

export default Contact;
