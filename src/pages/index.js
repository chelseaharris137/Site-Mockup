import React from "react";
import { useRouter } from "next/router";
import Video from "../components/Video";

const Page = () => {
  const router = useRouter();
  return (
    <div id="video-container">
      <Video />
      <style jsx>{``}</style>
    </div>
  );
};

export default Page;
