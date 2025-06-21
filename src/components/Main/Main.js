import React from 'react';
import AboutScreen from '../Screens/AboutScreen';
import GennadyScreen from '../Screens/GennadyScreen';
import ThrowormScreen from '../Screens/ThrowormScreen';
// import BlackCrowScreen from '../Screens/BlackCrowScreen';
import VideoContainer from '../Screens/VideoContainer/VideoContainer';
import ContactsScreen from '../Screens/ContactsScreen';
import { useLocation } from 'react-router-dom';

import Privacy from '../../pages/Privacy';

const Main = () => {
  const { pathname } = useLocation();

  const content = (
    pathname === "/privacy" ? <Privacy />
      : (
        <>
          <div id="about" className='main__content grid-container'>
            <div className="container grid-container offset--out-top">
              <AboutScreen />
            </div>
            <VideoContainer
              sources={[
                {
                  src: '/videos/egg/egg.mp4',
                  type: 'video/mp4',
                },
                {
                src: '/videos/egg/egg.ogv',
                type: 'video/ogv',
                },
                {
                  src: '/videos/egg/egg.webm',
                  type: 'video/webm',
                }
              ]}
              poster="/posters/egg/egg.png"
            />
          </div>

          <div id="gennady" className='main__content grid-container'>
            <div className="container grid-container">
              <GennadyScreen />
            </div>
            <VideoContainer
              sources={[
                {
                  src: '/videos/gennady/gennady.mp4',
                  type: 'video/mp4',
                },
                {
                src: '/videos/gennady/gennady.ogv',
                type: 'video/ogv',
                },
                {
                  src: '/videos/gennady/gennady.webm',
                  type: 'video/webm',
                }
              ]}
              poster="/posters/gennady/gennady.png"
            />
          </div>

          <div id="throworm" className='main__content grid-container'>
            <div className="container grid-container">
              <ThrowormScreen />
            </div>
            <VideoContainer
              sources={[
                {
                  src: '/videos/throworm/throworm.mp4',
                  type: 'video/mp4',
                },
                {
                src: '/videos/throworm/throworm.ogv',
                type: 'video/ogv',
                },
                {
                  src: '/videos/throworm/throworm.webm',
                  type: 'video/webm',
                }
              ]}
              poster="/posters/throworm/throworm.png"
            />
          </div>

          {/* <div id="blackCrow" className='main__content grid-container bg'>
            <div className="container grid-container">
              <BlackCrowScreen />
            </div>
          </div> */}

          <div id="contacts" className='main__content grid-container bg bg-contact'>
            <div className="mask" />
            <div className="container grid-container offset--out-top">
              <ContactsScreen />
            </div>
            <div className="mask" />
          </div>
        </>
      )
    );

  return content;
};

export default Main;
