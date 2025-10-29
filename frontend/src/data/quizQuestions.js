export const intermediateQuestions = [
  { id: 1, question: "What is the time complexity of searching in a binary search tree (average case)?", options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"], correctAnswer: 1, difficulty: 'intermediate' },
  { id: 2, question: "Which data structure uses LIFO (Last In, First Out) principle?", options: ["Queue", "Stack", "Array", "Linked List"], correctAnswer: 1, difficulty: 'intermediate' },
  { id: 3, question: "What is the space complexity of merge sort?", options: ["O(1)", "O(log n)", "O(n)", "O(n²)"], correctAnswer: 2, difficulty: 'intermediate' },
  { id: 4, question: "In a max heap, the parent node is:", options: ["Smaller than children", "Greater than or equal to children", "Equal to children", "None of the above"], correctAnswer: 1, difficulty: 'intermediate' },
  { id: 5, question: "What is the worst-case time complexity of QuickSort?", options: ["O(n log n)", "O(n²)", "O(n)", "O(log n)"], correctAnswer: 1, difficulty: 'intermediate' },
  { id: 6, question: "Which algorithm is used for finding shortest path in a graph?", options: ["DFS", "BFS", "Dijkstra's", "All of the above"], correctAnswer: 2, difficulty: 'intermediate' },
  { id: 7, question: "What is a balanced binary tree?", options: ["Tree with equal left and right subtrees", "Tree where height difference between left and right subtree is at most 1", "Tree with all leaves at same level", "Complete binary tree"], correctAnswer: 1, difficulty: 'intermediate' },
  { id: 8, question: "Which sorting algorithm is stable?", options: ["Quick Sort", "Heap Sort", "Merge Sort", "Selection Sort"], correctAnswer: 2, difficulty: 'intermediate' },
  { id: 9, question: "What is the time complexity of inserting an element at the beginning of a linked list?", options: ["O(1)", "O(n)", "O(log n)", "O(n²)"], correctAnswer: 0, difficulty: 'intermediate' },
  { id: 10, question: "Which data structure is best for implementing LRU cache?", options: ["Array", "Stack", "Hash Table + Doubly Linked List", "Binary Tree"], correctAnswer: 2, difficulty: 'intermediate' },
];

export const advancedQuestions = [
  { id: 1, question: "What is the time complexity of finding the kth smallest element using quickselect algorithm?", options: ["O(k)", "O(n)", "O(n log n)", "O(n²)"], correctAnswer: 1, difficulty: 'advanced' },
  { id: 2, question: "In a B-tree of order m, what is the maximum number of keys in a node?", options: ["m", "m-1", "2m-1", "m+1"], correctAnswer: 1, difficulty: 'advanced' },
  { id: 3, question: "Which of the following problems can be solved using dynamic programming?", options: ["Longest Common Subsequence", "0/1 Knapsack", "Coin Change", "All of the above"], correctAnswer: 3, difficulty: 'advanced' },
  { id: 4, question: "What is the space complexity of DFS traversal using recursion?", options: ["O(1)", "O(V)", "O(E)", "O(V + E)"], correctAnswer: 1, difficulty: 'advanced' },
  { id: 5, question: "In which scenario would you use a Trie data structure?", options: ["Sorting integers", "Auto-complete functionality", "Graph traversal", "Mathematical calculations"], correctAnswer: 1, difficulty: 'advanced' },
  { id: 6, question: "What is the worst-case time complexity of searching in a hash table?", options: ["O(1)", "O(log n)", "O(n)", "O(n²)"], correctAnswer: 2, difficulty: 'advanced' },
  { id: 7, question: "Which algorithm is used to detect negative weight cycles in a graph?", options: ["Dijkstra's", "Bellman-Ford", "Floyd-Warshall", "Kruskal's"], correctAnswer: 1, difficulty: 'advanced' },
  { id: 8, question: "What is the time complexity of building a heap from an array?", options: ["O(n log n)", "O(n²)", "O(n)", "O(log n)"], correctAnswer: 2, difficulty: 'advanced' },
  { id: 9, question: "Which approach is most efficient for finding the median in a stream of numbers?", options: ["Sorting after each insertion", "Two heaps (max-heap and min-heap)", "Binary search", "Linear search"], correctAnswer: 1, difficulty: 'advanced' },
  { id: 10, question: "What is the optimal substructure property in dynamic programming?", options: ["Problem can be divided into subproblems", "Optimal solution contains optimal solutions to subproblems", "Subproblems overlap", "All of the above"], correctAnswer: 1, difficulty: 'advanced' },
];

export const getQuestionsByLevel = (level) => (level === 'intermediate' ? intermediateQuestions : advancedQuestions);
