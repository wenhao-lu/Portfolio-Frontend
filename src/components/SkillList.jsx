import { useState, useEffect } from "react";
import "./SkillList.css";

import logo1 from "../assets/logo/react.png";
import logo2 from "../assets/logo/laravel.png";
import logo3 from "../assets/logo/php.png";
import logo4 from "../assets/logo/mysql.png";
import logo5 from "../assets/logo/node.png";
import logo6 from "../assets/logo/asp.png";

export default function SkillList() {
  const [skills, setSkills] = useState([]);

  // fetch all movies info from the database, order by the popularity (default by the API database)
  async function fetchSkills() {
    // the API syntax, take apiKey as a parameter
    let response = await fetch("https://c9674390.mywhc.ca/api/skills");
    let data = await response.json();
    console.log(data);
    setSkills(data);
  }

  // set fetchMovies() once to update
  useEffect(() => {
    fetchSkills();
  }, []);

  const myImages = [logo1, logo2, logo3, logo4, logo5, logo6];

  return (
    <div className="skilWrap" id="skills">
      <p className="skillText">My Skills</p>
      {skills.map((skill, index) => (
        <div className="skillContainer" key={skill.id}>
          {/* the images don't show up because of a configuration issue in the hosting server,
            so I disable the use of the images from database 
          <div className="skiiImg">
            <img src={skill.image} alt={skill.name} />
          </div>
          */}

          {/* I temporarily use the images array from /assets/images/folder to display logo */}
          <div className="wrap">
            <div className="skiiImg">
              <img
                src={myImages[index]}
                alt={skill.name}
                width="50"
                height="50"
              />
            </div>

            <div className="skillName">{skill.name}</div>
          </div>
          <div
            className="skillPercent"
            style={{ width: `${skill.percent - 10}%` }}
          ></div>
        </div>
      ))}
    </div>
  );
}
