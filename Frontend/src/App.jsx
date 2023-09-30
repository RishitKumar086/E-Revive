import {Routes,Route} from "react-router-dom"
// import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import { Register } from "./pages/Register"
import { Login } from "./pages/Login"
import Education from "./pages/Education"
import { AuthProvider } from "./context/AuthContext"
import About from "./pages/About"

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/register" element={<Register/>} />
        <Route path="/education" element={<Education/>}/>
      </Routes>
    </AuthProvider>
  )
}

export default App
