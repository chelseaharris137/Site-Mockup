import React from "react";
import UserImage from "../../images/user-image-placeholder.jpg";

const Account = () => (
  <div className="cards">
    <div className="main">
      <section className="info">
        <img src={UserImage} width="180" />
        <h2>Full name</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </section>
      <div className="profile-info">
        <p className="user-profile" id="profile">
          <h5>PROFILE</h5>
          <hr />
          <b>Address: </b>[Dynamic address]
          <br />
          <b>E-mail: </b>[Dynamic email]
          <br />
          <b>Password: </b>[Dynamic password]
        </p>
        <p className="user-profile" id="friends">
          <h5>FRIENDS</h5>
          <hr />
          [Dynamic friend images]
        </p>
        <p className="user-profile" id="social">
          <h5>SOCIAL</h5>
          <hr />
          <b>LinedIn: </b>[Dynamic LinkedIn handle]
          <br />
          <b>Facebook: </b>[Dynamic Facebook handle]
          <br />
          <b>Instagram: </b>[Dynamic Instagram handle]
        </p>
        <p className="user-profile" id="update-delete">
          <h5>EDIT PROFILE</h5>
          <hr />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
          <br />
          <br />
          <button id="edit-profile">Edit Profile</button>{" "}
          <button id="edit-profile">Delete Account</button>
        </p>
      </div>
    </div>
    <style jsx>
      {`
        @media (min-width: 600px) {
          .main {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
            padding-bottom: 40px;
            gap: 0px 20px;
          }
          .user-profile {
            grid-column: span 2;
            grid-row: span 2;
          }
          .profile-info {
            grid-column: span 4;
          }
        }

        .user-profile {
          display: block;
          width: 100%;
          object-fit: cover;
          background-color: rgba(136, 146, 158, 0.1);
          padding: 10px 25px 10px 25px;
          border-radius: 20px;
          line-height: 40px !important;
        }
        .info {
          padding-left: 15px;
          padding-right: 25px;
        }
        .profile-info {
          color: white;
          padding-right: 15px;
        }

        h2 {
          margin-bottom: 1em;
        }
        h5 {
          line-height: 0px !important;
        }

        p {
          margin-bottom: 1em;
        }
        button {
          font-size: 16px !important;
          width: 200px !important;
          margin-bottom: 15px !important;
        }
      `}
    </style>
  </div>
);

export default Account;
