// import React from 'react'

import { Canvas, useFrame } from "@react-three/fiber"
import HeroText from "../components/HeroText"
import ParallaxBackground from "../components/ParallaxBackground"
// import { OrbitControls } from "@react-three/drei"
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
           {/* There is a suspense tag here, in the video 48:00, add this later, its not working at the moment */}
            <Astronaut 
            scale={isMobile && 0.25} 
            position={isMobile && [0,-1.5,0]}
            />
           {/* OrbitControl not working */}
            {/* <OrbitControls/>  */}
            {/* oribitControls not working and letting me drag the 3d Model */}
            {/* <Rig/> */}

          </Canvas>
          
          
        </figure>
        </section>
  );
};
// this is not working properly that allows mouse hover to move the astronaut

// function Rig (){
//   return useFrame((state, delta)=>{
//     easing.damp3(
//       state.camera.position, 
//       [state.mouse.x / 10, 1 + state.mouse.y / 10, 3],
//       0.5,
//       delta
//     );
//   });

// }

  



export default Hero;

// ----
