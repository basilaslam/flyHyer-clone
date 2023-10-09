"use client"
import { fadeinAnimationsVariants } from '@/lib/animations';
import { motion, AnimatePresence } from 'framer-motion';
import Image from "next/image"
import { useState } from "react"

const images = [
    {name:'barcelona', image:'https://www.datocms-assets.com/40358/1620755532-barcelona.jpg'},
    {name:'paris',image:'https://www.datocms-assets.com/40358/1611590478-paris.jpg'},
    {name:'ibiza',image:'https://www.datocms-assets.com/40358/1611590505-ibiza.jpg'},
    {name: 'cannes', image:'https://www.datocms-assets.com/40358/1611759665-cannes.jpg'},
]
const Destination = () => {

    const [gallery, setGallery] = useState<string>(images[0].image)

    const getImage = (place: string) => {
        images.map((placeDetailes) => {
            
            if(placeDetailes.name === place){
                    setGallery(placeDetailes.image)
            }
        })
    }
    return(
        <div className=" lg:container max-w-screen-lg mx-auto my-48">
            <motion.h1 className="font-bold text-5xl  md:text-7xl my-16 mb-28 ml-5 md:ml-0">Popular Destination</motion.h1>
            <div className="md:flex md:gap-10">
                {/* Left div */}
                <motion.div key={gallery}
          initial={{ opacity: .4 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ ease: "easeOut", duration: 1.5 }} className=" hidden md:block relative flex-1 h-[600px]">
                    <Image className=" w-full h-auto rounded-br-[3rem]" src={gallery!} alt="" fill/>
                </motion.div>
                {/* Right div */}

                <div className="grid grid-cols-2 flex-1 gap-10 mx-5">

                    <div className=" border-y border-gray-300 rounded-br-3xl flex flex-col justify-between" onMouseEnter={() => getImage('barcelona')}>
                        <motion.h2 variants={fadeinAnimationsVariants} initial="initial" whileInView={"animate"} viewport={{once: true}} className="text-2xl md:text-4xl font-bold my-5">Barcelona <span className="font-normal">(GRO)</span></motion.h2>

                        <motion.h4 variants={fadeinAnimationsVariants} initial="initial" whileInView={"animate"} viewport={{once: true}} className=" text-xl md:text-2xl mb-5 ">Spain</motion.h4>
                        
                    </div>
                    <div className=" border-y border-gray-300 rounded-br-3xl flex flex-col justify-between" onMouseEnter={() => getImage('ibiza')}>
                        <motion.h2 variants={fadeinAnimationsVariants} initial="initial" whileInView={"animate"} viewport={{once: true}} className="text-2xl md:text-4xl font-bold my-5">Ibiza <span className="font-normal">(IBZ)</span></motion.h2>

                        <motion.h4 variants={fadeinAnimationsVariants} initial="initial" whileInView={"animate"} viewport={{once: true}} className=" text-xl md:text-2xl mb-5 ">Spain</motion.h4>
                        
                    </div>
                    <div className=" border-b border-gray-300 rounded-br-3xl flex flex-col justify-between" onMouseEnter={() => getImage('cannes')}>
                        <motion.h2 variants={fadeinAnimationsVariants} initial="initial" whileInView={"animate"} viewport={{once: true}} className="text-2xl md:text-4xl font-bold my-5">Cannes <span className="font-normal">(CEQ)</span></motion.h2>

                        <motion.h4 variants={fadeinAnimationsVariants} initial="initial" whileInView={"animate"} viewport={{once: true}} className=" text-xl md:text-2xl mb-5 ">France</motion.h4>
                        
                    </div>
                    <div className=" border-b border-gray-300 rounded-br-3xl flex flex-col justify-between" onMouseEnter={() => getImage('paris')}>
                        <motion.h2 variants={fadeinAnimationsVariants} initial="initial" whileInView={"animate"} viewport={{once: true}} className="text-2xl md:text-4xl font-bold my-5">Paris  <span className="font-normal">(LBG)</span></motion.h2>

                        <motion.h4 variants={fadeinAnimationsVariants} initial="initial" whileInView={"animate"} viewport={{once: true}} className=" text-xl md:text-2xl mb-5 ">France</motion.h4>
                        
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Destination