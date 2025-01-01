// components/Contact.jsx

const Contact = () => {
    return (
      <div className="contact-container">
        <h2>Get in Touch</h2>
        <p>I am actively looking for full-time Software Engineer roles. If you think I am a good fit, let me know! </p>
        <div className="contact-links">
          <a href="mailto:saniaahmad6@gmail.com"> <i className="fa-solid fa-envelope"></i> </a> 
          <a
              href="https://github.com/saniaahmad6"
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
          > 
          <i className="fa-brands fa-github"></i>
          </a>
           <a
              href="https://www.linkedin.com/in/sania-ahmad-b6a5b7224/"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            > <i className="fa-brands fa-linkedin"> </i></a>
            </div>
      
      </div>
    )
  }
  
  export default Contact;