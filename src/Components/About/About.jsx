import React from "react";
import "./About.css";
import about_img from "../../assets/about.png";
import play_icon from "../../assets/play-icon.png";

function About({setPlayState}) {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} alt="" className="about-img" />
        <img src={play_icon} alt="" className="play-icon" onClick={()=>{setPlayState(true)}} />
      </div>

      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tomorrow's Leaders Today</h2>
        <p>
          My own degrees in the subject also taught me transferable professional
          skills including transcribing near-illegible handwriting, the
          considerable importance of version control in work documentation, and
          the ability to read between the lines when dissent must be expressed
          obliquely because doing otherwise carries a high penalty. Perhaps this
          last is what makes the humanities so threatening in certain quarters.
        </p>

        <p>
          My own degrees in the subject also taught me transferable professional
          skills including transcribing near-illegible handwriting, the
          considerable importance of version control in work documentation, and
          the ability to read between the lines when dissent must be expressed
          obliquely because doing otherwise carries a high penalty. Perhaps this
          last is what makes the humanities so threatening in certain quarters.
        </p>

        <p>
          My own degrees in the subject also taught me transferable professional
          skills including transcribing near-illegible handwriting, the
          considerable importance of version control in work documentation, and
          the ability to read between the lines when dissent must be expressed
          obliquely because doing otherwise carries a high penalty. Perhaps this
          last is what makes the humanities so threatening in certain quarters.
        </p>
      </div>
    </div>
  );
}

export default About;
