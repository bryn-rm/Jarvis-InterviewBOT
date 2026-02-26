CREATE TABLE users (
  id UUID PRIMARY KEY,
  email TEXT UNIQUE,
  name TEXT,
  target_role TEXT,
  target_company TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE problems (
  id UUID PRIMARY KEY,
  title TEXT,
  difficulty TEXT,
  topics TEXT[],
  domain TEXT,
  description TEXT,
  examples JSONB,
  constraints TEXT[],
  starter_code JSONB,
  optimal_solution JSONB,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE sessions (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES users(id),
  problem_id UUID REFERENCES problems(id),
  session_type TEXT,
  started_at TIMESTAMP,
  ended_at TIMESTAMP,
  user_code TEXT,
  hint_count INT DEFAULT 0,
  passed_tests BOOLEAN,
  score JSONB
);

CREATE TABLE messages (
  id UUID PRIMARY KEY,
  session_id UUID REFERENCES sessions(id),
  role TEXT,
  content TEXT,
  agent TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);
