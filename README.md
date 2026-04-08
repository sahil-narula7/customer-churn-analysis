# Customer Churn Analysis

A complete machine learning project focused on predicting customer churn and understanding the business drivers behind customer attrition.

This project was built end-to-end by **Sahil Narula**, covering data cleaning, exploratory data analysis, feature engineering, model training, comparison, and tuning.

## Live Website

- Netlify URL: https://churnanalysis07.netlify.app/

## What I Did

1. Performed data cleaning and preprocessing:
- handled missing values
- converted data types
- encoded categorical features
- prepared data for modeling

2. Conducted exploratory data analysis (EDA):
- studied churn behavior across contract type, payment method, internet services, dependents, partner status, and demographics
- created visual analysis using Plotly, Matplotlib, and Seaborn

3. Built and evaluated multiple machine learning models:
- Logistic Regression
- SVM / Kernel SVM
- KNN
- Naive Bayes
- Decision Tree
- Random Forest
- AdaBoost
- Gradient Boosting
- Voting Classifier

4. Applied model validation and tuning:
- cross-validation using KFold
- hyperparameter search with GridSearchCV / RandomizedSearchCV
- model comparison with Accuracy, Precision, Recall, F1/F2, and ROC-AUC

## What I Got (Outcomes)

- A robust churn prediction workflow from raw data to final model evaluation.
- Clear business-level insights into churn patterns and high-risk customer segments.
- A benchmarked model stack with tuned ensemble models for stronger predictive performance.
- A deployable project presentation website ready for sharing on Netlify.

## Business Insights Derived

- Customers on month-to-month contracts show higher churn tendency.
- Service and billing attributes (for example internet service and payment behavior) are strongly associated with churn trends.
- Feature-level exploration improves explainability and supports retention strategy planning.

## Tech Stack

- Python
- Pandas, NumPy
- Matplotlib, Seaborn, Plotly
- Scikit-learn
- XGBoost, CatBoost
- Jupyter Notebook

## Project Structure

- `Customer churn prediction.ipynb` - Main notebook for the complete analysis and ML workflow.
- `data.csv` - Dataset used for this project.
- `website/` - Static project website.
- `netlify.toml` - Netlify configuration for website publishing.

## Publish To GitHub

Run these commands from the project root:

```bash
git init
git add .
git commit -m "Initial commit: churn analysis + website"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main
```

If the remote already exists, use:

```bash
git remote set-url origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main
```

## Author

**Sahil Narula**
