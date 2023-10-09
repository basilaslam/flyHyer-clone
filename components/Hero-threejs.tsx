import { Canvas, useThree } from "@react-three/fiber"
import {WebGiViewer} from "./3dHelpers/Experiance"
import { useEffect } from "react"
import { OrbitControls, useTexture } from "@react-three/drei";


const Hero = () => {



    return(
 <div className="h-screen">

        <Canvas camera={{ position: [-4.1738600883, 1.213566742, 3.9688097997], fov: 30 }}>
        <OrbitControls enabled={false}/>
        <color attach="background" args={["#bde0fd"]} />
        <WebGiViewer />
        
      </Canvas>
 </div>
      
    )
}

export default Hero
