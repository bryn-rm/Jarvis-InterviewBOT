import { Problem } from '@/lib/types';

export const seedProblems: Problem[] = [
  {
    id: 'p001',
    title: 'Two Sum',
    difficulty: 'Easy',
    topics: ['arrays', 'hash_map'],
    domain: 'dsa',
    description: 'Solve the two sum interview challenge with clear tradeoffs and edge case handling.',
    constraints: ['Input sizes can be large; prefer near-linear solutions.', 'Handle empty and degenerate inputs safely.']
  },
  {
    id: 'p002',
    title: 'Valid Parentheses',
    difficulty: 'Easy',
    topics: ['stack'],
    domain: 'dsa',
    description: 'Solve the valid parentheses interview challenge with clear tradeoffs and edge case handling.',
    constraints: ['Input sizes can be large; prefer near-linear solutions.', 'Handle empty and degenerate inputs safely.']
  },
  {
    id: 'p003',
    title: 'Merge Intervals',
    difficulty: 'Medium',
    topics: ['intervals', 'sorting'],
    domain: 'dsa',
    description: 'Solve the merge intervals interview challenge with clear tradeoffs and edge case handling.',
    constraints: ['Input sizes can be large; prefer near-linear solutions.', 'Handle empty and degenerate inputs safely.']
  },
  {
    id: 'p004',
    title: 'LRU Cache',
    difficulty: 'Hard',
    topics: ['design', 'hash_map'],
    domain: 'dsa',
    description: 'Solve the lru cache interview challenge with clear tradeoffs and edge case handling.',
    constraints: ['Input sizes can be large; prefer near-linear solutions.', 'Handle empty and degenerate inputs safely.']
  },
  {
    id: 'p005',
    title: 'Word Ladder',
    difficulty: 'Hard',
    topics: ['bfs', 'graphs'],
    domain: 'dsa',
    description: 'Solve the word ladder interview challenge with clear tradeoffs and edge case handling.',
    constraints: ['Input sizes can be large; prefer near-linear solutions.', 'Handle empty and degenerate inputs safely.']
  },
  {
    id: 'p006',
    title: 'Coin Change',
    difficulty: 'Medium',
    topics: ['dp'],
    domain: 'dsa',
    description: 'Solve the coin change interview challenge with clear tradeoffs and edge case handling.',
    constraints: ['Input sizes can be large; prefer near-linear solutions.', 'Handle empty and degenerate inputs safely.']
  },
  {
    id: 'p007',
    title: 'Binary Tree LCA',
    difficulty: 'Medium',
    topics: ['trees'],
    domain: 'dsa',
    description: 'Solve the binary tree lca interview challenge with clear tradeoffs and edge case handling.',
    constraints: ['Input sizes can be large; prefer near-linear solutions.', 'Handle empty and degenerate inputs safely.']
  },
  {
    id: 'p008',
    title: 'Sliding Window Maximum',
    difficulty: 'Hard',
    topics: ['sliding_window', 'deque'],
    domain: 'dsa',
    description: 'Solve the sliding window maximum interview challenge with clear tradeoffs and edge case handling.',
    constraints: ['Input sizes can be large; prefer near-linear solutions.', 'Handle empty and degenerate inputs safely.']
  },
  {
    id: 'p009',
    title: 'Product of Array Except Self',
    difficulty: 'Medium',
    topics: ['arrays', 'prefix'],
    domain: 'dsa',
    description: 'Solve the product of array except self interview challenge with clear tradeoffs and edge case handling.',
    constraints: ['Input sizes can be large; prefer near-linear solutions.', 'Handle empty and degenerate inputs safely.']
  },
  {
    id: 'p010',
    title: 'Top K Frequent Elements',
    difficulty: 'Medium',
    topics: ['heap', 'hash_map'],
    domain: 'dsa',
    description: 'Solve the top k frequent elements interview challenge with clear tradeoffs and edge case handling.',
    constraints: ['Input sizes can be large; prefer near-linear solutions.', 'Handle empty and degenerate inputs safely.']
  },
  {
    id: 'p011',
    title: 'Customer Retention by Month',
    difficulty: 'Medium',
    topics: ['window_functions', 'aggregation'],
    domain: 'sql',
    description: 'Solve the customer retention by month interview challenge with clear tradeoffs and edge case handling.',
    constraints: ['Input sizes can be large; prefer near-linear solutions.', 'Handle empty and degenerate inputs safely.']
  },
  {
    id: 'p012',
    title: 'Cohort Analysis Basics',
    difficulty: 'Medium',
    topics: ['cohort', 'date'],
    domain: 'sql',
    description: 'Solve the cohort analysis basics interview challenge with clear tradeoffs and edge case handling.',
    constraints: ['Input sizes can be large; prefer near-linear solutions.', 'Handle empty and degenerate inputs safely.']
  },
  {
    id: 'p013',
    title: 'Running Revenue Totals',
    difficulty: 'Easy',
    topics: ['window_functions'],
    domain: 'sql',
    description: 'Solve the running revenue totals interview challenge with clear tradeoffs and edge case handling.',
    constraints: ['Input sizes can be large; prefer near-linear solutions.', 'Handle empty and degenerate inputs safely.']
  },
  {
    id: 'p014',
    title: 'Self Join Manager Report',
    difficulty: 'Easy',
    topics: ['self_join'],
    domain: 'sql',
    description: 'Solve the self join manager report interview challenge with clear tradeoffs and edge case handling.',
    constraints: ['Input sizes can be large; prefer near-linear solutions.', 'Handle empty and degenerate inputs safely.']
  },
  {
    id: 'p015',
    title: 'Nth Highest Salary',
    difficulty: 'Medium',
    topics: ['ranking'],
    domain: 'sql',
    description: 'Solve the nth highest salary interview challenge with clear tradeoffs and edge case handling.',
    constraints: ['Input sizes can be large; prefer near-linear solutions.', 'Handle empty and degenerate inputs safely.']
  },
  {
    id: 'p016',
    title: 'Sessionization Query',
    difficulty: 'Hard',
    topics: ['window_functions', 'case_when'],
    domain: 'sql',
    description: 'Solve the sessionization query interview challenge with clear tradeoffs and edge case handling.',
    constraints: ['Input sizes can be large; prefer near-linear solutions.', 'Handle empty and degenerate inputs safely.']
  },
  {
    id: 'p017',
    title: 'Funnel Drop-off',
    difficulty: 'Hard',
    topics: ['cte', 'aggregation'],
    domain: 'sql',
    description: 'Solve the funnel drop-off interview challenge with clear tradeoffs and edge case handling.',
    constraints: ['Input sizes can be large; prefer near-linear solutions.', 'Handle empty and degenerate inputs safely.']
  },
  {
    id: 'p018',
    title: 'Median Order Value',
    difficulty: 'Hard',
    topics: ['percentile'],
    domain: 'sql',
    description: 'Solve the median order value interview challenge with clear tradeoffs and edge case handling.',
    constraints: ['Input sizes can be large; prefer near-linear solutions.', 'Handle empty and degenerate inputs safely.']
  },
  {
    id: 'p019',
    title: 'Duplicate Transactions',
    difficulty: 'Easy',
    topics: ['group_by'],
    domain: 'sql',
    description: 'Solve the duplicate transactions interview challenge with clear tradeoffs and edge case handling.',
    constraints: ['Input sizes can be large; prefer near-linear solutions.', 'Handle empty and degenerate inputs safely.']
  },
  {
    id: 'p020',
    title: '7-Day Rolling Active Users',
    difficulty: 'Medium',
    topics: ['window_functions', 'date'],
    domain: 'sql',
    description: 'Solve the 7-day rolling active users interview challenge with clear tradeoffs and edge case handling.',
    constraints: ['Input sizes can be large; prefer near-linear solutions.', 'Handle empty and degenerate inputs safely.']
  },
  {
    id: 'p021',
    title: 'Pandas Missing Value Cleanup',
    difficulty: 'Easy',
    topics: ['pandas', 'cleaning'],
    domain: 'python',
    description: 'Solve the pandas missing value cleanup interview challenge with clear tradeoffs and edge case handling.',
    constraints: ['Input sizes can be large; prefer near-linear solutions.', 'Handle empty and degenerate inputs safely.']
  },
  {
    id: 'p022',
    title: 'Pandas Groupby Sales',
    difficulty: 'Easy',
    topics: ['pandas', 'groupby'],
    domain: 'python',
    description: 'Solve the pandas groupby sales interview challenge with clear tradeoffs and edge case handling.',
    constraints: ['Input sizes can be large; prefer near-linear solutions.', 'Handle empty and degenerate inputs safely.']
  },
  {
    id: 'p023',
    title: 'Pandas Merge Campaign Data',
    difficulty: 'Medium',
    topics: ['pandas', 'merge'],
    domain: 'python',
    description: 'Solve the pandas merge campaign data interview challenge with clear tradeoffs and edge case handling.',
    constraints: ['Input sizes can be large; prefer near-linear solutions.', 'Handle empty and degenerate inputs safely.']
  },
  {
    id: 'p024',
    title: 'Time Series Resample',
    difficulty: 'Medium',
    topics: ['pandas', 'timeseries'],
    domain: 'python',
    description: 'Solve the time series resample interview challenge with clear tradeoffs and edge case handling.',
    constraints: ['Input sizes can be large; prefer near-linear solutions.', 'Handle empty and degenerate inputs safely.']
  },
  {
    id: 'p025',
    title: 'Outlier Detection IQR',
    difficulty: 'Medium',
    topics: ['python', 'statistics'],
    domain: 'python',
    description: 'Solve the outlier detection iqr interview challenge with clear tradeoffs and edge case handling.',
    constraints: ['Input sizes can be large; prefer near-linear solutions.', 'Handle empty and degenerate inputs safely.']
  },
  {
    id: 'p026',
    title: 'Feature Scaling Pipeline',
    difficulty: 'Medium',
    topics: ['sklearn', 'preprocessing'],
    domain: 'python',
    description: 'Solve the feature scaling pipeline interview challenge with clear tradeoffs and edge case handling.',
    constraints: ['Input sizes can be large; prefer near-linear solutions.', 'Handle empty and degenerate inputs safely.']
  },
  {
    id: 'p027',
    title: 'JSON Normalization',
    difficulty: 'Medium',
    topics: ['pandas', 'json'],
    domain: 'python',
    description: 'Solve the json normalization interview challenge with clear tradeoffs and edge case handling.',
    constraints: ['Input sizes can be large; prefer near-linear solutions.', 'Handle empty and degenerate inputs safely.']
  },
  {
    id: 'p028',
    title: 'Data Validation Rules',
    difficulty: 'Easy',
    topics: ['python', 'validation'],
    domain: 'python',
    description: 'Solve the data validation rules interview challenge with clear tradeoffs and edge case handling.',
    constraints: ['Input sizes can be large; prefer near-linear solutions.', 'Handle empty and degenerate inputs safely.']
  },
  {
    id: 'p029',
    title: 'Vectorized Transformation',
    difficulty: 'Medium',
    topics: ['numpy', 'pandas'],
    domain: 'python',
    description: 'Solve the vectorized transformation interview challenge with clear tradeoffs and edge case handling.',
    constraints: ['Input sizes can be large; prefer near-linear solutions.', 'Handle empty and degenerate inputs safely.']
  },
  {
    id: 'p030',
    title: 'A/B Test Significance',
    difficulty: 'Hard',
    topics: ['statistics', 'python'],
    domain: 'python',
    description: 'Solve the a/b test significance interview challenge with clear tradeoffs and edge case handling.',
    constraints: ['Input sizes can be large; prefer near-linear solutions.', 'Handle empty and degenerate inputs safely.']
  },
  {
    id: 'p031',
    title: 'Bias Variance Tradeoff',
    difficulty: 'Easy',
    topics: ['ml_theory'],
    domain: 'ml',
    description: 'Solve the bias variance tradeoff interview challenge with clear tradeoffs and edge case handling.',
    constraints: ['Input sizes can be large; prefer near-linear solutions.', 'Handle empty and degenerate inputs safely.']
  },
  {
    id: 'p032',
    title: 'Precision vs Recall',
    difficulty: 'Easy',
    topics: ['classification_metrics'],
    domain: 'ml',
    description: 'Solve the precision vs recall interview challenge with clear tradeoffs and edge case handling.',
    constraints: ['Input sizes can be large; prefer near-linear solutions.', 'Handle empty and degenerate inputs safely.']
  },
  {
    id: 'p033',
    title: 'Feature Engineering for Churn',
    difficulty: 'Medium',
    topics: ['feature_engineering'],
    domain: 'ml',
    description: 'Solve the feature engineering for churn interview challenge with clear tradeoffs and edge case handling.',
    constraints: ['Input sizes can be large; prefer near-linear solutions.', 'Handle empty and degenerate inputs safely.']
  },
  {
    id: 'p034',
    title: 'Model Selection Workflow',
    difficulty: 'Medium',
    topics: ['cross_validation'],
    domain: 'ml',
    description: 'Solve the model selection workflow interview challenge with clear tradeoffs and edge case handling.',
    constraints: ['Input sizes can be large; prefer near-linear solutions.', 'Handle empty and degenerate inputs safely.']
  },
  {
    id: 'p035',
    title: 'Handling Class Imbalance',
    difficulty: 'Medium',
    topics: ['sampling', 'ml'],
    domain: 'ml',
    description: 'Solve the handling class imbalance interview challenge with clear tradeoffs and edge case handling.',
    constraints: ['Input sizes can be large; prefer near-linear solutions.', 'Handle empty and degenerate inputs safely.']
  },
  {
    id: 'p036',
    title: 'Hyperparameter Tuning Strategy',
    difficulty: 'Medium',
    topics: ['mlops', 'optimization'],
    domain: 'ml',
    description: 'Solve the hyperparameter tuning strategy interview challenge with clear tradeoffs and edge case handling.',
    constraints: ['Input sizes can be large; prefer near-linear solutions.', 'Handle empty and degenerate inputs safely.']
  },
  {
    id: 'p037',
    title: 'Leakage Detection',
    difficulty: 'Hard',
    topics: ['ml_theory', 'validation'],
    domain: 'ml',
    description: 'Solve the leakage detection interview challenge with clear tradeoffs and edge case handling.',
    constraints: ['Input sizes can be large; prefer near-linear solutions.', 'Handle empty and degenerate inputs safely.']
  },
  {
    id: 'p038',
    title: 'Explainability with SHAP',
    difficulty: 'Hard',
    topics: ['xai'],
    domain: 'ml',
    description: 'Solve the explainability with shap interview challenge with clear tradeoffs and edge case handling.',
    constraints: ['Input sizes can be large; prefer near-linear solutions.', 'Handle empty and degenerate inputs safely.']
  },
  {
    id: 'p039',
    title: 'Offline vs Online Evaluation',
    difficulty: 'Hard',
    topics: ['experimentation'],
    domain: 'ml',
    description: 'Solve the offline vs online evaluation interview challenge with clear tradeoffs and edge case handling.',
    constraints: ['Input sizes can be large; prefer near-linear solutions.', 'Handle empty and degenerate inputs safely.']
  },
  {
    id: 'p040',
    title: 'Recommendation System Cold Start',
    difficulty: 'Hard',
    topics: ['recsys'],
    domain: 'ml',
    description: 'Solve the recommendation system cold start interview challenge with clear tradeoffs and edge case handling.',
    constraints: ['Input sizes can be large; prefer near-linear solutions.', 'Handle empty and degenerate inputs safely.']
  },
  {
    id: 'p041',
    title: 'Design URL Shortener',
    difficulty: 'Medium',
    topics: ['system_design'],
    domain: 'system_design',
    description: 'Solve the design url shortener interview challenge with clear tradeoffs and edge case handling.',
    constraints: ['Input sizes can be large; prefer near-linear solutions.', 'Handle empty and degenerate inputs safely.']
  },
  {
    id: 'p042',
    title: 'Design Realtime Chat',
    difficulty: 'Medium',
    topics: ['system_design', 'websocket'],
    domain: 'system_design',
    description: 'Solve the design realtime chat interview challenge with clear tradeoffs and edge case handling.',
    constraints: ['Input sizes can be large; prefer near-linear solutions.', 'Handle empty and degenerate inputs safely.']
  },
  {
    id: 'p043',
    title: 'Design Rate Limiter',
    difficulty: 'Medium',
    topics: ['system_design', 'distributed_systems'],
    domain: 'system_design',
    description: 'Solve the design rate limiter interview challenge with clear tradeoffs and edge case handling.',
    constraints: ['Input sizes can be large; prefer near-linear solutions.', 'Handle empty and degenerate inputs safely.']
  },
  {
    id: 'p044',
    title: 'Design Notification Service',
    difficulty: 'Medium',
    topics: ['system_design', 'queues'],
    domain: 'system_design',
    description: 'Solve the design notification service interview challenge with clear tradeoffs and edge case handling.',
    constraints: ['Input sizes can be large; prefer near-linear solutions.', 'Handle empty and degenerate inputs safely.']
  },
  {
    id: 'p045',
    title: 'Design Search Autocomplete',
    difficulty: 'Hard',
    topics: ['system_design', 'trie'],
    domain: 'system_design',
    description: 'Solve the design search autocomplete interview challenge with clear tradeoffs and edge case handling.',
    constraints: ['Input sizes can be large; prefer near-linear solutions.', 'Handle empty and degenerate inputs safely.']
  },
  {
    id: 'p046',
    title: 'Design File Storage Service',
    difficulty: 'Hard',
    topics: ['system_design', 'object_storage'],
    domain: 'system_design',
    description: 'Solve the design file storage service interview challenge with clear tradeoffs and edge case handling.',
    constraints: ['Input sizes can be large; prefer near-linear solutions.', 'Handle empty and degenerate inputs safely.']
  },
  {
    id: 'p047',
    title: 'Design Metrics Pipeline',
    difficulty: 'Hard',
    topics: ['system_design', 'streaming'],
    domain: 'system_design',
    description: 'Solve the design metrics pipeline interview challenge with clear tradeoffs and edge case handling.',
    constraints: ['Input sizes can be large; prefer near-linear solutions.', 'Handle empty and degenerate inputs safely.']
  },
  {
    id: 'p048',
    title: 'Design API Gateway',
    difficulty: 'Hard',
    topics: ['system_design', 'networking'],
    domain: 'system_design',
    description: 'Solve the design api gateway interview challenge with clear tradeoffs and edge case handling.',
    constraints: ['Input sizes can be large; prefer near-linear solutions.', 'Handle empty and degenerate inputs safely.']
  },
  {
    id: 'p049',
    title: 'Design Feature Flag Service',
    difficulty: 'Medium',
    topics: ['system_design', 'config'],
    domain: 'system_design',
    description: 'Solve the design feature flag service interview challenge with clear tradeoffs and edge case handling.',
    constraints: ['Input sizes can be large; prefer near-linear solutions.', 'Handle empty and degenerate inputs safely.']
  },
  {
    id: 'p050',
    title: 'Design Job Scheduler',
    difficulty: 'Hard',
    topics: ['system_design', 'scheduling'],
    domain: 'system_design',
    description: 'Solve the design job scheduler interview challenge with clear tradeoffs and edge case handling.',
    constraints: ['Input sizes can be large; prefer near-linear solutions.', 'Handle empty and degenerate inputs safely.']
  },
];
