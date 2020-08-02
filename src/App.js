import React from "react";
import Navbar from "./components/Navbar";
import Intro from "./sections/Intro";
import CategoryContextProvider from "./context/Category";
import "./App.css";
import About from "./sections/About";

function App() {
  return (
    <div className="app">
      <Intro />
      <CategoryContextProvider>
        <About />
      </CategoryContextProvider>
    </div>
  );
}

export default App;
