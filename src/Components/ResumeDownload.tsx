import React from "react";

const resLinkk =
  "https://drive.google.com/uc?export=download&id=1SSI4qncuPdtI8teOcpBXKEDQsiRD6XrN";
const ResumeDownload = () => {
  const handleClick = () => {
    window.location.href = resLinkk;
  };
  return (
    <div className="download" id="downloadButton">
      <button className="downloadbtn" onClick={() => handleClick()}>Download Resume</button>
      <div className="about">
        <h3>About</h3>
        <p>
          Loosely crafted in Figma and brought to life in Visual Studio Code,
          this website is a testament to my love for design and development.
          I've woven together React.js to create a seamless user experience,
          with every pixel meticulously placed for aesthetic perfection. All
          text is elegantly set in the Inter typeface, enhancing readability and
          visual harmony.
        </p>
        <h3>Let's build together</h3>
        <p>
          While this portfolio is a showcase of my skills, it's also an open
          invitation to collaborate on exciting projects. Whether you have a
          concept that needs a digital touch or want to brainstorm new ideas,
          I'm here to bring creativity and expertise to the table.
        </p>
      </div>
    </div>
  );
};

export default ResumeDownload;
