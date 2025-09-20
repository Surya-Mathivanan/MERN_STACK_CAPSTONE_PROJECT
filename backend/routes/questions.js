const express = require('express');

const router = express.Router();

// Static questions data (reverted to old method)
const questions = [
  {
    _id: '1',
    level: 'beginner',
    day: 1,
    topic: 'Programming Fundamentals',
    theory: ['Variables and Data Types', 'Control Structures', 'Functions'],
    practice: ['Basic I/O Problems', 'Simple Calculations'],
    videos: ['Programming Basics - Apna College']
  },
  {
    _id: '2',
    level: 'beginner',
    day: 2,
    topic: 'Introduction to Arrays',
    theory: ['Array Declaration', 'Array Operations', 'Memory Layout'],
    practice: ['Array Traversal', 'Finding Maximum Element'],
    videos: ['Arrays Tutorial - CodeWithHarry']
  },
  {
    _id: '3',
    level: 'beginner',
    day: 3,
    topic: 'Array Operations',
    theory: ['Insertion', 'Deletion', 'Searching'],
    practice: ['Insert Element', 'Delete Element', 'Linear Search'],
    videos: ['Array Operations - Striver']
  },
  {
    _id: '4',
    level: 'intermediate',
    day: 1,
    topic: 'Two Pointer Technique',
    theory: ['Two Pointer Approach', 'Applications', 'Time Complexity'],
    practice: ['Two Sum', 'Container with Most Water', '3Sum'],
    videos: ['Two Pointers - Striver']
  },
  {
    _id: '5',
    level: 'intermediate',
    day: 2,
    topic: 'Sliding Window',
    theory: ['Fixed Window', 'Variable Window', 'Optimization'],
    practice: ['Maximum Sum Subarray', 'Longest Substring'],
    videos: ['Sliding Window - Abdul Bari']
  },
  {
    _id: '6',
    level: 'intermediate',
    day: 3,
    topic: 'Binary Search',
    theory: ['Binary Search Algorithm', 'Variations', 'Applications'],
    practice: ['Search in Sorted Array', 'First/Last Occurrence'],
    videos: ['Binary Search - Apna College']
  },
  {
    _id: '7',
    level: 'advanced',
    day: 1,
    topic: 'Advanced Tree Algorithms',
    theory: ['LCA', 'Tree DP', 'Heavy-Light Decomposition'],
    practice: ['LCA Binary Lifting', 'Tree DP Problems'],
    videos: ['Advanced Trees - Errichto']
  },
  {
    _id: '8',
    level: 'advanced',
    day: 2,
    topic: 'Segment Trees',
    theory: ['Construction', 'Query', 'Update', 'Lazy Propagation'],
    practice: ['Range Sum Query', 'Range Update Query'],
    videos: ['Segment Trees - CodeNCode']
  },
  {
    _id: '9',
    level: 'advanced',
    day: 3,
    topic: 'Network Flow',
    theory: ['Max Flow', 'Min Cut', 'Ford-Fulkerson'],
    practice: ['Maximum Flow Problems', 'Bipartite Matching'],
    videos: ['Network Flow - MIT OpenCourseWare']
  }
];

// Get all questions
router.get('/', (req, res) => {
  res.json(questions);
});

// Get questions by level
router.get('/level/:level', (req, res) => {
  const levelQuestions = questions.filter(q => q.level === req.params.level);
  res.json(levelQuestions);
});

// Get question by ID
router.get('/:id', (req, res) => {
  const question = questions.find(q => q._id === req.params.id);
  if (!question) {
    return res.status(404).json({ message: 'Question not found' });
  }
  res.json(question);
});

// Create new question (for compatibility, but not persistent)
router.post('/', (req, res) => {
  const newQuestion = {
    _id: (questions.length + 1).toString(),
    level: req.body.level,
    day: req.body.day,
    topic: req.body.topic,
    theory: req.body.theory || [],
    practice: req.body.practice || [],
    videos: req.body.videos || []
  };
  questions.push(newQuestion);
  res.status(201).json(newQuestion);
});

// Update question (for compatibility, but not persistent)
router.put('/:id', (req, res) => {
  const questionIndex = questions.findIndex(q => q._id === req.params.id);
  if (questionIndex === -1) {
    return res.status(404).json({ message: 'Question not found' });
  }

  const question = questions[questionIndex];
  if (req.body.level) question.level = req.body.level;
  if (req.body.day) question.day = req.body.day;
  if (req.body.topic) question.topic = req.body.topic;
  if (req.body.theory) question.theory = req.body.theory;
  if (req.body.practice) question.practice = req.body.practice;
  if (req.body.videos) question.videos = req.body.videos;

  res.json(question);
});

// Delete question (for compatibility, but not persistent)
router.delete('/:id', (req, res) => {
  const questionIndex = questions.findIndex(q => q._id === req.params.id);
  if (questionIndex === -1) {
    return res.status(404).json({ message: 'Question not found' });
  }

  questions.splice(questionIndex, 1);
  res.json({ message: 'Question deleted' });
});

module.exports = router;