import { Outlet, useLocation } from "react-router-dom"
import { Footer, Header } from "./components"
import { useEffect } from "react";
function App() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scroll(0, 0);
  }, [pathname]);
  return (
    <div className="w-screen lg:w-5/6 m-auto">
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default App
