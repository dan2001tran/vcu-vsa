import AnchorLink from 'react-anchor-link-smooth-scroll';

const DotGroup = ({ selectedPage, setSelectedPage }) => {
  const selectedStyles = `relative z-50 bg-yellow before:absolute before:w-6 before:h-6 before:rounded-full
    before:border-2 before:border-yellow before:left-[-50%] before:top-[-50%]`;

  return (
    <div className="flex flex-col gap-6 fixed top-[60%] right-5">
      <AnchorLink
        href="#home"
        className={`${
          selectedPage === 'home' ? selectedStyles : 'bg-black'
        } w-3 h-3 rounded-full`}
        onClick={() => setSelectedPage('home')}
      />

      <AnchorLink
        href="#about us"
        className={`${
          selectedPage === 'about us' ? selectedStyles : 'bg-black'
        } w-3 h-3 rounded-full`}
        onClick={() => setSelectedPage('about us')}
      />

      <AnchorLink
        href="#merch"
        className={`${
          selectedPage === 'projects' ? selectedStyles : 'bg-black'
        } w-3 h-3 rounded-full`}
        onClick={() => setSelectedPage('projects')}
      />

      <AnchorLink
        href="#preview"
        className={`${
          selectedPage === 'preview' ? selectedStyles : 'bg-black'
        } w-3 h-3 rounded-full`}
        onClick={() => setSelectedPage('preview')}
      />

      <AnchorLink
        href="#contact"
        className={`${
          selectedPage === 'contact' ? selectedStyles : 'bg-black'
        } w-3 h-3 rounded-full`}
        onClick={() => setSelectedPage('contact')}
      />
    </div>
  );
};

export default DotGroup;
