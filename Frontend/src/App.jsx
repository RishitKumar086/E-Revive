import {Routes,Route} from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import { Register } from "./pages/Register"
import { Login } from "./pages/Login"

function App() {

  return (
    <>
      <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/register" element={<Register/>} />
      </Routes>
    </>
  )
}

export default App
