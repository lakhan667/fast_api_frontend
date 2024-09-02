import React from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faFacebook } from "@fortawesome/free-brands-svg-icons"

const FooterComponent = () => {
  // const facebook = <FontAwesomeIcon icon={faFacebook} />
  return (
    <footer className="footer">
      <div className="container">
        <p className='text-center'>Copyright &copy; 2023 Yash Technologies</p>
        {/* <ul className="social-links">
          <li>
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-facebook" />
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-twitter" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-instagram" />
            </a>
          </li>
        </ul> */}
      </div>
    </footer>
  )
}

export default FooterComponent