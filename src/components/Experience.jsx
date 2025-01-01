import userData from "@/constants/data";

const Experience = () => {
    return (
        <div className="experience-container">
        <h2>Work Experience</h2>
          {userData.experience.map((exp, idx) => (
            <div key={idx}>
              <div className="experience-card">
                <div className="content">
                  <h3>{exp.title}</h3>
                  <a href={exp.companyLink} target="_blank" rel="noopener noreferrer">
                    {exp.company}
                  </a>
                  <div className="year">{exp.year}</div>
                  <p>{exp.desc}</p>
                  <br />
                </div>
              </div>
              {idx !== userData.experience.length - 1 && <div className="divider"></div>}
            </div>
          ))}
        </div>
    );
  };

  export default Experience;