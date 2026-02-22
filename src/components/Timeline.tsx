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

            <h4 style={{ marginTop: '14px', fontStyle: 'italic', fontSize: '0.95em' }}>Product Strategist / Software Development Senior Advisor, CRM Replatforming & AI Initiatives (2023 – Present)</h4>
            <ul style={{marginTop: '8px', paddingLeft: '20px'}}>
              <li>Defined product vision, rollout strategy, and roadmap for replatforming the order-scheduling CRM from PEGA to AWS + React across 20+ repos; designed a tenure-based segmentation approach for pilot rollouts, owned scope, sequencing, and success metrics.</li>
              <li>Drove call-deflection strategies by promoting refill-by-text enrollment and proactive copay-assistance outreach; achieved a 25% reduction in unsolicited calls and improved patient affordability through earlier financial intervention.</li>
              <li>Mapped end-to-end patient and PCA journeys across digital, chat, and call-center channels; designed a cross-channel data-stitching solution that maintained session state, enabling PCAs to see why a patient dropped off and resolve issues on first contact, with positive PCA feedback citing improved visibility into cross-channel patient context.</li>
              <li>Scoped an AI-driven RAG solution to automate adverse-event classification and outbound communication generation; replaced manual nurse review of 200-page manufacturer contracts, saving 5 minutes per review and improving accuracy.</li>
              <li>Conducted product/capability-fit assessments and build-vs-buy evaluations for the migration backlog; selected third-party APIs over custom builds where appropriate, saving build cost and improving PCA experience.</li>
              <li>Used Adobe Analytics to build PCA clickstream journeys across CRM screens; identified process bottlenecks and screen-level friction points that informed UX redesign priorities, reducing average handle time by 40 seconds per call.</li>
              <li>Architected a harmonized data store to unify patient data across channels; enabled a consistent patient experience regardless of entry point (digital, chat, call center).</li>
              <li>Authored pitch decks, ROI business cases, and value propositions for operations and senior product leadership; delivered product demos, training sessions, and playbacks to drive stakeholder buy-in and adoption for the replatform, AI initiative, and digital-deflection campaigns.</li>
              <li>Designed high-fidelity Figma prototypes for the new order-scheduling experience; used AI tools (Cursor) to convert prototypes into a working app for rapid business feedback.</li>
              <li>Built personas (PCA, patient, auth user, nurse, pharmacist) and designed persona-specific workflows and screen layouts for each user type.</li>
              <li>Created SOPs in Confluence for PCAs and clinicians; built working prototypes and an AI-assisted helper forum to support operational readiness and training.</li>
            </ul>

            <h4 style={{ marginTop: '14px', fontStyle: 'italic', fontSize: '0.95em' }}>Product Owner & Software Development Engineer, CRM Call Center (2020 – 2023)</h4>
            <ul style={{marginTop: '8px', paddingLeft: '20px'}}>
              <li>Partnered with clinical partners to create clinical programs, offers, questionnaires, and surveys for clinicians; unified a previously siloed clinician experience, eliminating manual configuration work and saving 100 seconds per assessment across 8,000 daily assessments.</li>
              <li>Led quarterly feature development end-to-end, from requirements gathering through design, development, and release, across scheduling, clinical, and operational workflows.</li>
              <li>Maintained and prioritized the product backlog, facilitated PIPE events, sprint planning, and stakeholder demos; articulated value propositions to balance operational urgency with platform health.</li>
              <li>Mentored a team of 5 developers on design patterns and code review standards while driving architectural decisions for the platform.</li>
            </ul>

            <h4 style={{ marginTop: '14px', fontStyle: 'italic', fontSize: '0.95em' }}>Programmer Analyst, PEGA CRM Order Scheduling (2017 – 2020)</h4>
            <ul style={{marginTop: '8px', paddingLeft: '20px'}}>
              <li>Created Splunk and Tableau dashboards for operational insights and digital-deflection tracking; analysis identified automation opportunities saving $2–3M per initiative.</li>
              <li>Developed logging frameworks and instrumentation across CRM flows; operational dashboards surfaced call-driver patterns that reduced average handle time (AHT) by 15 seconds.</li>
              <li>Built order-scheduling workflows and supporting intents (address, financial summary, Easy Fill, refill-by-text); met directly with operations and clients to define requirements.</li>
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
