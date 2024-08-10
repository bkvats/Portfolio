import { AboutMe, Header, Intro, ProjectCard, Quote, SkillCard } from "./components"
function App() {
  return (
    <>
      <div className="w-44 border-2 border-white hidden lg:block"></div>
      <div className="w-screen border-2 border-white lg:w-5/6">
        <Header />
        <Intro />
        <Quote />
        {/* <ProjectCard imgUrl={"src/components/ProjectCard/images/project_template_image.jpg"} skills={["HTML", "CSS", "JavaScript", "Python", "Java", "Data Structures", "MERN Stack", "Django", "Design Patterns"]} projectName={"Personal Blog App using ReactJS and Appwrite as a backend service learned from hitesh choudhary"} description={"I have created a personal blog app in react"} liveLink={"Live"} github={"Github"}/> */}
        {/* <SkillCard skillName={"Languages"} skillTools={["Python", "Java", "JavaScript", "TypeScript", "SQL", "Django", "MySQL", "MongoDB"]} /> */}
        <AboutMe />
      </div>
      <div className="w-44 border-2 border-white hidden lg:block"></div>
    </>
  )
}

export default App
