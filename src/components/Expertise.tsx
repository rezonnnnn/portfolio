import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDatabase, faChartLine, faCode, faCogs } from '@fortawesome/free-solid-svg-icons';
import '../assets/styles/Expertise.scss'

const labelsFirst = [
    "PySpark",
    "SQL",
    "Databricks",
    "ETL Pipelines",
    "Data Modeling",
    "Delta Lake"
];

const labelsSecond = [
    "Power BI",
    "Tableau",
    "DAX",
    "Data Visualization",
    "Dashboard Development"
];

const labelsThird = [
    "Python",
    "Pandas",
    "NumPy",
    "Git",
    "Power Platform",
    "Excel"
];

const labelsFourth = [
    "Data Quality",
    "Stakeholder Management",
    "Process Automation",
    "Statistical Analysis"
];

function Chip(props: { className: string; label: string }) {
    return <span className={props.className}>{props.label}</span>;
}

function Expertise() {
    return (
        <div className="container" id="expertise">
            <div className="skills-container">
                <h1>Expertise</h1>
                <div className="skills-grid">
                    <div className="skill">
                        <FontAwesomeIcon icon={faDatabase} size="3x"/>
                        <h3>Data Engineering</h3>
                        <p>Experienced in designing and building scalable data pipelines and ETL processes. Proficient in implementing medallion architecture patterns and optimizing data workflows for enterprise-scale analytics platforms.</p>
                        <div className="flex-chips">
                            <span className="chip-title">Tech stack:</span>
                            {labelsFirst.map((label: string, index: number) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>

                    <div className="skill">
                        <FontAwesomeIcon icon={faChartLine} size="3x"/>
                        <h3>Business Intelligence</h3>
                        <p>Skilled in developing interactive dashboards and reports that drive data-driven decision making. Expertise in translating complex data into actionable insights through compelling visualizations and KPI frameworks.</p>
                        <div className="flex-chips">
                            <span className="chip-title">Tech stack:</span>
                            {labelsSecond.map((label: string, index: number) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>

                    <div className="skill">
                        <FontAwesomeIcon icon={faCode} size="3x"/>
                        <h3>Programming & Analytics</h3>
                        <p>Strong programming foundation with focus on data manipulation, statistical analysis, and automation. Proficient in leveraging modern tools and frameworks to deliver efficient, maintainable analytical solutions.</p>
                        <div className="flex-chips">
                            <span className="chip-title">Tech stack:</span>
                            {labelsThird.map((label: string, index: number) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>

                    <div className="skill">
                        <FontAwesomeIcon icon={faCogs} size="3x"/>
                        <h3>Data Governance & Operations</h3>
                        <p>Committed to maintaining high data quality standards and implementing robust governance frameworks. Experienced in stakeholder management and driving process improvements through automation and best practices.</p>
                        <div className="flex-chips">
                            <span className="chip-title">Tech stack:</span>
                            {labelsFourth.map((label: string, index: number) => (
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