import { useState, useEffect } from "react";

import "./styles/global.css";
import "./styles/sidebar.css";

import NavBar from "./components/NavBar";
import Sidebar from "./components/Sidebar";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Skills from "./Pages/Skills";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";

function App() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <>
      <NavBar open={open} setOpen={setOpen} theme={theme} setTheme={setTheme} />
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
