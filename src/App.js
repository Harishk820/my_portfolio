// import { lazy, Suspense } from "react";
import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Project from "./components/Project";
import Skill from "./components/Skill";
import Contact from "./components/Contact";
import Experience from "./components/Experience";

// const Header = lazy(() => import("./components/Header"));
// const Hero = lazy(() => import("./components/Hero"));
// const Project = lazy(() => import("./components/Project"));
// const Skill = lazy(() => import("./components/Skill"));
// const Contact = lazy(() => import("./components/Contact"));
// const Experience = lazy(() => import("./components/Experience"));

function App() {
  return (
    // <Suspense
    //   fallback={
    //     <div className="sk-folding-cube">
    //       <div className="sk-cube1 sk-cube"></div>
    //       <div className="sk-cube2 sk-cube"></div>
    //       <div className="sk-cube4 sk-cube"></div>
    //       <div className="sk-cube3 sk-cube"></div>
    //     </div>
    //   }
    // >

    <div className="App container my-10 mx-auto max-w-screen-lg bg-black">
      <Header />
      <main>
        <Hero />
        <Experience />
        <Project />
        <Skill />
        <Contact />
      </main>
    </div>
    // </Suspense>
  );
}

export default App;
