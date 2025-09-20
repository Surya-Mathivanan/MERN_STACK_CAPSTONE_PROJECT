export interface UserAssessment {
  stage: string;
  programmingLevel: string;
  dailyHours: string;
  goal: string;
  languages: string[];
  verified?: boolean;
  quizScore?: number;
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  difficulty: 'intermediate' | 'advanced';
}

export interface LearningPath {
  title: string;
  description: string;
  duration: string;
  topics: string[];
  dailyPlan: DayPlan[];
}

export interface DayPlan {
  day: number;
  topic: string;
  theory: string[];
  practice: string[];
  videos: string[];
}

export interface Resource {
  title: string;
  url: string;
  platform: string;
  difficulty: string;
  type: 'problem' | 'video' | 'article';
}