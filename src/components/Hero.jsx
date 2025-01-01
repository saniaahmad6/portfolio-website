// components/Hero.jsx

import Image from "next/image";

const Hero = () => {
  return (
    <div className="hero-container">
      <Image src='/images/profile.jpeg' className="profile-img" width={300} height={300} alt="profile picture" />
      <div className="hero-text">
        <h1>Hello, I am Sania </h1>
        <p>
          I'm a final year computer engineering student at Jamia Millia Islamia, New Delhi, in pursuit of becoming a productive professional, with a keen interest in problem-solving and software development.
        </p>
       
      </div>
    </div>
  )
}

export default Hero;