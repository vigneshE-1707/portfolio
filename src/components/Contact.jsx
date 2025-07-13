import 'bootstrap-icons/font/bootstrap-icons.css';
import './Contact.css'; // We'll write custom animations here

const Contact = () => {
  return (
    <section id="contact" className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-8 text-center">
          <h2 className="text-primary mb-4 animate-fade-in">Let's Connect</h2>

          <p className="lead mb-5 animate-fade-in delay-1">
            Feel free to reach out through any of the platforms below.
            I'm always open to exciting opportunities and collaborations.
          </p>

          <div className="d-flex justify-content-center gap-4">
            <a
              href="mailto:e.vignesh1707@gmail.com"
              className="contact-icon animate-pop-up"
              title="Email"
            >
              <i className="bi bi-envelope-fill"></i>
              <span className="tooltip-text">e.vignesh1707@gmail.com</span>
            </a>

            <a
              href="tel:+918072369897"
              className="contact-icon animate-pop-up delay-1"
              title="Phone"
            >
              <i className="bi bi-telephone-fill"></i>
              <span className="tooltip-text">+91 80723 69897</span>
            </a>

            <a
              href="https://www.linkedin.com/in/vignesh-e-795a6b351"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-icon animate-pop-up delay-2"
              title="LinkedIn"
            >
              <i className="bi bi-linkedin"></i>
              <span className="tooltip-text">View Profile</span>
            </a>
          </div>

          <p className="mt-5 text-muted animate-fade-in delay-2">
            Let’s build something great together!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
