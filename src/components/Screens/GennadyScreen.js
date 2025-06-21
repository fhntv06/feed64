import React, { useState, useEffect } from 'react';
import Text from './Text/Text';
import ColorText from './ColorText/ColorText';
import Modal from '../Modal/Modal';
import Button from '../Screens/Button/Button';
import VideoContainer from './VideoContainer/VideoContainer';
import { useInView } from 'react-intersection-observer';
import { activatedItemNavigation } from '../../helpers/scrollInto';
import { driveVideo } from '../../helpers/driveVideo';

import image from '../../images/gennady_modal.png';

const ColorTextComponent = () => (
  <ColorText
    colorBg="bgblue"
    colorBgText="SOON"
  >
    <p>early access on <a className="underline" href="https://store.steampowered.com/app/2430010/Gennady/" target="_blank" rel="noreferrer"><span>steam</span></a></p>
  </ColorText>
);

const GennadyScreen = () => {
  const [open, setOpen] = useState(false);
  const { ref, inView } = useInView({ threshold: 1 });

  useEffect(() => {
    if (inView) activatedItemNavigation('#gennady');
  }, [inView]);

  useEffect(() => driveVideo(open, '#gennady'), [open]);

  return (
    <>
      {ColorTextComponent()}
      <Text
        ref={ref}
        content={'Dark roguelite about endless fight with aliens on their territory'}
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
          <div className="content white-theme">
            <div className="content__header">
              <h1>GENNADY</h1>
              {ColorTextComponent()}
            </div>
            <div className="content__footer">
              <p>Chilling in front of the TV in bachelor underpants is not gonna happen today. The face, always radiating imperturbable calm, didn't flinch when a beam from space teleported a piece of the apartment together with the owner into the unknown. Not a single muscle twitched at the sight of a huge alien factory packing biomass into nutritious broth cubes. You won't scare him with such a trifle! Infuriated that he couldn't finish watching his favorite TV show, Gennady will do anything to make his captors regret it.</p>
            </div>
            <Button className="button" href="https://store.steampowered.com/app/2430010/Gennady/">
              ADD 2 WISHLIST ON STEAM
            </Button>
          </div>
        </div>
        <VideoContainer
          sources={[
            {
              src: '/videos/gennady/gennady_modal.mp4',
              type: 'video/mp4',
            },
            {
            src: '/videos/gennady/gennady_modal.ogv',
            type: 'video/ogv',
            },
            {
              src: '/videos/gennady/gennady_modal.webm',
              type: 'video/webm',
            }
          ]}
          poster="/posters/gennady/gennady.png"
        />
      </Modal>
    </>
  );
}

export default GennadyScreen;
