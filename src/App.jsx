import { Header, Intro } from "./components"
function App() {
  return (
    <>
      <div className="w-44 border-2 border-white hidden lg:block"></div>
      <div className="w-screen border-2 border-white lg:w-5/6">
        <Header />
        <Intro />
      </div>
      <div className="w-44 border-2 border-white hidden lg:block"></div>
    </>
  )
}

export default App
