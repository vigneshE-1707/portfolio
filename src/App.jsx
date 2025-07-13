import "./App.css";
import NavBar from "./components/Navbar";
import { Route, HashRouter as Router, Routes, useLocation,useNavigate } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Home from "./components/Home";
import Projects from "./components/Projects";
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'devicon/devicon.min.css';
import { useEffect, useState } from "react";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <section className="d-flex align-items-center justify-content-center" style={{ minHeight: '90vh', background: '#f8f9fa' }}>
      <div className="text-center">
        <h1 className="display-1 text-primary fw-bold">404</h1>
        <h3 className="mb-3">Oops! Page not found</h3>
        <p className="text-muted mb-4">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <button onClick={() => navigate('/home')} className="btn btn-primary">
          Go Back Home
        </button> 
      </div>
    </section>
  );
};

function AppContent(){
  const [currentPath,setCurrentPath] = useState("")
  const location = useLocation();
  useEffect(()=>{
    setCurrentPath(location.pathname);
  },[location])
  return(<>
      <div className={"vh-100 vw-100"}>
        <div  style={{ height: "10%" }}>
          <NavBar currentPath={currentPath}></NavBar>
        </div>
        <div  style={{ height: "90%" }}>
            <Routes>
              <Route path="home" element={<Home/>}/>
              <Route path="about" element={<About/>}/>
              <Route path="contact" element={<Contact/>}/>
              <Route path="skills" element={<Skills/>}/>
              <Route path="projects" element={<Projects/>}/>
              <Route path="*" element={<NotFound/>}/>
            </Routes>
        </div>
      </div>
    </>)
}


function App() {
  return (
    <>
    <Router>
      <AppContent></AppContent>
    </Router>
    </>
  );
}

export default App;
