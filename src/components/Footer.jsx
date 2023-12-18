import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedinIcon from '@mui/icons-material/Linkedin';

const Footer = () => {
  return (
    <div className='footer-container'>
      <div className="footer">
        <a style={{color:'white'}} href="https://github.com/lav-kushwaha" target="_lav" className="icon-link"><GitHubIcon /></a>
        <a href="https://www.linkedin.com/in/lavkushwaha/" target="_lav" className="icon-link"><LinkedinIcon/></a>
      </div>
      <a className='admin-name' href="https://www.linkedin.com/in/lavkushwaha/">
        Created By ❤️<span> Lav Kushwaha</span>
      </a>
      <p className='admin-name'>© 2023 All Rights Reserved Lav Kushwaha</p>
    </div>
  );
}

export default Footer;
