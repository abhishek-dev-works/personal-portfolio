import React from "react";
import Summary from "./Summary";
import Experiences from "./Experiences";
import ResumeDownload from "./ResumeDownload";
import ConnectWithMe from "./ConnectWithMe";

const RightPanel = () => {
  return (
    <div className="rightPanel">
      <Summary />
      <Experiences />
      <ResumeDownload />
      <div className="contactMe">
        <ConnectWithMe />
      </div>
    </div>
  );
};

export default RightPanel;
