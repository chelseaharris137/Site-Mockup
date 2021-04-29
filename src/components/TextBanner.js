import React from "react";

const TextBanner = () => (
  <div>
    <div id="banner">
      <h2>Ready to have your cake and eat it too?</h2>
      <p align="center">
        Start by designing the experience you have in mind. We'll guide you
        through each step. If your experience meets the quality standards,
        you'll hear more about what's next.
      </p>
    </div>
    <style jsx>{`
      #banner {
        text-align: center;
      }
      p {
        text-align: center;
        padding: 0 18% 0 18%;
        align: center;
        float: center;
      }
      @media screen and (max-width: 600px) {
        p {
          padding: 0 0 0 0;
        }
      }
    `}</style>
  </div>
);
export default TextBanner;
