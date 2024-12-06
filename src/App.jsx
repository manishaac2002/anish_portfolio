import AboutMe from "./pages/AboutMe"
import Blog from "./pages/Blog"
import Company from "./pages/Company"
import Contact from "./pages/Contact"
import Experiences from "./pages/Experiences"
import Project from "./pages/Project"
import Research from "./pages/Research"
import Services from "./pages/Services"

const App=()=> {


  return (
    <>
      <div>
        <AboutMe />
        <Company />
        <Services />
        <Research />
        <Project />
        <Blog />
        <Experiences/>
        <Contact/>
      </div>
    </>
  )
}

export default App
