"use client"
import { fadeinAnimationsVariants } from "@/lib/animations";
import { motion } from "framer-motion";


export const Benefits = () => {
  return (
    <div className="mx-3 md:mx-0 mt-12">
        <div className="mx-1 md:mx-0 md:ml-[40%] mb-24 md:mb-16 w-full md:w-auto">
          <motion.h2 variants={fadeinAnimationsVariants} initial="initial" whileInView={"animate"} viewport={{once: true}} className="w-full md:w-auto font-poppins font-bold text-3xl md:text-7xl md:mr-64 leading-[30px]">
            We believe that in a world where passengers have become numbers, a
            personal approach is key to ensure you get the most out of your
            flying experience.
          </motion.h2>
          <hr className="md:hidden"/>
        </div>
      <ul
        className="md:ml-[40%] md:mr-48 grid grid-cols-1 md:grid-cols-2 md:gap-y-4 gap-x-7 mt-4
        "
      >
        <li className="border-t border-black pt-4 pb-8 md:ml[40%] w-full md:w-11/12">
          <div className="">
            <motion.h3 variants={fadeinAnimationsVariants} initial="initial" whileInView={"animate"} viewport={{once: true}} className="font-bold text-xl md:text-3xl w-full">Flexible Solutions</motion.h3>
            <div className="">
              <motion.p variants={fadeinAnimationsVariants} initial="initial" whileInView={"animate"} viewport={{once: true}} className="text-textSecondery text-lg my-2">
                <span>Stop depending on airlines. </span>Fly on your own terms
                or join our exclusive shared flights.
              </motion.p>
            </div>
          </div>
        </li>
        <li className="border-t border-black pt-4 pb-8 w-full md:w-11/12">
          <div className="">
            <motion.h3 variants={fadeinAnimationsVariants} initial="initial" whileInView={"animate"} viewport={{once: true}} className="font-bold text-xl md:text-3xl w-full">Smart Quotes</motion.h3>
            <div className="TextItem_content__2Z20-">
              <motion.p variants={fadeinAnimationsVariants} initial="initial" whileInView={"animate"} viewport={{once: true}} className="text-textSecondery text-lg my-2">
                Know what you are paying for.{" "}
                <span>No hidden fees. No overpromises. </span>
                <span>Flights suitable for your needs.</span>
              </motion.p>
            </div>
          </div>
        </li>
        <li className="border-t border-black pt-4 pb-8 w-full md:w-11/12">
          <div className="TextItem_textItem__2j-f7">
            <motion.h3 variants={fadeinAnimationsVariants} initial="initial" whileInView={"animate"} viewport={{once: true}} className="font-bold text-xl md:text-3xl w-full">Fully Customizable</motion.h3>
            <div className="TextItem_content__2Z20-">
              <motion.p variants={fadeinAnimationsVariants} initial="initial" whileInView={"animate"} viewport={{once: true}} className="text-textSecondery text-lg my-2">
                <span>Control all aspects of your journey.</span>
                <span>&nbsp;Easily upgrade services with our add-ons.</span>
              </motion.p>
            </div>
          </div>
        </li>
        <li className="border-t border-black pt-4 pb-8 w-full md:w-11/12">
          <div className="TextItem_textItem__2j-f7">
            <motion.h3 variants={fadeinAnimationsVariants} initial="initial" whileInView={"animate"} viewport={{once: true}} className="font-bold text-xl md:text-3xl w-full">Personalization </motion.h3>
            <div className="TextItem_content__2Z20-">
              <motion.p variants={fadeinAnimationsVariants} initial="initial" whileInView={"animate"} viewport={{once: true}} className="text-textSecondery text-lg my-2">
                Receive full support of our Flight Management service. We have
                you covered, anywhere.
              </motion.p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};
