import React from "react";
import ParticleBackground from "./ParticleBackground.jsx";

const projects = [
  {
    number: "01",
    code: "CAMPUS / SYSTEM",
    name: "College Management Portal",
    description:
      "A multi-role college portal concept covering staff, student and administrator workflows, with a focus on bringing common campus tasks into one place.",
    tags: ["Web application", "Role-based workflows", "AI feature concept"],
    visual: "campus",
    link: "",
    linkLabel: "Add project link",
  },
  {
    number: "02",
    code: "LANGUAGE / BUSINESS",
    name: "NLP-Based Business Management System",
    description:
      "A business management project exploring how natural-language processing can support information handling and everyday business workflows.",
    tags: ["NLP", "Business workflow", "Web application"],
    visual: "nlp",
    link: "https://github.com/Aneesbinshoukkath/nlp-business-management-system",
    linkLabel: "View GitHub repository",
  },
  {
    number: "03",
    code: "HYPERLOCAL / CONCEPT",
    name: "Sevora — Hyper Skilled Work Force",
    description:
      "A hyperlocal service platform concept designed to help customers connect directly with local workers without an intermediary.",
    tags: ["Marketplace concept", "Local services", "Direct connection"],
    visual: "sevora",
    link: "",
    linkLabel: "Add project link",
  },
];

function Arrow() {
  return <span className="arrow" aria-hidden="true">↗</span>;
}

function OrbitalPortrait() {
  return (
    <div className="portrait-system portrait-system-photo" aria-label="Futuristic portrait of Anees">
      <div className="portrait-photo-orbit portrait-photo-orbit-one" />
      <div className="portrait-photo-orbit portrait-photo-orbit-two" />
      <div className="portrait-photo-glow" />
      <img className="portrait-photo" src="/anees-hero-art.jpg" alt="Anees, BCA student and developer" />
      <div className="photo-profile-chip"><i /> PERSONAL PROFILE / 001</div>
      <div className="hud-chip chip-code"><b>01</b><span>IDEA → BUILD</span><b>AI</b><span>ASSISTED WORKFLOW</span></div>
      <div className="portrait-social-rail" aria-label="Social links">
        <a href="https://github.com/Aneesbinshoukkath" target="_blank" rel="noreferrer" aria-label="GitHub">⌘</a>
        <a href="https://linkedin.com/in/muhammed-aneees" target="_blank" rel="noreferrer" aria-label="LinkedIn">in</a>
        <a href="mailto:muhammedaneesanees27@gmail.com" aria-label="Email">✉</a>
      </div>
      <div className="portrait-caption"><span className="caption-line" /> FIG. 001 — ANEES / DIGITAL BUILDER</div>
    </div>
  );
}

function ProjectVisual({ type, number }) {
  return (
    <div className={`project-visual visual-${type}`} aria-hidden="true">
      <div className="visual-window">
        <div className="window-bar"><span /><span /><span /><b>ANEES.LAB / {number}</b></div>
        {type === "campus" && (
          <div className="campus-ui">
            <div className="ui-sidebar"><i /><i /><i /><i /></div>
            <div className="ui-content"><span className="ui-kicker">CAMPUS OVERVIEW</span><strong>Good morning.</strong><div className="ui-stats"><i /><i /><i /></div><div className="ui-chart"><i /><i /><i /><i /><i /><i /><i /></div></div>
          </div>
        )}
        {type === "nlp" && (
          <div className="nlp-ui">
            <span className="ui-kicker">NATURAL LANGUAGE / INPUT</span>
            <div className="nlp-prompt">“Summarise this week's<br />business activity...”<i /></div>
            <div className="nlp-output"><b>PROCESSING</b><span /><span /><span /></div>
            <div className="nlp-orb">NLP</div>
          </div>
        )}
        {type === "sevora" && (
          <div className="sevora-ui">
            <span className="ui-kicker">LOCAL SERVICES / CONNECT</span>
            <div className="sevora-map"><i /><i /><i /><b>✳</b><span>DIRECT CONNECTION</span></div>
            <div className="sevora-bottom"><span>WORKER</span><span>↔</span><span>YOU</span></div>
          </div>
        )}
      </div>
      <span className="visual-index">0{number}</span>
      <span className="visual-cross">✳</span>
    </div>
  );
}

function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className="project-meta"><span>{project.code}</span><span>{project.number} / {String(projects.length).padStart(2, "0")}</span></div>
      <ProjectVisual type={project.visual} number={project.number} />
      <div className="project-info">
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        <div className="tag-list">{project.tags.map(tag => <span className="tag" key={tag}>{tag}</span>)}</div>
        {project.link ? (
          <a className="project-link" href={project.link} target="_blank" rel="noreferrer">{project.linkLabel}<Arrow /></a>
        ) : (
          <span className="project-placeholder">{project.linkLabel} — update when ready</span>
        )}
      </div>
    </article>
  );
}

export default function App() {
  return (
    <>
      <ParticleBackground />
      <div className="ambient ambient-one" /><div className="ambient ambient-two" />
      <div className="site-shell">
        <header className="topbar">
          <a className="brand" href="#home" aria-label="Anees home">A<span>.</span><small>PORTFOLIO / 2026</small></a>
          <nav aria-label="Main navigation">
            <a href="#about">ABOUT <span>01</span></a>
            <a href="#projects">WORK <span>02</span></a>
            <a href="#approach">PROCESS <span>03</span></a>
            <a className="nav-contact" href="#contact">LET'S CONNECT <Arrow /></a>
          </nav>
        </header>

        <main>
          <section className="hero" id="home">
            <div className="hero-copy">
              <div className="eyebrow"><span className="eyebrow-line" /> INDEPENDENTLY CURIOUS / BCA STUDENT</div>
              <div className="hero-index">PORTFOLIO — 2026 <span>✳</span> 001—004</div>
              <h1>Ideas into<br /><em>digital</em><br />experiences<span className="title-period">.</span></h1>
              <p className="hero-intro">I'm Anees — a curious builder exploring software development, learning by creating, and using AI tools to bring ideas to life.</p>
              <div className="hero-actions">
                <a className="button button-primary" href="#projects">EXPLORE SELECTED WORK <Arrow /></a>
                <a className="text-button" href="#about">GET TO KNOW ME <span>↓</span></a>
              </div>
              <div className="hero-footer"><span><i /> AVAILABLE FOR LEARNING & COLLABORATION</span><span>BASED IN KERALA, INDIA</span></div>
            </div>
            <div className="hero-art"><OrbitalPortrait /></div>
            <div className="hero-side-label">CREATIVE TECHNOLOGY / PERSONAL ARCHIVE</div>
          </section>

          <div className="ticker" aria-label="Portfolio themes">
            <div className="ticker-track"><span>THINK</span><b>✳</b><span>MAKE</span><b>✳</b><span>LEARN</span><b>✳</b><span>REPEAT</span><b>✳</b><span>THINK</span><b>✳</b><span>MAKE</span><b>✳</b><span>LEARN</span><b>✳</b><span>REPEAT</span><b>✳</b></div>
          </div>

          <section className="section about-section" id="about">
            <div className="section-label"><span>01 / ABOUT</span><i>THE PERSON BEHIND THE PIXELS</i></div>
            <div className="about-layout">
              <h2>Curiosity is<br />my <em>starting point.</em></h2>
              <div className="about-copy">
                <p className="about-lead">I'm a Bachelor of Computer Applications student interested in how thoughtful software can solve everyday problems.</p>
                <p>I enjoy shaping an idea, planning how it should work, and turning that plan into a working interface. I use AI-assisted tools as part of my development process, while learning to understand, test, edit and improve the code behind what I build.</p>
                <div className="about-facts"><div><b>01</b><strong>Curiosity</strong><span>Exploring how things work</span></div><div><b>02</b><strong>Experimentation</strong><span>Learning through projects</span></div><div><b>03</b><strong>Progress</strong><span>Improving one build at a time</span></div></div>
              </div>
            </div>
          </section>

          <section className="section projects-section" id="projects">
            <div className="section-label"><span>02 / SELECTED WORK</span><i>EXPERIMENTS, PROJECTS & IDEAS</i></div>
            <div className="projects-heading"><h2>Built from<br /><em>an idea.</em></h2><p>A few projects and concepts I've been working on. Each one is part of the learning process.</p><span className="project-count">
  {String(projects.length).padStart(2, "0")}
  <small>PROJECTS</small>
</span></div>
            <div className="project-grid">{projects.map(project => <ProjectCard key={project.number} project={project} />)}</div>
          </section>

          <section className="section approach-section" id="approach">
            <div className="section-label"><span>03 / MY PROCESS</span><i>HOW I TURN IDEAS INTO BUILDS</i></div>
            <div className="process-layout">
              <h2>AI-assisted.<br /><em>Human-directed.</em></h2>
              <div className="process-copy"><p>I start with the problem and the experience I want to create. AI tools help me explore solutions and generate a starting point; I then work through the code, test it, debug issues and refine the result.</p><div className="process-steps"><div><b>01</b><span>DEFINE</span><small>Understand the idea</small></div><div><b>02</b><span>EXPLORE</span><small>Try possible approaches</small></div><div><b>03</b><span>BUILD</span><small>Code, test and debug</small></div><div><b>04</b><span>IMPROVE</span><small>Learn and refine</small></div></div></div>
            </div>
            <div className="tool-panel"><div><span className="tool-label">CURRENT EXPLORATION</span><h3>Foundations first.<br /><em>Possibilities always.</em></h3></div><div className="tool-cloud">{["HTML", "CSS", "JavaScript", "Python", "PHP", "Linux / Fedora", "Git & GitHub", "AI-assisted development", "Cloud & DevOps"].map(item => <span key={item}>{item}</span>)}</div><p>These are learning areas and tools I've explored — not a claim of professional-level expertise.</p></div>
          </section>

          <section className="contact-section" id="contact">
            <div className="section-label"><span>04 / CONTACT</span><i>THE NEXT IDEA COULD BE OURS</i></div>
            <div className="contact-content"><span className="contact-kicker">HAVE SOMETHING IN MIND?</span><h2>Let's make<br /><em>something matter.</em></h2><p>I'm open to learning, collaboration and entry-level opportunities.</p><a className="button button-primary" href="mailto:muhammedaneesanees27@gmail.com">START A CONVERSATION <Arrow /></a></div>
            <footer className="footer"><a className="brand" href="#home">A<span>.</span></a><span>ANEES / PERSONAL PORTFOLIO / 2026</span><div><a href="https://github.com/Aneesbinshoukkath" target="_blank" rel="noreferrer">GITHUB <Arrow /></a><a href="https://linkedin.com/in/muhammed-aneees" target="_blank" rel="noreferrer">LINKEDIN <Arrow /></a></div><a href="#home">BACK TO TOP ↑</a></footer>
          </section>
        </main>
      </div>
    </>
  );
}
