const About = () => {
  return (
    <section id="about" className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-10 col-lg-8">
          <h2 className="mb-4 text-center">About Me</h2>
          <p className="lead">
            Hello! I'm <strong>Vignesh E</strong>, a passionate <strong>Full-Stack Developer</strong> with
            <strong> 1.8 years</strong> of experience building robust web applications.
          </p>
          <p>
            I specialize in <strong>Python, Django, Odoo, React, Angular, JavaScript, PostgreSQL, and FastAPI</strong>.
            From creating efficient backend logic to developing dynamic frontends, I enjoy working across the full stack.
          </p>
          <p>
            I write clean, scalable code and constantly explore new technologies. I've contributed to open-source projects
            and love solving real-world problems through code.
          </p>
          <p>
            I'm currently open to exciting opportunities where I can learn, grow, and make meaningful contributions to
            impactful software products.
          </p>

          <div className="text-center mt-4">
            <a href="/path-to-resume.pdf" className="btn btn-primary" target="_blank" rel="noopener noreferrer">
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
