import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { ScrollToAnchor } from '../../../helpers/scrollInto';

const Link = ({ href, className, children, ...otherProps }) => (
  href[0] !== '#'
    ? <RouterLink to={href} className={className || ''} {...otherProps}>{children}</RouterLink>
    : <a href={href} className={className || ''} onClick={ScrollToAnchor} {...otherProps}>
        {children}
      </a>
);

export default Link;
