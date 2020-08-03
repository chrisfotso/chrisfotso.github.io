import React from "react";
import Intro from "./sections/Intro";
import CategoryContextProvider from "./context/Category";
import "./App.css";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";

function App() {
  return (
    <div className="app">
      <Intro />
      <CategoryContextProvider>
        <About />
      </CategoryContextProvider>
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
