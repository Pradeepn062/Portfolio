import resumePDF from '../../public/Pradeep_N_Resume.pdf';

function Sidebar({ open, setOpen }) {
  return (
    <div className={`sidebar ${open ? "open" : ""}`}>
      <a href="#home" onClick={() => setOpen(false)}>Home</a>
      <a href="#about" onClick={() => setOpen(false)}>About</a>
      <a href="#skills" onClick={() => setOpen(false)}>Skills</a>
      <a href="#projects" onClick={() => setOpen(false)}>Projects</a>
      <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
      <a href={resumePDF} download style={{backgroundColor:"darkgrey",borderRadius:20,marginLeft:6,marginRight:40,color:"black"}}>Download Resume</a>
    </div>
  );
}

export default Sidebar;
