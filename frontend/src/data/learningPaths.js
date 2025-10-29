import { LearningPath, UserAssessment } from '../models';
export const generateLearningPath = (assessment)=> {
  let level = assessment.programmingLevel.toLowerCase();
  // Adjust level based on quiz results
  if (assessment.verified === false) {
    if (level === 'advanced') level = 'intermediate';
    else if (level === 'intermediate') level = 'beginner';
  }
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
      dailyPlan: [
        {
          day: 1,
          topic: "Programming Fundamentals",
          theory: ["Variables and Data Types", "Control Structures", "Functions"],
          practice: ["Basic I/O Problems", "Simple Calculations"],
          videos: ["Programming Basics - Apna College"]
        },
        {
          day: 2,
          topic: "Introduction to Arrays",
          theory: ["Array Declaration", "Array Operations", "Memory Layout"],
          practice: ["Array Traversal", "Finding Maximum Element"],
          videos: ["Arrays Tutorial - CodeWithHarry"]
        },
        {
          day: 3,
          topic: "Array Operations",
          theory: ["Insertion", "Deletion", "Searching"],
          practice: ["Insert Element", "Delete Element", "Linear Search"],
          videos: ["Array Operations - Striver"]
        }
      ]
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
      dailyPlan: [
        {
          day: 1,
          topic: "Two Pointer Technique",
          theory: ["Two Pointer Approach", "Applications", "Time Complexity"],
          practice: ["Two Sum", "Container with Most Water", "3Sum"],
          videos: ["Two Pointers - Striver"]
        },
        {
          day: 2,
          topic: "Sliding Window",
          theory: ["Fixed Window", "Variable Window", "Optimization"],
          practice: ["Maximum Sum Subarray", "Longest Substring"],
          videos: ["Sliding Window - Abdul Bari"]
        },
        {
          day: 3,
          topic: "Binary Search",
          theory: ["Binary Search Algorithm", "Variations", "Applications"],
          practice: ["Search in Sorted Array", "First/Last Occurrence"],
          videos: ["Binary Search - Apna College"]
        }
      ]
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
      dailyPlan: [
        {
          day: 1,
          topic: "Advanced Tree Algorithms",
          theory: ["LCA", "Tree DP", "Heavy-Light Decomposition"],
          practice: ["LCA Binary Lifting", "Tree DP Problems"],
          videos: ["Advanced Trees - Errichto"]
        },
        {
          day: 2,
          topic: "Segment Trees",
          theory: ["Construction", "Query", "Update", "Lazy Propagation"],
          practice: ["Range Sum Query", "Range Update Query"],
          videos: ["Segment Trees - CodeNCode"]
        },
        {
          day: 3,
          topic: "Network Flow",
          theory: ["Max Flow", "Min Cut", "Ford-Fulkerson"],
          practice: ["Maximum Flow Problems", "Bipartite Matching"],
          videos: ["Network Flow - MIT OpenCourseWare"]
        }
      ]
    }
  };
  const path = learningPaths[level] || learningPaths.beginner;
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
