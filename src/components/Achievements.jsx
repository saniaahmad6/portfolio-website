import userData from "@/constants/data";

const Achievements = () => {
    return (
        <div className="experience-container">
        <h2>Achievements</h2>
          {userData.achievements.map((achievement, idx) => (
            <div key={idx}>
              <div className="experience-card">
                <div className="content">
                  <h3>{achievement.title}</h3>
                  <div className="year">{achievement.year}</div>
                  <p>{achievement.desc}</p>
                  <br />
                </div>
              </div>
              {idx !== userData.experience.length - 1 && <div className="divider"></div>}
            </div>
          ))}
        </div>
    );
  };

  export default Achievements;