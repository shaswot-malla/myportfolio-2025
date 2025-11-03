// import React from 'react'

import { Canvas } from "@react-three/fiber"
import HeroText from "../components/HeroText"
import ParallaxBackground from "../components/ParallaxBackground"
import { OrbitControls } from "@react-three/drei"
import { Astronaut } from "../components/Astronaut"
import { useMediaQuery } from "react-responsive"

const Hero = () => {
  const isMobile = useMediaQuery({maxWidth: 853});
  return (
    <section className="flex items-start justify-center md:items-start
    md:justify-start min-h-screen overflow-hidden c-space">

        <HeroText/>
        <ParallaxBackground/>
        <figure 
        className="absolute inset-0" 
        style={{width: "100vw", height: "100vh"}}
        >
          <Canvas camera={{position:[0,1,3]}}>
            <Astronaut 
            scale={isMobile && 0.3} 
            position={isMobile && [0,-1.5,0]}/>
            <OrbitControls/> 
            {/* oribitControls not working and letting me drag the 3d Model */}
          </Canvas>
        </figure>
        </section>
  )
}

export default Hero