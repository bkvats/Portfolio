import { Outlet } from "react-router-dom"
import {Footer, Header} from "./components"
function App() {
  return (
    <>
      <div className="w-44 border-2 border-white hidden lg:block"></div>
      <div className="w-screen border-2 border-white lg:w-5/6">
        <Header />
        <Outlet />
        <Footer />
      </div>
      <div className="w-44 border-2 border-white hidden lg:block"></div>
    </>
  )
}

export default App
