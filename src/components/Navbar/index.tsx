import classNames from 'classnames';
import * as React from 'react';
import { FaEthereum } from 'react-icons/fa';
import NavbarDrawer from './NavbarDrawer';

// interface INavbarProps {}

const NAVBAR_MENU = [
  {
    link: '/',
    label: 'Storybook',
  },
];

const Navbar: React.FunctionComponent = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    document.addEventListener('scroll', () => {
      setScrolled(window.scrollY > 60);
    });
  });

  return (
    <div className="fixed inset-x-0 top-0 text-neutral z-50">
      {/* mobile dropdown */}
      <NavbarDrawer menu={NAVBAR_MENU} isOpen={isOpen} />

      <div
        className={classNames('py-5 bg-white', {
          'bg-base-200 shadow-md': scrolled,
        })}
      >
        <div className="container flex items-center">
          <div className="text-xl font-bold z-30">Crytick</div>
          <div className="text-xl p-2 bg-primary text-white rounded-lg z-30 ml-2">
            <FaEthereum />
          </div>

          {/* right */}
          <div className="flex-1 flex justify-end items-center">
            {NAVBAR_MENU.map((item) => (
              <div
                key={item.link}
                className={classNames('ml-4 hidden md:flex text-xl')}
              >
                <a href={item.link}>{item.label}</a>
              </div>
            ))}
            {/* burger */}
            <div
              role="button"
              aria-hidden="true"
              onClick={() => setIsOpen(!isOpen)}
              className="flex flex-col justify-between items-end z-30 md:hidden focus:outline-none"
              style={{
                height: 18,
              }}
            >
              <div
                className={classNames(
                  'bg-current rounded-full transition-transform duration-200 origin-top-right',
                  {
                    'transform -rotate-45 origin-top-right scale-x-125': isOpen,
                  }
                )}
                style={{
                  height: 2,
                  width: 18,
                }}
              />
              <div
                className={classNames(
                  'bg-current rounded-full transition-all origin-top-right',
                  {
                    'transform scale-x-0': isOpen,
                  }
                )}
                style={{
                  height: 2,
                  width: 18,
                }}
              />
              <div
                className={classNames(
                  'bg-current rounded-full transition-all origin-bottom-right',
                  {
                    'transform rotate-45 scale-x-125': isOpen,
                  }
                )}
                style={{
                  height: 2,
                  width: 18,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
