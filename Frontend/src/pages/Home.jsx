import Navbar from "../components/Navbar";
import { Hero } from "../components/Hero";
import truck from "../assets/recycling-truck.png";
import gsap from "gsap";
import React from "react";
import { Footer } from "../components/Footer";
import { useEffect } from "react";
import PopUp from "../components/PopUp";
import { Contact } from "./Contact";
import { Service } from "../components/Services";

function Home() {
  const [showModal, setShowModal] = React.useState(false);

  useEffect(() => {
    
    setTimeout(()=>{
      setShowModal(true)
    }, 6000);

  }, [])

  gsap.to(".garbagetruck", {
    opacity: 100,
    x: 1500,
    duration: 100,
    ease: "power3.out",
    repeat: -1,
    repeatDelay: 1,
  });

  return (
    <>
      <Navbar/>
      <PopUp showModal={showModal} setShowModal={setShowModal}/>
      <Hero />
      <div className="hidden md:flex w-full fixed bottom-[-4vh]  z-40  garbagetruck">
        <img
          src={truck}
          alt=""
          className="h-[20vh] bg-cover bg-center rounded-xl"
          />
      </div>
      <Service/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default Home;
