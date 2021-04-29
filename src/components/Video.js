import React from "react";
import VideoContent from "../../api/vimeo.json";
import Playbtn from "../images/playbtn.png";
import TextBanner from "../components/TextBanner";

const Video = () => {
  return (
    <div>
      {VideoContent.map((elem, idx) => {
        const imgArray = elem.thumbnail_large.split("");
        const img = imgArray.join("");
        if (elem.title !== "Battleground" && elem.description) {
          return (
            <div className="row" key={idx}>
              <div className="column" key={`description-${idx}`}>
                <a href={elem.url} target="_blank">
                  <h2>{elem.title}</h2>
                </a>
                <p
                  className="text"
                  dangerouslySetInnerHTML={{ __html: elem.description }}
                ></p>
                <a href={elem.url} target="_blank">
                  <label>read more</label>
                </a>
                <br />
                &nbsp;
              </div>
              <div className="column" key={`video-${idx}`}>
                <a href={elem.url} target="_blank">
                  <div
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
        .column {
          float: left;
          width: 50%;
        }
        .row:after {
          content: "";
          display: table;
          clear: both;
          padding-bottom: 40px;
        }
        .text {
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
        }
        #thumbnail {
          width: 400px;
          height: 225px;
          float: right;
          text-align: center;
        }
        #play {
          position: relative;
          top: 25%;
          bottom: 0;
          margin: auto;
        }
        label {
          color: red;
          text-decoration: underline;
        }
        @media screen and (max-width: 600px) {
          .column {
            width: 100%;
          }
          #thumbnail {
            float: left !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Video;
