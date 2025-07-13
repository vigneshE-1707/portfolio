import './Projects.css';

const Projects = () => {
  return (
    <section id="projects" className="container py-5">
      <h2 className="text-center text-primary mb-4 animate-fade-in">My Projects</h2>
      <p className="text-center mb-5 animate-fade-in delay-1">
        Here are a few standout projects I’ve worked on, showcasing my skills across frontend, backend, and AI.
      </p>

      <div className="row g-4">
        {/* DMS Project */}
        <div className="col-md-6 animate-pop-up">
          <div className="card h-100 shadow-sm border-0">
            <div className="card-body">
              <h5 className="card-title text-primary">Document Management System (DMS)</h5>
              <p className="card-text">
                A scalable DMS built using <strong>Angular</strong> and <strong>Django REST Framework</strong>.
                This system allows users to upload and manage unlimited files at once with a clean and responsive UI.
              </p>
              <ul>
                <li>Multiple file uploads simultaneously</li>
                <li>RESTful APIs with role-based access control</li>
                <li>Dynamic UI with Angular Material</li>
              </ul>
              <span className="badge bg-secondary me-2">Angular</span>
              <span className="badge bg-secondary me-2">Django</span>
              <span className="badge bg-secondary me-2">REST API</span>
            </div>
          </div>
        </div>

        {/* AI Chatbot */}
        <div className="col-md-6 animate-pop-up delay-1">
          <div className="card h-100 shadow-sm border-0">
            <div className="card-body">
              <h5 className="card-title text-primary">AI Chatbot (LangChain + Ollama)</h5>
              <p className="card-text">
                Built a conversational AI chatbot using <strong>LangChain</strong> and <strong>Ollama</strong>, with an
                intuitive <strong>Streamlit</strong> interface for user interaction.
              </p>
              <ul>
                <li>Context-aware Q&A with custom LLM</li>
                <li>Streamlit-powered real-time UI</li>
                <li>Supports file-based context (PDFs/Docs)</li>
              </ul>
              <span className="badge bg-secondary me-2">Python</span>
              <span className="badge bg-secondary me-2">LangChain</span>
              <span className="badge bg-secondary me-2">Ollama</span>
              <span className="badge bg-secondary me-2">Streamlit</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
