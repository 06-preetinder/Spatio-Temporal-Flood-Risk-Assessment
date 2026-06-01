# An Explainable AI-Based Spatio-Temporal Flood Risk Intelligence System

[![Status: Under Publication](https://img.shields.io/badge/Status-Under_Publication-orange.svg)]()
[![Python](https://img.shields.io/badge/Python-3.8%2B-blue.svg)]()
[![Machine Learning](https://img.shields.io/badge/Machine_Learning-Random_Forest%20%7C%20XGBoost-success.svg)]()

## 📌 Project Overview
Floods in India have traditionally been linked to extreme rainfall, but climate change and ecological degradation are shifting these dynamics. This research project introduces an integrated framework combining **econometric modeling, machine learning, SHAP-based explainability, and spatial analysis** to analyze spatio-temporal flood risks using both hydrological (rainfall) and ecological (tree loss/deforestation) factors.

> **Note:** The full research paper detailing the quantitative findings, specific thresholds, and in-depth analyses is currently **Under Publication**. This repository contains the code implementations and methodologies used for the study.

## 🚀 Key Features & Methodology
1. **Exploratory Data Analysis (EDA):** Trend analysis using statistical methods (e.g., Mann-Kendall Test) to understand the progression of tree loss and flood frequencies.
2. **Econometric Modeling (Panel Regression):** Utilizing Fixed Effects Panel OLS regression to quantify the elasticity of flood risks against combined ecological and meteorological drivers.
3. **Machine Learning Predictive Modeling:** - Time-aware, leakage-free data splitting.
   - Comparative evaluation of Random Forest and XGBoost classifiers.
   - High-performance prediction of flood occurrences across different states.
4. **Model Explainability (XAI):** Utilizing **SHAP (SHapley Additive exPlanations)** to interpret non-linear interactions between variables and uncover critical ecological thresholds.

## 🛠️ Tech Stack
- **Data Manipulation & Analysis:** `pandas`, `numpy`, `statsmodels`, `linearmodels`
- **Machine Learning:** `scikit-learn`, `xgboost`
- **Explainable AI (XAI):** `shap`
- **Visualization:** `matplotlib`, `seaborn`

## 📂 Repository Structure
* \`Flood-EDA.ipynb\` - Exploratory Data Analysis & statistical trend testing.
* \`Flood-pannelREG.ipynb\` - Panel regression modeling for econometric insights.
* \`ML-flood.ipynb\` - Training, tuning, and evaluating Random Forest and XGBoost models.
* \`Flood_ML&SHAP.ipynb\` - Implementation of SHAP values for interpreting model predictions and feature importance.
* \`Final_Cleaned_Panel_Dataset.csv\` - *(Sample/Schema structure provided - full raw data withheld pending publication)*.

## ⚙️ Setup & Installation
1. Clone the repository:
   \`\`\`bash
   git clone https://github.com/yourusername/flood-risk-intelligence.git
   cd flood-risk-intelligence
   \`\`\`
2. Install the required dependencies:
   \`\`\`bash
   pip install -r requirements.txt
   \`\`\`
3. Run the Jupyter notebooks locally to explore the modeling pipeline:
   \`\`\`bash
   jupyter notebook
   \`\`\`

## 📝 Authors
- **Preetinderjeet Singh**
- **Diljot Singh**
- **Depesh Sharma** - **Dr. Sita Rani**

## 📜 License & Citation
*Copyright (c) 2024. All rights reserved.*

Please note that as the paper is currently undergoing peer review, the direct findings, thresholds, and exact datasets are restricted. Once published, a formal citation link and the full dataset will be provided here.
