function Navbar({ open, setOpen, theme, setTheme }) {
  return (
    <>
      <div className="hamburger" onClick={() => setOpen(!open)}>
        &#9776;
      </div>

      <div
        className="theme-toggle"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >
        {theme === "light" ? "🌙 Dark" : "☀️ Light"}
      </div>
    </>
  );
}

export default Navbar;
