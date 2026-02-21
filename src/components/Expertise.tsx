import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsProductUX = [
  "Go-to-market strategy",
  "Value proposition",
  "Gap analysis",
  "Roadmap prioritization",
  "Figma",
  "Journey mapping",
  "A/B testing",
  "Usability"
];

const labelsArchCloud = [
  "Microservices",
  "CQRS",
  "Domain-Driven Design",
  "REST",
  "PEGA PRPC",
  "AWS (Lambda, ECS, S3, DynamoDB, SQS)",
  "Docker",
  "K8s",
  "Jenkins",
  "Terraform"
];

const labelsAIData = [
  "RAG",
  "LLM",
  "NLP",
  "WEKA",
  "Random Forest",
  "K-means",
  "Splunk",
  "ELK",
  "Grafana",
  "Adobe Analytics",
  "Tableau",
  "SQL"
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Product & UX</h3>
                    <p>Product strategy, go-to-market, value proposition development, sales readiness, gap analysis, capability-fit, and roadmap prioritization. UX practice with Figma, journey mapping, A/B testing, and usability across digital, chat, and call-center channels.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsProductUX.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDocker} size="3x"/>
                    <h3>Architecture & Cloud</h3>
                    <p>Microservices, CQRS, Domain-Driven Design, REST, and PEGA PRPC. Cloud-native delivery on AWS (Lambda, ECS, S3, DynamoDB, SQS), Docker, Kubernetes, Jenkins, and Terraform.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsArchCloud.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>AI/ML & Data</h3>
                    <p>RAG, LLM, NLP, WEKA, Random Forest, K-means for AI-powered workflows. Operational and product analytics with Splunk, ELK, Grafana, Adobe Analytics, Tableau, and SQL.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsAIData.map((label, index) => (
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
