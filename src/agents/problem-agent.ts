import { Problem } from '@/lib/types';
import { seedProblems } from '@/data/seed-problems';

export function getProblem(filters: { difficulty?: string; topic?: string; domain?: Problem['domain'] }) {
  return seedProblems.find((problem) => {
    const difficultyMatch = filters.difficulty ? problem.difficulty === filters.difficulty : true;
    const topicMatch = filters.topic ? problem.topics.includes(filters.topic) : true;
    const domainMatch = filters.domain ? problem.domain === filters.domain : true;
    return difficultyMatch && topicMatch && domainMatch;
  }) ?? seedProblems[0];
}
