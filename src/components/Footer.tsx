import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/venky07-spec" target="_blank" rel="noreferrer"><GitHubIcon/></a>
        <a href="https://www.linkedin.com/in/venkateswaran-rajan-18a9b2105" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
      </div>
      <p>A portfolio designed & built by <a href="https://github.com/venky07-spec/MyPortfolio" target="_blank" rel="noreferrer">Venkateswaran Rajan</a> with 💜</p>
    </footer>
  );
}

export default Footer;
