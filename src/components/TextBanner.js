import React from "react";

const TextBanner = () => (
  <div id="banner">
    <h2>Ready to have your cake and eat it too?</h2>
    <p align="center">
      Start by designing the experience you have in mind. We'll guide you
      through each step. If your experience meets the quality standards, you'll
      hear more about what's next.
    </p>

    <style jsx>{`
      #banner {
        text-align: center;
      }
      p {
        text-align: center;
        max-width: 800px;
        left: 50%;
        align: center;
      }
    `}</style>
  </div>
);
export default TextBanner;
