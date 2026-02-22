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
          <p>Product Strategist with a technology mindset</p>
          <p style={{fontSize: '1.05em', marginTop: '8px', opacity: 0.9, color: '#ffffff'}}>Healthcare Technology · AI Products · CRM & Digital Transformation</p>
          <p style={{fontSize: '0.9em', marginTop: '12px', marginBottom: '8px', lineHeight: 1.6, color: '#ffffff'}}>Product strategist with a technology mindset and 12+ years of experience bridging engineering execution, product strategy, UX design, and applied AI across healthcare and financial services.</p>
          <p style={{fontSize: '0.9em', marginTop: '8px', marginBottom: '8px', lineHeight: 1.6, color: '#ffffff'}}>Proven track record defining product vision, authoring PRDs, prioritizing roadmaps, leading cross-functional teams, and delivering measurable business outcomes.</p>
          <p style={{fontSize: '0.9em', marginTop: '8px', lineHeight: 1.6, color: '#ffffff'}}>Strong background in customer discovery, KPI-driven optimization, and AI-powered workflow automation.</p>
          <div className="phone-contact" style={{display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '12px', marginTop: '15px'}}>
            <a href="tel:979-985-7170" className="phone-number" style={{display: 'flex', alignItems: 'center', gap: '6px'}}><PhoneIcon style={{fontSize: '1.1em', color: '#ffffff'}}/> 979-985-7170</a>
            <a href="mailto:venkatrajan04@gmail.com" style={{display: 'flex', alignItems: 'center', gap: '6px', color: '#ffffff', textDecoration: 'none'}}><EmailIcon style={{fontSize: '1.1em', color: '#ffffff'}}/> venkatrajan04@gmail.com</a>
          </div>
          <p style={{fontSize: '0.85em', marginTop: '8px', opacity: 0.9, color: '#ffffff'}}>328 Capstone Rd, Liberty Hill, TX 78642</p>

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
