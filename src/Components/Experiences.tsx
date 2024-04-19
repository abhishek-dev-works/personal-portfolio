import React from "react";
import ExperienceData from "../Data/Data.json";
import LaunchIcon from "@mui/icons-material/Launch";

const Chip = (props: { text: string }) => {
  return <div className="chip">{props.text}</div>;
};
const Experiences = () => {
  return (
    <div className="experience" id="experience">
        <h1>Experiences</h1>
      {ExperienceData.map((item, ind) => {
        return (
          <div key={`${item.companyName}-${ind}`} className="">
            <h3 className="summaryHeading">
              {item.companyName} <span className="experienceDuration" style={{fontSize: "small"}}>{item.duration}</span>{" "}
              {item.link && (
                <a href={item.link} target="_blank">
                    <LaunchIcon  sx={{color: '#3ee6ef'}}/>
                </a>
              )}
            </h3>
            <p>{item.location}</p>
            {item.experiences.map((ele, index) => {
              return (
                <div key={`${ele.designation}-${item.companyName}-${index}`} className="subExperience">
                  <h3 className="summaryHeading">{ele.designation}</h3>
                  <p className="experienceDuration">{ele.duration}</p>
                  <article>{ele.description}</article>
                  <div className="skillsWrapper">
                    {Array.isArray(ele.skills) &&
                      ele.skills.map((skill, rank) => {
                        return <Chip text={skill} key={rank} />;
                      })}
                  </div>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Experiences;
