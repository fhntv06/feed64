import React from "react";
import Link from "../../Screens/Link/Link";
// import { ScrollToAnchor } from '../../../helpers/scrollInto';

const LogoHeader = () => (
  <div className="header__logo">
    <div className="logo__title">
      <Link href="/">
        <p>FEED 64</p>
      </Link>
    </div>
    <div className="logo__dectiprion text--small">
      <p>Canned<br/>Interactive</p>
    </div>
  </div>
);

export default LogoHeader;
