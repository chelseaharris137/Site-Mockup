import React, { useEffect, useState } from "react";
import VideoContent from "../../api/vimeo.json";
import Playbtn from "../images/playbtn.png";
import TextBanner from "../components/TextBanner";

const Video = () => {
  return (
    <div>
      {VideoContent.map((elem, idx) => {
        const imgArray = elem.thumbnail_large.split("");
        const img = imgArray.join("");

        if (elem.title !== "Battleground") {
          return (
            <div id="movieinfo">
              <div key={idx} id="info">
                <a href={elem.url} target="_blank">
                  <h2>{elem.title}</h2>
                </a>
                <p>INSERT DESCRIPTION HERE</p>
              </div>
              <div id="outter">
                <a href={elem.url} target="_blank">
                  <div
                    align="rignt"
                    style={{
                      backgroundImage: `linear-gradient(180deg, rgba(238, 46, 29, 0.63) 30%, rgba(255, 177, 181, 0.4) 90%),url(${img})`,
                      backgroundSize: `400px`,
                      backgroundPosition: `right`,
                      backgroundRepeat: `no-repeat`,
                      borderRadius: `15px`,
                    }}
                    id="thumbnail"
                  >
                    <img src={Playbtn} id="play" />
                  </div>
                </a>
              </div>
            </div>
          );
        }
      })}
      <TextBanner />
      <style jsx>{`
        #movieinfo {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          padding: 40px 0px 40px 0px;
        }
        #outer {
          overflow: hidden;
          padding-bottom: 40px;
        }

        #thumbnail {
          align: right;
          width: 400px;
          height: 225px;
          float: right;
          text-align: center;
          right: 0px;
        }
        #play {
          position: relative;
          top: 25%;
          bottom: 0;
          margin: auto;
        }
        @media (max-width: 459px) {
          #movieinfo {
            display: flex;
            flex-direction: column;
          }
        }
      `}</style>
    </div>
  );
};

export default Video;
