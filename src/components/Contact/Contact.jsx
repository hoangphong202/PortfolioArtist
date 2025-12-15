import React, { useState } from "react";
import styles from "./Contact.module.css";
import { FiMail } from "react-icons/fi";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section className={styles.contactSection} id="contact">
      <h2 className={styles.title}>CONTACT</h2>
      <p className={styles.subtitle}>Let’s connect and collaborate</p>

      <div className={styles.container}>
        {/* LEFT INFO */}
        <div className={styles.info}>
          <div className={styles.infoItem}>
            <FiMail size={22} />
            <div>
              <h4>Email</h4>
              <p>hoangtrungphongit202@gmail.com</p>
            </div>
          </div>

          <div className={styles.infoItem}>
            <FaPhoneAlt size={22} />
            <div>
              <h4>Phone Number</h4>
              <p>0356344088</p>
            </div>
          </div>

          <div className={styles.infoItem}>
            <FaMapMarkerAlt size={22} />
            <div>
              <h4>Location</h4>
              <p>Ho Chi Minh City</p>
            </div>
          </div>
        </div>

        {/* RIGHT FORM */}
        <form className={styles.form} onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Name" className={styles.input} value={form.name} onChange={handleChange} />
          <input type="email" name="email" placeholder="Email" className={styles.input} value={form.email} onChange={handleChange} />
          <textarea name="message" placeholder="Message..." className={styles.textarea} value={form.message} onChange={handleChange} />
          <button type="submit" className={styles.sendBtn}>
            Send
          </button>
          <p className={styles.notice}>*This is a UI demo — the form does not send email.</p>
        </form>
      </div>
    </section>
  );
};

export default Contact;
