import LineGradient from '../components/LineGradient';
import { useState } from 'react';
import { motion } from 'framer-motion';
import useMediaQuery from '../hooks/useMediaQuery';
import Slide1 from '../assets/shirt-front.jpg';
import Slide2 from '../assets/ang-shirt.jpg';
import Slide3 from '../assets/shirt-main.jpg';
import Slide4 from '../assets/td-shirt.jpg';
import Slide5 from '../assets/shirt-back.jpg';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
const Projects = () => {
  const slides = [Slide1, Slide2, Slide3, Slide4, Slide5];

  const [currentIndex, setCurrentIndex] = useState(3);

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
    <section id="merch" className="sm:pt-10 sm:pb-10 h-full w-full">
      {isAboveLargeHeader ? (
        <motion.div
          className="md:w-6/6 mx-auto text-left px-[135px]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <span class="before:block before:absolute before:-inset-1  before:bg-black relative inline-block">
            <p className=" relative font-semibold text-white text-left text-6xl mb-2">
              2023 MERCH
            </p>
          </span>

          <p className="mt-5 mb-5 font-semibold text-left">
            Dropping the Essential T-Shirt and the Everday Hoodie, we want you
            to be able to wear VSA in any weather
          </p>
          <LineGradient width="w-3/3 mb-7" />
        </motion.div>
      ) : (
        <motion.div
          className="w-6/6 mx-auto text-left"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className=" font-semibold text-left text-6xl mb-2 px-2">
            2023<span className="text-yellow"> MERCH</span>
          </p>
          <p className="mt-10 mb-5 px-3 font-semibold text-left">
            Dropping the Essential T-Shirt and the Everday Hoodie, we want you
            to be able to wear VSA in any weather
          </p>
          <LineGradient width="w-3/3" />
        </motion.div>
      )}
      {isAboveLarge ? (
        <div className="sm:flex sm:justify-center shrink-2 gap-4 h-full w-full object-contain">
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
                src={require('../assets/shirt-front.jpg')}
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
                src={require('../assets/ang-shirt.jpg')}
              />
            </motion.div>
          </div>
          <motion.div
            className="h-[799px] w-[533px]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.3 }}
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { opacity: 1, scale: 1 },
            }}
          >
            <img
              class="relative object-contain"
              src={require('../assets/shirt-main.jpg')}
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
                src={require('../assets/td-shirt.jpg')}
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
                src={require('../assets/shirt-back.jpg')}
              />
            </motion.div>
          </div>
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
              Essential Shirt
            </p>
            <p className="mt-0 mb-3 font-semibold text-center">
              $Free as paid member
            </p>
            <p className="mt-70 mb-7 font-semibold text-left">
              Soft, Breathable, Essential. Our Essential T was meant to be worn
              in any situation. Pair it with blue jeans or sweats and you are
              ready to get out the door.
            </p>
          </motion.div>
        </div>
      ) : (
        <section>
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
            <p className=" font-semibold text-center text-5xl mb-2 pt-20">
              Essential T
            </p>
            <p className="mt-70 mb-3 font-semibold text-center">$15.00</p>
            <p className="mt-70 mb-7 font-semibold text-center px-3">
              Soft, Breathable, Essential. Our Essential T was meant to be worn
              in any situation. Pair it with blue jeans and sweats and you are
              ready to get out the door.
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
        </section>
      )}

      <div></div>
    </section>
  );
};

export default Projects;
