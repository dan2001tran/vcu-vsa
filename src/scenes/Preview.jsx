import { useState } from 'react';
import Landscape1 from '../assets/landscape1.jpg';
import Landscape2 from '../assets/landscape2.jpg';
import Landscape3 from '../assets/landscape3.jpg';
import Landscape4 from '../assets/landscape4.jpg';
import Landscape5 from '../assets/landscape5.jpg';
import Landscape6 from '../assets/landscape6.jpg';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

const Preview = () => {
  const slides = [
    Landscape1,
    Landscape2,
    Landscape4,
    Landscape3,
    Landscape5,
    Landscape6,
  ];

  const [currentIndex, setCurrentIndex] = useState(1);

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

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  return (
    <section id="preview">
      <div className="max-w-[1600px] h-[1133px] m-auto w-full py-16 px-4 relative group">
        <div
          style={{ backgroundImage: `url(${slides[currentIndex]})` }}
          className="w-full h-full bg-center bg-cover duration-500"
        ></div>
        {/* Left Arrow */}
        <div
          className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl
       rounded-full p-2 bg-black/20 text-white cursor-pointer"
        >
          <BsChevronCompactLeft onClick={prevSlide} size={30} />
        </div>
        {/* Right Arro */}
        <div
          className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 
      text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer"
        >
          <BsChevronCompactRight onClick={nextSlide} size={30} />
        </div>
        <div className="flex top-4 justify-center py-2">
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className="text-2xl cursor-pointer"
            >
              <RxDotFilled />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Preview;
