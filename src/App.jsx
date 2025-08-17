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
    <About/>
    <Experience/>
    </>
  )
}

export default App
