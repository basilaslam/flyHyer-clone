"use client"
import { motion } from "framer-motion"
import { fadeinAnimationsVariants } from "@/lib/animations"
import { Button } from "./ui/button"
const Experiance = () => {
    return(
        <div className="m-5 md:m-20">
            <motion.h1 className="text-6xl md:text-7xl lg:text-9xl 2xl:text-[250px] font-bold md:leading-[20px] 2xl:leading-[194px]">Hyer® <br className="hidden 2xl:block"/>Experience</motion.h1>

            <div className="md:flex my-36">
                <div className="w-full md:w-1/2">
                    {/* Left */}
            <motion.p  variants={fadeinAnimationsVariants} initial="initial" whileInView={"animate"} viewport={{once: true}} className="text-lg mb-10 md:text-xl w-full md:w-7/12 leading-[22px] tracking-tight 2xl:text-[25px]">
            At Hyer® we are bold. The aircraft is just a tool we use to get you where you want to be. Our clients enjoy much more value for their investment, accessing unparalleled personalisation when flying private.
            <br/>
            <br/>
            We offer <strong>personalised experiences</strong> with our <strong>on-demand</strong> charters and <strong>personalised flexibility</strong> with our exclusive <strong>shared flight.</strong>  We upgrade the way you fly.
            </motion.p>
            {/* Right */}
                </div>
                <div className="w-full md:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-y-14 gap-x-5">
                     
                    <div>
                        <motion.div variants={fadeinAnimationsVariants} initial="initial" whileInView={"animate"} viewport={{once: true}} className="border-dashed border-2 rounded-br-3xl w-fit p-9 border-gray-400 relative">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 256 256" className="IconItem_icon__2BpcG"><rect width="256" height="256" fill="none"></rect><line x1="152" y1="112" x2="192" y2="112" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"></line><line x1="152" y1="144" x2="192" y2="144" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"></line><circle cx="92.10043" cy="120" r="24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"></circle><path d="M61.10869,167.99952a32.01032,32.01032,0,0,1,61.98292-.00215" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"></path><rect x="32" y="48.00005" width="192" height="160" rx="8" strokeWidth="8" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" fill="none"></rect></svg>                        </motion.div>

                        <motion.h2 variants={fadeinAnimationsVariants} initial="initial" whileInView={"animate"} viewport={{once: true}} className="font-semibold text-[23px] mt-10 mb-5" >Rewarding Membership</motion.h2>
                        <motion.p variants={fadeinAnimationsVariants} initial="initial" whileInView={"animate"} viewport={{once: true}} className="text-xl 2xl:text-[25px]">Our membership blends the advantage of a jet card with the easiness of a loyalty program. Get access to services not available anywhere without hefty fees.</motion.p>
                    </div>

                    <div>
                        <motion.div variants={fadeinAnimationsVariants} initial="initial" whileInView={"animate"} viewport={{once: true}} className="border-dashed border-2 rounded-br-3xl w-fit p-9 border-gray-400 relative">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 256 256" className="IconItem_icon__2BpcG"><rect width="256" height="256" fill="none"></rect><circle cx="88.00033" cy="108" r="52" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"></circle><path d="M155.41251,57.937A52.00595,52.00595,0,1,1,169.52209,160" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"></path><path d="M15.99613,197.39669a88.01736,88.01736,0,0,1,144.00452-.00549" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"></path><path d="M169.52209,160a87.89491,87.89491,0,0,1,72.00032,37.3912" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"></path></svg>                        </motion.div>

                        <motion.h2 variants={fadeinAnimationsVariants} initial="initial" whileInView={"animate"} viewport={{once: true}} className="font-semibold text-[23px] mt-10 mb-5" >Exclusive Shared Flights</motion.h2>
                        <motion.p variants={fadeinAnimationsVariants} initial="initial" whileInView={"animate"} viewport={{once: true}} className="text-xl 2xl:text-[25px]">Clients can book a seat on selected routes, sharing the costs with like-minded people. Experience the benefits of flying private for a fraction of the price.</motion.p>
                    </div>

                    <div>
                        <motion.div variants={fadeinAnimationsVariants} initial="initial" whileInView={"animate"} viewport={{once: true}} className="border-dashed border-2 rounded-br-3xl w-fit p-9 border-gray-400 relative">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 256 256" className="IconItem_icon__2BpcG"><rect width="256" height="256" fill="none"></rect><line x1="160" y1="96" x2="24" y2="232" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"></line><path d="M46.783,209.217A128.08756,128.08756,0,0,1,209.217,46.783,128.08756,128.08756,0,0,1,46.783,209.217Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"></path></svg>                        </motion.div>

                        <motion.h2 variants={fadeinAnimationsVariants} initial="initial" whileInView={"animate"} viewport={{once: true}} className="font-semibold text-[23px] mt-10 mb-5" >CO2 Neutral Flights</motion.h2>
                        <motion.p variants={fadeinAnimationsVariants} initial="initial" whileInView={"animate"} viewport={{once: true}} className="text-xl 2xl:text-[25px]">We play our part to ensure a more sustainable future. Via Hyer® CO2 offset program, clients can offset the entire emission of their flights.</motion.p>
                    </div>


                    <div className="hidden md:block">
                        <motion.div variants={fadeinAnimationsVariants} initial="initial" whileInView={"animate"} viewport={{once: true}} className="border-dashed border-2 rounded-br-3xl w-fit p-9 border-gray-400 relative">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 256 256" className="IconItem_icon__2BpcG"><rect width="256" height="256" fill="none"></rect><rect x="64" y="24" width="128" height="208" rx="16" strokeWidth="8" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" fill="none"></rect><line x1="64" y1="56" x2="192" y2="56" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"></line><line x1="64" y1="200" x2="192" y2="200" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"></line></svg>                        </motion.div>

                        <motion.h2 variants={fadeinAnimationsVariants} initial="initial" whileInView={"animate"} viewport={{once: true}} className="font-semibold text-[23px] mt-10 mb-5" >Digital Care</motion.h2>
                        <motion.p variants={fadeinAnimationsVariants} initial="initial" whileInView={"animate"} viewport={{once: true}} className="text-xl 2xl:text-[25px]">We don't do business as if it was the 80's. Receive instant estimates online. Get a quote with one click. Book your aircraft via a seamless process.</motion.p>
                    </div>


                    <div className="hidden md:block">
                        <motion.div variants={fadeinAnimationsVariants} initial="initial" whileInView={"animate"} viewport={{once: true}} className="border-dashed border-2 rounded-br-3xl w-fit p-9 border-gray-400 relative">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 256 256" className="IconItem_icon__2BpcG"><rect width="256" height="256" fill="none"></rect><rect x="32" y="48" width="192" height="160" rx="8" strokeWidth="8" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" fill="none"></rect><path d="M168,88a40,40,0,0,1-80,0" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"></path></svg>
                        </motion.div>
                        <motion.h2 variants={fadeinAnimationsVariants} initial="initial" whileInView={"animate"} viewport={{once: true}} className="font-semibold text-[23px] mt-10 mb-5" >Service Add-ons</motion.h2>
                        <motion.p variants={fadeinAnimationsVariants} initial="initial" whileInView={"animate"} viewport={{once: true}} className="text-2xl 2xl:text-[25px]">Avoid hidden fees and pay only for the service that you need. Upgrade your flight with multiple add-ons. Shape your trip to meet your requirements.</motion.p>
                    </div>


                    <div className="hidden md:block">
                        <motion.div variants={fadeinAnimationsVariants} initial="initial" whileInView={"animate"} viewport={{once: true}} className="border-dashed border-2 rounded-br-3xl w-fit p-9 border-gray-400 relative">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 256 256" className="IconItem h-14 w-14"><rect width="256" height="256" fill="none"></rect><path d="M176,128.009a239.296,239.296,0,0,1-17.934,91.1974" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"></path><path d="M163.775,96.006A48.00042,48.00042,0,0,0,80,128.009a143.35045,143.35045,0,0,1-17.98008,69.73221" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"></path><path d="M95.99938,37.47183A96.06708,96.06708,0,0,1,224,128.009a288.94528,288.94528,0,0,1-7.13641,63.99948" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"></path><path d="M23.29531,168.00907A95.64559,95.64559,0,0,0,32,128.009,95.76081,95.76081,0,0,1,63.99975,56.45385" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"></path><path d="M110.57869,208.009q-3.04225,6.62844-6.56532,12.97841" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"></path><path d="M127.98828,128.00842a192.34737,192.34737,0,0,1-6.0489,48.00023" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"></path></svg>
                        </motion.div>

                        <motion.h2
                            variants={fadeinAnimationsVariants}
                            initial="initial"
                            whileInView={"animate"}
                            viewport={{ once: true }}
                            className="font-semibold text-[23px] mt-10 mb-5"
                        >
                            Personal Flight Manager
                        </motion.h2>
                        <motion.p
                            variants={fadeinAnimationsVariants}
                            initial="initial"
                            whileInView={"animate"}
                            viewport={{ once: true }}
                            className="text-xl 2xl:text-[25px]"
                        >
                        Our experts can support any trip and request, 24/07. From short business trips to large groups crossing the globe for leisure. Enjoy a stress-free booking process.
                        </motion.p>
                        </div>
                </div>
            </div>

            <Button className='bg-black rounded-full text-lg font-bold my-14' size={"lg"}>Book an Aicraft</Button>
        </div>
    )
}

export default Experiance