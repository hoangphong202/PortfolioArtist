import React from "react";
import styles from "./About.module.css";
import avatar from "../../assets/avatar.png";
import Btn from "../Button/Btn";
About.propTypes = {};

function About(props) {
  return (
    <section id="about" className={styles.about_section}>
      <h2 className={styles.title}>About Me</h2>

      <div className={styles.container}>
        <div className={styles.image_wrapper}>
          <img src={avatar} alt="About" className={styles.image} />
        </div>

        <div className={styles.text_content}>
          <h3 className={styles.hello}>
            Hello, I’m <span>Hoang Trung Phong</span>
          </h3>

          <p>
            I am a 2D Artist focusing on anime-style illustration and visual content. I originally studied Information Technology, which helped me develop logical thinking, discipline, and a strong
            understanding of digital workflows.
          </p>
          <p>
            I have experience using digital art and design tools to create clean, appealing visuals, and I continuously work on improving my artistic skills through practice and personal projects.
          </p>
          <p>I always strive to learn, refine my artistic techniques, and develop creative thinking to produce expressive and high-quality visual artwork.</p>
          <p>
            I currently have a Japanese level equivalent to JLPT N3 and aim to work in a professionalenvironment in Japan, where I can further develop my art skills and contribute value to the team.
          </p>

          <div className={styles.btn_group}>
            <Btn onClick={() => window.open("https://drive.google.com/file/d/1YhkjdcALascqjf-Z742EU5orzYm1JSjO/view?usp=drive_link", "_blank")}>View CV</Btn>{" "}
            {/* <a href="https://github.com/hoangphong202" target="_blank" rel="noopener noreferrer" className={styles.github_icon}>
              <i className="fab fa-github"></i>
            </a> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
