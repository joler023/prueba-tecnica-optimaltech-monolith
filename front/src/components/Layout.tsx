import Navbar from "./Navbar"
import { Outlet } from "react-router-dom"
import { Toaster } from "react-hot-toast"

const Layout = () => {
  return (
    <main>
      <Navbar/>
      <div className="p-8">
        <Outlet />
      </div>
      <Toaster position="top-center"/>
    </main>
  )
}

export default Layout
