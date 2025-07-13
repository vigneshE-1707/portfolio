import './Home.css';

const Home = () => {
  return (
    <section id="home" className="home-section d-flex align-items-center">
      <div className="container text-center">
        <h1 className="display-4 fw-bold animate-fade-in">Hi, I'm <span className="text-primary">Vignesh E</span></h1>
        <p className="lead mt-3 animate-fade-in delay-1">
          A passionate Full Stack Developer | Python | Angular | React | Django | FastAPI
        </p>

        <p className="mt-3 animate-fade-in delay-2">
          I specialize in building dynamic, responsive, and scalable web applications.
          With nearly 2 years of experience, I bring clean code and creative problem-solving to every project.
        </p>

        <div className="mt-4 animate-fade-in delay-3">
          <a href="#contact" className="btn btn-primary btn-lg me-2">Hire Me</a>
          <a href="#projects" className="btn btn-outline-primary btn-lg">View Projects</a>
        </div>
      </div>
    </section>
  );
};

export default Home;
