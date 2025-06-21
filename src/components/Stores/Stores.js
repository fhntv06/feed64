import React from 'react';
import Button from '../Screens/Button/Button';
import googlePlay from '../../images/google-play.png';
// import appStore from '../../images/app-store.png';
import ruStore from '../../images/ru-store.png';

function Stores () {
  return (
    <div className="stores">
      {/* <Button href="/app-store">
        <img src={appStore} alt="app-store" />
      </Button> */}
      <Button href="https://apps.rustore.ru/app/com.Feed64.ThrowWorm">
        <img src={ruStore} alt="ru-store" />
      </Button>
      <Button href="https://play.google.com/store/apps/details?id=com.Feed64.Throworm">
        <img src={googlePlay} alt="google-play" />
      </Button>
    </div>
  );
};

export default Stores;
