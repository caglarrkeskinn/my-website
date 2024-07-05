import React from "react";

const VideoContent = () => {
    return (

        <video
        autoPlay
        muted
        loop
        playsInline
        className="rotate-180 absolute top-[-42%] h-full w-full left-0 z-[0]"
      >
        <source src="/blackhole.webm" type="video/webm" />
      </video>
    );
};

export default VideoContent