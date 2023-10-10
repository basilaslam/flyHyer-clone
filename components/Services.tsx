"use client"
import Image from "next/image";
import { Button } from "./ui/button";
import { motion } from "framer-motion"
import { fadeinAnimationsVariants } from "@/lib/animations";

const Services = () => {

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 md:h-[900px] mt-16">
      <div className="bg-[#151623] relative h-[400px] md:h-full">
        <motion.h1 variants={fadeinAnimationsVariants} initial="initial" whileInView={"animate"} viewport={{once: true}} className="m-5 font-bold text-white text-4xl md:text-[53px] 2xl:text-[67px] md:m-16 mb-28 lg:leading-[67px]">Flexible <br className="hidden md:block" /> Services</motion.h1>
        <div className=" absolute bottom-0 left-0 ml-5 md:mx-20 my-16">
            <motion.h3 variants={fadeinAnimationsVariants} initial="initial" whileInView={"animate"} viewport={{once: true}} className="text-xl md:text-xl 2xl:text-2xl text-white font-bold w-full md:w-5/6 md:leading-[22px]">Smart solution for all your charter requirements</motion.h3>
            <Button variant={"outline"} className="2xl:py-8 font-bold text-lg mt-6 rounded-full" size={"lg"}>
                <motion.a href=""variants={fadeinAnimationsVariants} initial="initial" whileInView={"animate"} viewport={{once: true}} className="">All Solutions</motion.a>
            </Button>
        </div>
      </div>
      <div className="w-full relative h-[400px] md:h-full">
        <Image objectFit="cover" src={'https://images.unsplash.com/photo-1616193572425-fd11332ec645?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2127&q=80'} fill alt={""}/>
        <div className="group/demand absolute bottom-0 left-0 mx-20 my-16">
            <motion.h2 variants={fadeinAnimationsVariants} initial="initial" whileInView={"animate"} viewport={{once: true}}
             className="text-4xl text-white font-bold flex gap-4">
                On-Demand 
                <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" className="hidden my-auto group-hover/demand:block" width="24" height="24" viewBox="0 0 24 24"><path d="M24 12l-9-9v7h-15v4h15v7z"/></svg>
             </motion.h2>

             <motion.p variants={fadeinAnimationsVariants} initial="initial" whileInView={"animate"} viewport={{once: false}}
              className="text-2xl text-white hidden group-hover/demand:block animate-fade">Book your aircraft. Customize all aspects of your journey. </motion.p>
        </div>
      </div>
      <div className="bg-[#B57157] relative w-full h-[400px] md:h-full">
        <Image src={'/images/plain-path.svg'} alt=""  className="h-full w-full"  objectFit="contain" fill/>
        <div className="group/shared absolute bottom-0 left-0 mx-20 my-16">
            <motion.h2 variants={fadeinAnimationsVariants} initial="initial" whileInView={"animate"} viewport={{once: true}}
             className="text-4xl text-white font-bold flex gap-4">
                On-Demand 
                <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" className="hidden my-auto group-hover/shared:block" width="24" height="24" viewBox="0 0 24 24"><path d="M24 12l-9-9v7h-15v4h15v7z"/></svg>
             </motion.h2>

             <motion.p variants={fadeinAnimationsVariants} initial="initial" whileInView={"animate"} viewport={{once: false}}
              className="text-2xl text-white hidden group-hover/shared:block animate-fade">Book your aircraft. Customize all aspects of your journey. </motion.p>
        </div>
      </div>
    </div>
  );
};

export default Services;
