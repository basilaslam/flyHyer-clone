const BookFlight = () => {
    return(
        <div className="bg-sky h-[500px] bg-cover flex justify-center items-center bg-slate-100" style={{ backgroundImage: `url('https://www.flyhyer.com/images/home-cta-clouds.png?auto=format&fit=max&w=1920&q=100')`}}>
            <div>
                <h3 className=" text-gray-500 font-bold text-xl md:text-4xl text-center">What are you waiting for?</h3>
                <h1 className="text-6xl mx-auto md:text-9xl font-bold text-center underline-hover-effect">Book a flight</h1>
            </div>
        </div>
    )
}

export default BookFlight