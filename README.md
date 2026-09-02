# An Explainable AI-Based Spatio-Temporal Flood Risk Intelligence System

[![Status: Under Publication](https://img.shields.io/badge/Status-Under_Publication-orange.svg)]()
[![Python](https://img.shields.io/badge/Python-3.8%2B-blue.svg)]()
[![Machine Learning](https://img.shields.io/badge/Machine_Learning-Random_Forest%20%7C%20XGBoost-success.svg)]()

## 📌 Project Overview

Floods in India have traditionally been associated with extreme rainfall, but changing climatic conditions and ecological degradation are increasingly influencing flood dynamics.

This research project introduces an integrated **spatio-temporal flood risk intelligence framework** combining **independent dataset engineering, feature engineering, econometric modeling, machine learning, explainable AI (XAI), and geospatial analysis** to investigate flood risk using both hydrological and ecological factors.

A key component of the study was the **independent construction and engineering of the research dataset**. Heterogeneous hydrological, ecological, and regional data were compiled and integrated into a unified spatio-temporal panel dataset. Domain-relevant features were engineered from the collected variables, followed by systematic preprocessing and normalization to bring variables with different units and magnitudes onto a common scale.

The resulting dataset was subsequently used for statistical analysis, econometric modeling, machine-learning-based flood prediction, explainability analysis, and geospatial risk assessment.

> **Note:** The full research paper detailing the quantitative findings, specific thresholds, and in-depth analyses is currently **Under Publication**. The repository contains the code implementations and methodology used in the study, while the complete research dataset and findings remain restricted until publication.

---

## 🚀 Key Features & Methodology

### 1. 📊 Dataset Engineering & Feature Construction

A major component of the project involved the **independent construction and preprocessing of the research dataset** rather than relying solely on a ready-made dataset.

The data engineering pipeline involved:

- Independent compilation and integration of heterogeneous **hydrological, ecological, and regional data**.
- Development of **domain-specific engineered features** relevant to flood-risk assessment.
- Data cleaning and preprocessing to handle inconsistencies across different data sources.
- Transformation of heterogeneous variables into a structured **spatio-temporal panel dataset**.
- **Feature normalization/scaling** to bring variables with different units and magnitudes onto a common scale.
- Preparation of the engineered dataset for both **econometric and machine-learning workflows**.
- Time-aware preprocessing to maintain a **leakage-free modeling pipeline**.

### 2. 🔎 Exploratory Data Analysis (EDA)

Statistical and exploratory analysis was performed to investigate temporal trends and relationships between ecological degradation and flood occurrence.

Methods include:

- Distribution and correlation analysis
- Temporal trend analysis
- Flood-frequency analysis
- **Mann-Kendall trend testing**
- Analysis of tree-loss/deforestation trends
- Comparative analysis of hydrological and ecological variables

### 3. 📈 Econometric Modeling

A **Fixed Effects Panel OLS regression** framework was implemented to quantify the relationship between flood risk and combined ecological and meteorological drivers.

The panel-modeling approach enables analysis across regions and time while accounting for unobserved region-specific effects.

### 4. 🤖 Machine Learning Predictive Modeling

Machine-learning models were developed to predict flood occurrences across different Indian states.

The modeling pipeline includes:

- Time-aware train/test splitting
- Leakage-free preprocessing
- Feature scaling and transformation
- Comparative evaluation of:
  - **Random Forest**
  - **XGBoost**
- Model performance evaluation
- Flood-occurrence prediction across regions

### 5. 🧠 Explainable AI (XAI)

To improve interpretability and understand the factors driving model predictions, **SHAP (SHapley Additive exPlanations)** was incorporated into the machine-learning pipeline.

SHAP analysis was used to:

- Identify influential features
- Interpret individual model predictions
- Analyze feature contributions
- Investigate non-linear relationships
- Explore potential ecological and hydrological thresholds

### 6. 🗺️ Geospatial Risk Analysis

Geospatial analysis was performed using **GeoPandas** to transform model-derived risk assessments into regional flood-risk maps.

The analysis enables visualization of computed flood-risk scores across different regions of Indian states.

---

## 🛠️ Tech Stack

### Data Manipulation & Statistical Analysis
- `Python`
- `Pandas`
- `NumPy`
- `Statsmodels`
- `Linearmodels`

### Machine Learning
- `Scikit-learn`
- `XGBoost`

### Explainable AI
- `SHAP`

### Geospatial Analysis
- `GeoPandas`

### Visualization
- `Matplotlib`
- `Seaborn`

---

## 📂 Repository Structure

- `Flood-EDA.ipynb` — Exploratory Data Analysis and statistical trend testing.
- `Flood-pannelREG.ipynb` — Fixed Effects Panel OLS regression and econometric analysis.
- `ML-flood.ipynb` — Training, tuning, and evaluation of Random Forest and XGBoost models.
- `Flood_ML&SHAP.ipynb` — SHAP-based model interpretation and feature importance analysis.
- `Final_Cleaned_Panel_Dataset.csv` — Sample/schema structure of the engineered panel dataset. The complete research dataset is withheld pending publication.

---

## ⚙️ Setup & Installation

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/flood-risk-intelligence.git
cd flood-risk-intelligence
```

### 2. Install dependencies

```bash
pip install -r requirements.txt
```

### 3. Run the notebooks

```bash
jupyter notebook
```

Open the notebooks in the repository to explore the complete analytical and modeling pipeline.

---

## 🔬 Research Pipeline

```text
Raw Data Sources
       ↓
Data Compilation & Integration
       ↓
Data Cleaning & Preprocessing
       ↓
Feature Engineering
       ↓
Feature Normalization / Scaling
       ↓
Spatio-Temporal Panel Dataset
       ↓
 ┌───────────────┬─────────────────┐
 ↓               ↓                 ↓
EDA         Panel Regression    ML Modeling
 ↓               ↓                 ↓
Trend       Econometric        Random Forest
Analysis     Analysis          XGBoost
                                   ↓
                              SHAP / XAI
                                   ↓
                         Geospatial Risk Mapping
```

---

## 📌 Key Contribution

The project goes beyond applying machine-learning models to an existing dataset. A significant part of the research involved **constructing and engineering the underlying dataset itself**, integrating heterogeneous hydrological and ecological variables into a unified spatio-temporal framework.

The engineered features were subsequently **cleaned, transformed, and normalized onto a common scale**, enabling consistent downstream econometric, machine-learning, explainability, and geospatial analysis.

This end-to-end approach combines:

**Data Engineering → Feature Engineering → Econometrics → Machine Learning → Explainable AI → Geospatial Intelligence**

into a unified flood-risk assessment framework.

---

## 📝 Authors

- **Preetinderjeet Singh**
- **Diljot Singh**
- **Depesh Sharma**
- **Dr. Sita Rani**

---

## 📜 License & Citation

Copyright (c) 2024. All rights reserved.

Please note that the research paper is currently undergoing peer review. Therefore, the complete dataset, quantitative findings, specific thresholds, and detailed research results are currently restricted.

Following publication, the formal citation information and complete dataset will be made available where appropriate.
