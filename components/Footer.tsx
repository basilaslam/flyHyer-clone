import { motion } from "framer-motion"

const Footer = () => {
    return(
        <div className=" bg-[#020D10] p-16">
            <div className="">
                <svg className="w-40" viewBox="0 0 116 45" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M30.8032 0H23.5903V36.2469H30.8032V0Z" fill="white"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H7.21288V36.2469H0V0ZM7.21297 14.7849H23.5904C23.5904 18.0112 20.9599 20.5923 17.7353 20.5923H7.21297V14.7849Z" fill="white"></path><path d="M35.2441 45V39.6976H37.8747C40.1941 39.6976 41.2124 39.7537 42.4004 36.8921L42.7116 36.1347L32.3307 9.34227H39.9396L46.0776 28.7282L52.3853 9.34227H59.4285L49.5002 35.4333C46.2756 43.7936 44.9179 44.9719 38.1576 44.9719H35.2441V45Z" fill="white"></path><path d="M65.4251 24.6882C65.8211 29.2892 68.9608 31.5336 72.2702 31.5336C74.4483 31.5336 76.5414 30.7761 77.9557 28.4476H85.1403C83.6695 32.4594 79.7377 36.8921 72.3268 36.8921C63.6148 36.8921 58.5233 30.4395 58.5233 22.6963C58.5233 14.7007 64.1239 8.75308 72.1288 8.75308C80.5014 8.75308 85.6777 15.2057 85.4232 24.6882H65.4251ZM65.5382 19.947H78.38C78.2386 15.4021 75.014 13.803 72.0722 13.803C69.4699 13.803 66.0756 15.4021 65.5382 19.947Z" fill="white"></path><path d="M103.696 15.9913C102.677 15.851 101.829 15.851 100.811 15.851C97.388 15.851 95.1252 17.1135 95.1252 22.1633V36.2749H88.1669V9.34227H95.012V14.0555C96.5677 10.717 99.0003 9.39838 102.168 9.39838C102.621 9.39838 103.215 9.45449 103.667 9.5106V15.9913H103.696Z" fill="white"></path><path d="M111.022 9.87531C108.278 9.87531 106.043 7.65898 106.043 4.93766C106.043 2.21633 108.278 0 111.022 0C113.765 0 116 2.21633 116 4.93766C116 7.65898 113.765 9.87531 111.022 9.87531ZM111.022 0.841646C108.731 0.841646 106.892 2.69327 106.892 4.93766C106.892 7.2101 108.759 9.03367 111.022 9.03367C113.313 9.03367 115.152 7.18204 115.152 4.93766C115.152 2.66521 113.285 0.841646 111.022 0.841646Z" fill="white"></path><path d="M111.163 5.38653H110.937H110.173V7.21009H109.24V2.58104H110.767C112.295 2.58104 112.889 3.00186 112.889 3.98378C112.889 4.51682 112.634 4.9657 112.04 5.19014L113.087 7.18204H112.068L111.163 5.38653ZM110.173 3.28241V4.68515H110.937C111.672 4.68515 111.955 4.46072 111.955 3.98378C111.955 3.45074 111.503 3.28241 110.88 3.28241H110.173Z" fill="white"></path></svg>
            </div>
            <div className="md:flex flex-row gap-4  w-full h-full ">
                <div className="w-80 flex flex-col justify-between mb-10">
                    <div className="mt-32">
                        <h4 className=" font-bold text-3xl mb-3 text-white">Follow us</h4>
                        <ul className="flex gap-3">
                            <li>
                            <button className="bg-white p-4 rounded-full"><svg className=" text-black  w-7 h-7" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><circle cx="128" cy="128" r="40" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"></circle><rect x="36" y="36" width="184" height="184" rx="48" stroke-width="8" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" fill="none"></rect><circle cx="180" cy="75.99998" r="8"></circle></svg>
                            </button>
                            </li>
                            <li>
                            <button className="bg-white p-4 rounded-full"><svg className=" text-black  w-7 h-7" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><circle cx="128" cy="128" r="96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"></circle><path d="M168,88.00094H152a24,24,0,0,0-24,24v112" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"></path><line x1="96" y1="144.00094" x2="160" y2="144.00094" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"></line></svg>
                            </button>
                            </li>
                            <li>
                            <button className="bg-white p-4 rounded-full"><svg className=" text-black  w-7 h-7" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><rect x="40" y="40" width="176" height="176" rx="8" stroke-width="8" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" fill="none"></rect><line x1="120" y1="112.00094" x2="120" y2="176.00094" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"></line><line x1="88" y1="112.00094" x2="88" y2="176.00094" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"></line><path d="M120,140.00094a28,28,0,1,1,56,0v36" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"></path><circle cx="88" cy="79.99998" r="8"></circle></svg>
                            </button>
                            </li>
                        </ul>
                    </div>

                </div>


                <div className="flex flex-col justify-around w-80 ml-3 lg:ml-72 gap-y-24">
                    <div>
                        <motion.h3 className="text-3xl  font-bold text-white">On-demand</motion.h3>
                        <motion.p className="text-xl md:text-2xl  text-[#8E8E95] my-1 hover:text-[#fff] cursor-pointer">Private charter</motion.p>
                    </div>

                    <div>
                    <motion.h3 className="text-3xl  font-bold text-white">Company</motion.h3>
                    <ul>
                        <li>
                        <motion.p className="text-xl md:text-2xl  text-[#8E8E95] my-1 hover:text-[#fff] cursor-pointer">About us</motion.p>
                        </li>
                        <li>
                        <motion.p className="text-xl md:text-2xl  text-[#8E8E95] my-1 hover:text-[#fff] cursor-pointer">Solution</motion.p>
                        </li>
                        <li>
                        <motion.p className="text-xl md:text-2xl  text-[#8E8E95] my-1 hover:text-[#fff] cursor-pointer">News</motion.p>
                        </li>
                        <li>
                        <motion.p className="text-xl md:text-2xl  text-[#8E8E95] my-1 hover:text-[#fff] cursor-pointer">Contact</motion.p>
                        </li>
                    </ul>
                    </div>
                </div> 
                <div className="flex flex-col justify-around w-80 ml-3 md:ml-36 gap-y-24">
                    <div>
                        <motion.h3 className="text-3xl  font-bold text-white">Shared Flights</motion.h3>
                        <motion.p className="text-xl md:text-2xl  text-[#8E8E95] my-1 hover:text-[#fff] cursor-pointer">Available flights</motion.p>
                        <motion.p className="text-xl md:text-2xl  text-[#8E8E95] my-1 hover:text-[#fff] cursor-pointer">Propose a Flight</motion.p>
                    </div>

                    <div>
                    <motion.h3 className="text-3xl  font-bold text-white">My account</motion.h3>
                    <ul>
                        <li>
                        <motion.p className="text-xl md:text-2xl  text-[#8E8E95] my-1 hover:text-[#fff] cursor-pointer">Register</motion.p>
                        </li>
                        <li>
                        <motion.p className="text-xl md:text-2xl  text-[#8E8E95] my-1 hover:text-[#fff] cursor-pointer">Login</motion.p>
                        </li>
                        <li>
                        <motion.p className="text-xl md:text-2xl  text-[#8E8E95] my-1 hover:text-[#fff] cursor-pointer">Dashboard</motion.p>
                        </li>
                    </ul>
                    </div>
                </div> 


                <div className="hidden xl:block w-80 ml-3 md:ml-36">
                    <div>
                        <motion.h3 className="text-3xl  font-bold text-white">Membership</motion.h3>
                        <motion.p className="text-xl md:text-2xl  text-[#8E8E95] my-1 hover:text-[#fff] cursor-pointer">Elevate</motion.p>
                    </div>
                </div> 


                
            </div>
            <div className="flex mt-20">
            <div className=" w-2/6">
                 <motion.p className="text-[#fff] text-xl mb-14 ">© Hyer Aviation 2023</motion.p>

                        <motion.p className="text-[#8E8E95] hover:text-[#fff] text-xl">Cookie policy
                        Terms & Conditions
                        Privacy Policy
                        Hyer® HQ - Eindhoven, The Netherlands
                        Registered on the Dutch Chamber of Commerce: 80195520</motion.p>
            </div>

                <div className=" hidden md:block w-full ml-3 lg:ml-48">

                    <ul className="md:flex gap-x-32 my-10 w-full">
                        <li>
                        <motion.p className="text-xl md:text-2xl  text-[#8E8E95] hover:text-[#fff] cursor-pointer">Cookie policy</motion.p>
                        </li>
                        <li>
                        <motion.p className="text-xl md:text-2xl  text-[#8E8E95] hover:text-[#fff] cursor-pointer">Terms & Conditions</motion.p>
                        </li>
                        <li>
                        <motion.p className="text-xl md:text-2xl  text-[#8E8E95] hover:text-[#fff] cursor-pointer">Privacy Policy</motion.p>
                        </li>
                    </ul>
 
                    <motion.p className="text-[#8E8E95] hover:text-[#fff] md:text-xl">Hyer® is a charter broker with a global digital platform and is not a direct air carrier. All flights advertised to which Hyer® has access are owned and operated by a properly licensed third party air carrier, compliant with rules outlined by the European Union Aviation Safety Agency (or other appropriate authority under foreign law). Hyer® does not carry additional liability insurance. Passengers are covered by the aircraft operator insurance.</motion.p>
                </div>
                </div>
        </div>
    )
}

export default Footer