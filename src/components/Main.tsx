import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import '../assets/styles/Main.scss';

function Main() {
  return (
    <div className="container">
      <div className="about-section">
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/venky07-spec" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/venkateswaran-rajan-18a9b2105" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Venkateswaran Rajan</h1>
          <p>Product Manager & Technologist</p>
          <p style={{fontSize: '0.85em', marginTop: '8px', opacity: 0.85}}>Healthcare Technology · AI Products · CRM & Digital Transformation</p>
          <ul style={{fontSize: '0.9em', marginTop: '12px', opacity: 0.9, paddingLeft: '20px', lineHeight: 1.6}}>
            <li>Technologist with a product mindset and 12+ years of experience bridging engineering execution, product strategy, UX design, and applied AI across healthcare and financial services.</li>
            <li>Proven track record defining product vision, authoring PRDs, prioritizing roadmaps, leading cross-functional teams, and delivering measurable business outcomes.</li>
            <li>Strong background in customer discovery, KPI-driven optimization, and AI-powered workflow automation.</li>
          </ul>
          <div className="phone-contact" style={{display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '12px', marginTop: '15px'}}>
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
