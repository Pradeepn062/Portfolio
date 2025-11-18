import { useState, useEffect } from "react";

import "./styles/global.css";
import "./styles/sidebar.css";

import Navbar from "../src/components/NavBar";
import Sidebar from "../src/components/Sidebar";

import Home from "../src/Pages/Home";
import About from "../src/Pages/About";
import Skills from "../src/Pages/Skills";
import Projects from "../src/Pages/Projects";
import Contact from "../src/Pages/Contact";

function App() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <>
      <Navbar open={open} setOpen={setOpen} theme={theme} setTheme={setTheme} />
      <Sidebar open={open} setOpen={setOpen} />

      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
