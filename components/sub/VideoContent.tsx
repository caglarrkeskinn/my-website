import React from "react";

const VideoContent = () => {
    return (

        <video
        autoPlay
        muted
        loop
        playsInline
        className="rotate-180 absolute top-[-43%] h-full w-full left-0 z-[0] object-cover"
      >
        <source src="/blackhole.webm" type="video/webm" />
      </video>
    );
};

export default VideoContent