import React from 'react';
import Link from '../../Screens/Link/Link';

const MenuHeader = () => (
  <ul className="header__menu">
    <li className="menu__item">
      <Link href="#about" className="active" data-anchor="#about">About</Link>
    </li>
    <ul className="menu__list">
      <span className="pre-text pre-text--gray">GAMES</span>
      <li className="menu__item">
        <Link href="#gennady" data-anchor="#gennady" data-replace-state>Gennady</Link>
      </li>
      <li className="menu__item">
        <Link href="#throworm" data-anchor="#throworm" data-replace-state>Throworm</Link>
      </li>
      {/* <li className="menu__item menu__item--concept"><Link href="#blackCrow">Black Crow</Link></li> */}
    </ul>
    <li className="menu__item">
      <Link href="#contacts" data-anchor="#contacts" data-replace-state>Contacts</Link>
    </li>
  </ul>
);

export default MenuHeader;
