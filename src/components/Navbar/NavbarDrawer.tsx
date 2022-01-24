/* eslint-disable jsx-a11y/label-has-associated-control */
import classNames from 'classnames';
import * as React from 'react';

interface INavbarDrawerProps {
  menu: Array<{
    link: string;
    label: string;
  }>;
  isOpen: boolean;
}

const NavbarDrawer: React.FunctionComponent<INavbarDrawerProps> = ({
  menu,
  isOpen,
}: INavbarDrawerProps) => (
  <div
    className={classNames(
      'fixed inset-0 bg-base-200 transform translate-y-0 transition-all duration-300 pt-16',
      { '-translate-y-full': !isOpen }
    )}
  >
    <div
      className={classNames(
        'sp-container text-neutral text-2xl py-5 flex flex-col items-center h-full justify-center opacity-80 transition-opacity duration-100',
        { 'opacity-0': !isOpen }
      )}
    >
      {menu.map((item) => (
        <a key={item.link} href={item.link}>
          {item.label}
        </a>
      ))}
    </div>
  </div>
);

export default NavbarDrawer;
