function Projects() {
  return (
    <section id="projects">
      <h1>Projects</h1>

      <div style={{
        display:"grid",
        gridTemplateColumns:"repeat(2, minmax(260px, 1fr))",
        gap:"50px",
        marginTop:"50px"
      }}>
        
        <div style={{
          padding:"20px",
          background:"#2b2b2b",
          borderRadius:"10px",
          color:"white",
        }}>
        <a href="https://github.com/Pradeepn062/crm-management-system.git">
          <h3>CRM Management System - Ongoing</h3>
          <p>Spring Boot + MySQL + React js</p>
        </a>
        </div>

        <div style={{
          padding:"20px",
          background:"#2b2b2b",
          borderRadius:"10px",
          color:"white"
        }}>
        <a href="https://github.com/Pradeepn062/Spring-boot.git">
          <h3>Student Management System</h3>
          <p>Spring Boot + MySQL</p>
        </a>

        </div>

      <div style={{
          padding:"20px",
          background:"#2b2b2b",
          borderRadius:"10px",
          color:"white"
        }}>
        <a href="https://github.com/Pradeepn062/Java-Project.git">
          <h3>ATM Stimulation System</h3>
          <p>Java + JDBC + MySQL</p>
        </a>
      </div>

      <div style={{
          padding:"20px",
          background:"#2b2b2b",
          borderRadius:"10px",
          color:"white"
        }}>
        <a href="https://github.com/Pradeepn062/React-Projects/tree/d92822ffe7c058d48329d1f4f16c3ce1d061fefd/SampleWebpage">
          <h3>Vehicle Showcase</h3>
          <p>React js</p>
        </a>
      </div>
      
    </div>
    </section>
  );
}

export default Projects;
