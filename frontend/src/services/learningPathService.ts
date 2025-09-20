import { UserAssessment, LearningPath, DayPlan } from '../types';
import { apiService } from './api';

export const generateLearningPathFromAPI = async (assessment: UserAssessment): Promise<LearningPath> => {
  let level = assessment.programmingLevel.toLowerCase();

  // Adjust level based on quiz results
  if (assessment.verified === false) {
    if (level === 'advanced') level = 'intermediate';
    else if (level === 'intermediate') level = 'beginner';
  }

  // Fetch questions from API
  const questions = await apiService.getQuestionsByLevel(level);

  // Group questions by day and ensure proper typing
  const dailyPlanMap: { [key: string]: DayPlan } = {};

  questions.forEach((question: any) => {
    const dayKey = `day${question.day}`;
    if (!dailyPlanMap[dayKey]) {
      dailyPlanMap[dayKey] = {
        day: question.day,
        topic: question.topic,
        theory: question.theory || [],
        practice: question.practice || [],
        videos: question.videos || []
      };
    }
  });

  const dailyPlan: DayPlan[] = Object.values(dailyPlanMap);

  const learningPaths = {
    beginner: {
      title: "Beginner DSA Mastery Path",
      description: "Start your journey with fundamental concepts and build a strong foundation in data structures and algorithms.",
      duration: "12-16 weeks",
      topics: [
        "Programming Fundamentals",
        "Basic Arrays & Strings",
        "Simple Searching & Sorting",
        "Introduction to Complexity",
        "Basic Recursion",
        "Stacks & Queues",
        "Linked Lists",
        "Basic Trees",
        "Hash Tables",
        "Graph Basics"
      ],
      dailyPlan
    },
    intermediate: {
      title: "Intermediate DSA Advancement Path",
      description: "Build upon your foundation with more complex data structures and algorithmic problem-solving techniques.",
      duration: "16-20 weeks",
      topics: [
        "Advanced Arrays & 2D Arrays",
        "String Algorithms",
        "Sorting & Searching Algorithms",
        "Recursion & Backtracking",
        "Stacks & Queues Applications",
        "Tree Traversals & BST",
        "Heap & Priority Queues",
        "Graph Algorithms (BFS/DFS)",
        "Dynamic Programming Basics",
        "Greedy Algorithms"
      ],
      dailyPlan
    },
    advanced: {
      title: "Advanced DSA Expert Path",
      description: "Master complex algorithms and data structures used in competitive programming and technical interviews.",
      duration: "20-24 weeks",
      topics: [
        "Advanced Tree Algorithms",
        "Graph Algorithms (Advanced)",
        "Dynamic Programming (Advanced)",
        "String Matching Algorithms",
        "Advanced Data Structures",
        "Segment Trees & Fenwick Trees",
        "Network Flow Algorithms",
        "Computational Geometry",
        "Number Theory",
        "Advanced Problem Solving"
      ],
      dailyPlan
    }
  };

  const path = learningPaths[level as keyof typeof learningPaths] || learningPaths.beginner;

  // Adjust duration based on daily hours
  const hours = assessment.dailyHours;
  if (hours === '1-2 hours') {
    path.duration = path.duration.replace(/(\d+)-(\d+)/, (_, start, end) =>
      `${parseInt(start) + 4}-${parseInt(end) + 6}`);
  } else if (hours === '4+ hours') {
    path.duration = path.duration.replace(/(\d+)-(\d+)/, (_, start, end) =>
      `${parseInt(start) - 2}-${parseInt(end) - 2}`);
  }

  return path;
};