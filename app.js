// C207 OA Study Guide - Data-Driven Decision Making
// Focused on OA knowledge checks and pre-assessment style questions

const SECTIONS = [
  { id: 1, title: "Section 1: The Case for Quantitative Analysis", questions: [] },
  { id: 2, title: "Section 2: Quantitative Statistical Tools", questions: [] },
  { id: 3, title: "Section 3: Statistics as a Managerial Tool", questions: [] },
  { id: 4, title: "Section 4: Quality Metrics and Tools", questions: [] },
  { id: 5, title: "Section 5: Real World Data-Driven Decisions", questions: [] },
  { id: 6, title: "Section 6: Performance Measurement", questions: [] }
];

// Populate Section 1 questions
SECTIONS[0].questions = [
  { stem: "For companies to attract and retain their best customers, they need a complete portrait of who they are. What do companies use to develop this portrait?", choices: ["Histograms", "Analytics", "Management science", "Statistics"], answer: 1, how: ["Analytics is the extensive use of data, statistical and quantitative analysis, and models to drive decisions and add value, providing a complete customer picture."] },
  { stem: "A manufacturer wants to maximize its factory output while specifically minimizing labor costs. Which type of analytics might they employ to achieve this goal?", choices: ["Predictive analytics", "Descriptive analytics", "Diagnostic analytics", "Prescriptive analytics"], answer: 3, how: ["Prescriptive analytics recommends the best course of action to optimize an objective (maximize output, minimize cost) under constraints. Predictive only forecasts the future."] },
  { stem: "Which type of data error that occurs in measurement is constant within a dataset and is sometimes caused by faulty equipment or bias?", choices: ["Omission", "Random", "Systematic", "Outlier"], answer: 2, how: ["Systematic errors are consistent and caused by the measurement device or process itself."] },
  { stem: "An educator develops a new standardized test to measure ninth grade math skills. She has students in Ohio take the test. If the test is to be used on a national level, which type of error might be found in the data?", choices: ["Systematic error", "Omission error", "Information bias", "Measurement bias"], answer: 3, how: ["Measurement bias can arise when the sample (Ohio students) does not represent the national population the test is intended for."] },
  { stem: "A city government is trying to determine the national origins of its recent immigrant population. If a survey of the immigrant population is conducted in English, which type of error might be present in the data?", choices: ["Random", "Outlier", "Omission", "Accuracy"], answer: 2, how: ["Conducting the survey only in English can omit non-English-speaking immigrants, creating an incomplete or biased sample."] },
  { stem: "The use of big data is increasingly important to businesses in competitive markets. Which characteristic is not true of big data?", choices: ["Contains unstructured data", "Can be analyzed with traditional spreadsheets", "Requires the use of analytics", "Contains structured data"], answer: 1, how: ["Big data includes large volumes of unstructured data (text, images, video) that traditional spreadsheets cannot effectively analyze."] },
  { stem: "Quantitative Analysis Approach consists of framing the problem, solving the problem, and communicating results. Which two elements are part of framing the problem stage? (Choose 2)", choices: ["Determine the scope of the problem", "Data collection", "Review of previous findings", "Presenting a recommendation"], answer: [0, 2], multi: true, how: ["Framing includes determining the scope and reviewing previous findings to structure the analysis. Data collection and presenting recommendations belong to later stages."] },
  { stem: "A healthcare provider is researching blood glucose levels before and after exercising. Which two elements should be part of any experimental study like this? (Choose 2)", choices: ["Treatment procedures", "Patient observation", "Statistical validity", "Experimental response"], answer: [0, 3], multi: true, how: ["Experimental studies define treatments applied to subjects and measure the experimental responses. Pure observation is for observational studies."] },
  { stem: "Runners cover 26.2 miles in the Olympics marathon. Which level of measurement is this?", choices: ["Ratio", "Ordinal", "Nominal", "Interval"], answer: 0, how: ["26.2 miles is a ratio measurement: numerical with a true zero point that allows multiplication and division."] },
  { stem: "Which level of measurement is the type of cars produced in a Ford factory?", choices: ["Nominal", "Interval", "Ordinal", "Ratio"], answer: 0, how: ["Type of car is categorical with no inherent order (nominal)."] },
  { stem: "Which level of measurement is the 10 best cities in the United States to retire in?", choices: ["Ratio", "Ordinal", "Nominal", "Interval"], answer: 1, how: ["Ranked list is ordinal (order matters, but intervals between ranks are not equal)."] },
  { stem: "Which level of measurement are women’s dress sizes (e.g., 0, 2, 4, 6)?", choices: ["Ratio", "Ordinal", "Nominal", "Interval"], answer: 3, how: ["Dress sizes are interval: equal distances between values but no true zero point."] },
  { stem: "A local school board is studying the impact of a proposed change in testing on math scores. Bias can be introduced into the study by both students and teachers. Which research technique would eliminate this type of bias?", choices: ["Double-blind study", "Blind study", "Cohort study", "Observation study"], answer: 0, how: ["Double-blind prevents bias from both participants and researchers/administrators."] },
  { stem: "A company’s product development team tests three new car waxes by waxing five cars with each wax and then running them through a car wash. They then record the number of washes it takes before the wax begins to deteriorate. What is the term for the five cars?", choices: ["The treatment", "The construct validity", "The response", "The experimental unit"], answer: 3, how: ["The five cars are the experimental units (subjects/objects under observation)."] },
  { stem: "An online retailer selling workout apparel has a large increase in sales during December and declares that its weekly newspaper ad resulted in higher sales. Which misuse of statistics may the retailer have used in making this decision?", choices: ["Small sample size", "Association and causation", "Missing data", "Conscious bias"], answer: 1, how: ["The retailer assumes the ad caused the sales increase without considering other factors (seasonal demand). Correlation ≠ causation."] },
  { stem: "An educator collects eighth-grade math scores from a local school and uses this data to recommend curriculum changes for grades 8–12. Which misuse of statistics may the educator have used in making this recommendation?", choices: ["Lack of blinding", "Conscious bias", "Missing data", "Not a representative sample"], answer: 3, how: ["8th-grade scores from one school are not representative of the full 8–12 grade population."] }
];

// Section 3
SECTIONS[2].questions = [
  { stem: "An economist wishes to study the distribution of household income in a midwestern city. He randomly selects a sample from 12 households. He notices two large incomes in his sample. Which measure best represents the middle of the incomes?", choices: ["Variance", "Mean", "Mode", "Median"], answer: 3, how: ["Median is robust to outliers; the mean is pulled by the two large incomes."] },
  { stem: "A cable company offers its customers both cable television and internet. Which statistical rule should be used to determine the probability that customers will have both cable television and internet?", choices: ["Combination", "Bayes theorem", "Addition", "Multiplication"], answer: 3, how: ["Multiplication rule for the intersection (probability of both events)."] },
  { stem: "A department store is considering a new credit policy to reduce defaults on payments. Its records show that 95% of defaults have at least two late payments and 3% of all customers default and 30% of the customers who have not defaulted have at least two late payments. Which statistical rule should be used to find the probability that a customer will default given that at least two payments were late?", choices: ["Central limit theorem", "Bayes theorem", "Combination rule", "Multiplication rule"], answer: 1, how: ["Bayes theorem computes conditional probability given a prior event."] },
  { stem: "Based on quality checks at a plastic bags manufacturer, the breaking strength of their bags has a mean of 50.5 and a standard deviation of 1.6. A customer’s test of the bags finds bag strength to be 54.2 or less. Which statistical measure should be used to help determine the probability of the customer’s test occurring?", choices: ["P-value", "Z-score", "R-square", "T-test"], answer: 1, how: ["Z-score standardizes the value relative to the mean and SD for probability on the normal curve."] },
  { stem: "The mean waiting time of 100 bank customers’ for teller service is 5.8 minutes with a standard deviation of 1.5. Which time range represents a 95.4% probability customer waiting time?", choices: ["4.3 to 7.3", "1.3 to 13.0", "2.8 to 8.8", "3.8 to 7.5"], answer: 2, how: ["95.4% is approximately ±2 standard deviations: 5.8 ± 3 = 2.8 to 8.8."] },
  { stem: "The revenue of a league's basketball teams ranges from $226 million for a New York team to $92 million for a Minnesota team. Which statistic measures how far each and all the league team’s revenue is from the revenue mean?", choices: ["Z-score", "Variance", "Median", "Mode"], answer: 1, how: ["Variance measures the average squared distance of each data point from the mean."] },
  { stem: "Given the following data set: 60, 41, 30, 15, 34, 30. What is the median?", choices: ["32", "35", "30", "34"], answer: 0, how: ["Ordered: 15, 30, 30, 34, 41, 60. Median is average of the two middle values: (30+34)/2 = 32."] },
  { stem: "An online marketing organization designed a social media campaign that aims to earn at least $250,000 in revenue. The campaign will reach 10,000 viewers and receive orders with a mean of $50 and standard deviation of $10. Which measure should be used to determine the probability of the campaign receiving at least $250,000?", choices: ["Z-score", "T-statistic", "R-squared", "Median"], answer: 0, how: ["With large n, mean, and SD, z-score finds the probability of reaching the total revenue goal."] },
  { stem: "What does it mean when an individual data point has a z-score of +1?", choices: ["The data point is one standard deviation less than the mean of the data set.", "The data point is less than the mean of the data set.", "The sample standard deviation of the data set is negative.", "The data point is one standard deviation greater than the mean of the data set."], answer: 3, how: ["Positive z-score = above the mean; magnitude = number of standard deviations."] },
  { stem: "A food chain finds that there is a strong positive correlation between average daily sales for their pizza store and the number of daily visits to their website. What should the food chain consider before concluding that the daily sales are driving the number of visits to their website (or vice versa)?", choices: ["Can you compare sales in dollars to number of visits?", "Is the central limit theorem applicable?", "Is there a causal relationship between sales and site visits?", "How many days are considered?"], answer: 2, how: ["Correlation does not imply causation; investigate whether a causal relationship exists."] },
  { stem: "You examine a population with normal distribution having mean of 1,000 and standard deviation of 50. Which percentage of the population lies between 850 and 1,150?", choices: ["99.7%", "100%", "95.4%", "68.2%"], answer: 0, how: ["850 to 1150 is ±3 SD (150 = 3×50). Empirical rule: ±3 SD ≈ 99.7%."] },
  { stem: "You examine a population with normal distribution having a mean of 1,000 and standard deviation of 50. Which percentage of the population lies between 900 and 1,100?", choices: ["95.4%", "100%", "68.2%", "99.7%"], answer: 0, how: ["900 to 1100 is ±2 SD. Empirical rule: ±2 SD ≈ 95.4%."] },
  { stem: "How are z-scores from a population with normal distribution distributed?", choices: ["Normal distribution with the same mean and standard deviation", "Normal distribution with mean 0 and standard deviation 1", "Cannot be determined"], answer: 1, how: ["Z-scores form a standard normal distribution (mean 0, SD 1)."] },
  { stem: "A stock broker offers two portfolios for his clients. There are various risks with each portfolio and the broker is trying to minimize the risk of loss. Both portfolios have the same mean return. Which measure should the employee use to decide between these alternatives?", choices: ["T-statistic", "Z-score", "Variance", "Median"], answer: 2, how: ["Variance (or SD) measures consistency/spread; lower variance means lower risk of large deviations from the mean."] },
  { stem: "Which type of distribution would you expect to see if mean = mode = median?", choices: ["Pareto distribution", "Bimodal distribution", "Multimodal distribution", "Normal distribution"], answer: 3, how: ["When mean, median, and mode are approximately equal, the distribution is symmetric and approximately normal."] },
  { stem: "Two variables are plotted on a scatterplot and the points on the plot closely follow an upward, straight line. What is the likely correlation between the two variables?", choices: ["Close to 0", "Close to 1.0", "Close to 2.0", "Close to –1.0"], answer: 1, how: ["Strong positive linear relationship → correlation coefficient close to +1."] },
  { stem: "Which statistics are robust to minimize the effect of a single large outlier? (Choose 3)", choices: ["Median", "Interquartile range", "Variance", "Range", "Mean", "Mode"], answer: [0, 1, 5], multi: true, how: ["Median, IQR, and mode are resistant to outliers. Mean, variance, and range are sensitive to extreme values."] }
];

// Section 4
SECTIONS[3].questions = [
  { stem: "Which result do business quality teams expect when using quality tools?", choices: ["Refrain from testing before implementing programs", "Wording of presentation that communicates recommendation", "The degree of employee involvement", "Minimize errors through collection and analysis of data"], answer: 3, how: ["Quality tools use data analysis to minimize errors and support better decisions."] },
  { stem: "A local restaurant is attempting to reduce the time between taking a customer’s order to delivery of the order. Which quality tool should the restaurant use to study their order process?", choices: ["PDCA model", "Check sheet", "Histogram", "Flowchart"], answer: 3, how: ["Flowchart maps process steps and identifies bottlenecks."] },
  { stem: "Which type of activity would assess capabilities and recommend process design changes as preventive action?", choices: ["Lean quality management", "Six Sigma activity", "ISO management", "Quality assurance activity"], answer: 3, how: ["Quality assurance (QA) focuses on preventive process design changes."] },
  { stem: "Which of the Seven Basic Quality Tools is used to exhibit the relationship between two variables?", choices: ["Scatter diagram", "Cause-and-effect diagram", "Check sheet", "Histogram"], answer: 0, how: ["Scatter diagrams show the relationship between two variables."] },
  { stem: "Which quality tool is an organized method for collecting data?", choices: ["Check sheet", "Histogram", "Pareto chart", "Flowchart"], answer: 0, how: ["Check sheets systematically collect frequency data."] },
  { stem: "After collecting data and performing statistical analysis in a company’s assembly department, a quality team recommends processing changes to reduce defects. The team tries a pilot program to evaluate the effectiveness of their recommendations. Which step of the Plan-Do-Check-Act model does the pilot program represent?", choices: ["Act", "Plan", "Do", "Check"], answer: 3, how: ["Check evaluates the effectiveness of the pilot solution."] },
  { stem: "Which two statements describe how a process approach and a commitment to continuous improvement enhance quality? (Choose 2)", choices: ["Efficiently achieving results", "Enhancing customer loyalty", "Creating the best possible product", "Forming mutually beneficial partnerships"], answer: [0, 2], multi: true, how: ["Process approach + continuous improvement help efficiently achieve desired results and create the best possible product."] },
  { stem: "Which statement is not true of the Seven Basic Tools of Quality?", choices: ["Processes are represented graphically.", "All the tools are based on statistics.", "An average worker can easily understand how to use the tools.", "Tools can be used independent of each other."], answer: 1, how: ["Not all seven tools are statistical (e.g., flowchart and cause-and-effect diagram are not)."] },
  { stem: "A maker of computer chips develops a new training program to ensure that quality standards are met. Which activity is the training program an example of?", choices: ["Quality control activity", "Quality assurance activity", "Lean operations activity", "Just-in-time activity"], answer: 1, how: ["Training to prevent human-error problems is a quality assurance activity."] },
  { stem: "A recent poll of 519 adults who flew in the past year found they ranked the following as their number one complaint: cramped seats (45); cost (16); fear of flying (57); security measures (119); poor service (12); connecting flight problems (8); overcrowded planes (42); late planes (57); food (7); and other (51). Which technique should be used to display a ranking of the complaints?", choices: ["Cause-and-effect diagram", "Control chart", "Pareto chart", "Scatter diagram"], answer: 2, how: ["Pareto chart ranks categories from highest to lowest frequency (80/20 principle)."] },
  { stem: "A local plumbing company is analyzing how the number of weeks taken for their payment receipts is distributed. Which graphical analysis technique should this company use?", choices: ["Histogram", "Pie chart", "Scatterplot", "Box plot"], answer: 0, how: ["Histogram shows the distribution of a continuous or discrete numerical variable (weeks)."] },
  { stem: "Which type of descriptive graph would depict whether there is a correlation or relationship between two variables, such as car mileage and resale price?", choices: ["Histogram", "Bar chart", "Scatterplot", "Pareto chart"], answer: 2, how: ["Scatterplot visualizes the relationship between two quantitative variables."] }
];

// Section 5
SECTIONS[4].questions = [
  { stem: "A charity is evaluating the effectiveness of its annual walk promotional campaign in increasing walk participants and donations. What is the appropriate tool for evaluating performance?", choices: ["Key performance dashboard", "Results-based management", "Balanced scorecard", "Management by objectives"], answer: 1, how: ["Results-based management focuses on outcomes across the full life cycle."] },
  { stem: "An online activewear retailer wants to use its last year's sales to evaluate consumer trends before ordering merchandise for the fall season. Which process should it use to discover consumer purchasing patterns?", choices: ["Qualitative research", "Hypothesis testing", "Data mining", "Linear programming"], answer: 2, how: ["Data mining discovers patterns and trends in large historical datasets."] },
  { stem: "City Line Transport wants to look at its fuel costs for 2013, 2014, and 2015 against the start-up base period of 2012. Which analytic method should the company use?", choices: ["Exponential smoothing", "Simple index", "Moving average", "Cumulative incidence"], answer: 1, how: ["Simple index = (current / base) × 100 compares values relative to a base period."] },
  { stem: "An international health organization is concerned about the spread of the Zika virus in South America as mosquito season approaches. It proposes measuring the growth of new cases for the total population over the next six months. Which type of analytics would this represent?", choices: ["Cumulative incidence", "Incidence rate", "Ratio", "Prevalence"], answer: 0, how: ["Cumulative incidence tracks new cases over a defined period relative to the population at risk."] },
  { stem: "Which measurement may be used by potential home buyers to evaluate the price of homes on the market?", choices: ["Realtor listings", "Zoning regulations", "Cost of raw materials", "Price per square foot"], answer: 3, how: ["Price per square foot standardizes comparison across homes of different sizes."] },
  { stem: "At WGU, students take objective assessments to evaluate a student's knowledge of predetermined course competencies in relation to a cut score. Which type of test is the objective assessment?", choices: ["Percentile-based", "Norm-referenced", "Criterion-referenced", "Reliability-based"], answer: 2, how: ["Criterion-referenced tests measure against fixed competencies/cut score, not against other students."] },
  { stem: "A high school principal wishes to study the math and science performance of individual 12th grade students by comparing their scores across multiple courses. Which analysis technique should the principal use?", choices: ["P-value", "R-square", "T-test", "Z-score"], answer: 3, how: ["Z-score standardizes scores from different courses onto a common scale."] },
  { stem: "The town council of a beach town is studying whether to dredge the canals of an ocean front community that were filled with sand during a hurricane. Which analytic method can the council apply to this issue?", choices: ["Cost-benefit analysis", "Cross-over analysis", "Break-even analysis", "Simple index"], answer: 0, how: ["Cost-benefit analysis weighs the benefits of dredging against the costs."] },
  { stem: "A regional grocery chain measures the increase in prices by tracking the price of milk, eggs, white bread, and ground beef using the year 2005 as a base. The sum of these items in 2005 was $10.00 and the sum of the prices in 2015 was $14.50. What is the simple composite index for these items?", choices: ["10.0", "125", "1.45", "145"], answer: 3, how: ["Simple composite index = (14.50 / 10.00) × 100 = 145."] }
];

// Section 6
SECTIONS[5].questions = [
  { stem: "A manufacturer of running shoes is implementing lean operation concepts into their production process. Which critical success factor would ensure a smooth transition into the new program?", choices: ["Expand community relations efforts", "Verify accounting procedures", "Review hiring practices", "Understand customer needs and wants"], answer: 3, how: ["Lean focuses on eliminating waste while maximizing value for the customer."] },
  { stem: "A retail chain seeks to improve store performance by growing sales and improving customer service. Which tool would specifically meet the chain’s objective of improving store sales growth?", choices: ["Big data analysis", "Net promoter score", "Balanced scorecard", "Key performance indicator"], answer: 3, how: ["A KPI tracks a single critical success factor such as sales growth."] },
  { stem: "An online retailer seeks to improve its online customer services rating. Which two key performance indicators should the retailer measure? (Choose 2)", choices: ["On-time delivery", "Employee productivity", "Customer return rate", "Average order size"], answer: [0, 2], multi: true, how: ["On-time delivery and customer return rate directly affect customer service ratings."] },
  { stem: "An organization seeks to shift its business strategy to development of new products for the future while still growing sales of its current products. Which tool would help the company focus on both its financial objective and growth of new products?", choices: ["Linear", "SIPOC diagram", "Net promoter score", "Balanced scorecard"], answer: 3, how: ["Balanced scorecard balances financial results with longer-term strategic objectives such as innovation."] },
  { stem: "A rural town seeks to deploy a new citizen relationship program within its fire and EMT department. How should the citizen relationship program help the town service citizen’s emergencies?", choices: ["It could increase the number of emergency vehicles available.", "It could allow citizens to directly manage emergency resources.", "It could provide financial incentives for citizens to report emergencies.", "It could reduce emergency response times."], answer: 3, how: ["Improved communication and coordination from a citizen relationship program can reduce response times."] },
  { stem: "A pizza chain wishes to improve sales by focusing on product quality, reducing delivery time, and improving productivity. Which tool would best meet the chain’s objective of quantifying their improvement in product quality only?", choices: ["A net promoter score", "A balance scorecard", "Key performance indicator", "Big data analysis"], answer: 2, how: ["A KPI measures a single critical success factor (product quality)."] },
  { stem: "What are two disadvantages of a balanced scorecard? (Choose 2)", choices: ["It is sometimes difficult to maintain momentum", "It emphasizes strategy and organizational results", "It may not encourage desired behavior changes", "It links company operations with its strategy"], answer: [0, 2], multi: true, how: ["Sustaining momentum can be difficult, and poorly designed scorecards may not drive the desired behavior changes."] },
  { stem: "What are two advantages of key performance indicators (KPI)? (Choose 2)", choices: ["They can be expensive and time-consuming to set up and use.", "They educate management on company performance.", "Results are often only a rough guide rather than a concrete measurement.", "They lead to data-driven results that make it easier to quantify performance."], answer: [1, 3], multi: true, how: ["KPIs educate management and produce quantifiable, data-driven results."] },
  { stem: "Which two examples exhibit appropriate use of performance measures in business? (Choose 2)", choices: ["A hospital records emergency room response time for improvement.", "A nonprofit tracks expenses to increase efficiency.", "A women's retail shop researches color trends for the next fall season.", "A school reviews a number of extracurricular activities available to students."], answer: [0, 1], multi: true, how: ["ER response time and expense tracking are clear performance measures tied to operational goals."] },
  { stem: "Which two statements indicate when it is appropriate to use a KPI dashboard? (Choose 2)", choices: ["When more than a single chart, graph, or piece of data are integral to making business decisions", "When used over time to create an internal benchmarking system", "When needed to emphasize strategy and organizational results", "When visual representation is needed to see if an organization is meeting the goals"], answer: [0, 3], multi: true, how: ["Dashboards consolidate multiple data points and provide visual tracking against goals."] },
  { stem: "A retailer wants to evaluate the strength of its customer relations to see how the company compares to others in the industry. Which analysis technique could help the retailer with this decision?", choices: ["Big data analysis", "Net promoter score", "SIPOC diagram", "Balanced scorecard"], answer: 1, how: ["Net Promoter Score measures customer loyalty and can be benchmarked against the industry."] },
  { stem: "A manufacturer needs to closely manage product cost to maintain profit margins in a highly competitive market. Which two key performance indicators should management use to control product cost? (Choose 2)", choices: ["Employee productivity", "Square footage", "Community relations", "Production waste"], answer: [0, 3], multi: true, how: ["Employee productivity and production waste directly affect product cost."] }
];

// Section 2 key concepts (no knowledge check provided; core OA tools)
const SECTION2_CONCEPTS = [
  { name: "Monte Carlo Simulation", keys: ["Uses random sampling and probability distributions to model uncertainty and estimate possible outcomes of a decision.", "Useful when inputs have variability and analytical solutions are complex.", "Outputs a distribution of results rather than a single point estimate."] },
  { name: "Decision Tree Analysis", keys: ["Graphical model of sequential decisions and chance events.", "Calculate expected value (EV) at each chance node: EV = Σ (probability × payoff).", "Choose the branch with the highest expected value.", "Common in the C207 PA Task 2 (MPC pharmaceutical scenario)."] },
  { name: "Linear Programming", keys: ["Optimization technique to maximize or minimize an objective (profit, cost) subject to constraints.", "Decision variables, objective function, and constraints must be linear.", "Solved with Solver in Excel or graphical method for two variables."] },
  { name: "Break-even Analysis", keys: ["Finds the volume where total revenue equals total cost (profit = 0).", "Break-even point (units) = Fixed costs / (Price − Variable cost per unit).", "Useful for pricing and volume decisions."] },
  { name: "Cluster Analysis", keys: ["Unsupervised technique that groups similar observations based on multiple variables.", "Used for customer segmentation, market research.", "Distance measures (e.g., Euclidean) determine similarity."] },
  { name: "Crossover Analysis", keys: ["Identifies the point at which one alternative becomes preferable to another as a key variable changes.", "Often used with cost or demand functions of two options.", "Solves for the indifference point between alternatives."] },
  { name: "Hypothesis Testing", keys: ["Null hypothesis (H₀): no effect or no difference.", "Alternative hypothesis (Hₐ): the claim being tested.", "p-value < significance level (usually 0.05) → reject H₀.", "Type I error: reject true H₀; Type II error: fail to reject false H₀."] },
  { name: "T-test", keys: ["Compares means of one or two groups.", "One-sample, independent two-sample, or paired (before-after).", "Use when population SD is unknown or sample size is small.", "Assumes approximate normality or large n."] },
  { name: "ANOVA", keys: ["Compares means of three or more groups.", "Uses F-statistic.", "Post-hoc tests identify which pairs differ if overall ANOVA is significant."] },
  { name: "Chi-square Analysis", keys: ["Tests association between categorical variables or goodness-of-fit.", "Compares observed vs. expected frequencies.", "Degrees of freedom = (rows−1)×(columns−1) for contingency tables."] },
  { name: "OLS Linear Regression", keys: ["Models linear relationship between continuous dependent variable and one or more independent variables.", "R² = proportion of variance explained.", "p-value on coefficient tests significance.", "Correlation does not imply causation.", "Common in C207 PA Task 1."] },
  { name: "Multiple Regression Analysis", keys: ["Extends simple regression to multiple predictors.", "Watch for multicollinearity (high correlation among predictors).", "Adjusted R² accounts for number of predictors."] },
  { name: "Logistic Regression", keys: ["Predicts binary (0/1) outcomes.", "Uses log-odds / logit link.", "Outputs probabilities between 0 and 1.", "Common for classification problems (churn, default, etc.)."] },
  { name: "Time Series Analysis", keys: ["Data ordered by time.", "Components: trend, seasonality, cyclical, irregular.", "Methods include moving averages, exponential smoothing, regression with time index."] }
];

// Sample Section 2 practice questions
SECTIONS[1].questions = [
  { stem: "Which technique uses random sampling from probability distributions to estimate the range of possible outcomes for a decision under uncertainty?", choices: ["Linear programming", "Monte Carlo simulation", "Break-even analysis", "Chi-square test"], answer: 1, how: ["Monte Carlo simulation repeatedly samples from input distributions to produce a distribution of results."] },
  { stem: "In a decision tree, how is the expected value at a chance node calculated?", choices: ["Sum of all payoffs", "Maximum payoff × probability", "Σ (probability × payoff) for each branch", "Average of the payoffs"], answer: 2, how: ["EV = Σ (probability × payoff). Select the decision branch with the highest EV."] },
  { stem: "A company wants to maximize profit subject to resource constraints (labor hours, machine time). Which technique is most appropriate?", choices: ["Time series analysis", "Linear programming", "Cluster analysis", "ANOVA"], answer: 1, how: ["Linear programming optimizes a linear objective function subject to linear constraints."] },
  { stem: "Fixed costs are $50,000, selling price is $25, and variable cost per unit is $15. What is the break-even volume in units?", choices: ["2,000", "5,000", "3,333", "1,000"], answer: 1, how: ["Break-even = Fixed costs / (Price − VC) = 50,000 / (25 − 15) = 5,000 units."] },
  { stem: "Which analysis technique groups customers into segments based on similarity across multiple behavioral variables?", choices: ["Regression", "Cluster analysis", "Hypothesis testing", "Crossover analysis"], answer: 1, how: ["Cluster analysis is an unsupervised method for grouping similar observations."] },
  { stem: "Two production methods have different fixed and variable costs. Which analysis identifies the volume at which one method becomes cheaper than the other?", choices: ["Break-even analysis", "Crossover analysis", "ANOVA", "Time series"], answer: 1, how: ["Crossover analysis finds the indifference point between two alternatives."] },
  { stem: "A p-value of 0.03 is obtained when testing whether a process mean equals a target value at α = 0.05. What is the correct conclusion?", choices: ["Fail to reject the null; process is on target", "Reject the null; mean differs from target", "Accept the null", "Insufficient data"], answer: 1, how: ["p-value < α → reject H₀. There is statistically significant evidence the mean differs from the target."] },
  { stem: "A manager compares sales of the same employees before and after a training program. Which test is most appropriate?", choices: ["Independent samples t-test", "Paired t-test", "ANOVA", "Chi-square"], answer: 1, how: ["Paired (dependent) t-test is used for before-and-after measurements on the same subjects."] },
  { stem: "A researcher wants to compare the mean satisfaction scores of customers across four different store locations. Which test should be used?", choices: ["t-test", "ANOVA", "Chi-square", "Logistic regression"], answer: 1, how: ["ANOVA compares means of three or more groups."] },
  { stem: "A quality team wants to determine whether defect type is associated with the production shift. Which test is appropriate?", choices: ["t-test", "ANOVA", "Chi-square", "Linear regression"], answer: 2, how: ["Chi-square tests association between two categorical variables."] },
  { stem: "In ordinary least squares linear regression, what does R-squared represent?", choices: ["The p-value of the slope", "The proportion of variance in the dependent variable explained by the model", "The correlation coefficient", "The standard error of the estimate"], answer: 1, how: ["R² is the proportion of variation in Y explained by the independent variable(s)."] },
  { stem: "Which regression technique is appropriate when the dependent variable is binary (e.g., will the customer default: yes/no)?", choices: ["OLS linear regression", "Multiple linear regression", "Logistic regression", "Time series regression"], answer: 2, how: ["Logistic regression models binary outcomes and produces probabilities between 0 and 1."] },
  { stem: "Monthly sales data for the past five years shows a clear upward trend and higher sales every December. Which components of a time series are present?", choices: ["Trend and seasonality", "Cyclical and irregular only", "Seasonality only", "Trend only"], answer: 0, how: ["Upward trend + recurring December peak = trend and seasonality."] },
  { stem: "What does this scatter diagram of an organization’s retail sales and advertising expenditures indicate? (The diagram shows a clear positive upward trend.)", choices: ["Increases in advertising expenditures are associated with increases in retail sales.", "The advertising campaign has no relationship to retail sales.", "The advertising campaign has caused retail sales to increase.", "The advertising campaign has caused retail sales to decrease."], answer: 0, how: ["The scatter plot shows a positive association between advertising expenditures and retail sales. Association (correlation) does not prove that the advertising campaign caused the sales increase."] },
];

// App state and UI
let currentView = "home";
let currentSection = 0;
let currentQ = 0;
let score = 0;
let answered = false;
let selected = null;
let quizMode = false;
let quizQuestions = [];
let quizIndex = 0;
let quizScore = 0;

function render() {
  const app = document.getElementById("app");
  const nav = document.getElementById("nav");
  nav.innerHTML = `
    <button class="${currentView==='home'?'on':''}" onclick="setView('home')"><b>Home</b>Overview</button>
    <button class="${currentView==='sections'?'on':''}" onclick="setView('sections')"><b>Sections</b>Study</button>
    <button class="${currentView==='quiz'?'on':''}" onclick="setView('quiz')"><b>Quiz</b>Practice</button>
    <button class="${currentView==='tools'?'on':''}" onclick="setView('tools')"><b>Tools</b>Section 2</button>
  `;
  if (currentView === "home") renderHome();
  else if (currentView === "sections") renderSections();
  else if (currentView === "quiz") renderQuiz();
  else if (currentView === "tools") renderTools();
}

function setView(v) { currentView = v; currentSection = 0; currentQ = 0; answered = false; selected = null; render(); }

function renderHome() {
  document.getElementById("app").innerHTML = `
    <div class="kicker">WGU MBA</div>
    <h1>C207 Data-Driven Decision Making</h1>
    <div class="goldline"></div>
    <p>OA-focused study guide. Knowledge checks and pre-assessment style questions organized by section, plus core concepts for Quantitative Statistical Tools.</p>
    <div class="card">
      <h3>Assessments</h3>
      <ul>
        <li><strong>Task 1</strong>: Linear regression on your unique Excel dataset + Word report</li>
        <li><strong>Task 2</strong>: Decision tree analysis (typically MPC scenario) + Word report</li>
        <li><strong>OA</strong>: Proctored multiple-choice covering six competencies (recognition & tool selection)</li>
      </ul>
    </div>
    <div class="card">
      <h3>Quick Start</h3>
      <p>Review sections for concept reinforcement, then take the full mixed quiz. Focus on analytics types, levels of measurement (NOIR), hypothesis testing, quality tools, and decision analysis.</p>
      <button class="primary" style="width:100%;margin-top:10px" onclick="startQuiz()">Start Full Quiz</button>
    </div>
  `;
}

function renderSections() {
  let html = `<div class="kicker">Sections</div><h1>Knowledge Checks</h1><div class="goldline"></div>`;
  SECTIONS.forEach((s, i) => {
    html += `<div class="card chapter" onclick="openSection(${i})">
      <div class="badge">Section ${s.id}</div>
      <h3 style="margin-top:8px">${s.title}</h3>
      <p class="small">${s.questions.length} questions</p>
    </div>`;
  });
  document.getElementById("app").innerHTML = html;
}

function openSection(i) {
  currentSection = i;
  currentQ = 0;
  answered = false;
  selected = null;
  currentView = "section-quiz";
  renderSectionQuiz();
}

function renderSectionQuiz() {
  const s = SECTIONS[currentSection];
  const q = s.questions[currentQ];
  if (!q) { currentView = "sections"; render(); return; }
  let html = `<div class="kicker">Section ${s.id}</div><h2>${s.title}</h2>
    <div class="progress"><div style="width:${((currentQ)/s.questions.length)*100}%"></div></div>
    <p class="small">Question ${currentQ+1} of ${s.questions.length}</p>
    <div class="card"><p>${q.stem}</p>`;
  q.choices.forEach((c, idx) => {
    let cls = "choice";
    if (answered) {
      if (Array.isArray(q.answer) ? q.answer.includes(idx) : idx === q.answer) cls += " right";
      else if (selected === idx || (Array.isArray(selected) && selected.includes(idx))) cls += " wrong";
    } else if (selected === idx || (Array.isArray(selected) && selected.includes(idx))) cls += " pick";
    html += `<button class="${cls}" onclick="pick(${idx})"><span class="ltr">${String.fromCharCode(65+idx)}.</span> ${c}</button>`;
  });
  html += `</div>`;
  if (answered) {
    html += `<div class="how"><strong>Explanation</strong><ol>${q.how.map(h => `<li>${h}</li>`).join("")}</ol></div>
      <button class="primary" style="width:100%;margin-top:12px" onclick="nextQ()">${currentQ < s.questions.length-1 ? "Next" : "Finish Section"}</button>`;
  } else {
    html += `<button class="primary" style="width:100%;margin-top:12px" onclick="submit()" ${selected===null && !q.multi ? "disabled" : ""}>Submit</button>`;
  }
  document.getElementById("app").innerHTML = html;
}

function pick(idx) {
  if (answered) return;
  const q = SECTIONS[currentSection].questions[currentQ];
  if (q.multi) {
    if (!Array.isArray(selected)) selected = [];
    const pos = selected.indexOf(idx);
    if (pos > -1) selected.splice(pos, 1); else selected.push(idx);
  } else {
    selected = idx;
  }
  renderSectionQuiz();
}

function submit() {
  answered = true;
  renderSectionQuiz();
}

function nextQ() {
  currentQ++;
  answered = false;
  selected = null;
  if (currentQ >= SECTIONS[currentSection].questions.length) {
    currentView = "sections";
    render();
  } else {
    renderSectionQuiz();
  }
}

function renderTools() {
  let html = `<div class="kicker">Section 2</div><h1>Quantitative Statistical Tools</h1><div class="goldline"></div>
    <p>No knowledge check was provided for this section. Core concepts for the listed lessons:</p>`;
  SECTION2_CONCEPTS.forEach(c => {
    html += `<div class="card"><h3>${c.name}</h3><ul>${c.keys.map(k => `<li>${k}</li>`).join("")}</ul></div>`;
  });
  document.getElementById("app").innerHTML = html;
}

function startQuiz() {
  quizQuestions = SECTIONS.flatMap(s => s.questions.map(q => ({...q, section: s.id})));
  // shuffle
  for (let i = quizQuestions.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [quizQuestions[i], quizQuestions[j]] = [quizQuestions[j], quizQuestions[i]];
  }
  quizIndex = 0;
  quizScore = 0;
  quizMode = true;
  currentView = "quiz";
  answered = false;
  selected = null;
  renderQuiz();
}

function renderQuiz() {
  if (quizIndex >= quizQuestions.length) {
    document.getElementById("app").innerHTML = `
      <div class="kicker">Quiz Complete</div>
      <h1>Score: ${quizScore} / ${quizQuestions.length}</h1>
      <div class="goldline"></div>
      <p>${Math.round((quizScore/quizQuestions.length)*100)}% correct</p>
      <button class="primary" style="width:100%;margin-top:16px" onclick="startQuiz()">Retake Quiz</button>
      <button class="ghost" style="width:100%;margin-top:8px" onclick="setView('home')">Home</button>
    `;
    return;
  }
  const q = quizQuestions[quizIndex];
  let html = `<div class="kicker">Full OA Quiz</div>
    <div class="progress"><div style="width:${(quizIndex/quizQuestions.length)*100}%"></div></div>
    <p class="small">Question ${quizIndex+1} of ${quizQuestions.length} · Section ${q.section}</p>
    <div class="card"><p>${q.stem}</p>`;
  q.choices.forEach((c, idx) => {
    let cls = "choice";
    if (answered) {
      if (Array.isArray(q.answer) ? q.answer.includes(idx) : idx === q.answer) cls += " right";
      else if (selected === idx || (Array.isArray(selected) && selected.includes(idx))) cls += " wrong";
    } else if (selected === idx || (Array.isArray(selected) && selected.includes(idx))) cls += " pick";
    html += `<button class="${cls}" onclick="quizPick(${idx})"><span class="ltr">${String.fromCharCode(65+idx)}.</span> ${c}</button>`;
  });
  html += `</div>`;
  if (answered) {
    html += `<div class="how"><strong>Explanation</strong><ol>${q.how.map(h => `<li>${h}</li>`).join("")}</ol></div>
      <button class="primary" style="width:100%;margin-top:12px" onclick="quizNext()">Next</button>`;
  } else {
    html += `<button class="primary" style="width:100%;margin-top:12px" onclick="quizSubmit()">Submit</button>`;
  }
  document.getElementById("app").innerHTML = html;
}

function quizPick(idx) {
  if (answered) return;
  const q = quizQuestions[quizIndex];
  if (q.multi) {
    if (!Array.isArray(selected)) selected = [];
    const pos = selected.indexOf(idx);
    if (pos > -1) selected.splice(pos, 1); else selected.push(idx);
  } else selected = idx;
  renderQuiz();
}

function quizSubmit() {
  const q = quizQuestions[quizIndex];
  answered = true;
  let correct = false;
  if (q.multi) {
    const sel = (selected || []).slice().sort();
    const ans = q.answer.slice().sort();
    correct = sel.length === ans.length && sel.every((v,i) => v === ans[i]);
  } else {
    correct = selected === q.answer;
  }
  if (correct) quizScore++;
  renderQuiz();
}

function quizNext() {
  quizIndex++;
  answered = false;
  selected = null;
  renderQuiz();
}

// Init
document.addEventListener("DOMContentLoaded", render);
if (document.readyState !== "loading") render();
