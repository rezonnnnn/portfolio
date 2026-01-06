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
            date="2022 - present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Data Analyst</h3>
            <h4 className="vertical-timeline-element-subtitle">The Access Group - Asia Pacific</h4>
           <ul>
                <li>Engineered automated data pipelines in Databricks using PySpark</li>
                <li>Architected BI solution migration from Tableau to Power BI, redesigned data models</li>
                <li>Developed enterprise automation workflows integrating Databricks and Power BI</li>
                <li>Established data governance controls including lineage documentation</li>
                <li>Partnered with cross-functional stakeholders to translate business requirements</li>
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Sep 2025 - Dec 2025"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Associate in Data Analytics</h3>
            <h4 className="vertical-timeline-element-subtitle">TalentLabs</h4>
            <p>
              Comprehensive data analytics program covering SQL, Python (Pandas, NumPy), 
              statistical analysis, ETL processes, data visualization, and predictive 
              analytics. Includes hands-on projects applying analytical techniques to 
              real-world business problems.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Sep 2025 - Dec 2025"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Engineer Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">PETRONAS HQ</h4>
            <p>
              Developed and implemented sustainability initiatives aligned with PETRONAS' environmental goals, ensuring compliance through technical assessments and documentation. Collaborated on innovative solutions and coordinated workshops and engagement programs to promote sustainability and foster stakeholder participation.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;