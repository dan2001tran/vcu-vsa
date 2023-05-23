import SocialMediaIcons from '../components/SocialMediaIcons';

const Footer = () => {
  return (
    <footer className="h-64 bg-black pt-10">
      <div className="w-10/12 mx-auto">
        <SocialMediaIcons />
        <div className="md:flex justify-center md:justify-between text-center ">
          <p className="font-playfair font-semibold text-2xl text-yellow">
            Built by Dan Tran using React and Tailwind CSS
          </p>
          <p className="font-playfair text-md text-white">2023 VSA@VCU.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
