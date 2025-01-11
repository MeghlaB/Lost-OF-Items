import { useCallback, useEffect, useState } from "react";

import image1 from '../../src/assets/Imaegs/found.jpeg'
import image2 from '../../src/assets/Imaegs/found.jpg'
import image3 from '../../src/assets/Imaegs/lost.jpeg'
import image4 from '../../src/assets/Imaegs/jni n.jpeg'


export default function Banner() {
  const [currentSlider, setCurrentSlider] = useState(0);
  const carouselImages = [
    { image:image1, title: "Lost & Found Central", description: "Your hub for finding lost items and sharing found treasures. Together, we make recovery simple!" },
    { image: image2, title: "Reconnect with What’s Lost", description: "Turn chances into reality. ." },
    { image: image3, title: "Lost & Found Alliance", description: "Be the change. Share found items or locate your missing ones." },
    { image: image4, title: "Treasure Recovery Zone", description: "Lost something special? Found something valuable? ." }
  ];

  const prevSlider = () => setCurrentSlider((currentSlider) => currentSlider === 0 ? carouselImages.length - 1 : currentSlider - 1);
  const nextSlider = useCallback(() => setCurrentSlider((currentSlider) => currentSlider === carouselImages.length - 1 ? 0 : currentSlider + 1), [carouselImages.length]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlider();
    }, 3000);
    return () => clearInterval(intervalId);
  }, [nextSlider]);

  return (
    <div className="h-60 w-full md:h-[470px] lg:h-[540px] relative overflow-hidden">

  <button onClick={prevSlider} className="absolute top-1/2 left-3 z-50 flex justify-center items-center bg-white rounded-full w-6 h-6 md:w-8 md:h-8">
    <svg className="icon h-4 w-4 fill-black/50 md:h-6 md:w-6" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"></path></svg>
  </button>

  <button onClick={nextSlider} className="absolute top-1/2 z-50 right-3 flex justify-center items-center bg-white rounded-full w-6 h-6 md:w-8 md:h-8">
    <svg className="icon h-4 w-4 fill-black/50 md:h-6 md:w-6" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" transform="rotate(180)"><path d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"></path></svg>
  </button>

  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-xl sm:text-2xl md:text-3xl font-bold z-50">
    <h3 className='space-y-3 text-purple-500 typewriter '>
      {carouselImages[currentSlider].title}
    </h3>
    <p className='text-xs md:text-xl'>{carouselImages[currentSlider].description}</p>
  </div>

  <div className="flex justify-center items-center rounded-full z-50 absolute bottom-4 w-full gap-1">
    {carouselImages.map((img, idx) => (
      <button 
        key={`${img.title}_${idx}`} 
        onClick={() => setCurrentSlider(idx)} 
        className={`rounded-full duration-500 bg-white ${currentSlider === idx ? "w-8" : "w-2"} h-2`} 
      />
    ))}
  </div>


  <div className="ease-linear duration-500 flex transform-gpu " style={{ transform: `translateX(-${currentSlider * 100}%)` }}>
    {carouselImages.map((slide, idx) => (
      <div className="relative min-w-full h-60 sm:h-96 md:h-[540px]">
        <img 
          key={slide.image} 
          src={slide.image} 
          className="w-full h-full object-cover" 
          alt={`Slider - ${idx + 1}`} 
        />
     
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
    ))}
  </div>
</div>

  );
}
