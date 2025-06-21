import React, { useEffect } from 'react';
import Text from './Text/Text';
import Link from './Link/Link';
import { useInView } from 'react-intersection-observer';
import { activatedItemNavigation } from '../../helpers/scrollInto';

function AboutScreen() {
  const { ref, inView } = useInView({
    threshold: 1,
  });

  useEffect(() => {
    if (inView) activatedItemNavigation('#about');
  }, [inView]);

  return (
    <Text
      ref={ref}
      preText="about"
      content="We are Feed 64, a small gamedev studio that makes games for mobile platforms and PC. Size doesn't matter: we're currently working on two games and preparing a concept for a third."
    >
      <br/>
      <h3>
        <Link
          href="#contacts"
          className="underline"
          data-anchor="#contacts"
          data-replace-state>
            Do you have anything to offer?
        </Link>
      </h3>
    </Text>
  );
}

export default AboutScreen;
