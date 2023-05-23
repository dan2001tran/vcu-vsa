import LineGradient from '../components/LineGradient';
import { useState } from 'react';
import { motion } from 'framer-motion';
import useMediaQuery from '../hooks/useMediaQuery';
import Slide1 from '../assets/aj-hoodie.jpg';
import Slide2 from '../assets/hoodie-back.jpg';
import Slide3 from '../assets/hoodie-main.jpg';
import Slide4 from '../assets/sleeve-hoodie.jpg';
import Slide5 from '../assets/thao-hoodie.jpg';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

const Hoodie = () => {
  const slides = [Slide1, Slide2, Slide3, Slide4, Slide5];

  const [currentIndex, setCurrentIndex] = useState(2);

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
  const isAboveLarge = useMediaQuery('(min-width: 1050px)');
  const isAboveLargeHeader = useMediaQuery('(min-width: 640px)');
  return (
    <section id="hoodie" className="pt-20 pb-10 h-full w-full">
      {isAboveLarge ? (
        <div className="sm:flex sm:justify-center shrink-2 gap-4 h-full w-full object-contain ">
          <motion.div
            className="md:w-1/5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <p className=" font-semibold text-center relative z-40 text-black text-6xl mb-2">
              Everyday Hoodie
            </p>

            <p className="mt-0 mb-7 font-semibold text-center">$35.00</p>
            <p className="mt-70 mb-7 font-semibold text-center">
              The Everyday hoodie, as it names says, was meant to be your staple
              for the chillier moments. Solid black with minimal designs, our
              hoodies allows you to wear it with anything.
            </p>
          </motion.div>
          <div className=" object-contain">
            <motion.div
              className="h-[350px] w-[220px]"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.3 }}
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1 },
              }}
            >
              <img
                class="relative object-contain"
                src={require('../assets/aj-hoodie.jpg')}
              />
            </motion.div>
            <motion.div
              className="h-[350px] w-[220px]"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.3 }}
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1 },
              }}
            >
              <img
                class="relative object-contain"
                src={require('../assets/hoodie-back.jpg')}
              />
            </motion.div>
          </div>
          <motion.div
            className=""
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.3 }}
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { opacity: 1, scale: 1 },
            }}
          >
            <img
              class="relative object-contain"
              src={require('../assets/hoodie-main.jpg')}
            />
          </motion.div>
          <div className=" object-contain bottom-0 right-0">
            <motion.div
              className="h-[350px] w-[220px]"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.3 }}
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1 },
              }}
            >
              <img
                class="relative object-contain"
                src={require('../assets/sleeve-hoodie.jpg')}
              />
            </motion.div>
            <motion.div
              className="h-[350px] w-[220px]"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.3 }}
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1 },
              }}
            >
              <img
                class="relative object-contain"
                src={require('../assets/thao-hoodie.jpg')}
              />
            </motion.div>
          </div>
        </div>
      ) : (
        <div className="sm:flex sm:justify-center shrink-2 gap-4 h-full w-full object-contain ">
          <motion.div
            className="md:w-1/5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <p className=" font-semibold text-center text-6xl mb-2">
              Everyday Hoodie
            </p>
            <p className="mt-0 mb-7 font-semibold text-center">$35.00</p>
            <p className="mt-10 mb-7 font-semibold text-center px-3">
              The Everyday hoodie, as it names says, was meant to be your staple
              for the chillier moments. Solid black with minimal designs, our
              hoodies allows you to wear it with anything.
            </p>
          </motion.div>
          <div className="max-w-[537px] h-[750px] m-auto w-full py-16 px-4 relative group">
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
        </div>
      )}

      <div></div>
    </section>
  );
};

export default Hoodie;
