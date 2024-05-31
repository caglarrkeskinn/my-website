import React from "react";
import LoginContent from "../sub/LoginContent";

const LoginPage = () => {
  return (
    <div className="relative flex flex-col h-full w-full" id="login">
      <video
        autoPlay
        muted
        loop
        className="rotate-180 absolute top-[-340px]  h-full w-full left-0 z-[1] object-cover "
      >
        <source src="/blackhole.webm" type="video/webm" />
      </video>
      <LoginContent />
    </div>
  );
};

export default LoginPage;
