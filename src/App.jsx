import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import "./App.css"
import Header       from "./Components/Header.jsx"
import HeroSection  from "./Components/HeroSection.jsx"
import About        from "./Components/About.jsx"
import Services     from "./Components/Services.jsx"
import Experience   from "./Components/Experience.jsx"
import Projects     from "./Components/Projects.jsx"
import Skills       from "./Components/Skills.jsx"
import Testimonials from "./Components/Testimonials.jsx"
import Contact      from "./Components/Contact.jsx"

function App() {
  return (
    <>
      <Header />
      <div id="Home">
        <HeroSection />
      </div>
      <About />
      <Services />
      <Projects />
      <Skills />
      <Testimonials />
      <Contact />
    </>
  )
}

export default App
