import About from "./components/About";
import Certificate from "./components/Certificate";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import Seo from "./components/Seo";
import SocialLinks from "./components/SocialLinks";

function App() {
  return (
    <div>
      <Seo
        title="Bhargav Talpada | React Developer Portfolio"
        description="Welcome to my personal portfolio showcasing my skills, projects, and experience as a web developer."
        keywords="React Developer, Portfolio, Web Developer, MERN Stack Developer"
        url="https://bhargavtalpada.vercel.app/"
      />
      <NavBar />
      <Home />
      <About />
      <Portfolio />
      <Experience />
      <Certificate />
      <Contact />

      <SocialLinks />
    </div>
  );
}

export default App;
