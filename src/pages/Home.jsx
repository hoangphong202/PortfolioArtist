import React from "react";
import Layout from "../components/Layout/Layout";
import Main from "../components/Main/Main";
import About from "../components/About/About";
import Skills from "../components/Skills/Skills";
import ProjectPage from "../components/Projects/ProjectPage";
import Contact from "../components/Contact/Contact";

Home.propTypes = {};

function Home(props) {
  return (
    <>
      <Layout />
      <Main />
      <About />
      <Skills />
      <ProjectPage />
      <Contact />
    </>
  );
}

export default Home;
