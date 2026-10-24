
import "./App.css";

const skills = [
  "HTML", "CSS", "JavaScript", "React",
  "Python", "Django", "SQLite", "Git & GitHub",
];

const projects = [
  {
    title: "Personal Portfolio Website",
    description:
      "A personal website to introduce myself, share my skills, and present my software projects.",
    technologies: "React, CSS, Django",
  },
  {
    title: "Subcity Administration Website",
    description:
      "A website project focused on sharing public information, announcements, and services.",
    technologies: "Python, Django, HTML, CSS",
  },
  {
    title: "Cybersecurity Learning Project",
    description:
      "A learning project exploring networking, website security, and cybersecurity fundamentals.",
    technologies: "Python, Networking",
  },
];

function App() {
  return (
    <>
      <header className="navbar">
        <a className="logo" href="#home">YH<span>.</span></a>

        <nav aria-label="Main navigation">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="hero-content">
            <p className="eyebrow">SOFTWARE ENGINEERING STUDENT</p>
            <h1>
              Hello, I'm <span>Yonas Habtamu</span>
            </h1>
            <p className="hero-description">
              I am a Software Engineering student interested in web
              development, databases, and cybersecurity. I enjoy learning
              new technologies and turning ideas into useful projects.
            </p>

            <div className="hero-buttons">
              <a className="button" href="#projects">View My Projects</a>
              <a className="button button-outline" href="#contact">
                Contact Me
              </a>
            </div>
          </div>

          <div className="photo-frame">
            <img
              src="/yonas.jpg.jpg"
              alt="Yonas Habtamu graduation portrait"
              onError={(event) => {
                event.currentTarget.style.display = "none";
              }}
            />
            <div className="photo-placeholder">Yonas Habtamu</div>
          </div>
        </section>

        <section id="about" className="section">
          <p className="eyebrow">GET TO KNOW ME</p>
          <h2>About Me</h2>
          <p className="section-description">
            I am Yonas Habtamu, a Software Engineering student at Mekdela
            Amba University. I am developing my skills in programming,
            web application development, databases, and cybersecurity.
          </p>
          <p className="section-description">
            My goal is to build useful, accessible, and secure software,
            learn from other developers, and keep improving through
            practical projects and collaboration.
          </p>
        </section>

        <section id="skills" className="section section-light">
          <p className="eyebrow">WHAT I AM LEARNING</p>
          <h2>Skills & Technologies</h2>
          <p className="section-description">
            These are technologies I am learning or practicing. I will
            continue updating this list as I gain experience.
          </p>

          <div className="skill-grid">
            {skills.map((skill) => (
              <div className="skill-card" key={skill}>
                {skill}
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="section">
          <p className="eyebrow">MY WORK</p>
          <h2>Projects</h2>
          <p className="section-description">
            Here are some projects and learning areas I am working on.
            Update the descriptions to reflect your actual progress.
          </p>

          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
                <div className="project-icon">&lt;/&gt;</div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <span className="technology">{project.technologies}</span>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="section section-light">
          <p className="eyebrow">LET'S CONNECT</p>
          <h2>Contact Me</h2>
          <p className="section-description">
            I welcome opportunities to learn, collaborate, and work on
            interesting software projects.
          </p>

          <div className="contact-card">
            <p>
              Want to discuss a project or share an opportunity?
              You can contact me by email.
            </p>
            <a
              className="button"
              href="mailto:your-email@example.com"
            >
              Email Me
            </a>
            <p className="small-note">
              habtamuyonas273@gmail,com.
            </p>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>
          © {new Date().getFullYear()} Yonas Habtamu. Built with React.
        </p>
        <a href="#home">Back to top ↑</a>
      </footer>
    </>
  );
}

export default App;
