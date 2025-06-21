import React, { useState, useEffect } from 'react';
import Text from "./Text/Text";
import ColorText from "./ColorText/ColorText";
import Stores from '../Stores/Stores';
import Button from "./Button/Button";
import Modal from '../Modal/Modal';
import VideoContainer from './VideoContainer/VideoContainer';
import { useInView } from 'react-intersection-observer';
import { activatedItemNavigation } from '../../helpers/scrollInto';
import { driveVideo } from '../../helpers/driveVideo';
import image from '../../images/throworm_modal.png';

const ColorTextComponent = () => (
  <ColorText
    colorBg="bggreen"
    colorBgText="released"
  >
    <p>available on <a className="underline" href="https://play.google.com/store/apps/details?id=com.Feed64.Throworm"><span>google play</span></a></p>
  </ColorText>
);

const ThrowormScreen = () => {
  const [open, setOpen] = useState(false);
  const { ref, inView } = useInView({ threshold: 1 });

  useEffect(() => {
    if (inView) activatedItemNavigation('#throworm');
  }, [inView]);

  useEffect(() => driveVideo(open, '#throworm'), [open]);

  return (
    <>
      {ColorTextComponent()}
      <Text
        ref={ref}
        content="Casual story about a worm in an endless corridor"
        src
      >
        <Button setOpen={setOpen}>
          More info
        </Button>
      </Text>
      <Modal
        open={open}
        setOpen={setOpen}
      >
        <div className="container">
          <div className="image" style={{ backgroundImage: `url(${image})` }}/>
          <div className="content white-theme ">
            <div className="content__header">
              <h1>THROWORM</h1>
              {ColorTextComponent()}
            </div>
            <div className="content__footer">
              <p>Throworm is a new free to play 2D game in the arcade genre. Easy-to-learn, but quite a challenging jumping game. Players are to control their worms, coming higher and higher across the levels, infinitely avoiding traps and other obstacles.</p>
              <Stores />
            </div>
          </div>
        </div>
        <VideoContainer
          sources={[
            {
              src: '/videos/throworm/throworm_modal.mp4',
              type: 'video/mp4',
            },
            {
            src: '/videos/throworm/throworm_modal.ogv',
            type: 'video/ogv',
            },
            {
              src: '/videos/throworm/throworm_modal.webm',
              type: 'video/webm',
            }
          ]}
          poster="/posters/throworm/throworm.png"
        />
      </Modal>
    </>
  );
}

export default ThrowormScreen;
