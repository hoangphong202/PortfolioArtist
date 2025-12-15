import React from "react";
import { ReactTyped } from "react-typed";
import styles from "./Main.module.css";
import Btn from "../Button/Btn";
// import avatar from "../../assets/avatar.png";
import Loader from "./Loader.jsx";

Main.propTypes = {};

function Main(props) {
  return (
    <div id="home" className={styles.main_container}>
      <div className={styles.container}>
        <p className={styles.hello}>
          Hello, I'm <span>Hoang Trung Phong</span>
        </p>

        <h2 className={styles.title}>
          I'm a{" "}
          <span>
            <ReactTyped
              strings={["2D Artist", "Artist with IT Background"]}
              typeSpeed={100}
              backSpeed={60}
              backDelay={1500} // thời gian dừng trước khi xóa (ms)
              loop
            />
          </span>
        </h2>

        <p className={styles.description}>
          I’m a 2D Artist specializing in anime-style illustration. I am currently learning how to adapt my artwork for game production and eager to grow in a professional game art environment.
        </p>
        <p className={styles.description}>I have a Japanese language proficiency equivalent to JLPT N3 and am currently continuing to improve my Japanese communication skills.</p>

        <div className={styles.btn_container}>
          <Btn onClick={() => window.open("https://drive.google.com/file/d/1YhkjdcALascqjf-Z742EU5orzYm1JSjO/view?usp=drive_link", "_blank")}>View CV</Btn>{" "}
          {/* <a href="https://github.com/hoangphong202" target="_blank" rel="noopener noreferrer" className={styles.github_icon}>
            <i className="fab fa-github"></i>
          </a> */}
        </div>
      </div>

      {/* <div className={styles.intro_image}>
        <img src={avatar} alt="avatar" />
      </div> */}

      <Loader />
    </div>
  );
}

export default Main;
