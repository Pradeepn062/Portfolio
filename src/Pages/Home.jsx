import "../styles/hero.css";
import profile from '../../public/profile.jpg';

function Home() {
  return (
    <section id="home" className="hero">
      <img style={{padding:1}} src={profile} alt="profile" />
      
      <h1>
        Hi, I'm <span>Pradeep</span>
      </h1>
      <p>Aspiring Software Developer with hands-on experience in Java, Spring Boot, React, and MySQL. Passionate about building clean, efficient, and scalable applications.</p>
    </section>
  );
}

export default Home;
