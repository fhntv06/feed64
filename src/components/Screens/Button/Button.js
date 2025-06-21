import React from 'react';

const Button = ({ href, setOpen, children, className }) => (
  href
    ? <a href={href} className={className || ''} target="_blank" rel="noreferrer">{children}</a>
    : <button className="button" onClick={() => setOpen(true)}>{children}</button>
);

export default Button;
