// components/About.jsx

import Image from "next/image";

const About = () => {
  return (
    <div className="about-container">
      <h2>Research Motivation</h2>
      <div className="flex-about">
        <div className="about-text">
          <p>
          </p>
        </div>
        <div className="about-img">
          <Image src='/images/pic.png' className="profile-img" width={300} height={500}/>
        </div>
      </div>
    </div>
  )
}

export default About;