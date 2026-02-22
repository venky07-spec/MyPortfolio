import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsProductMgmt = [
  "Product vision & strategy",
  "Roadmap ownership & prioritization",
  "PRDs & user story development",
  "Backlog management (Agile/Scrum)",
  "Stakeholder management",
  "Customer journey mapping",
  "OKRs & KPI tracking",
  "A/B testing & experimentation",
  "Go-to-market & rollout strategy",
  "Competitive & capability-fit analysis",
  "Jira, Confluence, Figma"
];

const labelsAnalytics = [
  "Adobe Analytics, Tableau, SQL",
  "Funnel analysis & clickstream tracking",
  "Operational KPI improvement",
  "Cost savings & ROI modeling"
];

const labelsTechnical = [
  "AWS (Lambda, ECS, S3, DynamoDB, SQS)",
  "Microservices & REST APIs",
  "React",
  "AI/ML (RAG, NLP, LLMs)",
  "PEGA Workflow, Python",
  "Docker, Kubernetes"
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Product Management</h3>
                    <p>Product vision and strategy, roadmap ownership, PRDs and user stories, backlog management, stakeholder management, customer journey mapping, OKRs and KPI tracking, A/B testing, go-to-market and rollout, capability-fit analysis.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Core competencies:</span>
                        {labelsProductMgmt.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>Analytics & Optimization</h3>
                    <p>Adobe Analytics, Tableau, and SQL for funnel analysis, clickstream tracking, operational KPI improvement, and cost savings and ROI modeling.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Core competencies:</span>
                        {labelsAnalytics.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDocker} size="3x"/>
                    <h3>Technical Acumen</h3>
                    <p>AWS, microservices and REST APIs, React, AI/ML (RAG, NLP, LLMs), PEGA Workflow, Python, Docker, and Kubernetes.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Core competencies:</span>
                        {labelsTechnical.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;
