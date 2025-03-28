// components/Navbar.jsx

import Link from "next/link";

const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="logo">
        <Link href="/">
          Sania Ahmad
        </Link>
      </div>
      <div className="">
        <Link href="experience">
          Sania Ahmad
        </Link>
      </div>
      <a href="/Sania_Ahmad_Resume_.pdf" target="_blank" className="cta-btn">Resume</a>
    </div>
  )   
}

export default Navbar;