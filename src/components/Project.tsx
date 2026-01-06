import React from "react";
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import '../assets/styles/Project.scss';

function Project() {
  return (
    <div className="projects-container" id="projects">
      <h1>Projects</h1>
      <div className="projects-grid">
        <div className="project">
          <a href="#" target="_blank" rel="noreferrer">
            <img src={mock01} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a href="#" target="_blank" rel="noreferrer">
            <h2>Credit Risk Analysis: Loan Default Prediction (EDA)</h2>
          </a>
          <p>Exploratory data analysis on 307K credit applications with 122 features using Python. Identified key default predictors through correlation analysis and stratified segmentation. Built three-tier risk model projecting 20-25% default reduction with regulatory-compliant explainable features for fair lending.</p>
        </div>

        <div className="project">
          <a href="#" target="_blank" rel="noreferrer">
            <img src={mock02} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a href="#" target="_blank" rel="noreferrer">
            <h2>Geospatial E-Commerce Analytics: US State-Level Analysis</h2>
          </a>
          <p>Analyzed $1.85M e-commerce revenue across 52 US states using SQL and Tableau. Built interactive geospatial dashboard revealing 2.5× conversion efficiency spread. Statistical analysis identified engagement patterns driving performance gaps, projecting 12-18% revenue lift through data-driven budget reallocation.</p>
        </div>

        <div className="project">
          <a href="#" target="_blank" rel="noreferrer">
            <img src={mock03} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a href="#" target="_blank" rel="noreferrer">
            <h2>Production ML Regression: Housing Price Prediction</h2>
          </a>
          <p>Production-grade gradient boosting model predicting housing prices with R²=0.99 across 1,460 properties. Engineered 89 features with 5-fold cross-validation. Outperformed RandomForest by 16.8%. Enables automated appraisal workflows and portfolio optimization for institutional investors.</p>
        </div>
      </div>
    </div>
  );
}

export default Project;