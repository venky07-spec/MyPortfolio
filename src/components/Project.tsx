import React from "react";
import cqrsImage from '../assets/images/cqrs.png';
import aeImage from '../assets/images/AE reporting.png';
import '../assets/styles/Project.scss';

const publicUrl = process.env.PUBLIC_URL || '';
const callDeflectionImage = `${publicUrl}/call-deflection.png`;
const callForecastingImage = `${publicUrl}/call-forecasting.png`;

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>High-Impact Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <img src={cqrsImage} className="zoom" alt="CQRS Architecture Diagram" width="100%"/>
                <h2>Proactive Order Scheduling with Harmonized CQRS Data Architecture</h2>
                <p>Designed and delivered a harmonized CQRS-style data layer to create a unified patient interaction store across digital, SMS, and voice channels. The architecture stitches together patient activity and order lifecycle events so context from one channel seamlessly carries into the next—ensuring a consistent, uninterrupted experience.</p>
                <p>Built a proactive scheduling engine that pre-packages order records before patients call by aggregating CRM data, prescription history, insurance details, copay status, and prior authorization requirements into a single, ready-to-serve view. The system identifies gaps (e.g., missing insurance, unresolved copays, pending prior authorizations) and triggers targeted digital or SMS outreach to resolve issues before live agent engagement.</p>
                <p>By surfacing complete, channel-agnostic context at first contact, agents avoid rediscovery, reduce handle time, and increase first-call resolution. Patients experience faster service and fewer repeat interactions.</p>
                <p><strong>Impact:</strong></p>
                <ul style={{ marginTop: '6px', paddingLeft: '20px', lineHeight: 1.6 }}>
                    <li>~$4M in operational savings</li>
                    <li>Reduced average handle time</li>
                    <li>Improved first-contact resolution</li>
                    <li>Measurable gains in patient satisfaction</li>
                    <li>Consistent cross-channel patient experience</li>
                </ul>
            </div>
            <div className="project">
                <a href="https://clinical-ae-agent-bmj4hszpwa-uc.a.run.app/" target="_blank" rel="noreferrer"><img src={aeImage} className="zoom" alt="AI-Powered Adverse Event Summarization" width="100%"/></a>
                <a href="https://clinical-ae-agent-bmj4hszpwa-uc.a.run.app/" target="_blank" rel="noreferrer"><h2>AI-Powered Adverse Event Summarization & Reporting</h2></a>
                <p>Built an AI-driven adverse event pipeline using GPT-5.2 and Claude Opus 4.5 to summarize patient-reported assessments and align them with manufacturer contracts for classification and compliant report generation. The tool automates previously manual review and form-filling while keeping regulatory guardrails. <strong>POC only (AI); estimated impact: $3M in savings upon scale.</strong></p>
            </div>
            <div className="project">
                <img src={callDeflectionImage} className="zoom" alt="Driving Digital Transformation for Patient Convenience - Call Deflection & Enrollment Initiatives" width="100%" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
                <h2>Call Deflection: Easy Fill, Refill-by-Text & Copay Assistance Campaigns</h2>
                <p>Led product and rollout of call-deflection and enrollment initiatives: Easy Fill and refill-by-text programs, plus client copay assistance campaigns including Saveon and Foundational Program enrollments. Campaigns and in-flow prompts moved routine refills, order updates, and copay support from the call center to self-serve digital and SMS. Outcomes include reduced inbound volume and stronger digital adoption so patients get greater convenience and affordability. <strong>Impact: 45% call volume reduction; 60% increased digital adoption; improved patient experience and outcomes.</strong></p>
            </div>
            <div className="project">
                <img src={callForecastingImage} className="zoom" alt="Call Forecasting & Intent Classification - $1M Operational Impact" width="100%" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
                <h2>Call Intent Forecasting & Predictive Analytics</h2>
                <p>Delivered a hybrid predictive and routing engine combining LLM-derived signals with traditional ML (e.g., propensity-to-call via XGBoost, intent classification with NLP and Random Forest) and rule-based urgency and compliance logic. Inputs include patient CRM and history, prescription refill data, and past call transcripts; outputs drive staffing optimization, proactive outreach (e.g., SMS/app alerts), and skill-based routing. The system supports first-call resolution by surfacing patient grievance and intent, and enables proactive outreach when repeat-caller patterns are detected so teams can reach at-risk patients before they call again. <strong>Estimated impact: $1M in operational savings; efficient staffing; improved first-call resolution and proactive patient experience.</strong></p>
            </div>
        </div>
    </div>
    );
}

export default Project;