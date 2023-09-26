import Navbar from "../components/Navbar"
import { Hero } from "../components/Hero"

function Home() {
  return (
    <div className="">
        <Navbar/>
        <h1 className="mx-auto">Welcome to E-revive</h1>
        <Hero/>
    </div>
  )
}

export default Home