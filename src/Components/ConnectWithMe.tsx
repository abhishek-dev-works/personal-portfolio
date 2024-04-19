import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

const ConnectWithMe = () => {
  return (
    <div className="connectWrapper">
      <h3>Connect with me</h3>
      <div className="connect">
        <a href="mailto:abhishek.works22@gmail.com?subject=Hi%20Abhishek&body=Body%20Text%20Here">
          <EmailIcon className="icons" />
        </a>
        <a href="https://github.com/abhishek-dev-works" target="_blank">
          <GitHubIcon className="icons" />
        </a>
        <a href="https://www.linkedin.com/in/abhishek-wilson-37984b1bb/" target="_blank">
          <LinkedInIcon className="icons" />
        </a>
      </div>
    </div>
  );
};

export default ConnectWithMe;
