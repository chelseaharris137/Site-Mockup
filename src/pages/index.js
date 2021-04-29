import React from "react";
import { useRouter } from "next/router";
import Video from "../components/Video";

const Page = () => {
  const router = useRouter();
  return (
    <div id="video-container">
      <Video />
    </div>
  );
};

export default Page;
