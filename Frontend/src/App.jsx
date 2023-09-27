import {Routes,Route} from "react-router-dom"
// import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import { Register } from "./pages/Register"
import { Login } from "./pages/Login"
import Education from "./pages/Education"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/home" element={<Home/>}/>
        <Route path="/register" element={<Register/>} />
        <Route path="/education" element={<Education/>}/>
      </Routes>
    </>
  )
}

export default App
