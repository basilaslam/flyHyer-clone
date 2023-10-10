const BookFlight = () => {
    return(
        <div className=" relative bg-sky h-[900px] bg-cover flex justify-center items-center bg-slate-200 my-34" style={{ backgroundImage: `url('https://www.flyhyer.com/images/home-cta-clouds.png?auto=format&fit=max&w=1920&q=100')`}}>
           <div className="absolute h-28 w-full bg-gradient-to-b from-[#F2F5F9] via-[#F2F5F9] to-[#E3E8F0] top-0"></div>
            <div>
                <h3 className=" text-gray-500 font-bold text-xl md:text-4xl text-center 2xl:text-[38px]">What are you waiting for?</h3>
                <h1 className="text-6xl mx-auto md:text-9xl font-bold text-center underline-hover-effect 2xl:text-[170px]">Book a flight</h1>
            </div>
        </div>
    )
}

export default BookFlight