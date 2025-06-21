import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import LogoHeader from './LogoHeader/LogoHeader';
import MenuHeader from './MenuHeader/MenuHeader';
import { ScrollToElement } from '../../helpers/scrollInto';

const Header = () => {
  const  { hash } = useLocation();

  useEffect(() => {
    if (hash) ScrollToElement(hash) ;
  }, [hash]);

  return (
    <>
      <LogoHeader />
      <MenuHeader />
    </>
  );
}

export default Header;
