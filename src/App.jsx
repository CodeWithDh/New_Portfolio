import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import "./App.css"
import Header from "./Components/Header.jsx"
import HeroSection from "./Components/HeroSection.jsx"
import About from "./Components/About.jsx"
import Experience from './Components/Experience.jsx'
function App() {
  return (
    <>
    <Header/>
    <HeroSection/>
    <About 
    aboutStatement="I’m a MERN Stack Developer and an active, observant developer who spots real-world problems and builds solutions. My focus is on scalable, efficient backend systems like Smart Mobile Shop (mobile shop management) and MeatHub (restaurant management). With hands-on client experience, I deliver applications that make a real impact."
    font="1.5rem"
    large={false}
    />
    <About 
    aboutStatement="I’m a MERN Stack Developer and an active, observant developer who spots real-world problems and builds solutions. My focus is on scalable, efficient backend systems like Smart Mobile Shop (mobile shop management) and MeatHub (restaurant management). With hands-on client experience, I deliver applications that make a real impact."
    font="1.5rem"
    large={true}
    />
    <Experience/>
    </>
  )
}

export default App
