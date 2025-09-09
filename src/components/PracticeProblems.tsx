import React, { useState } from 'react';
import { ArrowLeft, BookOpen, Filter, Search, ExternalLink, Clock, TrendingUp, Star } from 'lucide-react';

interface PracticeProblemsProps {
  onBack: () => void;
  userLevel: string;
}

const PracticeProblems: React.FC<PracticeProblemsProps> = ({ onBack, userLevel }) => {
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');
  const [selectedPlatform, setSelectedPlatform] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const problems = [
    {
      title: "Two Sum",
      url: "https://leetcode.com/problems/two-sum/",
      platform: "LeetCode",
      difficulty: "Easy",
      type: "problem"
    },
    {
      title: "Valid Parentheses",
      url: "https://leetcode.com/problems/valid-parentheses/",
      platform: "LeetCode",
      difficulty: "Easy",
      type: "problem"
    },
    {
      title: "Merge Two Sorted Lists",
      url: "https://leetcode.com/problems/merge-two-sorted-lists/",
      platform: "LeetCode",
      difficulty: "Easy",
      type: "problem"
    },
    {
      title: "Maximum Subarray",
      url: "https://leetcode.com/problems/maximum-subarray/",
      platform: "LeetCode",
      difficulty: "Easy",
      type: "problem"
    },
    {
      title: "Binary Search",
      url: "https://leetcode.com/problems/binary-search/",
      platform: "LeetCode",
      difficulty: "Easy",
      type: "problem"
    },
    {
      title: "Reverse Linked List",
      url: "https://leetcode.com/problems/reverse-linked-list/",
      platform: "LeetCode",
      difficulty: "Easy",
      type: "problem"
    },
    {
      title: "Majority Element",
      url: "https://leetcode.com/problems/majority-element/",
      platform: "LeetCode",
      difficulty: "Easy",
      type: "problem"
    },
    {
      title: "Find First and Last Position of Element in Sorted Array",
      url: "https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/",
      platform: "LeetCode",
      difficulty: "Medium",
      type: "problem"
    },
    {
      title: "Search in Rotated Sorted Array",
      url: "https://leetcode.com/problems/search-in-rotated-sorted-array/",
      platform: "LeetCode",
      difficulty: "Medium",
      type: "problem"
    },
    {
      title: "Find All Duplicates in an Array",
      url: "https://leetcode.com/problems/find-all-duplicates-in-an-array/",
      platform: "LeetCode",
      difficulty: "Medium",
      type: "problem"
    },
    {
      title: "Set Matrix Zeroes",
      url: "https://leetcode.com/problems/set-matrix-zeroes/",
      platform: "LeetCode",
      difficulty: "Medium",
      type: "problem"
    },
    {
      title: "Spiral Matrix",
      url: "https://leetcode.com/problems/spiral-matrix/",
      platform: "LeetCode",
      difficulty: "Medium",
      type: "problem"
    },
    {
      title: "Rotate Image",
      url: "https://leetcode.com/problems/rotate-image/",
      platform: "LeetCode",
      difficulty: "Medium",
      type: "problem"
    },
    {
      title: "Word Search",
      url: "https://leetcode.com/problems/word-search/",
      platform: "LeetCode",
      difficulty: "Medium",
      type: "problem"
    },
    {
      title: "Longest Substring Without Repeating Characters",
      url: "https://leetcode.com/problems/longest-substring-without-repeating-characters/",
      platform: "LeetCode",
      difficulty: "Medium",
      type: "problem"
    },
    {
      title: "Longest Repeating Character Replacement",
      url: "https://leetcode.com/problems/longest-repeating-character-replacement/",
      platform: "LeetCode",
      difficulty: "Medium",
      type: "problem"
    },
    {
      title: "Minimum Window Substring",
      url: "https://leetcode.com/problems/minimum-window-substring/",
      platform: "LeetCode",
      difficulty: "Hard",
      type: "problem"
    },
    {
      title: "Valid Palindrome",
      url: "https://leetcode.com/problems/valid-palindrome/",
      platform: "LeetCode",
      difficulty: "Easy",
      type: "problem"
    },
    {
      title: "Two Sum II - Input Array Is Sorted",
      url: "https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/",
      platform: "LeetCode",
      difficulty: "Medium",
      type: "problem"
    },
    {
      title: "Container With Most Water",
      url: "https://leetcode.com/problems/container-with-most-water/",
      platform: "LeetCode",
      difficulty: "Medium",
      type: "problem"
    },
    {
      title: "3Sum",
      url: "https://leetcode.com/problems/3sum/",
      platform: "LeetCode",
      difficulty: "Medium",
      type: "problem"
    },
    {
      title: "Valid Anagram",
      url: "https://leetcode.com/problems/valid-anagram/",
      platform: "LeetCode",
      difficulty: "Easy",
      type: "problem"
    },
    {
      title: "Group Anagrams",
      url: "https://leetcode.com/problems/group-anagrams/",
      platform: "LeetCode",
      difficulty: "Medium",
      type: "problem"
    },
    {
      title: "Top K Frequent Elements",
      url: "https://leetcode.com/problems/top-k-frequent-elements/",
      platform: "LeetCode",
      difficulty: "Medium",
      type: "problem"
    },
    {
      title: "Product of Array Except Self",
      url: "https://leetcode.com/problems/product-of-array-except-self/",
      platform: "LeetCode",
      difficulty: "Medium",
      type: "problem"
    },
    {
      title: "Valid Sudoku",
      url: "https://leetcode.com/problems/valid-sudoku/",
      platform: "LeetCode",
      difficulty: "Medium",
      type: "problem"
    },
    {
      title: "Longest Consecutive Sequence",
      url: "https://leetcode.com/problems/longest-consecutive-sequence/",
      platform: "LeetCode",
      difficulty: "Medium",
      type: "problem"
    },
    {
      title: "Sum of Two Integers",
      url: "https://leetcode.com/problems/sum-of-two-integers/",
      platform: "LeetCode",
      difficulty: "Medium",
      type: "problem"
    },
    {
      title: "Number of 1 Bits",
      url: "https://leetcode.com/problems/number-of-1-bits/",
      platform: "LeetCode",
      difficulty: "Easy",
      type: "problem"
    },
    {
      title: "Counting Bits",
      url: "https://leetcode.com/problems/counting-bits/",
      platform: "LeetCode",
      difficulty: "Easy",
      type: "problem"
    },
    {
      title: "Missing Number",
      url: "https://leetcode.com/problems/missing-number/",
      platform: "LeetCode",
      difficulty: "Easy",
      type: "problem"
    },
    {
      title: "Reverse Bits",
      url: "https://leetcode.com/problems/reverse-bits/",
      platform: "LeetCode",
      difficulty: "Easy",
      type: "problem"
    },
    {
      title: "Climbing Stairs",
      url: "https://leetcode.com/problems/climbing-stairs/",
      platform: "LeetCode",
      difficulty: "Easy",
      type: "problem"
    },
    {
      title: "Coin Change",
      url: "https://leetcode.com/problems/coin-change/",
      platform: "LeetCode",
      difficulty: "Medium",
      type: "problem"
    },
    {
      title: "Longest Increasing Subsequence",
      url: "https://leetcode.com/problems/longest-increasing-subsequence/",
      platform: "LeetCode",
      difficulty: "Medium",
      type: "problem"
    },
    {
      title: "Word Break",
      url: "https://leetcode.com/problems/word-break/",
      platform: "LeetCode",
      difficulty: "Medium",
      type: "problem"
    },
    {
      title: "Combination Sum",
      url: "https://leetcode.com/problems/combination-sum/",
      platform: "LeetCode",
      difficulty: "Medium",
      type: "problem"
    },
    {
      title: "House Robber",
      url: "https://leetcode.com/problems/house-robber/",
      platform: "LeetCode",
      difficulty: "Medium",
      type: "problem"
    },
    {
      title: "House Robber II",
      url: "https://leetcode.com/problems/house-robber-ii/",
      platform: "LeetCode",
      difficulty: "Medium",
      type: "problem"
    },
    {
      title: "Decode Ways",
      url: "https://leetcode.com/problems/decode-ways/",
      platform: "LeetCode",
      difficulty: "Medium",
      type: "problem"
    },
    {
      title: "Unique Paths",
      url: "https://leetcode.com/problems/unique-paths/",
      platform: "LeetCode",
      difficulty: "Medium",
      type: "problem"
    },
    {
      title: "Jump Game",
      url: "https://leetcode.com/problems/jump-game/",
      platform: "LeetCode",
      difficulty: "Medium",
      type: "problem"
    },
    {
      title: "Clone Graph",
      url: "https://leetcode.com/problems/clone-graph/",
      platform: "LeetCode",
      difficulty: "Medium",
      type: "problem"
    },
    {
      title: "Course Schedule",
      url: "https://leetcode.com/problems/course-schedule/",
      platform: "LeetCode",
      difficulty: "Medium",
      type: "problem"
    },
    {
      title: "Pacific Atlantic Water Flow",
      url: "https://leetcode.com/problems/pacific-atlantic-water-flow/",
      platform: "LeetCode",
      difficulty: "Medium",
      type: "problem"
    },
    {
      title: "Number of Islands",
      url: "https://leetcode.com/problems/number-of-islands/",
      platform: "LeetCode",
      difficulty: "Medium",
      type: "problem"
    },
    {
      title: "Longest Common Subsequence",
      url: "https://leetcode.com/problems/longest-common-subsequence/",
      platform: "LeetCode",
      difficulty: "Medium",
      type: "problem"
    },
    {
      title: "Edit Distance",
      url: "https://leetcode.com/problems/edit-distance/",
      platform: "LeetCode",
      difficulty: "Hard",
      type: "problem"
    },
    {
      title: "Burst Balloons",
      url: "https://leetcode.com/problems/burst-balloons/",
      platform: "LeetCode",
      difficulty: "Hard",
      type: "problem"
    },
    {
      title: "Regular Expression Matching",
      url: "https://leetcode.com/problems/regular-expression-matching/",
      platform: "LeetCode",
      difficulty: "Hard",
      type: "problem"
    },
    {
      title: "Trapping Rain Water",
      url: "https://leetcode.com/problems/trapping-rain-water/",
      platform: "LeetCode",
      difficulty: "Hard",
      type: "problem"
    },
    {
      title: "Minimum Path Sum",
      url: "https://leetcode.com/problems/minimum-path-sum/",
      platform: "LeetCode",
      difficulty: "Medium",
      type: "problem"
    },
    {
      title: "Cherry Pickup",
      url: "https://leetcode.com/problems/cherry-pickup/",
      platform: "LeetCode",
      difficulty: "Hard",
      type: "problem"
    },
    {
      title: "Range Sum Query - Immutable",
      url: "https://leetcode.com/problems/range-sum-query-immutable/",
      platform: "LeetCode",
      difficulty: "Easy",
      type: "problem"
    },
    {
      title: "First Missing Positive",
      url: "https://leetcode.com/problems/first-missing-positive/",
      platform: "LeetCode",
      difficulty: "Hard",
      type: "problem"
    },
    {
      title: "Find the Duplicate Number",
      url: "https://leetcode.com/problems/find-the-duplicate-number/",
      platform: "LeetCode",
      difficulty: "Medium",
      type: "problem"
    },
    {
      title: "Kth Largest Element in an Array",
      url: "https://leetcode.com/problems/kth-largest-element-in-an-array/",
      platform: "LeetCode",
      difficulty: "Medium",
      type: "problem"
    },
    {
      title: "Meeting Rooms",
      url: "https://leetcode.com/problems/meeting-rooms/",
      platform: "LeetCode",
      difficulty: "Easy",
      type: "problem"
    },
    {
      title: "Meeting Rooms II",
      url: "https://leetcode.com/problems/meeting-rooms-ii/",
      platform: "LeetCode",
      difficulty: "Medium",
      type: "problem"
    },
    {
      title: "Graph Valid Tree",
      url: "https://leetcode.com/problems/graph-valid-tree/",
      platform: "LeetCode",
      difficulty: "Medium",
      type: "problem"
    },
    {
      title: "Alien Dictionary",
      url: "https://leetcode.com/problems/alien-dictionary/",
      platform: "LeetCode",
      difficulty: "Hard",
      type: "problem"
    },
    {
      title: "Reconstruct Itinerary",
      url: "https://leetcode.com/problems/reconstruct-itinerary/",
      platform: "LeetCode",
      difficulty: "Hard",
      type: "problem"
    },
    {
      title: "Find Median from Data Stream",
      url: "https://leetcode.com/problems/find-median-from-data-stream/",
      platform: "LeetCode",
      difficulty: "Hard",
      type: "problem"
    },
    {
      title: "Serialize and Deserialize Binary Tree",
      url: "https://leetcode.com/problems/serialize-and-deserialize-binary-tree/",
      platform: "LeetCode",
      difficulty: "Hard",
      type: "problem"
    },
    {
      title: "Binary Tree Maximum Path Sum",
      url: "https://leetcode.com/problems/binary-tree-maximum-path-sum/",
      platform: "LeetCode",
      difficulty: "Hard",
      type: "problem"
    },
    {
      title: "Lowest Common Ancestor of a Binary Tree",
      url: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/",
      platform: "LeetCode",
      difficulty: "Medium",
      type: "problem"
    },
    {
      title: "Binary Tree Level Order Traversal",
      url: "https://leetcode.com/problems/binary-tree-level-order-traversal/",
      platform: "LeetCode",
      difficulty: "Medium",
      type: "problem"
    },
    {
      title: "Validate Binary Search Tree",
      url: "https://leetcode.com/problems/validate-binary-search-tree/",
      platform: "LeetCode",
      difficulty: "Medium",
      type: "problem"
    },
    {
      title: "Convert Sorted Array to Binary Search Tree",
      url: "https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/",
      platform: "LeetCode",
      difficulty: "Easy",
      type: "problem"
    },
    {
      title: "Binary Tree Inorder Traversal",
      url: "https://leetcode.com/problems/binary-tree-inorder-traversal/",
      platform: "LeetCode",
      difficulty: "Easy",
      type: "problem"
    },
    {
      title: "Same Tree",
      url: "https://leetcode.com/problems/same-tree/",
      platform: "LeetCode",
      difficulty: "Easy",
      type: "problem"
    },
    {
      title: "Symmetric Tree",
      url: "https://leetcode.com/problems/symmetric-tree/",
      platform: "LeetCode",
      difficulty: "Easy",
      type: "problem"
    },
    {
      title: "Maximum Depth of Binary Tree",
      url: "https://leetcode.com/problems/maximum-depth-of-binary-tree/",
      platform: "LeetCode",
      difficulty: "Easy",
      type: "problem"
    },
    {
      title: "Balanced Binary Tree",
      url: "https://leetcode.com/problems/balanced-binary-tree/",
      platform: "LeetCode",
      difficulty: "Easy",
      type: "problem"
    },
    {
      title: "Minimum Depth of Binary Tree",
      url: "https://leetcode.com/problems/minimum-depth-of-binary-tree/",
      platform: "LeetCode",
      difficulty: "Easy",
      type: "problem"
    },
    {
      title: "Path Sum",
      url: "https://leetcode.com/problems/path-sum/",
      platform: "LeetCode",
      difficulty: "Easy",
      type: "problem"
    },
    {
      title: "Path Sum II",
      url: "https://leetcode.com/problems/path-sum-ii/",
      platform: "LeetCode",
      difficulty: "Medium",
      type: "problem"
    },
    {
      title: "Flatten Binary Tree to Linked List",
      url: "https://leetcode.com/problems/flatten-binary-tree-to-linked-list/",
      platform: "LeetCode",
      difficulty: "Medium",
      type: "problem"
    },
    {
      title: "Populating Next Right Pointers in Each Node",
      url: "https://leetcode.com/problems/populating-next-right-pointers-in-each-node/",
      platform: "LeetCode",
      difficulty: "Medium",
      type: "problem"
    },
    {
      title: "Construct Binary Tree from Preorder and Inorder Traversal",
      url: "https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/",
      platform: "LeetCode",
      difficulty: "Medium",
      type: "problem"
    },
    {
      title: "Binary Tree Right Side View",
      url: "https://leetcode.com/problems/binary-tree-right-side-view/",
      platform: "LeetCode",
      difficulty: "Medium",
      type: "problem"
    },
    {
      title: "Count Complete Tree Nodes",
      url: "https://leetcode.com/problems/count-complete-tree-nodes/",
      platform: "LeetCode",
      difficulty: "Medium",
      type: "problem"
    },
    {
      title: "Kth Smallest Element in a BST",
      url: "https://leetcode.com/problems/kth-smallest-element-in-a-bst/",
      platform: "LeetCode",
      difficulty: "Medium",
      type: "problem"
    },
    {
      title: "Validate Binary Search Tree",
      url: "https://leetcode.com/problems/validate-binary-search-tree/",
      platform: "GeeksforGeeks",
      difficulty: "Medium",
      type: "problem"
    },
    {
      title: "Binary Tree to DLL",
      url: "https://www.geeksforgeeks.org/binary-tree-to-dll/",
      platform: "GeeksforGeeks",
      difficulty: "Medium",
      type: "problem"
    },
    {
      title: "Largest BST in Binary Tree",
      url: "https://www.geeksforgeeks.org/largest-bst-in-binary-tree/",
      platform: "GeeksforGeeks",
      difficulty: "Hard",
      type: "problem"
    },
    {
      title: "Check for BST",
      url: "https://www.geeksforgeeks.org/check-for-bst/",
      platform: "GeeksforGeeks",
      difficulty: "Medium",
      type: "problem"
    },
    {
      title: "Vertical Traversal of Binary Tree",
      url: "https://www.geeksforgeeks.org/vertical-traversal-of-binary-tree/",
      platform: "GeeksforGeeks",
      difficulty: "Medium",
      type: "problem"
    },
    {
      title: "Zigzag Tree Traversal",
      url: "https://www.geeksforgeeks.org/zigzag-tree-traversal/",
      platform: "GeeksforGeeks",
      difficulty: "Medium",
      type: "problem"
    },
    {
      title: "Boundary Traversal of Binary Tree",
      url: "https://www.geeksforgeeks.org/boundary-traversal-of-binary-tree/",
      platform: "GeeksforGeeks",
      difficulty: "Medium",
      type: "problem"
    },
    {
      title: "Diagonal Traversal of Binary Tree",
      url: "https://www.geeksforgeeks.org/diagonal-traversal-of-binary-tree/",
      platform: "GeeksforGeeks",
      difficulty: "Medium",
      type: "problem"
    },
    {
      title: "Top View of Binary Tree",
      url: "https://www.geeksforgeeks.org/top-view-of-binary-tree/",
      platform: "GeeksforGeeks",
      difficulty: "Medium",
      type: "problem"
    },
    {
      title: "Bottom View of Binary Tree",
      url: "https://www.geeksforgeeks.org/bottom-view-of-binary-tree/",
      platform: "GeeksforGeeks",
      difficulty: "Medium",
      type: "problem"
    },
    {
      title: "Left View of Binary Tree",
      url: "https://www.geeksforgeeks.org/left-view-of-binary-tree/",
      platform: "GeeksforGeeks",
      difficulty: "Easy",
      type: "problem"
    },
    {
      title: "Right View of Binary Tree",
      url: "https://www.geeksforgeeks.org/right-view-of-binary-tree/",
      platform: "GeeksforGeeks",
      difficulty: "Easy",
      type: "problem"
    },
    {
      title: "Diameter of Binary Tree",
      url: "https://www.geeksforgeeks.org/diameter-of-binary-tree/",
      platform: "GeeksforGeeks",
      difficulty: "Easy",
      type: "problem"
    },
    {
      title: "Maximum Path Sum between Two Leaves",
      url: "https://www.geeksforgeeks.org/maximum-path-sum-between-two-leaves/",
      platform: "GeeksforGeeks",
      difficulty: "Medium",
      type: "problem"
    },
    {
      title: "Check if Tree is Isomorphic",
      url: "https://www.geeksforgeeks.org/check-if-tree-is-isomorphic/",
      platform: "GeeksforGeeks",
      difficulty: "Medium",
      type: "problem"
    },
    {
      title: "Check if Two Trees are Identical",
      url: "https://www.geeksforgeeks.org/check-if-two-trees-are-identical/",
      platform: "GeeksforGeeks",
      difficulty: "Easy",
      type: "problem"
    },
    {
      title: "Check if Subtree",
      url: "https://www.geeksforgeeks.org/check-if-subtree/",
      platform: "GeeksforGeeks",
      difficulty: "Easy",
      type: "problem"
    },
    {
      title: "Connect Nodes at Same Level",
      url: "https://www.geeksforgeeks.org/connect-nodes-at-same-level/",
      platform: "GeeksforGeeks",
      difficulty: "Medium",
      type: "problem"
    },
    {
      title: "Convert Binary Tree into Doubly Linked List",
      url: "https://www.geeksforgeeks.org/convert-given-binary-tree-doubly-linked-list-set-3/",
      platform: "GeeksforGeeks",
      difficulty: "Medium",
      type: "problem"
    },
    {
      title: "Check if Binary Tree is Sum Tree",
      url: "https://www.geeksforgeeks.org/check-if-binary-tree-is-sum-tree/",
      platform: "GeeksforGeeks",
      difficulty: "Medium",
      type: "problem"
    },
    {
      title: "Check if Binary Tree is Balanced",
      url: "https://www.geeksforgeeks.org/check-if-binary-tree-is-balanced/",
      platform: "GeeksforGeeks",
      difficulty: "Easy",
      type: "problem"
    },
    {
      title: "Check if Binary Tree is Complete",
      url: "https://www.geeksforgeeks.org/check-if-binary-tree-is-complete/",
      platform: "GeeksforGeeks",
      difficulty: "Medium",
      type: "problem"
    },
    {
      title: "Check if Binary Tree is Full",
      url: "https://www.geeksforgeeks.org/check-if-binary-tree-is-full/",
      platform: "GeeksforGeeks",
      difficulty: "Easy",
      type: "problem"
    },
    {
      title: "Check if Binary Tree is Perfect",
      url: "https://www.geeksforgeeks.org/check-if-binary-tree-is-perfect/",
      platform: "GeeksforGeeks",
      difficulty: "Medium",
      type: "problem"
    },
    {
      title: "Check if Binary Tree is Symmetric",
      url: "https://www.geeksforgeeks.org/check-if-binary-tree-is-symmetric/",
      platform: "GeeksforGeeks",
      difficulty: "Easy",
      type: "problem"
    },
    {
      title: "A + B Problem",
      url: "https://codeforces.com/problemset/problem/1/A",
      platform: "Codeforces",
      difficulty: "Easy",
      type: "problem"
    },
    {
      title: "Beautiful Matrix",
      url: "https://codeforces.com/problemset/problem/263/A",
      platform: "Codeforces",
      difficulty: "Easy",
      type: "problem"
    }
  ];

  // Filter problems based on user level
  const getAvailableDifficulties = (level: string) => {
    switch (level.toLowerCase()) {
      case 'beginner':
        return ['easy'];
      case 'intermediate':
        return ['easy', 'medium'];
      case 'advanced':
        return ['medium', 'hard'];
      default:
        return ['easy', 'medium', 'hard'];
    }
  };

  const availableDifficulties = getAvailableDifficulties(userLevel);

  const filteredProblems = problems.filter(problem => {
    const matchesDifficulty = selectedDifficulty === 'all' || problem.difficulty.toLowerCase() === selectedDifficulty;
    const matchesPlatform = selectedPlatform === 'all' || problem.platform.toLowerCase() === selectedPlatform;
    const matchesSearch = problem.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesUserLevel = availableDifficulties.includes(problem.difficulty.toLowerCase());
    
    return matchesDifficulty && matchesPlatform && matchesSearch && matchesUserLevel;
  });

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case 'easy': return 'text-periwinkle bg-periwinkle/20 border border-periwinkle/30';
      case 'medium': return 'text-dusty-rose bg-dusty-rose/20 border border-dusty-rose/30';
      case 'hard': return 'text-pale-pink bg-pale-pink/20 border border-pale-pink/30';
      default: return 'text-pale-pink/60 bg-space-light/30 border border-pale-pink/20';
    }
  };

  const getPlatformColor = (platform: string) => {
    switch (platform.toLowerCase()) {
      case 'leetcode': return 'text-dusty-rose bg-dusty-rose/20 border border-dusty-rose/30';
      case 'geeksforgeeks': return 'text-periwinkle bg-periwinkle/20 border border-periwinkle/30';
      case 'codeforces': return 'text-pale-pink bg-pale-pink/20 border border-pale-pink/30';
      default: return 'text-pale-pink/60 bg-space-light/30 border border-pale-pink/20';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-space-dark via-space-blue to-dark-navy py-12 px-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-2 h-2 bg-periwinkle rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-dusty-rose rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-pale-pink rounded-full animate-pulse delay-500"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-periwinkle rounded-full animate-pulse delay-700"></div>
        <div className="absolute bottom-20 right-10 w-2 h-2 bg-dusty-rose rounded-full animate-pulse delay-300"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="w-16 h-16 bg-gradient-to-br from-periwinkle to-dusty-rose rounded-2xl mx-auto mb-4 flex items-center justify-center animate-glow">
            <BookOpen className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-white mb-2">Practice Problems</h1>
          <p className="text-xl text-pale-pink/70 max-w-2xl mx-auto">
            Curated coding challenges to strengthen your DSA skills
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-space-light/30 backdrop-blur-sm rounded-2xl p-6 border border-periwinkle/20 animate-slide-up">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-3xl font-bold text-white">{problems.length}</p>
                <p className="text-pale-pink/70">Total Problems</p>
              </div>
              <div className="w-12 h-12 bg-gradient-to-br from-periwinkle/20 to-dusty-rose/20 rounded-full flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-periwinkle" />
              </div>
            </div>
          </div>
          
          <div className="bg-space-light/30 backdrop-blur-sm rounded-2xl p-6 border border-dusty-rose/20 animate-slide-up delay-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-3xl font-bold text-white">3</p>
                <p className="text-pale-pink/70">Platforms</p>
              </div>
              <div className="w-12 h-12 bg-gradient-to-br from-dusty-rose/20 to-pale-pink/20 rounded-full flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-dusty-rose" />
              </div>
            </div>
          </div>
          
          <div className="bg-space-light/30 backdrop-blur-sm rounded-2xl p-6 border border-pale-pink/20 animate-slide-up delay-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-3xl font-bold text-white">
                  {Math.round((problems.filter(p => p.difficulty === 'Easy').length / problems.length) * 100)}%
                </p>
                <p className="text-pale-pink/70">Beginner Friendly</p>
              </div>
              <div className="w-12 h-12 bg-gradient-to-br from-pale-pink/20 to-periwinkle/20 rounded-full flex items-center justify-center">
                <Star className="w-6 h-6 text-pale-pink" />
              </div>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-space-light/30 backdrop-blur-sm rounded-2xl p-6 border border-periwinkle/20 mb-8 animate-slide-up delay-300">
          <div className="flex flex-wrap gap-4 items-center">
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-pale-pink/60" />
              <span className="font-semibold text-white">Filters:</span>
            </div>
            
            <select
              value={selectedDifficulty}
              onChange={(e) => setSelectedDifficulty(e.target.value)}
              className="px-4 py-2 rounded-lg bg-space-light/50 border border-periwinkle/30 text-white focus:outline-none focus:ring-2 focus:ring-periwinkle/50 backdrop-blur-sm"
            >
              <option value="all">All Available Difficulties</option>
              {availableDifficulties.includes('easy') && <option value="easy">Easy</option>}
              {availableDifficulties.includes('medium') && <option value="medium">Medium</option>}
              {availableDifficulties.includes('hard') && <option value="hard">Hard</option>}
            </select>
            
            <select
              value={selectedPlatform}
              onChange={(e) => setSelectedPlatform(e.target.value)}
              className="px-4 py-2 rounded-lg bg-space-light/50 border border-periwinkle/30 text-white focus:outline-none focus:ring-2 focus:ring-periwinkle/50 backdrop-blur-sm"
            >
              <option value="all">All Platforms</option>
              <option value="leetcode">LeetCode</option>
              <option value="geeksforgeeks">GeeksforGeeks</option>
              <option value="codeforces">Codeforces</option>
            </select>
            
            <div className="flex-1 min-w-64">
              <div className="relative">
                <Search className="w-5 h-5 text-pale-pink/60 absolute left-3 top-1/2 transform -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search problems..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 rounded-lg bg-space-light/50 border border-periwinkle/30 text-white placeholder-pale-pink/50 focus:outline-none focus:ring-2 focus:ring-periwinkle/50 backdrop-blur-sm"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Problems Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredProblems.map((problem, index) => (
            <div
              key={index}
              className="group bg-space-light/30 backdrop-blur-sm rounded-2xl p-6 border border-periwinkle/20 hover:border-periwinkle/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-periwinkle/10 animate-slide-up"
              style={{ animationDelay: `${400 + index * 50}ms` }}
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-lg font-bold text-white flex-1 leading-tight group-hover:text-periwinkle transition-colors duration-300">
                  {problem.title}
                </h3>
                <div className="ml-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getDifficultyColor(problem.difficulty)}`}>
                    {problem.difficulty}
                  </span>
                </div>
              </div>
              
              <div className="flex items-center justify-between mb-6">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getPlatformColor(problem.platform)}`}>
                  {problem.platform}
                </span>
                <div className="flex items-center text-pale-pink/60 text-sm">
                  <Clock className="w-4 h-4 mr-1" />
                  Est. 30-45 min
                </div>
              </div>
              
              <a
                href={problem.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full px-4 py-3 bg-gradient-to-r from-periwinkle to-dusty-rose hover:from-periwinkle/90 hover:to-dusty-rose/90 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5"
              >
                Solve Problem
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </div>
          ))}
        </div>

        {filteredProblems.length === 0 && (
          <div className="text-center py-12 animate-fade-in">
            <div className="w-24 h-24 bg-space-light/30 rounded-full flex items-center justify-center mx-auto mb-4 border border-periwinkle/20">
              <Search className="w-8 h-8 text-pale-pink/60" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">No problems found</h3>
            <p className="text-pale-pink/70">Try adjusting your filters or search terms</p>
          </div>
        )}

        {/* Back Button */}
        <div className="mt-12 text-center animate-fade-in">
          <button
            onClick={onBack}
            className="inline-flex items-center px-6 py-3 bg-space-light/50 hover:bg-space-light/70 text-white rounded-xl transition-all duration-200 border border-periwinkle/20 hover:border-periwinkle/40 backdrop-blur-sm"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Dashboard
          </button>
        </div>
      </div>
    </div>
  );
};

export default PracticeProblems;