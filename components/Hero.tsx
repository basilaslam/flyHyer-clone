import { fadeinAnimationsVariants } from "@/lib/animations";
import { Button } from "./ui/button";
import { motion } from "framer-motion";


const Hero = () => {


    return(
 
<div className="h-[400px] md:h-screen block md:flex flex-col justify-between" style={{backgroundImage: 'url("/images/plain.png")', backgroundSize: "cover"}}>
  <div className="header block md:flex pt-14 ml-5 md:ml-20 lg:justify-between">
    <motion.svg variants={fadeinAnimationsVariants} initial="initial" whileInView={"animate"} viewport={{once: true}} className="w-32 md:w-1/2 min-w-[100px]" viewBox="0 0 959 376" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M254.658 0H195.027V302.128H254.658V0Z" fill="#000D10"></path><path fillRule="evenodd" clipRule="evenodd" d="M0 0H59.6306V302.128H0V0ZM59.6313 123.237H195.028C195.028 150.129 173.28 171.643 146.622 171.643H59.6313V123.237Z" fill="#000D10"></path><path d="M291.372 375.088V330.892H313.119C332.295 330.892 340.713 331.359 350.535 307.507L353.107 301.193L267.286 77.8706H330.19L380.935 239.458L433.082 77.8706H491.31L409.23 295.347C382.572 365.033 371.347 374.854 315.458 374.854H291.372V375.088Z" fill="#000D10"></path><path d="M540.885 205.784C544.158 244.134 570.115 262.842 597.475 262.842C615.481 262.842 632.786 256.528 644.478 237.119H703.875C691.715 270.559 659.21 307.507 597.943 307.507C525.918 307.507 483.826 253.722 483.826 189.181C483.826 122.535 530.128 72.9595 596.306 72.9595C665.524 72.9595 708.318 126.744 706.213 205.784H540.885ZM541.82 166.264H647.986C646.817 128.381 620.158 115.052 595.838 115.052C574.324 115.052 546.263 128.381 541.82 166.264Z" fill="#000D10"></path><path d="M857.278 133.292C848.86 132.123 841.844 132.123 833.426 132.123C805.131 132.123 786.423 142.646 786.423 184.738V302.362H728.897V77.8706H785.488V117.157C798.349 89.329 818.46 78.3383 844.651 78.3383C848.392 78.3383 853.303 78.806 857.044 79.2737V133.292H857.278Z" fill="#000D10"></path><path d="M917.843 82.3136C895.16 82.3136 876.687 63.8398 876.687 41.1568C876.687 18.4738 895.16 0 917.843 0C940.526 0 959 18.4738 959 41.1568C959 63.8398 940.526 82.3136 917.843 82.3136ZM917.843 7.01537C898.902 7.01537 883.702 22.4492 883.702 41.1568C883.702 60.0983 899.136 75.2983 917.843 75.2983C936.785 75.2983 951.985 59.8645 951.985 41.1568C951.985 22.2153 936.551 7.01537 917.843 7.01537Z" fill="#000D10"></path><path d="M919.014 44.8982H917.143H910.829V60.0982H903.112V21.5137H915.74C928.368 21.5137 933.278 25.0214 933.278 33.2059C933.278 37.649 931.174 41.3905 926.263 43.2613L934.915 59.8643H926.497L919.014 44.8982ZM910.829 27.3598V39.0521H917.143C923.223 39.0521 925.561 37.1813 925.561 33.2059C925.561 28.7629 921.82 27.3598 916.675 27.3598H910.829Z" fill="#000D10"></path></motion.svg>
    <div className="top mt-24 md:mt-0 md:ml-20 md:mr-5">
      <div className="top hidden md:flex gap-14">
        <motion.ul variants={fadeinAnimationsVariants} initial="initial" whileInView={"animate"} viewport={{once: true}} className="hidden md:flex gap-4 md:ml-5 2xl:ml-10 md:mr-0 2xl:mr-14">
          <li className="text-base 2xl:text-xl"><span className="small-underline-hover-effect cursor-pointer">Solutions</span></li>
          <li className="text-base 2xl:text-xl w-20 lg:w-auto"><span className="small-underline-hover-effect cursor-pointer">About us</span></li>
          <li className="text-base 2xl:text-xl"><span className="small-underline-hover-effect cursor-pointer">Contact</span></li>
        </motion.ul>

        <div className="flex ml-8 gap-4">
        <button className="bg-black rounded-full w-12 h-12 text-white" type="button">
          <svg className="mx-auto h-4 w-4" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><line x1="40" y1="128" x2="216" y2="128" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"></line><line x1="40" y1="64" x2="216" y2="64" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"></line><line x1="40" y1="192" x2="216" y2="192" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"></line></svg>
          </button>
          <button className="bg-black rounded-full w-12 h-12 text-white" type="button">
            <svg className="mx-auto h-4 w-4" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M128,224l-40,8V208l16-16V152L24,168V144l80-40,.11255-56a24,24,0,0,1,48,0l.11255,56,80,40v24l-80-16v40L168,208v24Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"></path></svg>
            </button>
            </div>
        </div>
      <div className="w-full md:w-auto bottom h-full md:flex justify-center items-center">
      <motion.h2 variants={fadeinAnimationsVariants} initial="initial" whileInView={"animate"} viewport={{once: true}} className="font-bold text-5xl md:text-6xl lg:text-7xl">Personalised<br className="hidden md:block"/>Aviation</motion.h2>
    </div>
      </div>
  </div>

  <div className=" w-[90%] mx-auto md:flex justify-between">
    <div>
      <motion.p variants={fadeinAnimationsVariants} initial="initial" whileInView={"animate"} viewport={{once: true}} className="text-xl md:text-2xl font-bold  md:m-20">More flexibility, freedom and choice!</motion.p>
    </div>
    <motion.div variants={fadeinAnimationsVariants} initial="initial" whileInView={"animate"} viewport={{once: true}} className="my-5 flex md:hidden gap-4">
      <Button className="rounded-full md:text-lg md:font-bold bg-black" size={"sm"}>Book an Aircraft</Button>
      <Button className="rounded-full md:text-lg md:font-bold bg-black" size={"sm"}>Book a Shared Flight</Button>
    </motion.div>
    <motion.div variants={fadeinAnimationsVariants} initial="initial" whileInView={"animate"} viewport={{once: true}} className="hidden md:flex my-auto gap-4">
      <Button className="rounded-full md:text-lg md:font-bold bg-black" size={"lg"}>Book an Aircraft</Button>
      <Button className="rounded-full md:text-lg md:font-bold bg-black" size={"lg"}>Book a Shared Flight</Button>
    </motion.div>
  </div>

  </div>
      
    )
}

export default Hero
