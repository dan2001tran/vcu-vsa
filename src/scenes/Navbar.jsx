import { useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import useMediaQuery from '../hooks/useMediaQuery';

const Link = ({ page, selectedPage, setSelectedPage }) => {
  const lowerCasePage = page.toLowerCase();
  return (
    <AnchorLink
      className={`${
        selectedPage === lowerCasePage
          ? 'underline'
          : 'link-underline link-underline-black text-black'
      } `}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  );
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }) => {
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const isDesktop = useMediaQuery('(min-width: 768px)');
  // const navbarBackground = isTopOfPage ? '' : 'bg-red';
  const navbarBackground = 'bg-white';
  return (
    <nav className={`${navbarBackground} z-40 w-full top-0 py-6 `}>
      <div className="flex items-center justify-between mx-auto w-4/6">
        {isDesktop ? (
          <h4 className="font-playfair pr-10 text-4xl font-bold">VSA</h4>
        ) : (
          <h4 className="font-playfair pr-10 text-6xl font-bold z-40">VSA</h4>
        )}

        {/* DESKTOP NAV */}
        {isDesktop ? (
          <div className="flex justify-between gap-16 font-opensans text-xl font-bold">
            <Link
              page="Home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="About Us"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Merch"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Preview"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <span class="before:block before:absolute before:-inset-1 before:bg-black relative inline-block">
              <a
                className="relative text-white"
                href="https://forms.gle/hMxRCXcRbQggFwFR6"
              >
                Buy Now
              </a>
            </span>
          </div>
        ) : (
          <button
            className="fixed right-5 z-40 rounded-full bg-black p-2"
            onClick={() => setIsMenuToggled(!isMenuToggled)}
          >
            <img alt="menu-icon" src="../assets/menu-icon.svg" />
          </button>
        )}

        {/* MOBILE MENU POPUP */}
        {!isDesktop && isMenuToggled && (
          <div className="fixed right-0 top-0 h-[50%] bg-white w-[200px] z-50">
            {/* CLOSE ICON */}
            <div className="flex justify-end p-5 bg-black">
              <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                <img alt="close-icon" src="../assets/close-icon.svg" />
              </button>
            </div>

            {/* MENU ITEMS */}
            <div className="flex flex-col gap-4 ml-[10%] text-2xl font-BasicCommercial font-bold ">
              <Link
                page="Home"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="About Us"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Merch"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Preview"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <a href="https://forms.gle/hMxRCXcRbQggFwFR6">Buy Now</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
