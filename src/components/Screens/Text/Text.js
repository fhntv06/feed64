import React, { forwardRef } from 'react';

const Text = forwardRef(({ preText, content, src, children }, ref) => (
  <div ref={ref}  className={`content__text content__text${src ? '--btn' : '--only'}`}>
    {preText && <span className="pre-text pre-text--red">{preText}</span>}
    <p className="text--default">{content}</p>
    {children}
  </div>
));

export default Text;
