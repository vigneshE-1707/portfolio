import './Skills.css';
import 'devicon/devicon.min.css';

const Skills = () => {
  return (
    <section id="skills" className="container py-5">
      <h2 className="text-center text-primary mb-4 animate-fade-in">My Skills</h2>
      <p className="text-center mb-5 animate-fade-in delay-1">
        Technologies and tools I work with.
      </p>

      <div className="row justify-content-center">
        {/* Frontend */}
        <div className="col-md-4 mb-4 animate-pop-up">
          <div className="card shadow-sm h-100 border-0">
            <div className="card-body text-center">
              <h5 className="card-title text-primary mb-3">Frontend</h5>
              <div className="icon-grid">
                <i className="devicon-html5-plain colored" title="HTML5"></i>
                <i className="devicon-css3-plain colored" title="CSS3"></i>
                <i className="devicon-javascript-plain colored" title="JavaScript"></i>
                <i className="devicon-typescript-plain colored" title="TypeScript"></i>
                <i className="devicon-react-original colored" title="React"></i>
                <i className="devicon-angularjs-plain colored" title="Angular"></i>
                <i className="devicon-bootstrap-plain colored" title="Bootstrap"></i>
              </div>
            </div>
          </div>
        </div>

        {/* Backend */}
        <div className="col-md-4 mb-4 animate-pop-up delay-1">
          <div className="card shadow-sm h-100 border-0">
            <div className="card-body text-center">
              <h5 className="card-title text-primary mb-3">Backend</h5>
              <div className="icon-grid">
                <i className="devicon-python-plain colored" title="Python"></i>
                <i className="devicon-django-plain colored" title="Django"></i>
                <i className="devicon-flask-original colored" title="Flask"></i>
                <i className="devicon-fastapi-plain colored" title="FastAPI"></i>
                <i className="devicon-postgresql-plain colored" title="PostgreSQL"></i>
              </div>
            </div>
          </div>
        </div>

        {/* Tools & DB */}
        <div className="col-md-4 mb-4 animate-pop-up delay-2">
          <div className="card shadow-sm h-100 border-0">
            <div className="card-body text-center">
              <h5 className="card-title text-primary mb-3">Tools & Others</h5>
              <div className="icon-grid">
                <i className="devicon-git-plain colored" title="Git"></i>
                <i className="devicon-github-original colored" title="GitHub"></i>
                <i className="devicon-mysql-plain colored" title="MySQL"></i>
                <i className="devicon-linux-plain colored" title="Linux"></i>
                <i className="devicon-vscode-plain colored" title="VS Code"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
