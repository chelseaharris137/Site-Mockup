import React from "react";
import BottomNav from "../components/Bottom";
import Link from "next/link";

const Footer = () => (
  <div className="footer">
    <div id="nav-heading">
      <h5>Fakesite</h5>
      <h5>Account</h5>
    </div>
    <div id="bottom-nav">
      <Link href="/about-us">
        <a>About Us</a>
      </Link>
      <Link href="/account#update-delete">
        <a>Edit Profile</a>
      </Link>
      <Link href="/press">
        <a>Press</a>
      </Link>
      <Link href="/account#friends">
        <a>Friends</a>
      </Link>
      <Link href="/policies">
        <a>Policies</a>
      </Link>
      <Link href="/account#social">
        <a>Social</a>
      </Link>
      <Link href="/help">
        <a>Help</a>
      </Link>
      <Link href="/account#update-delete">
        <a>Delete Profile</a>
      </Link>
    </div>
    <hr />
    <BottomNav />
    <br />
    <style jsx>
      {`
        .footer {
          position: relative;
          left: 0;
          bottom: 0;
          width: 80%;
          text-align: left;
          margin: 0px 10% 0px 10%;
        }
        #nav-heading {
          display: grid;
          grid-template-columns: max-content max-content;
          grid-template-rows: 1fr;
          gap: 0px 100px;
          grid-template-areas:
            ". . "
            ". . "
            ". . "
            ". . "
            ". . ";
          margin-bottom: -20px;
        }
        #bottom-nav {
          display: grid;
          grid-template-columns: max-content max-content;
          grid-template-rows: 1fr 1fr 1fr 1fr;
          gap: 0px 100px;
          grid-template-areas:
            ". . "
            ". . "
            ". . "
            ". . "
            ". . ";
          padding-bottom: 40px;
        }
        hr {
          border: 1px solid #e8e8e8;
        }
      `}
    </style>
  </div>
);
export default Footer;
