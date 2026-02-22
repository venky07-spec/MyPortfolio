import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="Jul 2017 – Present"
            iconStyle={{ background: 'var(--accent)', color: 'white' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Express Scripts — Accredo (Cigna Group)</h3>
            <h4 className="vertical-timeline-element-subtitle">Healthcare / Pharmacy Benefits</h4>

            <h4 style={{ marginTop: '14px', fontStyle: 'italic', fontSize: '0.95em' }}>Software Development Senior Advisor / Product Strategist — CRM Replatforming & AI Initiatives (2023 – Present)</h4>
            <ul style={{marginTop: '8px', paddingLeft: '20px'}}>
              <li>Defined product vision, go-to-market strategy, and roadmap for replatforming the order-scheduling CRM from PEGA to AWS + React across 20+ repos; owned scope, sequencing, and success metrics.</li>
              <li>Conducted product/capability-fit assessments; recommended Google Address API over custom build for address validation, saving build cost and improving Patient Care Advocate experience.</li>
              <li>Mapped end-to-end patient and Patient Care Advocate journeys on FigJam across digital, chat, and call-center channels; identified handoff gaps and informed the design of a channel-agnostic order-scheduling experience.</li>
              <li>Architected a harmonized data store to unify patient data across channels; enabled a consistent patient experience regardless of entry point (digital, chat, call center).</li>
              <li>Designed high-fidelity Figma prototypes for the new order-scheduling experience; used AI tools (Cursor) to convert prototypes into a working app for rapid business feedback.</li>
              <li>Used Adobe Analytics to build Patient Care Advocate clickstream journeys across CRM screens; identified process bottlenecks and screen-level friction points that informed UX redesign priorities.</li>
              <li>Scoped an AI-driven RAG solution to automate adverse-event classification and outbound communication generation; replaced manual nurse review of 200-page manufacturer contracts, reducing review time and improving accuracy.</li>
              <li>Built personas (Patient Care Advocate, patient, auth user, nurse, pharmacist) and designed persona-specific workflows and screen layouts for each user type.</li>
              <li>Drove call-deflection strategies by promoting refill-by-text enrollment; launched Patient Care Advocate incentive campaigns to enroll patients in text-based refills, shifting volume from call center to digital channels.</li>
              <li>Authored pitch decks and ROI business cases for operations and senior product leadership; delivered capability demos and playbacks to secure buy-in for the replatform, AI initiative, and digital-deflection campaigns.</li>
              <li>Created SOPs in Confluence for Patient Care Advocates and clinicians; built working prototypes and an AI-assisted helper forum to support operational readiness and training.</li>
            </ul>

            <h4 style={{ marginTop: '14px', fontStyle: 'italic', fontSize: '0.95em' }}>Software Development Engineer — CRM Call Center (2020 – 2023)</h4>
            <ul style={{marginTop: '8px', paddingLeft: '20px'}}>
              <li>Maintained and prioritized the product backlog, facilitated PIPE events, sprint planning, and stakeholder demos; articulated value propositions to balance operational urgency with platform health.</li>
              <li>Partnered with clinical partners to create clinical programs, offers, questionnaires, and surveys for clinicians; improved the pharmacist experience within the CRM platform.</li>
              <li>Led quarterly feature development end-to-end—from requirements gathering through design, development, and release—across scheduling, clinical, and operational workflows.</li>
              <li>Mentored a team of 5 developers on design patterns and code review standards while driving architectural decisions for the platform.</li>
            </ul>

            <h4 style={{ marginTop: '14px', fontStyle: 'italic', fontSize: '0.95em' }}>Programmer Analyst — PEGA CRM Order Scheduling (2017 – 2020)</h4>
            <ul style={{marginTop: '8px', paddingLeft: '20px'}}>
              <li>Built order-scheduling workflows and supporting intents (address, financial summary, Easy Fill, refill-by-text); met directly with operations and clients to define requirements.</li>
              <li>Created Splunk and Tableau dashboards for operational insights and digital-deflection tracking; analysis identified automation opportunities saving $2–3M per initiative.</li>
              <li>Developed logging frameworks and instrumentation across CRM flows; operational dashboards surfaced call-driver patterns that reduced average handle time (AHT) by 15 seconds.</li>
              <li>Created REST connectors for external system integration; containerized PEGA PE images on Kubernetes for dev/staging environments.</li>
            </ul>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="Aug 2013 – Aug 2015"
            iconStyle={{ background: 'var(--accent)', color: 'white' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Tata Consultancy Services — Vantiv</h3>
            <h4 className="vertical-timeline-element-subtitle">Business Analyst & UX Designer — Fraud Management Platform (Financial Services)</h4>
            <ul style={{marginTop: '10px', paddingLeft: '20px'}}>
              <li>Translated BRDs into functional specs and user stories; modeled 6 process workflows in PEGA Process Modeler, aligning business and engineering and eliminating rework.</li>
              <li>Built a What-If decision-support framework for analysts to simulate risk profiles against multiple scoring models; reduced false-positive escalations, saving significant dollars in chargeback losses.</li>
              <li>A/B tested fraud-review screen layouts; iterated on information density and action placement, improving task-completion rates across the fraud operations team.</li>
            </ul>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="Sep 2012 – Aug 2013"
            iconStyle={{ background: 'var(--accent)', color: 'white' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Tata Consultancy Services — JPMorgan Chase</h3>
            <h4 className="vertical-timeline-element-subtitle">Business Analyst & UX Designer — Smart Dispute Resolution Platform (Financial Services)</h4>
            <ul style={{marginTop: '10px', paddingLeft: '20px'}}>
              <li>Designed wireframes, prototypes, and production screens for the dispute lifecycle (small dollar, write-off, pre-compliance); eliminated manual work-paper cases, saving $200K+ annually.</li>
              <li>Built automated chargeback processing flows with guided, single-screen experiences; reduced agent handling time by 15 seconds per interaction.</li>
              <li>Mapped the dispute lifecycle with stakeholders; translated findings into UI specs and acceptance criteria as the single source of truth for engineering.</li>
            </ul>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
