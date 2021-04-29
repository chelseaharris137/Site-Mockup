import React from "react";
import Logo from "../images/logo.png";
import Link from "next/link";

const Header = () => (
  <div id="btm-nav">
    <div>
      <Link href="/">
        <a>
          <img src={Logo} id="btm-logo" />
        </a>
      </Link>
    </div>
    <div>&nbsp;</div>
    <div className="nav-link" className="btm-links">
      <Link href="/account">
        <a>Account</a>
      </Link>
    </div>
    <div className="btm-links">
      <Link href="/help">
        <a>Help</a>
      </Link>
    </div>
    <div className="btm-links">
      <Link href="/site-map">
        <a>Site Map</a>
      </Link>
    </div>
    <style jsx>{`
      #btm-nav {
        display: grid;
        grid-template-columns: 1fr 60% 1.3fr 1fr 1fr;
        grid-template-rows: 1fr;
        gap: 0px 0px;
        grid-template-areas: ". . . . .";
        padding-top: 5px;
      }
      .btm-links {
        line-height: 45px !important;
      }
      @media screen and (max-width: 600px) {
        #btm-nav {
          grid-template-columns: 1fr 6% 1.3fr 1fr 1fr;
        }
        #btm-logo {
          display: none;
        }
      }
    `}</style>
  </div>
);
export default Header;
