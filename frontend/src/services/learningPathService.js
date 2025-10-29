import { generateLearningPath } from '../data/learningPaths';

export async function generateLearningPathFromAPI(assessment) {
  // For now, use the local generation function
  // In the future, this could call an API endpoint
  return generateLearningPath(assessment);
}
