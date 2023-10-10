'use client'
import { fadeinAnimationsVariants } from "@/lib/animations"
import { motion } from "framer-motion"
import Image from "next/image"

const FlightManager = () => {
    return(
        <div className="mx-auto md:flex md:h-screen"> 
            {/* Left div*/}
            <div className=" flex-1 w-full md:w-1/2 relative bg-[#0F0F1C] h-[700px] md:h-full">
                <Image objectFit="cover" alt="app image" className="" src={'https://www.datocms-assets.com/40358/1611581927-hyer-personal-flight-manager.png'} fill/>
            </div>
            {/* Right div */}
            <div className="flex-1 w-full md:w-1/2 flex flex-col justify-between bg-[#151623]">
            <motion.h1 variants={fadeinAnimationsVariants} initial="initial" whileInView={"animate"} viewport={{once: true}} className="font-bold text-5xl md:text-[65px] text-white m-5 md:m-20 2xl:text-[82px]">Flight Manager</motion.h1>
            <motion.p variants={fadeinAnimationsVariants} initial="initial" whileInView={"animate"} viewport={{once: true}} className="text-xl text-white m-5 md:m-20 2xl:text-[25px] 2xl:leading-[28.2px]">All of our flights come with complimentary Flight Manager Service. Your dedicated Flight Manager ensures that every detail of your flight is taken care of and you get the most competitive tailor-made offers. 
                    Speak with your Flight Manager in English 🇬🇧, Dutch 🇳🇱, German 🇩🇪, Spanish 🇪🇸 or Portuguese 🇵🇹. </motion.p>
            </div>
        </div>
    )
}

export default FlightManager