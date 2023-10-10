"use client"
import { SetStateAction, useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import { Button } from './ui/button';

function Carousel() {
  const slides = [
    {
      url: 'https://www.datocms-assets.com/40358/1620758681-cabin.jpg?ar64=MTY6OQ&auto=format&crop=focalpoint&dpr=1.5&fit=crop&fp-x=0.48&fp-y=0.56&w=1760',
    },
    {
      url: 'https://www.datocms-assets.com/40358/1612349563-woman-on-a-business-jet-b.jpg?ar64=MTY6OQ&auto=format&crop=focalpoint&dpr=1.5&fit=crop&fp-x=0.31&fp-y=0.47&w=1760',
    },
    {
      url: 'https://www.datocms-assets.com/40358/1629201451-luxury-business-jet-cabin.jpg?ar64=MTY6OQ&auto=format&dpr=1.5&fit=crop&w=1760',
    },

    {
      url: 'https://www.datocms-assets.com/40358/1620758494-customer-reclining.jpg?ar64=MTY6OQ&auto=format&crop=focalpoint&dpr=1.5&fit=crop&fp-x=0.49&fp-y=0.46&w=1760',
    },
    {
      url: 'https://www.datocms-assets.com/40358/1620758503-inside-heavy-jet.jpg?ar64=MTY6OQ&auto=format&crop=focalpoint&dpr=1.5&fit=crop&fp-x=0.53&fp-y=0.5&w=1760',
    },
    {
      url: 'https://www.datocms-assets.com/40358/1611911585-flyhyer.png?ar64=MTY6OQ&auto=format&dpr=1.5&fit=crop&w=1760',
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: SetStateAction<number>) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className='max-w-[1760px] h-full w-full m-auto py-16 px-4 group mb-24'>
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className='w-full h-[300px] md:h-[750px] grid grid-cols-3 bg-center duration-500 relative bg-cover'
      >
        <div onClick={prevSlide}></div>
        <div></div>
        <div onClick={nextSlide}></div>
    <div className='hidden md:flex absolute bottom-5 right-5'>

<div className=' text-2xl rounded-full p-2  text-black cursor-pointer'>
<svg onClick={prevSlide} className=" w-16 h-16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 33 33"><path d="M9.22 14.28H32.89V19.635H9.175C10.495 21.225 12.04 23.205 13.81 25.575L19.435 33H12.235L0.13 16.98L12.235 0.959999H19.435L13.81 8.385C12.52 10.095 10.99 12.06 9.22 14.28Z" fill="white"></path></svg>
</div>
{/* Right Arrow */}
<div className=' text-2xl rounded-full p-2  text-black cursor-pointer'>
  <svg onClick={nextSlide} className="w-16 h-16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 33 33"><path d="M13.585 0.959999H20.785L32.89 16.98L20.785 33H13.585L19.21 25.575C20.98 23.205 22.525 21.225 23.845 19.635H0.13V14.28H23.8C22.03 12.06 20.5 10.095 19.21 8.385L13.585 0.959999Z" fill="white"></path></svg>
</div>
<h3 className=' text-6xl font-bold text-white my-auto'>{currentIndex+1}/6</h3>
</div>
      </div>
      {/* Left Arrow */}
   
      <div className='flex top-4 justify-center py-2'>
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className='text-2xl cursor-pointer'
          >
          </div>
        ))}
      </div>
    </div>
  );
}

export default Carousel;