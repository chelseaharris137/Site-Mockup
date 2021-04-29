import React from "react";
import css from "styled-jsx/css";
import Background from "../images/hero-image.png";
import Logo from "../images/logo.png";
import UserImage from "../images/user-icon.png";
import Link from "next/link";

const Header = () => (
  <div className="header">
    <div className="image-container">
      <nav>
        <div>
          <Link href="/">
            <a>
              <img src={Logo} />
            </a>
          </Link>
        </div>
        <div>&nbsp;</div>
        <div className="nav-link">
          <Link href="/account">
            <a>Account&nbsp;&nbsp;</a>
          </Link>
        </div>
        <div className="nav-link">
          <Link href="/help">
            <a>Help&nbsp;&nbsp;</a>
          </Link>
        </div>
        <div>
          <img src={UserImage} width="40" />
        </div>
      </nav>
      <div id="cta-copy">
        <h1>The world's greatest fake site</h1>
        <p>
          Create the world's greatest fake site and enjoy
          <br />
          the breeze of fresh air when you complete it
        </p>
        <br />
        <button>Do something awesome</button>
      </div>
    </div>

    <style jsx>
      {`
        .header {
          width: 100%;
          height: 500px;
        }
        .image-container {
          background-image: url("${Background}");
          background-size: cover;
          background-position: center;
          width: 100%;
          height: 100%;
          background-repeat: no-repeat;
        }
        nav {
          display: grid;
          grid-template-columns: 1fr 65% 0.8fr 0.8fr 0.8fr;
          grid-template-rows: 1fr;
          gap: 0px 0px;
          grid-template-areas: ". . . . .";
          padding: 30px 10% 30px 10%;
        }
        nav a {
          color: #fff;
          text-decoration: none;
        }
        #cta-copy {
          margin: auto;
          width: 100%;
          text-align: center;
          padding: 0px;
        }
        #cta-copy p {
          color: #fff !important;
        }
        .nav-link {
          padding-top: 5px;
        }
        @media (max-width: 459px) {
          .nav-link {
            display: none;
          }
        }
      `}
    </style>
  </div>
);
export default Header;
