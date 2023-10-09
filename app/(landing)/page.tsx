"use client"
import { Benefits } from "@/components/Benefits";
import Destination from "@/components/Destination";
import Experiance from "@/components/Experiance";
import FlightManager from "@/components/Manager";
import Services from "@/components/Services";
import Carousel from "@/components/Carousel";
import BookFlight from "@/components/Book";
// import Hero from "@/components/Hero-threejs";
import Hero from "@/components/Hero"
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <>
        <Hero />
        <Benefits/> {/*optimized for mobile */}
        <Services/>
        <Destination/>
        <FlightManager />
        <Experiance/>
        <Carousel/>
        <BookFlight/>
        <Footer/>
        </>

    )
  }
  