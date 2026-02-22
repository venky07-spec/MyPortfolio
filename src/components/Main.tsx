import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import profilePhoto from '../assets/images/profile-photo.png';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import '../assets/styles/Main.scss';

function Main() {

        <div className="image-wrapper">
          <img src={profilePhoto} alt="Venkateswaran Rajan" />
        </div>
  return (
    <div className="container">
      <div className="about-section">
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/venky07-spec" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/venkateswaran-rajan-18a9b2105" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Venkateswaran Rajan</h1>
          <p>Product Strategist & Software Development Senior Advisor</p>
          <p style={{fontSize: '0.9em', marginTop: '10px', opacity: 0.8}}>Technologist with a product mindset and 12+ years bridging engineering execution, product strategy, and UX design across healthcare CRM, financial services, and applied AI.</p>
          <div className="phone-contact" style={{display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '12px', marginTop: '15px'}}>
          <p style={{fontSize: '0.85em', marginTop: '8px', opacity: 0.85}}>venkatrajan04@gmail.com</p>
            <a href="tel:979-985-7170" className="phone-number" style={{display: 'flex', alignItems: 'center', gap: '6px'}}><PhoneIcon style={{fontSize: '1.1em', color: '#ffffff'}}/> 979-985-7170</a>
            <a href="mailto:venkatrajan04@gmail.com" style={{display: 'flex', alignItems: 'center', gap: '6px', color: 'inherit', textDecoration: 'none'}}><EmailIcon style={{fontSize: '1.1em', color: '#ffffff'}}/> venkatrajan04@gmail.com</a>
          </div>
          <p style={{fontSize: '0.85em', marginTop: '8px', opacity: 0.85}}>328 Capstone Rd, Liberty Hill, TX 78642</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/venky07-spec" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/venkateswaran-rajan-18a9b2105" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
