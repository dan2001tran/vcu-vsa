import LineGradient from '../components/LineGradient';
import { useState } from 'react';
import useMediaQuery from '../hooks/useMediaQuery';
import { motion } from 'framer-motion';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import slide1 from '../assets/Justin-looking.jpg';
import slide2 from '../assets/groupMerch.jpg';
import slide3 from '../assets/Dan-looking.jpg';

const About = () => {
  const slides = [slide1, slide2, slide3];
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
  const isAboveLarge = useMediaQuery('(min-width: 790px)');
  return (
    <section id="about us" className="pt-10 pb-10 h-full w-full">
      {isAboveLarge ? (
        <motion.div
          className="md:w-2/5 mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className=" font-semibold text-center text-6xl mb-5">
            WHO WE<span className="text-yellow"> ARE</span>
          </p>
          <LineGradient width="w-3/3" />
          <p className="mt-10 mb-7 font-semibold text-center">
            The Vietnamese Student Association at the Virginia Commonwealth
            University is a student organization that focuses on empowering
            Vietnamese Americans and teaching Vietnamese culture to their peers
          </p>
        </motion.div>
      ) : (
        <motion.div
          className="md:w-2/5 mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className=" font-semibold text-center text-6xl mb-5">
            WHO WE<span className="text-yellow"> ARE</span>
          </p>
          <LineGradient width="w-3/3" />
          <p className="mt-10 mb-7 font-semibold text-center">
            The Vietnamese Student Association at the Virginia Commonwealth
            University is a student organization that focuses on empowering
            Vietnamese Americans and teaching Vietnamese culture to their peers
          </p>
        </motion.div>
      )}

      {isAboveLarge ? (
        <div className="sm:flex sm:justify-center shrink-2 gap-4 h-full w-full object-contain">
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
              src={require('../assets/Justin-looking.jpg')}
            />
          </motion.div>
          <motion.div
            className=""
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { opacity: 1, scale: 1 },
            }}
          >
            <img
              alt="skills"
              className="z-10  flex-shrink"
              src={require('../assets/groupMerch.jpg')}
            />
          </motion.div>

          {/* <div className="mt-0 md:mt-0  bottom-0">
            {isAboveLarge ? (
              <div className=" z-0">
                <img
                  alt="skills"
                  className="z-10 max-w-[779px] max-h-[543px]"
                  src={require('../assets/groupMerch.jpg')}
                />
              </div>
            ) : (
              <img
                alt="Products"
                className="z-0 max-w-[779px] max-h-[543px]"
                src={require('../assets/groupMerch.jpg')}
              />
            )}
          </div> */}
          <motion.div
            className=""
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.9 }}
            transition={{ duration: 0.6 }}
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { opacity: 1, scale: 1 },
            }}
          >
            <img
              class="relative  flex-shrink"
              src={require('../assets/Dan-looking.jpg')}
            />
          </motion.div>
        </div>
      ) : (
        <div className="w-[414px] h-[750px] m-auto w-full py-16 px-4 relative group">
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
      )}
    </section>
  );
};

export default About;
