const mysql = require("mysql2/promise");
const steps = [
  {
    stepTitle: "Step 1: Arrays",
    sections: {
      "Lec 1 : Easy": [
        {
          id: "largest-element-in-an-array",
          title: "Largest Element in an Array",
          content:
            "Given an array of integers, find and return the largest element in the array.\n\nExample 1:\n- Input: [1, 5, 3]\n- Output: 5\n\nExample 2:\n- Input: [-2, -1, -5]\n- Output: -1",
          solution:
            "def LargestNumber(arr):\n    mx = float('-inf')\n    for i in arr:\n        if i > mx:\n            mx = i\n    return mx",
        },
        {
          id: "second-largest-element-in-array-without-sorting",
          title: "Second Largest Element in an Array without Sorting",
          content:
            "Given an array of integers, find and return the second largest element without sorting the array.\n\nExample 1:\n- Input: [3, 1, 2]\n- Output: 2\n\nExample 2:\n- Input: [5, 5, 4]\n- Output: 4",
          solution:
            "def second_largest(arr):\n    if len(arr) < 2:\n        return None  # No second largest\n    first = second = float('-inf')\n    for num in arr:\n        if num > first:\n            second = first\n            first = num\n        elif first > num > second:\n            second = num\n    return second",
        },
        {
          id: "check-if-array-is-sorted",
          title: "Check if the Array is Sorted",
          content:
            "Given an array of integers, determine if the array is sorted in non-decreasing (ascending) order.\n\nExample 1:\n- Input: [1, 2, 3, 3]\n- Output: True\n\nExample 2:\n- Input: [3, 2, 1]\n- Output: False",
          solution:
            "def is_sorted(arr):\n    for i in range(1, len(arr)):\n        if arr[i] < arr[i-1]:\n            return False\n    return True",
        },
        {
          id: "remove-duplicates-from-sorted-array",
          title: "Remove Duplicates from Sorted Array",
          content:
            "Given a sorted array, remove the duplicates in-place and return the array containing only unique elements.\n\nExample 1:\n- Input: [1, 1, 2, 3, 3]\n- Output: [1, 2, 3]\n\nExample 2:\n- Input: [2, 2, 2]\n- Output: [2]",
          solution:
            "def removeDuplicates(nums):\n    ind = 1\n    for i in range(1,len(nums)):\n        if nums[i]!=nums[i-1]:\n            nums[ind] = nums[i]\n            ind+=1\n    return num[:ind]",
        },
        {
          id: "left-rotate-array-by-d-places",
          title: "Left Rotate an Array by D Places",
          content:
            "Given an array and a number D, left rotate the array by D places.\n\nExample 1:\n- Input: [1, 2, 3, 4, 5], D = 2\n- Output: [3, 4, 5, 1, 2]\n\nExample 2:\n- Input: [1, 2, 3], D = 3\n- Output: [1, 2, 3]",
          solution:
            `def rotateArr(self, arr, d):
  n = len(arr)
  d = d%n
  ans = [0] * n
  for i in range(n):
      ans[i] = arr[(i+d)%n]
  for i in range(n):
      arr[i] = ans[i]
            `,
        },
        {
          id: "move-zeros-to-end",
          title: "Move Zeros to End",
          content:
            "Given an array, move all zeros to the end while maintaining the relative order of non-zero elements.\n\nExample 1:\n- Input: [0, 1, 0, 3, 12]\n- Output: [1, 3, 12, 0, 0]\n\nExample 2:\n- Input: [1, 0, 2]\n- Output: [1, 2, 0]",
          solution:
            "def moveZeroes(nums: List[int]) -> None:\n    ind = 0\n    for i in range(len(nums)):\n        if nums[i] != 0:\n            nums[ind], nums[i] = nums[i], nums[ind]\n            ind += 1",
        },
        {
          id: "linear-search",
          title: "Linear Search",
          content:
            "Given an array and a target value, return the index of the target if found; otherwise return -1. Perform a linear search.\n\nExample 1:\n- Input: arr = [1, 2, 3], target = 2\n- Output: 1\n\nExample 2:\n- Input: arr = [1, 2, 3], target = 4\n- Output: -1",
          solution:
            "def linear_search(arr, target):\n    for i, num in enumerate(arr):\n        if num == target:\n            return i\n    return -1",
        },
        {
          id: "find-the-union",
          title: "Find the Union",
          content:
            "Given two sorted arrays of integers, find and return the union of the two arrays (unique elements present in either array).\n\nExample 1:\n- Input: arr1 = [1, 2, 3], arr2 = [2, 3, 4]\n- Output: [1, 2, 3, 4]\n\nExample 2:\n- Input: arr1 = [1, 1], arr2 = [1]\n- Output: [1]",
          solution:
            "def findUnion(a, b):\n    i, j = 0, 0\n    n1, n2 = len(a), len(b)\n    ans = []\n    while i < n1 and j < n2:\n        if a[i] < b[j]:\n            if not ans or ans[-1] != a[i]:\n                ans.append(a[i])\n            i += 1\n        elif b[j] < a[i]:\n            if not ans or ans[-1] != b[j]:\n                ans.append(b[j])\n            j += 1\n        else:\n            if not ans or ans[-1] != a[i]:\n                ans.append(a[i])\n            i += 1\n            j += 1\n    while i < n1:\n        if not ans or ans[-1] != a[i]:\n            ans.append(a[i])\n        i += 1\n    while j < n2:\n        if not ans or ans[-1] != b[j]:\n            ans.append(b[j])\n        j += 1\n    return ans",
        },
        {
          id: "find-missing-number-in-array",
          title: "Find Missing Number in an Array",
          content:
            "An array contains integers from 1 to n with exactly one number missing. Find and return the missing number.\n\nExample 1:\n- Input: [1, 2, 4, 5]  (n = 5)\n- Output: 3\n\nExample 2:\n- Input: [2, 3, 1, 5]  (n = 5)\n- Output: 4",
          solution:
            "def find_missing_number(arr):\n    n = len(arr) + 1\n    total = n * (n + 1) // 2\n    return total - sum(arr)",
        },
        {
          id: "maximum-consecutive-ones",
          title: "Maximum Consecutive Ones",
          content:
            "Given a binary array, find the maximum number of consecutive 1s in the array.\n\nExample 1:\n- Input: [1, 1, 0, 1, 1, 1]\n- Output: 3\n\nExample 2:\n- Input: [0, 0, 0, 0]\n- Output: 0",
          solution:
            "def max_consecutive_ones(arr):\n    max_count = count = 0\n    for num in arr:\n        if num == 1:\n            count += 1\n            max_count = max(max_count, count)\n        else:\n            count = 0\n    return max_count",
        },
        {
          id: "find-number-appears-once",
          title: "Find the Number that Appears Once (others twice)",
          content:
            "In an array, every element appears exactly twice except for one element which appears once. Find that single element.\n\nExample 1:\n- Input: [2, 3, 2]\n- Output: 3\n\nExample 2:\n- Input: [4, 1, 2, 1, 2]\n- Output: 4",
          solution:
            "def single_number(arr):\n    result = 0\n    for num in arr:\n        result ^= num\n    return result",
        },
        {
          id: "longest-subarray-with-sum-k",
          title: "Longest Subarray with Sum K (Positives and Negatives)",
          content:
            "Given an array of integers (positive and negative) and a target sum K, find the length of the longest subarray that sums to K.\n\nExample 1:\n- Input: [1, -1, 5, -2, 3], K = 3\n- Output: 4  (Explanation: [1, -1, 5, -2] sums to 3)\n\nExample 2:\n- Input: [10, 5, 2, 7, 1, 9], K = 15\n- Output: 4  (Explanation: [5, 2, 7, 1] sums to 15)",
          solution:
            "def longestSubarray(arr, k):\n    d = {}\n    sm = 0\n    ans = 0\n    for i in range(len(arr)):\n        sm = sm + arr[i]\n        if sm == k:\n            ans = i + 1\n        if k - sm in d:\n            ans = max(ans, i - d[k - sm] + 1)\n        if sm not in d:\n            d[sm] = i\n    return ans",
        },
      ],
      "Lec 2 : Medium": [
        {
          id: "two-sum-problem",
          title: "2Sum Problem",
          content:
            "Given an array of integers and a target number, find two numbers in the array that sum up to the target and return their indices (in any order). Assume exactly one solution exists.\n\nExample 1:\n- Input: nums = [2, 7, 11, 15], target = 9\n- Output: [0, 1]  (Explanation: nums[0] + nums[1] = 2 + 7 = 9)\n\nExample 2:\n- Input: nums = [3, 2, 4], target = 6\n- Output: [1, 2]  (Explanation: nums[1] + nums[2] = 2 + 4 = 6)",
          solution:
            "def twoSum(nums: List[int], target: int) -> List[int]:\n    d = {}\n    for i in range(len(nums)):\n        if target - nums[i] in d:\n            return (i, d[target - nums[i]])\n        else:\n            d[nums[i]] = i",
        },
        {
          id: "sort-array-of-0s-1s-2s",
          title: "Sort an Array of 0's, 1's, and 2's",
          content:
            "Given an array of 0s, 1s, and 2s, sort the array in-place so that all 0s come first, then 1s, then 2s. This is known as the Dutch National Flag problem.\n\nExample 1:\n- Input: [2, 0, 2, 1, 1, 0]\n- Output: [0, 0, 1, 1, 2, 2]\n\nExample 2:\n- Input: [0, 1, 2, 0, 1, 2]\n- Output: [0, 0, 1, 1, 2, 2]",
          solution:
            "def sort012(arr):\n    low, mid, high = 0, 0, len(arr) - 1\n    while mid <= high:\n        if arr[mid] == 0:\n            arr[low], arr[mid] = arr[mid], arr[low]\n            low += 1\n            mid += 1\n        elif arr[mid] == 1:\n            mid += 1\n        else:  # arr[mid] == 2\n            arr[mid], arr[high] = arr[high], arr[mid]\n            high -= 1\n    return arr",
        },
        {
          id: "majority-element-greater-n-over-2",
          title: "Majority Element (> n/2 times)",
          content:
            "Given an array of size n, find the majority element. The majority element appears more than n/2 times. You may assume the array is non-empty and the majority element always exists.\n\nExample 1:\n- Input: [3, 2, 3]\n- Output: 3\n\nExample 2:\n- Input: [2, 2, 1, 1, 1, 2, 2]\n- Output: 2",
          solution:
            "def majorityElement(nums: List[int]) -> int:\n    el = -1\n    cnt = 0\n    for i in range(len(nums)):\n        if cnt == 0:\n            el = nums[i]\n            cnt = 1\n        elif nums[i] != el:\n            cnt -= 1\n        else:\n            cnt += 1\n    return el",
        },
        {
          id: "kadane-maximum-subarray-sum",
          title: "Kadane's Algorithm – Maximum Subarray Sum",
          content:
            "Given an integer array, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum. Use Kadane's algorithm.\n\nExample 1:\n- Input: [-2,1,-3,4,-1,2,1,-5,4]\n- Output: 6  (Explanation: [4,-1,2,1] has sum 6)\n\nExample 2:\n- Input: [1]\n- Output: 1",
          solution:
            "def KadaneAlgorithm(nums: List[int]) -> int:\n    mx = float('-inf')\n    sm = 0\n    for i in nums:\n        sm = sm + i\n        mx = max(mx, sm)\n        if sm < 0:\n            sm = 0\n    return mx",
        },
        {
          id: "print-subarray-with-maximum-sum",
          title: "Print Subarray with Maximum Subarray Sum",
          content:
            "Given an integer array, find a contiguous subarray with the maximum sum and return that subarray.\n\nExample 1:\n- Input: [-2,1,-3,4,-1,2,1,-5,4]\n- Output: [4, -1, 2, 1]  (This subarray has the maximum sum 6)\n\nExample 2:\n- Input: [1, 2, 3]\n- Output: [1, 2, 3]  (The whole array is maximum sum 6)",
          solution:
            "def maxSubArray(nums: List[int]) -> int:\n    mx = float('-inf')\n    sm = 0\n    for i in nums:\n        sm = sm + i\n        mx = max(mx, sm)\n        if sm < 0:\n            sm = 0\n    return mx",
        },
        {
          id: "stock-buy-and-sell",
          title: "Stock Buy and Sell",
          content:
            "Given an array of stock prices where prices[i] is the price of a given stock on day i, maximize profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock. Return the maximum profit.\n\nExample 1:\n- Input: [7,1,5,3,6,4]\n- Output: 5  (Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6))\n\nExample 2:\n- Input: [7,6,4,3,1]\n- Output: 0  (No profit is possible)",
          solution:
            "def maxProfit(prices: List[int]) -> int:\n    cost = prices[0]\n    profit = 0\n    for i in range(1, len(prices)):\n        profit = max(profit, prices[i] - cost)\n        cost = min(cost, prices[i])\n    return profit",
        },
        {
          id: "rearrange-alternating-positive-negative",
          title:
            "Rearrange the Array in Alternating Positive and Negative Items",
          content:
            "Rearrange an array such that positive and negative numbers alternate. The relative order of positive and negative numbers should be preserved, and if extra positives or negatives remain, they should appear at the end.\n\nExample 1:\n- Input: [1, 2, -3, -4, 5, -6]\n- Output: [1, -3, 2, -4, 5, -6]\n\nExample 2:\n- Input: [-5, -2, 5, 2, 4, 7, 1, 8, 0, -8]\n- Output: [-5, 5, -2, 2, 4, 7, 1, 8, 0, -8]  (one possible solution)",
          solution:
            "def rearrangeArray(nums: List[int]) -> List[int]:\n    l = len(nums)\n    p = 0\n    n = 1\n    ans = [0] * l\n    for i in range(l):\n        if nums[i] > 0:\n            ans[p] = nums[i]\n            p += 2\n        else:\n            ans[n] = nums[i]\n            n += 2\n    return ans",
        },
        {
          id: "next-permutation",
          title: "Next Permutation",
          content:
            "Implement next permutation, which rearranges numbers into the lexicographically next greater permutation of numbers. If no such permutation is possible, rearrange it to the lowest possible order (sorted in ascending order).\n\nExample 1:\n- Input: [1, 2, 3]\n- Output: [1, 3, 2]\n\nExample 2:\n- Input: [3, 2, 1]\n- Output: [1, 2, 3]",
          solution:
            "def nextPermutation(arr: List[int]) -> None:\n    def reverse(arr, s, e):\n        while s < e:\n            arr[s], arr[e] = arr[e], arr[s]\n            s += 1\n            e -= 1\n\n    pivot = -1\n    n = len(arr)\n    for i in range(n - 2, -1, -1):\n        if arr[i] < arr[i + 1]:\n            pivot = i\n            break\n    if pivot == -1:\n        arr[:] = arr[::-1]\n        return arr\n    for i in range(n - 1, pivot, -1):\n        if arr[i] > arr[pivot]:\n            arr[pivot], arr[i] = arr[i], arr[pivot]\n            break\n    reverse(arr, pivot + 1, n - 1)\n    return arr",
        },
        {
          id: "leaders-in-array",
          title: "Leaders in an Array",
          content:
            "An element of an array is a leader if it is strictly greater than all the elements to its right. Given an array, return all the leader elements.\n\nExample 1:\n- Input: [16, 17, 4, 3, 5, 2]\n- Output: [17, 5, 2]\n\nExample 2:\n- Input: [1, 2, 3, 4]\n- Output: [4]",
          solution:
            "def leaders(arr):\n    mx = float('-inf')\n    ans = []\n    for i in range(len(arr) - 1, -1, -1):\n        if arr[i] >= mx:\n            ans.append(arr[i])\n            mx = arr[i]\n    return ans[::-1]",
        },
        {
          id: "longest-consecutive-sequence",
          title: "Longest Consecutive Sequence in an Array",
          content:
            "Given an unsorted array of integers, find the length of the longest consecutive elements sequence (sequence of increasing integers by 1). The consecutive elements can be in any order.\n\nExample 1:\n- Input: [100, 4, 200, 1, 3, 2]\n- Output: 4  (Explanation: The longest consecutive sequence is [1, 2, 3, 4])\n\nExample 2:\n- Input: [0, -1]\n- Output: 2  (Explanation: The sequence is [-1, 0])",
          solution:
            "def longestConsecutive(arr: List[int]) -> int:\n    if not arr: return 0\n    arr.sort()\n    cnt = 1\n    mx = 1\n    i = 0\n    n = len(arr)\n    while i < (n - 1):\n        if arr[i] + 1 == arr[i + 1]:\n            cnt += 1\n            mx = max(mx, cnt)\n        elif arr[i] == arr[i + 1]:\n            pass\n        else:\n            cnt = 1\n        i += 1\n    return mx",
        },
        {
          id: "set-matrix-zeros",
          title: "Set Matrix Zeros",
          content:
            "Given an m x n matrix, if an element is 0, set its entire row and column to 0 in-place.\n\nExample 1:\n- Input: [[1,1,1],[1,0,1],[1,1,1]]\n- Output: [[1,0,1],[0,0,0],[1,0,1]]\n\nExample 2:\n- Input: [[0,1,2,0],[3,4,5,2],[1,3,1,5]]\n- Output: [[0,0,0,0],[0,4,5,0],[0,3,1,0]]",
          solution:
            "def setZeroes(matrix: List[List[int]]) -> None:\n    m = len(matrix)\n    n = len(matrix[0])\n    row = [0] * m\n    col = [0] * n\n    for i in range(m):\n        for j in range(n):\n            if matrix[i][j] == 0:\n                row[i] = 1\n                col[j] = 1\n    for i in range(m):\n        for j in range(n):\n            if row[i]:\n                matrix[i][j] = 0\n            if col[j]:\n                matrix[i][j] = 0",
        },
        {
          id: "rotate-matrix-90-degrees",
          title: "Rotate Matrix by 90 Degrees",
          content:
            "Given an n x n 2D matrix, rotate the matrix by 90 degrees clockwise in-place.\n\nExample 1:\n- Input: [[1,2,3],[4,5,6],[7,8,9]]\n- Output: [[7,4,1],[8,5,2],[9,6,3]]\n\nExample 2:\n- Input: [[1,2],[3,4]]\n- Output: [[3,1],[4,2]]",
          solution:
            "def rotate_matrix(matrix):\n    n = len(matrix)\n    for i in range(n):\n        for j in range(i, n):\n            matrix[i][j], matrix[j][i] = matrix[j][i], matrix[i][j]\n    for i in range(n):\n        matrix[i].reverse()\n    return matrix",
        },
        {
          id: "print-matrix-spiral-order",
          title: "Print the Matrix in Spiral Manner",
          content:
            "Given an m x n matrix, return all elements of the matrix in spiral order.\n\nExample 1:\n- Input: [[1,2,3],[4,5,6],[7,8,9]]\n- Output: [1, 2, 3, 6, 9, 8, 7, 4, 5]\n\nExample 2:\n- Input: [[1,2,3,4],[5,6,7,8],[9,10,11,12]]\n- Output: [1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7]",
          solution:
            "def spiralOrder(mat: List[List[int]]) -> List[int]:\n    m = len(mat)\n    n = len(mat[0])\n    ans = []\n    l = 0\n    r = n - 1\n    t = 0\n    b = m - 1\n    while t <= b and l <= r:\n        for i in range(l, r + 1):\n            ans.append(mat[t][i])\n        t += 1\n\n        for i in range(t, b + 1):\n            ans.append(mat[i][r])\n        r -= 1\n\n        if t <= b:\n            for i in range(r, l - 1, -1):\n                ans.append(mat[b][i])\n            b -= 1\n\n        if l <= r:\n            for i in range(b, t - 1, -1):\n                ans.append(mat[i][l])\n            l += 1\n    return ans",
        },
        {
          id: "count-subarrays-with-given-sum",
          title: "Count Subarrays with Given Sum",
          content:
            "Given an array of integers and a target sum K, count the number of subarrays that sum to K.\n\nExample 1:\n- Input: [1, 1, 1], K = 2\n- Output: 2  (Subarrays [1,1] at indices [0,1] and [1,2])\n\nExample 2:\n- Input: [1, 2, 3], K = 3\n- Output: 2  (Subarrays [1,2] and [3])",
          solution:
            "def subarraySum(nums: List[int], k: int) -> int:\n    sm = 0\n    d = {}\n    n = len(nums)\n    cnt = 0\n    for i in range(n):\n        sm = sm + nums[i]\n        if sm == k:\n            cnt += 1\n        if sm - k in d:\n            cnt = cnt + d[sm - k]\n        if sm not in d:\n            d[sm] = 1\n        else:\n            d[sm] += 1\n    return cnt",
        },
      ],
      "Lec 3 : Hard": [
        {
          id: "pascals-triangle",
          title: "Pascal's Triangle",
          content:
            "Given a non-negative integer numRows, generate the first numRows of Pascal's triangle.\n\nExample 1:\n- Input: numRows = 5\n- Output: [[1], [1,1], [1,2,1], [1,3,3,1], [1,4,6,4,1]]\n\nExample 2:\n- Input: numRows = 1\n- Output: [[1]]",
          solution:
            "def generate_pascals_triangle(numRows):\n    triangle = []\n    for i in range(numRows):\n        row = [1] * (i+1)\n        for j in range(1, i):\n            row[j] = triangle[i-1][j-1] + triangle[i-1][j]\n        triangle.append(row)\n    return triangle",
        },
        {
          id: "majority-element-greater-n-over-3",
          title: "Majority Element (> n/3 times)",
          content:
            "Given an integer array of size n, find all elements that appear more than ⌊n/3⌋ times. Solutions should run in linear time and in O(1) space.\n\nExample 1:\n- Input: [3, 2, 3]\n- Output: [3]\n\nExample 2:\n- Input: [1, 1, 1, 3, 3, 2, 2, 2]\n- Output: [1, 2]",
          solution:
            "def majority_element_n3(nums):\n    if not nums:\n        return []\n    # Boyer-Moore majority vote (extended)\n    candidate1 = candidate2 = None\n    count1 = count2 = 0\n    for num in nums:\n        if candidate1 == num:\n            count1 += 1\n        elif candidate2 == num:\n            count2 += 1\n        elif count1 == 0:\n            candidate1, count1 = num, 1\n        elif count2 == 0:\n            candidate2, count2 = num, 1\n        else:\n            count1 -= 1\n            count2 -= 1\n    # Verify candidates\n    result = []\n    for c in (candidate1, candidate2):\n        if c is not None and nums.count(c) > len(nums) // 3:\n            result.append(c)\n    return result",
        },
        {
          id: "three-sum-problem",
          title: "3-Sum Problem",
          content:
            "Given an array of integers, find all unique triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, j != k, and nums[i] + nums[j] + nums[k] = 0.\n\nExample 1:\n- Input: [-1, 0, 1, 2, -1, -4]\n- Output: [[-1, -1, 2], [-1, 0, 1]]\n\nExample 2:\n- Input: [0, 0, 0]\n- Output: [[0, 0, 0]]",
          solution:
            "def three_sum(nums):\n    nums.sort()\n    result = []\n    n = len(nums)\n    for i in range(n-2):\n        if i > 0 and nums[i] == nums[i-1]:\n            continue\n        left, right = i+1, n-1\n        while left < right:\n            s = nums[i] + nums[left] + nums[right]\n            if s == 0:\n                result.append([nums[i], nums[left], nums[right]])\n                while left < right and nums[left] == nums[left+1]:\n                    left += 1\n                while left < right and nums[right] == nums[right-1]:\n                    right -= 1\n                left += 1\n                right -= 1\n            elif s < 0:\n                left += 1\n            else:\n                right -= 1\n    return result",
        },
        {
          id: "four-sum-problem",
          title: "4-Sum Problem",
          content:
            "Given an array of integers nums and a target value, find all unique quadruplets [nums[a], nums[b], nums[c], nums[d]] such that they sum up to the target.\n\nExample 1:\n- Input: nums = [1, 0, -1, 0, -2, 2], target = 0\n- Output: [[-2, -1, 1, 2], [-2, 0, 0, 2], [-1, 0, 0, 1]]\n\nExample 2:\n- Input: nums = [2, 2, 2, 2, 2], target = 8\n- Output: [[2, 2, 2, 2]]",
          solution:
            "def four_sum(nums, target):\n    nums.sort()\n    n = len(nums)\n    result = []\n    for i in range(n-3):\n        if i > 0 and nums[i] == nums[i-1]:\n            continue\n        for j in range(i+1, n-2):\n            if j > i+1 and nums[j] == nums[j-1]:\n                continue\n            left, right = j+1, n-1\n            while left < right:\n                total = nums[i] + nums[j] + nums[left] + nums[right]\n                if total == target:\n                    result.append([nums[i], nums[j], nums[left], nums[right]])\n                    while left < right and nums[left] == nums[left+1]:\n                        left += 1\n                    while left < right and nums[right] == nums[right-1]:\n                        right -= 1\n                    left += 1\n                    right -= 1\n                elif total < target:\n                    left += 1\n                else:\n                    right -= 1\n    return result",
        },
        {
          id: "largest-subarray-with-zero-sum",
          title: "Largest Subarray with 0 Sum",
          content:
            "Given an array of integers (that may include both positive and negative), find the length of the largest subarray with sum equal to 0.\n\nExample 1:\n- Input: [15, -2, 2, -8, 1, 7, 10, 23]\n- Output: 5  (Explanation: The subarray [-2, 2, -8, 1, 7] has sum 0 and length 5)\n\nExample 2:\n- Input: [1, 2, 3]\n- Output: 0",
          solution:
            "def maxLen(arr):\n    sm = 0\n    mx = 0\n    d = {}\n    for i in range(len(arr)):\n        sm = sm + arr[i]\n        if sm == 0:\n            mx = i + 1\n        else:\n            if sm not in d:\n                d[sm] = i\n            else:\n                mx = max(mx, i - d[sm])\n    return mx",
        },
        {
          id: "count-subarrays-with-xor-k",
          title: "Count Number of Subarrays with Given XOR K",
          content:
            "Given an array of integers and an integer K, count the number of subarrays whose XOR equals K.\n\nExample 1:\n- Input: [4, 2, 2, 6, 4], K = 6\n- Output: 4  (Subarrays: [4,2], [4,2,2,6], [2,6,4], [6])\n\nExample 2:\n- Input: [5, 6, 7, 8, 9], K = 5\n- Output: 2  (Subarrays: [5], [5,6,7,8,9])",
          solution:
            "def count_subarrays_with_xor(arr, k):\n    count = 0\n    prefix_xor = 0\n    freq = {0: 1}\n    for num in arr:\n        prefix_xor ^= num\n        required = prefix_xor ^ k\n        count += freq.get(required, 0)\n        freq[prefix_xor] = freq.get(prefix_xor, 0) + 1\n    return count",
        },
        {
          id: "merge-overlapping-intervals",
          title: "Merge Overlapping Intervals",
          content:
            "Given a collection of intervals, merge all overlapping intervals and return the merged intervals.\n\nExample 1:\n- Input: [[1, 3], [2, 6], [8, 10], [15, 18]]\n- Output: [[1, 6], [8, 10], [15, 18]]\n\nExample 2:\n- Input: [[1, 4], [4, 5]]\n- Output: [[1, 5]]",
          solution:
            "def merge(intervals: List[List[int]]) -> List[List[int]]:\n    intervals.sort()\n    ans = []\n    for i in range(len(intervals)):\n        if i == 0 or not ans:\n            ans.append(intervals[i])\n            continue\n        last = ans[-1]\n        if last[-1] < intervals[i][0]:\n            ans.append(intervals[i])\n        else:\n            last[-1] = max(last[-1], intervals[i][-1])\n    return ans",
        },
        {
          id: "merge-two-sorted-arrays-without-extra-space",
          title: "Merge Two Sorted Arrays Without Extra Space",
          content:
            "Given two sorted arrays arr1 and arr2 of sizes m and n respectively, merge them so that arr1 contains the first m smallest elements and arr2 contains the remaining n elements, all in sorted order, without using extra space.\n\nExample 1:\n- Input: arr1 = [1, 3, 5], arr2 = [2, 4, 6]\n- Output: arr1 = [1, 2, 3], arr2 = [4, 5, 6]\n\nExample 2:\n- Input: arr1 = [1, 5, 9], arr2 = [2, 3, 10]\n- Output: arr1 = [1, 2, 3], arr2 = [5, 9, 10]",
          solution:
            "def merge(arr1: List[int], m: int, arr2: List[int], n: int) -> None:\n    p1, p2, p = m - 1, n - 1, m + n - 1\n    while p1 >= 0 and p2 >= 0:\n        if arr1[p1] > arr2[p2]:\n            arr1[p] = arr1[p1]\n            p1 -= 1\n        else:\n            arr1[p] = arr2[p2]\n            p2 -= 1\n        p -= 1\n    while p2 >= 0:\n        arr1[p] = arr2[p2]\n        p2 -= 1\n        p -= 1",
        },
        {
          id: "find-repeating-missing-number",
          title: "Find the Repeating and Missing Number",
          content:
            "Given an array of size n containing numbers from 1 to n with exactly one number missing and one number repeated, find the repeating and missing numbers.\n\nExample 1:\n- Input: [3, 1, 3]\n- Output: (repeating = 3, missing = 2)\n\nExample 2:\n- Input: [4, 3, 6, 2, 1, 1]\n- Output: (repeating = 1, missing = 5)",
          solution:
            "def findTwoElement(arr):\n    n = len(arr)\n    sn = (n * (n + 1)) // 2\n    s2n = (n * (n + 1) * (2 * n + 1)) // 6\n\n    s1 = sum(arr)\n    s2 = 0\n    for u in arr:\n        s2 = s2 + u ** 2\n\n    s_diff = sn - s1\n    s2_diff = s2n - s2\n\n    tot = s2_diff // s_diff\n    x = (s_diff + tot) // 2\n    y = tot - x\n    return (y, x)",
        },
        {
          id: "count-inversions",
          title: "Count Inversions",
          content:
            "Given an array, count the number of inversions in the array. An inversion is a pair (i, j) such that i < j and arr[i] > arr[j].\n\nExample 1:\n- Input: [1, 20, 6, 4, 5]\n- Output: 5  (Inversions: (20,6), (20,4), (20,5), (6,4), (6,5))\n\nExample 2:\n- Input: [2, 4, 1, 3, 5]\n- Output: 3  (Inversions: (2,1), (4,1), (4,3))",
          solution:
            "def inversionCount(arr):\n    def merge(arr, l, mid, h):\n        ans = []\n        i = l\n        j = mid + 1\n        cnt = 0\n        while i <= mid and j <= h:\n            if arr[i] <= arr[j]:\n                ans.append(arr[i])\n                i += 1\n            else:\n                ans.append(arr[j])\n                cnt += (mid - i + 1)\n                j += 1\n        while i <= mid:\n            ans.append(arr[i])\n            i += 1\n        while j <= h:\n            ans.append(arr[j])\n            j += 1\n        for k in range(len(ans)):\n            arr[l + k] = ans[k]\n        return cnt\n\n    def mergesort(arr, l, h):\n        cnt = 0\n        if l == h:\n            return cnt\n        mid = (l + h) // 2\n        cnt += mergesort(arr, l, mid)\n        cnt += mergesort(arr, mid + 1, h)\n        cnt += merge(arr, l, mid, h)\n        return cnt\n\n    return mergesort(arr, 0, len(arr) - 1)",
        },
        {
          id: "reverse-pairs",
          title: "Reverse Pairs",
          content:
            "Given an array, count the number of reverse pairs. A reverse pair is a pair (i, j) such that i < j and nums[i] > 2 * nums[j].\n\nExample 1:\n- Input: [1, 3, 2, 3, 1]\n- Output: 2\n\nExample 2:\n- Input: [2, 4, 3, 5, 1]\n- Output: 3",
          solution:
            "def reversePairs(arr: List[int]) -> int:\n    def merge(arr, l, mid, h):\n        cnt = 0\n        j = mid + 1\n        for i in range(l, mid + 1):\n            while j <= h and arr[i] > 2 * arr[j]:\n                j += 1\n            cnt += (j - (mid + 1))\n\n        i = l\n        j = mid + 1\n        ans = []\n        while i <= mid and j <= h:\n            if arr[i] <= arr[j]:\n                ans.append(arr[i])\n                i += 1\n            else:\n                ans.append(arr[j])\n                j += 1\n\n        while i <= mid:\n            ans.append(arr[i])\n            i += 1\n        while j <= h:\n            ans.append(arr[j])\n            j += 1\n\n        for k in range(len(ans)):\n            arr[l + k] = ans[k]\n        return cnt\n\n    def mergesort(arr, l, h):\n        if l >= h:\n            return 0\n        mid = (l + h) // 2\n        cnt = mergesort(arr, l, mid)\n        cnt += mergesort(arr, mid + 1, h)\n        cnt += merge(arr, l, mid, h)\n        return cnt\n\n    return mergesort(arr, 0, len(arr) - 1)",
        },
        {
          id: "maximum-product-subarray",
          title: "Maximum Product Subarray",
          content:
            "Find the contiguous subarray within an array (containing at least one number) which has the largest product, and return that product.\n\nExample 1:\n- Input: [2, 3, -2, 4]\n- Output: 6  (The subarray [2, 3] has product 6)\n\nExample 2:\n- Input: [-2, 0, -1]\n- Output: 0  (The result is 0 because [-2], [-1] have products -2, -1 and we get 0 by taking [0])",
          solution:
            "def maxProduct(nums: List[int]) -> int:\n    prefix = 1\n    suffix = 1\n    mx = float('-inf')\n    n = len(nums)\n    for i in range(n):\n        prefix *= nums[i]\n        mx = max(mx, prefix)\n        if prefix == 0:\n            prefix = 1\n    for i in range(n - 1, -1, -1):\n        suffix *= nums[i]\n        mx = max(mx, suffix)\n        if suffix == 0:\n            suffix = 1\n    return mx",
        },
      ],
    },
  },
  {
    stepTitle: "Step 2: Binary Search",
    sections: {
      "Lec 1: BS on 1D Arrays": [
        {
          id: "binary-search-x",
          title: "Binary Search to Find X in a Sorted Array",
          content:
            "Given a sorted array and a target value X, return the index if the target is found. If not, return -1.",
          solution: `def binary_search(arr, x):
    low, high = 0, len(arr) - 1
    while low <= high:
        mid = (low + high) // 2
        if arr[mid] == x:
            return mid
        elif arr[mid] < x:
            low = mid + 1
        else:
            high = mid - 1
    return -1`,
        },
        {
          id: "lower-bound",
          title: "Implement Lower Bound (First Element Not Less Than X)",
          content:
            "Return the index of the first element in a sorted array which is not less than X.",
          solution:
            "def lowerBound(arr, target):\n    l = 0\n    n = len(arr)\n    h = n - 1\n    ans = -1\n    while l <= h:\n        mid = (l + h) // 2\n        if arr[mid] < target:\n            ans = l\n            l = mid + 1\n        else:\n            h = mid - 1\n    return l",
        },
        {
          id: "upper-bound",
          title: "Implement Upper Bound (First Element Greater Than X)",
          content:
            "Return the index of the first element in a sorted array which is strictly greater than X.",
          solution:
            "def upperBound(arr, target):\n    l = 0\n    n = len(arr)\n    h = n - 1\n    ans = -1\n    while l <= h:\n        mid = (l + h) // 2\n        if arr[mid] <= target:\n            ans = l\n            l = mid + 1\n        else:\n            h = mid - 1\n    return l",
        },
        {
          id: "search-insert-position",
          title: "Search Insert Position",
          content:
            "Return index if target found. If not, return the index where it would be inserted in order.",
          solution:
            "def searchInsert(arr: List[int], target: int) -> int:\n    def lower(arr, l, h, k):\n        while l <= h:\n            mid = (l + h) // 2\n            if arr[mid] >= k:\n                h = mid - 1\n            else:\n                l = mid + 1\n        return l\n    return lower(arr, 0, len(arr) - 1, target)",
        },
        {
          id: "floor-ceil",
          title: "Find Floor and Ceil in a Sorted Array",
          content:
            "Find the floor (≤ x) and ceil (≥ x) of a number in a sorted array.",
          solution: `def floor_ceil(arr, x):
    floor, ceil = -1, -1
    low, high = 0, len(arr) - 1
    while low <= high:
        mid = (low + high) // 2
        if arr[mid] == x:
            return x, x
        elif arr[mid] < x:
            floor = arr[mid]
            low = mid + 1
        else:
            ceil = arr[mid]
            high = mid - 1
    return floor, ceil`,
        },
        {
          id: "first-last-occurrence",
          title: "First and Last Occurrence of a Number",
          content:
            "Find the first and last occurrence of a number in a sorted array.",
          solution:
            "def searchRange(arr: List[int], k: int) -> List[int]:\n    def lower(arr, l, h, k):\n        while l <= h:\n            mid = (h + l) // 2\n            if arr[mid] >= k:\n                h = mid - 1\n            else:\n                l = mid + 1\n        return l\n\n    def upper(arr, l, h, k):\n        while l <= h:\n            mid = (h + l) // 2\n            if arr[mid] > k:\n                h = mid - 1\n            else:\n                l = mid + 1\n        return l\n\n    if not arr:\n        return [-1, -1]\n\n    n = len(arr)\n    l = lower(arr, 0, n - 1, k)\n    u = upper(arr, 0, n - 1, k) - 1\n    if l <= u and l < n and arr[l] == k and arr[u] == k:\n        return [l, u]\n    return [-1, -1]",
        },
        {
          id: "count-occurrences",
          title:
            "Count Occurrences of a Number in a Sorted Array with Duplicates",
          content: `Given a sorted array with duplicates, count how many times a given number appears.
Input: arr = [1, 2, 2, 2, 3], target = 2
Output: 3

Input: arr = [5, 7, 7, 8, 8, 10], target = 6
Output: 0`,
          solution:
            "def countFreq(arr, target):\n    def lower(arr, l, h, k):\n        while l <= h:\n            mid = (h + l) // 2\n            if arr[mid] >= k:\n                h = mid - 1\n            else:\n                l = mid + 1\n        return l\n\n    def upper(arr, l, h, k):\n        while l <= h:\n            mid = (h + l) // 2\n            if arr[mid] > k:\n                h = mid - 1\n            else:\n                l = mid + 1\n        return l\n\n    n = len(arr)\n    l = lower(arr, 0, n - 1, target)\n    u = upper(arr, 0, n - 1, target) - 1\n    return u - l + 1",
        },
        {
          id: "search-rotated-array-1",
          title: "Search in Rotated Sorted Array I",
          content: `Search for a given number in a rotated sorted array with no duplicates.
Input: arr = [4,5,6,7,0,1,2], target = 0
Output: 4

Input: arr = [4,5,6,7,0,1,2], target = 3
Output: -1`,
          solution: `def search_rotated_array(arr, target):
    low, high = 0, len(arr) - 1
    while low <= high:
        mid = (low + high) // 2
        if arr[mid] == target:
            return mid
        if arr[low] <= arr[mid]:
            if arr[low] <= target < arr[mid]:
                high = mid - 1
            else:
                low = mid + 1
        else:
            if arr[mid] < target <= arr[high]:
                low = mid + 1
            else:
                high = mid - 1
    return -1`,
        },
        {
          id: "search-rotated-array-2",
          title: "Search in Rotated Sorted Array II",
          content: `Search for a given number in a rotated sorted array that may contain duplicates.
Input: arr = [2,5,6,0,0,1,2], target = 0
Output: True

Input: arr = [2,5,6,0,0,1,2], target = 3
Output: False`,
          solution: `def search_rotated_array_ii(arr, target):
    low, high = 0, len(arr) - 1
    while low <= high:
        mid = (low + high) // 2
        if arr[mid] == target:
            return True
        if arr[low] == arr[mid] == arr[high]:
            low += 1
            high -= 1
        elif arr[low] <= arr[mid]:
            if arr[low] <= target < arr[mid]:
                high = mid - 1
            else:
                low = mid + 1
        else:
            if arr[mid] < target <= arr[high]:
                low = mid + 1
            else:
                high = mid - 1
    return False`,
        },
        {
          id: "find-min-rotated",
          title: "Find Minimum in Rotated Sorted Array",
          content: `Find the minimum element in a rotated sorted array with no duplicates.
Input: arr = [3,4,5,1,2]
Output: 1

Input: arr = [4,5,6,7,0,1,2]
Output: 0`,
          solution: `def find_min_in_rotated(arr):
    low, high = 0, len(arr) - 1
    while low < high:
        mid = (low + high) // 2
        if arr[mid] > arr[high]:
            low = mid + 1
        else:
            high = mid
    return arr[low]`,
        },
        {
          id: "rotation-count",
          title: "Find Out How Many Times an Array Has Been Rotated",
          content: `Given a rotated sorted array, find the index of the minimum element, which is the number of rotations.
Input: arr = [15, 18, 2, 3, 6, 12]
Output: 2

Input: arr = [7, 9, 11, 12, 5]
Output: 4`,
          solution:
            "def findKRotation(arr):\n    l = 0\n    h = len(arr) - 1\n    while l < h:\n        mid = (h + l) // 2\n        if arr[mid] > arr[h]:\n            l = mid + 1\n        else:\n            h = mid\n    return l",
        },
        {
          id: "single-element-sorted",
          title: "Single Element in a Sorted Array",
          content: `In a sorted array where every element appears twice except one, find the single element.
Input: arr = [1,1,2,3,3,4,4,8,8]
Output: 2

Input: arr = [3,3,7,7,10,11,11]
Output: 10`,
          solution:
            "def singleNonDuplicate(arr):\n    l = 0\n    n = len(arr)\n    h = n - 1\n    if n <= 1: return arr[0]\n    if arr[0] != arr[1]: return arr[0]\n    if arr[n - 1] != arr[n - 2]: return arr[n - 1]\n\n    while l <= h:\n        mid = (l + h) // 2\n        if arr[mid] != arr[mid - 1] and arr[mid] != arr[mid + 1]:\n            return arr[mid]\n        elif arr[mid] == arr[mid - 1]:\n            if mid % 2 == 1:\n                l = mid + 1\n            else:\n                h = mid - 2\n        elif arr[mid] == arr[mid + 1]:\n            if mid % 2 == 0:\n                l = mid + 2\n            else:\n                h = mid - 1\n\n    return -1",
        },
        {
          id: "find-peak",
          title: "Find Peak Element",
          content: `Find an element in the array which is strictly greater than its neighbors.
Input: arr = [1,2,3,1]
Output: 2 (index of 3)

Input: arr = [1,2,1,3,5,6,4]
Output: 1 or 5`,
          solution:
            "def findPeakElement(nums):\n    l = 0\n    h = len(nums) - 1\n    if h == 0: return 0\n    if nums[0] > nums[1]: return 0\n    if nums[h] > nums[h - 1]: return h\n\n    while l <= h:\n        mid = (h + l) // 2\n        if nums[mid] > nums[mid - 1] and nums[mid] > nums[mid + 1]:\n            return mid\n        elif nums[mid] > nums[mid + 1]:\n            h = mid - 1\n        else:\n            l = mid + 1",
        },
      ],
      "Lec 2: BS on Answers": [
        {
          id: "sqrt-logn",
          title: "Square Root of a Number using Binary Search",
          content:
            "Return the integer part of square root of a number N using binary search.",
          solution: `def sqrt_binary(n):
    low, high, ans = 0, n, -1
    while low <= high:
        mid = (low + high) // 2
        if mid * mid <= n:
            ans = mid
            low = mid + 1
        else:
            high = mid - 1
    return ans`,
        },
        {
          id: "nth-root",
          title: "Nth Root of a Number using Binary Search",
          content:
            "Find the Nth root of a number using binary search (integer result).",
          solution: `def nth_root(n, m):
    def power(x, n):
        res = 1
        for _ in range(n):
            res *= x
            if res > m: return res
        return res

    low, high = 1, m
    while low <= high:
        mid = (low + high) // 2
        val = power(mid, n)
        if val == m:
            return mid
        elif val < m:
            low = mid + 1
        else:
            high = mid - 1
    return -1`,
        },
        {
          id: "koko-bananas",
          title: "Koko Eating Bananas",
          content:
            "Koko loves bananas and can eat at most H hours. Find the minimum eating speed K such that she can finish all bananas.",
          solution:
            "def minEatingSpeed(piles: List[int], t: int) -> int:\n    def possible(piles, m, t):\n        cnt = 0\n        for i in piles:\n            cnt = cnt + math.ceil(i / m)\n            if cnt > t:\n                return 0\n        return 1\n\n    l = 1\n    h = max(piles)\n    ans = -1\n    while l <= h:\n        mid = (l + h) // 2\n        if possible(piles, mid, t):\n            ans = mid\n            h = mid - 1\n        else:\n            l = mid + 1\n    return ans",
        },
        {
          id: "min-days-bouquets",
          title: "Minimum Days to Make M Bouquets",
          content:
            "Given a bloomDay array, find minimum days required to make m bouquets of k flowers in a row.",
          solution:
            "def minDays(arr: List[int], m: int, k: int) -> int:\n    def possible(arr, mid, m, k):\n        cnt = 0\n        tot = 0\n        for i in range(len(arr)):\n            if arr[i] <= mid:\n                cnt += 1\n                if cnt >= k:\n                    tot += 1\n                    cnt = cnt % k\n            else:\n                cnt = 0\n        return tot >= m\n\n    l = min(arr)\n    h = max(arr)\n    ans = -1\n    while l <= h:\n        mid = (l + h) // 2\n        if possible(arr, mid, m, k):\n            ans = mid\n            h = mid - 1\n        else:\n            l = mid + 1\n    return ans",
        },
        {
          id: "smallest-divisor",
          title: "Find the Smallest Divisor Given Threshold",
          content:
            "Find the smallest divisor such that the sum of the result of dividing elements by the divisor is less than or equal to threshold.",
          solution:
            "def smallestDivisor(nums: List[int], threshold: int) -> int:\n    def possible(arr, mid, k):\n        sm = 0\n        for i in arr:\n            sm += math.ceil(i / mid)\n        return sm <= k\n\n    l = 1\n    h = max(nums)\n    ans = -1\n    while l <= h:\n        mid = (l + h) // 2\n        if possible(nums, mid, threshold):\n            ans = mid\n            h = mid - 1\n        else:\n            l = mid + 1\n    return ans",
        },
        {
          id: "ship-packages",
          title: "Capacity to Ship Packages Within D Days",
          content:
            "Find the least weight capacity of a ship that will result in all packages being shipped within D days.",
          solution:
            "def shipWithinDays(w: List[int], days: int) -> int:\n    def possible(arr, mid, days):\n        tot = 1\n        sm = 0\n        for i in arr:\n            sm += i\n            if sm > mid:\n                tot += 1\n                sm = i\n        return tot <= days\n\n    l = max(w)\n    h = sum(w)\n    ans = -1\n    while l <= h:\n        mid = (h + l) // 2\n        if possible(w, mid, days):\n            ans = mid\n            h = mid - 1\n        else:\n            l = mid + 1\n    return ans",
        },
        {
          id: "kth-missing-positive",
          title: "Kth Missing Positive Number",
          content: `Given an array arr of sorted positive integers and an integer k, return the kth missing positive number.
Input: arr = [2,3,4,7,11], k = 5
Output: 9

Input: arr = [1,2,3,4], k = 2
Output: 6`,
          solution:
            "def findKthPositive(arr: List[int], k: int) -> int:\n    for i in arr:\n        if i <= k:\n            k += 1\n    return k",
        },
        {
          id: "aggressive-cows",
          title: "Aggressive Cows",
          content: `You are given an array of stall positions and the number of cows. Place the cows in stalls such that the minimum distance between any two of them is maximized.
Input: positions = [1, 2, 4, 8, 9], cows = 3
Output: 3`,
          solution:
            "def aggressiveCows(stalls, k):\n    def possible(stalls, mid, k):\n        prev = stalls[0]\n        cows = 1\n        for i in range(1, len(stalls)):\n            if stalls[i] - prev >= mid:\n                cows += 1\n                prev = stalls[i]\n        return cows >= k\n\n    stalls.sort()\n    s = 1\n    e = max(stalls)\n    ans = -1\n    while s <= e:\n        mid = (s + e) // 2\n        if possible(stalls, mid, k):\n            ans = mid\n            s = mid + 1\n        else:\n            e = mid - 1\n    return ans",
        },
        {
          id: "book-allocation",
          title: "Book Allocation Problem",
          content: `Allocate books to students so that the maximum number of pages assigned to a student is minimized.
Input: books = [12, 34, 67, 90], students = 2
Output: 113`,
          solution:
            "def findPages(self, arr, k):\n    def check(arr,mid):\n        stu = 1\n        sm = 0\n        for i in arr:\n            if sm + i > mid:\n                sm = i\n                stu += 1\n            else:\n                sm += i\n        return stu\n\n    if k > len(arr): return -1\n    l = max(arr)\n    h = sum(arr)\n    while l <= h:\n        mid = (h + l) // 2\n        if check(arr, mid) > k:\n            l = mid + 1\n        else:\n            h = mid - 1\n    return l",
        },
        {
          id: "split-array-largest-sum",
          title: "Split Array - Largest Sum",
          content: `Split the array into m subarrays such that the largest sum among them is minimized.
Input: nums = [7,2,5,10,8], m = 2
Output: 18`,
          solution:
            "def splitArray(nums, k):\n    def possible(arr, mid, k):\n        sm = 0\n        split = 1\n        for i in arr:\n            sm += i\n            if sm > mid:\n                split += 1\n                sm = i\n        return split <= k\n\n    l = max(nums)\n    h = sum(nums)\n    ans = -1\n    while l <= h:\n        mid = (l + h) // 2\n        if possible(nums, mid, k):\n            ans = mid\n            h = mid - 1\n        else:\n            l = mid + 1\n    return ans",
        },
        {
          id: "painters-partition",
          title: "Painter's Partition Problem",
          content: `Given a list of boards and number of painters, partition the boards among painters to minimize the maximum time taken.
Input: boards = [10, 20, 30, 40], painters = 2
Output: 60`,
          solution:
            "class Solution:\n    def minTime (self, arr, k):\n        def check(arr, mid):\n            sm = 0\n            painter = 1\n            for i in arr:\n                if i + sm > mid:\n                    sm = i\n                    painter += 1\n                else:\n                    sm += i\n            return painter\n\n        if k > len(arr): return -1\n        l = max(arr)\n        h = sum(arr)\n        while l <= h:\n            mid = (h + l) // 2\n            if check(arr, mid) < k:\n                l = mid + 1\n            else:\n                h = mid - 1\n        return l",
        },
        {
          id: "minimize-max-distance-gas-station",
          title: "Minimize Max Distance to Gas Station",
          content: `Place k gas stations to minimize the maximum distance between adjacent stations.
Input: stations = [1,2,3,4,5,6,7,8,9,10], k = 9
Output: 0.5`,
          solution: `def minmax_gas_dist(stations, k):
    def can_place(D):
        count = 0
        for i in range(len(stations) - 1):
            count += int((stations[i+1] - stations[i]) / D)
        return count <= k

    low, high = 0, stations[-1] - stations[0]
    while high - low > 1e-6:
        mid = (low + high) / 2
        if can_place(mid):
            high = mid
        else:
            low = mid
    return high`,
        },
        {
          id: "median-two-sorted-arrays",
          title: "Median of Two Sorted Arrays",
          content: `Find the median of two sorted arrays.
Input: nums1 = [1,3], nums2 = [2]
Output: 2.0`,
          solution: `def find_median_sorted_arrays(nums1, nums2):
    A, B = nums1, nums2
    if len(A) > len(B):
        A, B = B, A
    total = len(A) + len(B)
    half = total // 2

    low, high = 0, len(A)
    while low <= high:
        i = (low + high) // 2
        j = half - i

        Aleft = A[i-1] if i > 0 else float('-inf')
        Aright = A[i] if i < len(A) else float('inf')
        Bleft = B[j-1] if j > 0 else float('-inf')
        Bright = B[j] if j < len(B) else float('inf')

        if Aleft <= Bright and Bleft <= Aright:
            if total % 2:
                return min(Aright, Bright)
            return (max(Aleft, Bleft) + min(Aright, Bright)) / 2
        elif Aleft > Bright:
            high = i - 1
        else:
            low = i + 1`,
        },
        {
          id: "kth-element-two-sorted",
          title: "Kth Element of Two Sorted Arrays",
          content: `Find the kth element in the union of two sorted arrays.
Input: arr1 = [2,3,6,7,9], arr2 = [1,4,8,10], k = 5
Output: 6`,
          solution: `def kth_element(arr1, arr2, k):
    if len(arr1) > len(arr2):
        return kth_element(arr2, arr1, k)

    low, high = max(0, k - len(arr2)), min(len(arr1), k)
    while low <= high:
        cut1 = (low + high) // 2
        cut2 = k - cut1

        l1 = arr1[cut1-1] if cut1 > 0 else float('-inf')
        l2 = arr2[cut2-1] if cut2 > 0 else float('-inf')
        r1 = arr1[cut1] if cut1 < len(arr1) else float('inf')
        r2 = arr2[cut2] if cut2 < len(arr2) else float('inf')

        if l1 <= r2 and l2 <= r1:
            return max(l1, l2)
        elif l1 > r2:
            high = cut1 - 1
        else:
            low = cut1 + 1`,
        },
      ],
      "Lec 3: BS on 2D Arrays": [
        {
          id: "row-with-max-ones",
          title: "Find Row with Maximum Number of 1s",
          content:
            "Given a binary matrix, find the row with the maximum number of 1s.",
          solution: `def row_with_max_ones(matrix):
    max_row, max_count = -1, 0
    for i, row in enumerate(matrix):
        count = sum(row)
        if count > max_count:
            max_count = count
            max_row = i
    return max_row`,
        },
        {
          id: "search-2d-matrix",
          title: "Search in a 2D Matrix",
          content:
            "Search for a target value in an m x n matrix. Matrix has sorted rows and first integer of each row > last integer of previous row.",
          solution: `def search_matrix(matrix, target):
    if not matrix or not matrix[0]:
        return False
    rows, cols = len(matrix), len(matrix[0])
    low, high = 0, rows * cols - 1
    while low <= high:
        mid = (low + high) // 2
        val = matrix[mid // cols][mid % cols]
        if val == target:
            return True
        elif val < target:
            low = mid + 1
        else:
            high = mid - 1
    return False`,
        },
        {
          id: "search-sorted-matrix",
          title: "Search in Row and Column-wise Sorted Matrix",
          content:
            "Search for a target in a matrix sorted row-wise and column-wise.",
          solution: `def search_sorted_matrix(matrix, target):
    if not matrix or not matrix[0]:
        return False
    row, col = 0, len(matrix[0]) - 1
    while row < len(matrix) and col >= 0:
        if matrix[row][col] == target:
            return True
        elif matrix[row][col] < target:
            row += 1
        else:
            col -= 1
    return False`,
        },
        {
          id: "peak-element-2d",
          title: "Find Peak Element in 2D Matrix",
          content:
            "A peak element is one which is not smaller than its neighbors. Find one such element.",
          solution: `def find_peak_2d(matrix):
    rows, cols = len(matrix), len(matrix[0])
    low, high = 0, cols - 1
    while low <= high:
        mid = (low + high) // 2
        max_row = max(range(rows), key=lambda x: matrix[x][mid])
        if (mid == 0 or matrix[max_row][mid] >= matrix[max_row][mid - 1]) and \
           (mid == cols - 1 or matrix[max_row][mid] >= matrix[max_row][mid + 1]):
            return matrix[max_row][mid]
        elif mid > 0 and matrix[max_row][mid - 1] > matrix[max_row][mid]:
            high = mid - 1
        else:
            low = mid + 1`,
        },
        {
          id: "matrix-median",
          title: "Find Median in Row-wise Sorted Matrix",
          content: "Find the median in a row-wise sorted matrix.",
          solution: `def find_median(matrix):
    import bisect
    low, high = 1, int(1e9)
    n = len(matrix)
    m = len(matrix[0])
    while low <= high:
        mid = (low + high) // 2
        count = 0
        for row in matrix:
            count += bisect.bisect_right(row, mid)
        if count <= (n * m) // 2:
            low = mid + 1
        else:
            high = mid - 1
    return low`,
        },
      ],
    },
  },
  {
    stepTitle: "Step 3: Linked List",
    sections: {
      "Lec 1: Learn Singly Linked List": [
        {
          id: "intro-sll",
          title: "Introduction to Singly Linked List",
          content:
            "Understand how a singly linked list is structured with nodes and pointers.",
          solution: `class Node:
  def __init__(self, data):
    self.data = data
    self.next = None`,
        },
        {
          id: "insert-sll",
          title: "Insert a node in LinkedList",
          content: "Insert a new node at the end of the singly linked list.",
          solution: `def insert(head, data):
  new_node = Node(data)
  if not head:
    return new_node
  temp = head
  while temp.next:
    temp = temp.next
  temp.next = new_node
  return head`,
        },
        {
          id: "delete-sll",
          title: "Delete a node in LinkedList",
          content:
            "Delete the first node with a given value from the singly linked list.",
          solution: `def delete(head, key):
  if not head:
    return None
  if head.data == key:
    return head.next
  prev, curr = head, head.next
  while curr:
    if curr.data == key:
      prev.next = curr.next
      return head
    prev, curr = curr, curr.next
  return head`,
        },
        {
          id: "length-sll",
          title: "Find the length of the linked list",
          content: "Return the number of nodes in the linked list.",
          solution: `def getLength(head):
  count = 0
  while head:
    count += 1
    head = head.next
  return count`,
        },
        {
          id: "search-sll",
          title: "Search an element in the linked list",
          content: "Return True if the element exists in the list, else False.",
          solution: `def search(head, key):
  while head:
    if head.data == key:
      return True
    head = head.next
  return False`,
        },
      ],
      "Lec 2: Learn Doubly Linked List": [
        {
          id: "intro-dll",
          title: "Introduction to Doubly Linked List",
          content:
            "Understand how a doubly linked list works with prev and next pointers.",
          solution: `class DLLNode:
  def __init__(self, data):
    self.data = data
    self.prev = None
    self.next = None`,
        },
        {
          id: "insert-dll",
          title: "Insert a node in DLL",
          content: "Insert a new node at the end of a doubly linked list.",
          solution: `def insertDLL(head, data):
  new_node = DLLNode(data)
  if not head:
    return new_node
  temp = head
  while temp.next:
    temp = temp.next
  temp.next = new_node
  new_node.prev = temp
  return head`,
        },
        {
          id: "delete-dll",
          title: "Delete a node in DLL",
          content:
            "Delete the first node with a given value from the doubly linked list.",
          solution: `def deleteDLL(head, key):
  temp = head
  while temp:
    if temp.data == key:
      if temp.prev:
        temp.prev.next = temp.next
      if temp.next:
        temp.next.prev = temp.prev
      if temp == head:
        head = temp.next
      break
    temp = temp.next
  return head`,
        },
        {
          id: "reverse-dll",
          title: "Reverse a Doubly Linked List",
          content: "Reverse a doubly linked list in-place.",
          solution: `def reverseDLL(head):
  if not head:
    return None
  curr = head
  while curr:
    curr.prev, curr.next = curr.next, curr.prev
    if not curr.prev:
      return curr
    curr = curr.prev`,
        },
      ],
      "Lec 3: Problems on Linked List": [
        {
          id: "middle-ll",
          title: "Middle of LinkedList [Tortoise-Hare]",
          content: "Find the middle node using slow and fast pointer approach.",
          solution: `def findMiddle(head):
  slow = fast = head
  while fast and fast.next:
    slow = slow.next
    fast = fast.next.next
  return slow.data`,
        },
        {
          id: "reverse-ll-iterative",
          title: "Reverse a LinkedList [Iterative]",
          content: "Reverse a singly linked list iteratively.",
          solution: `def reverseList(head):
  prev = None
  curr = head
  while curr:
    next_node = curr.next
    curr.next = prev
    prev = curr
    curr = next_node
  return prev`,
        },
        {
          id: "reverse-recursive",
          title: "Reverse a LinkedList [Recursive]",
          content: "Reverse a singly linked list using recursion.",
          solution: `def reverseRecursive(head):
  if not head or not head.next:
    return head
  rest = reverseRecursive(head.next)
  head.next.next = head
  head.next = None
  return rest`,
        },
        {
          id: "detect-loop",
          title: "Detect a loop in LinkedList",
          content:
            "Detect whether a cycle exists using Floyd's cycle detection.",
          solution: `def hasCycle(head):
  slow = fast = head
  while fast and fast.next:
    slow = slow.next
    fast = fast.next.next
    if slow == fast:
      return True
  return False`,
        },
        {
          id: "start-of-loop",
          title: "Find the starting point of the loop",
          content:
            "Find the node where the cycle begins using Floyd’s algorithm.",
          solution: `def detectCycleStart(head):
  slow = fast = head
  while fast and fast.next:
    slow = slow.next
    fast = fast.next.next
    if slow == fast:
      break
  else:
    return None
  slow = head
  while slow != fast:
    slow = slow.next
    fast = fast.next
  return slow`,
        },
        {
          id: "length-of-loop",
          title: "Length of Loop in Linked List",
          content: `Detect if a cycle exists in the linked list and find the length of the loop.`,
          solution: `def length_of_loop(head):
    slow = fast = head
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
        if slow == fast:
            count = 1
            fast = fast.next
            while slow != fast:
                fast = fast.next
                count += 1
            return count
    return 0`,
        },
        {
          id: "palindrome-linked-list",
          title: "Check if Linked List is a Palindrome",
          content: `Check whether the given linked list is a palindrome.`,
          solution: `def is_palindrome(head):
    vals = []
    while head:
        vals.append(head.val)
        head = head.next
    return vals == vals[::-1]`,
        },
        {
          id: "segregate-odd-even",
          title: "Segregate Odd and Even Nodes in Linked List",
          content: `Rearrange the linked list so that all odd positioned nodes are before even positioned nodes.`,
          solution: `def segregate_odd_even(head):
    if not head:
        return None
    odd = head
    even = head.next
    even_head = even
    while even and even.next:
        odd.next = even.next
        odd = odd.next
        even.next = odd.next
        even = even.next
    odd.next = even_head
    return head`,
        },
        {
          id: "remove-nth-node",
          title: "Remove Nth Node from the Back of the Linked List",
          content: `Remove the nth node from the end of the linked list.`,
          solution:
            "def removeNthFromEnd(self, head: Optional[ListNode], n: int) -> Optional[ListNode]:\n    slow = head\n    fast = head\n    for o in range(n):\n        fast = fast.next\n    if not fast:\n        return head.next\n    while fast.next:\n        slow = slow.next\n        fast = fast.next\n    slow.next = slow.next.next\n    return head",
        },
        {
          id: "delete-middle-node",
          title: "Delete the Middle Node of Linked List",
          content: `Delete the middle node of a linked list.`,
          solution: `def delete_middle(head):
    if not head or not head.next:
        return None
    slow = head
    fast = head
    prev = None
    while fast and fast.next:
        prev = slow
        slow = slow.next
        fast = fast.next.next
    prev.next = slow.next
    return head`,
        },
        {
          id: "sort-linked-list",
          title: "Sort Linked List",
          content: `Sort a linked list using merge sort.`,
          solution: `def sort_list(head):
    if not head or not head.next:
        return head
    slow, fast = head, head.next
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
    mid = slow.next
    slow.next = None
    left = sort_list(head)
    right = sort_list(mid)
    return merge(left, right)

def merge(l1, l2):
    dummy = ListNode()
    curr = dummy
    while l1 and l2:
        if l1.val < l2.val:
            curr.next = l1
            l1 = l1.next
        else:
            curr.next = l2
            l2 = l2.next
        curr = curr.next
    curr.next = l1 or l2
    return dummy.next`,
        },
        {
          id: "sort-012-list",
          title: "Sort a Linked List of 0's, 1's, and 2's by Changing Links",
          content: `Sort a linked list of 0s, 1s and 2s without counting them, just changing links.`,
          solution: `def sort_012_list(head):
    zeroD = zero = ListNode(0)
    oneD = one = ListNode(0)
    twoD = two = ListNode(0)
    while head:
        if head.val == 0:
            zero.next = head
            zero = zero.next
        elif head.val == 1:
            one.next = head
            one = one.next
        else:
            two.next = head
            two = two.next
        head = head.next
    zero.next = oneD.next if oneD.next else twoD.next
    one.next = twoD.next
    two.next = None
    return zeroD.next`,
        },
        {
          id: "intersection-point-y",
          title: "Find the Intersection Point of Y Linked Lists",
          content: `Find the node at which two linked lists intersect.`,
          solution: `def get_intersection_node(headA, headB):
    a, b = headA, headB
    while a != b:
        a = a.next if a else headB
        b = b.next if b else headA
    return a`,
        },
        {
          id: "add-one-linked-list",
          title: "Add 1 to a Number Represented by Linked List",
          content: `Add one to a number represented by a linked list.`,
          solution: `def add_one(head):
    def reverse(node):
        prev = None
        while node:
            next_node = node.next
            node.next = prev
            prev = node
            node = next_node
        return prev

    head = reverse(head)
    curr = head
    carry = 1
    while curr:
        curr.val += carry
        if curr.val < 10:
            carry = 0
            break
        curr.val = 0
        if not curr.next:
            curr.next = ListNode(0)
        curr = curr.next
    return reverse(head)`,
        },
        {
          id: "add-two-numbers",
          title: "Add 2 Numbers Represented by Linked Lists",
          content: `Add two numbers represented by two linked lists.`,
          solution: `def add_two_numbers(l1, l2):
    dummy = ListNode()
    current = dummy
    carry = 0
    while l1 or l2 or carry:
        val1 = l1.val if l1 else 0
        val2 = l2.val if l2 else 0
        total = val1 + val2 + carry
        carry = total // 10
        current.next = ListNode(total % 10)
        current = current.next
        if l1:
            l1 = l1.next
        if l2:
            l2 = l2.next
    return dummy.next`,
        },
      ],
      "Lec 4 : Hard Problems": [
        {
          id: "reverse-in-k-group",
          title: "Reverse Linked List in Group of Given Size K",
          content: `Reverse nodes of a linked list in groups of size K. If the number of nodes is not a multiple of K, leave the last group as is.`,
          solution:
            "def reverseKGroup(self, head: Optional[ListNode], k: int) -> Optional[ListNode]:\n    def length(head):\n        cnt = 0\n        while head:\n            cnt +=1 \n            head = head.next\n        return cnt\n\n    def reverse(start,end):\n        prev = None\n        while start!=end:\n            nd = start.next\n            start.next = prev\n            prev = start\n            start = nd\n        return prev\n\n    LL = ListNode()\n    LL.next = head\n    curr = LL\n    len = length(head)\n    for i in range(len//k):\n        start = curr.next\n        end = start\n        for i in range(k):\n            end = end.next\n        rev_head = reverse(start,end)\n        curr.next = rev_head\n        start.next = end\n        curr = start\n    return LL.next",
        },
        {
          id: "rotate-linked-list",
          title: "Rotate a Linked List",
          content: `Rotate a linked list to the right by k places.`,
          solution: `def rotate_right(head, k):
    if not head or not head.next or k == 0:
        return head
    
    length = 1
    tail = head
    while tail.next:
        tail = tail.next
        length += 1

    k = k % length
    if k == 0:
        return head

    tail.next = head
    steps_to_new_head = length - k
    new_tail = tail
    while steps_to_new_head:
        new_tail = new_tail.next
        steps_to_new_head -= 1
    head = new_tail.next
    new_tail.next = None
    return head`,
        },
        {
          id: "flatten-linked-list",
          title: "Flattening of a Linked List",
          content: `Flatten a multi-level linked list where each node may have a child pointer to another linked list.`,
          solution: `def flatten(head):
    if not head:
        return None

    stack = [head]
    prev = None
    while stack:
        curr = stack.pop()
        if prev:
            prev.next = curr
        while curr:
            if curr.child:
                if curr.next:
                    stack.append(curr.next)
                curr.next = curr.child
                curr.child = None
            prev = curr
            curr = curr.next
    return head`,
        },
        {
          id: "clone-random-list",
          title: "Clone a Linked List with Random and Next Pointer",
          content: `Clone a linked list where each node has a next and a random pointer.`,
          solution: `def copy_random_list(head):
    if not head:
        return None

    curr = head
    while curr:
        new_node = ListNode(curr.val)
        new_node.next = curr.next
        curr.next = new_node
        curr = new_node.next

    curr = head
    while curr:
        if curr.random:
            curr.next.random = curr.random.next
        curr = curr.next.next

    curr = head
    copy_head = head.next
    while curr:
        copy = curr.next
        curr.next = copy.next
        if copy.next:
            copy.next = copy.next.next
        curr = curr.next
    return copy_head`,
        },
      ],
    },
  },
  {
    stepTitle: "Step 4: Sliding Window",
    sections: {
      "Lec 1: Medium Problem": [
        {
          id: "longest-substring-wo-repeat",
          title: "Longest Substring Without Repeating Characters",
          content:
            "Given a string, find the length of the longest substring without repeating characters.",
          solution:
            "def lengthOfLongestSubstring(s: str) -> int:\n    d = defaultdict(int)\n    r = 0\n    l = 0\n    n = len(s)\n    mx = 0\n    while r < n:\n        d[s[r]] += 1\n        while d[s[r]] > 1:\n            d[s[l]] -= 1\n            if d[s[l]] == 0:\n                del d[s[l]]\n            l += 1\n        mx = max(mx, r - l + 1)\n        r += 1\n    return mx",
        },
        {
          id: "max-consecutive-ones-iii",
          title: "Max Consecutive Ones III",
          content:
            "Given a binary array and an integer k, return the maximum number of consecutive 1's with at most k 0's flipped.",
          solution:
            "def longestOnes(nums: List[int], k: int) -> int:\n    l = 0\n    r = 0\n    mx = 0\n    zero = 0\n    n = len(nums)\n    while r < n:\n        if nums[r] == 0:\n            zero += 1\n        while zero > k:\n            if nums[l] == 0:\n                zero -= 1\n            l += 1\n        mx = max(mx, r - l + 1)\n        r += 1\n    return mx",
        },
        {
          id: "fruit-into-baskets",
          title: "Fruit Into Baskets",
          content:
            "You are given an array of fruits. Return the length of the longest subarray with at most two distinct fruits.",
          solution: `def totalFruit(fruits):
  from collections import defaultdict
  count = defaultdict(int)
  l = max_len = 0
  for r in range(len(fruits)):
    count[fruits[r]] += 1
    while len(count) > 2:
      count[fruits[l]] -= 1
      if count[fruits[l]] == 0:
        del count[fruits[l]]
      l += 1
    max_len = max(max_len, r - l + 1)
  return max_len`,
        },
        {
          id: "longest-repeating-char-replace",
          title: "Longest Repeating Character Replacement",
          content:
            "Return the length of the longest substring where you can replace at most k characters to make all characters the same.",
          solution:
            "def characterReplacement(s: str, k: int) -> int:\n    mx = 0\n    fr = 0\n    d = {}\n    l = 0\n    for i in range(len(s)):\n        if s[i] in d:\n            d[s[i]] += 1\n        else:\n            d[s[i]] = 1\n\n        fr = max(fr, d[s[i]])\n        if (i - l + 1) - fr > k:\n            d[s[l]] -= 1\n            l += 1\n        mx = max(mx, i - l + 1)\n    return mx",
        },
        {
          id: "binary-subarray-sum",
          title: "Binary Subarray With Sum",
          content:
            "Given a binary array and an integer goal, return the number of subarrays with sum equal to goal.",
          solution:
            "def numSubarraysWithSum(nums: List[int], goal: int) -> int:\n    def solve(nums, goal):\n        if goal < 0:\n            return 0\n        l = 0\n        r = 0\n        cnt = 0\n        n = len(nums)\n        sm = 0\n        while r < n:\n            sm += nums[r]\n            while sm > goal:\n                sm -= nums[l]\n                l += 1\n            cnt += (r - l + 1)\n            r += 1\n        return cnt\n\n    return solve(nums, goal) - solve(nums, goal - 1)",
        },
        {
          id: "count-nice-subarrays",
          title: "Count Number of Nice Subarrays",
          content:
            "Given an array of integers and an integer k, return the number of subarrays with exactly k odd numbers.",
          solution:
            "def numberOfSubarrays(nums: List[int], k: int) -> int:\n    def solve(nums, goal):\n        if goal < 0:\n            return 0\n        l = 0\n        r = 0\n        cnt = 0\n        n = len(nums)\n        sm = 0\n        while r < n:\n            sm += nums[r] % 2\n            while sm > goal:\n                sm -= nums[l] % 2\n                l += 1\n            cnt += (r - l + 1)\n            r += 1\n        return cnt\n\n    return solve(nums, k) - solve(nums, k - 1)",
        },
        {
          id: "substring-with-all-three-characters",
          title: "Number of Substrings Containing All Three Characters",
          content: `Given a string s containing only characters 'a', 'b' and 'c', return the number of substrings containing at least one occurrence of all three characters.`,
          solution:
            'def numberOfSubstrings(s: str) -> int:\n    pos = [-1, -1, -1]\n    cnt = 0\n    r = 0\n    n = len(s)\n    while r < n:\n        if s[r] in "abc":\n            pos[ord(s[r]) - 97] = r\n        if pos[0] != -1 and pos[1] != -1 and pos[2] != -1:\n            cnt += 1 + min(pos)\n        r += 1\n    return cnt',
        },
        {
          id: "max-points-from-cards",
          title: "Maximum Points You Can Obtain from Cards",
          content: `Given an array of card points and an integer k, return the maximum score obtainable by choosing k cards from either end of the array.`,
          solution:
            "def maxScore(nums: List[int], k: int) -> int:\n    n = len(nums)\n    r = n - 1\n    sm = sum(nums[:k])\n    mx = sm\n    for i in range(k - 1, -1, -1):\n        sm = sm - nums[i]\n        sm = sm + nums[r]\n        mx = max(mx, sm)\n        r -= 1\n    return mx",
        },
      ],
      "Lec 2: Hard Problem": [
        {
          id: "longest-substring-k-distinct",
          title: "Longest Substring with At Most K Distinct Characters",
          content:
            "Given a string and an integer k, return the length of the longest substring with at most k distinct characters.",
          solution:
            "def longestKSubstr(s, k):\n    l = 0\n    r = 0\n    n = len(s)\n    d = {}\n    mx = 0\n    while r < n:\n        if s[r] in d:\n            d[s[r]] += 1\n        else:\n            d[s[r]] = 1\n\n        while len(d) > k:\n            d[s[l]] -= 1\n            if d[s[l]] == 0:\n                del d[s[l]]\n            l += 1\n\n        if len(d) == k:\n            mx = max(mx, r - l + 1)\n        r += 1\n\n    return mx if mx else -1",
        },
        {
          id: "subarray-k-diff-integers",
          title: "Subarray with K Different Integers",
          content:
            "Return the number of subarrays with exactly k distinct integers.",
          solution:
            "def subarraysWithKDistinct(nums: List[int], k: int) -> int:\n    def solve(nums, k):\n        d = {}\n        l = 0\n        r = 0\n        cnt = 0\n        n = len(nums)\n        while r < n:\n            if nums[r] not in d:\n                d[nums[r]] = 1\n            else:\n                d[nums[r]] += 1\n\n            while len(d) > k:\n                d[nums[l]] -= 1\n                if d[nums[l]] == 0:\n                    del d[nums[l]]\n                l += 1\n\n            cnt += (r - l + 1)\n            r += 1\n        return cnt\n\n    return solve(nums, k) - solve(nums, k - 1)",
        },
        {
          id: "min-window-substring",
          title: "Minimum Window Substring",
          content:
            "Given strings s and t, return the minimum window in s which contains all characters of t.",
          solution:
            "def minWindow(S: str, T: str) -> str:\n    st = -1\n    mnLen = float('inf')\n    n = len(S)\n    m = len(T)\n    l = 0\n    r = 0\n    d = defaultdict(int)\n    for i in T:\n        d[i] += 1\n    cnt = 0\n    while r < n:\n        if d[S[r]] > 0:\n            cnt += 1\n        d[S[r]] -= 1\n        while cnt == m:\n            if r - l + 1 < mnLen:\n                mnLen = r - l + 1\n                st = l\n            d[S[l]] += 1\n            if d[S[l]] > 0:\n                cnt -= 1\n            l += 1\n        r += 1\n    return S[st:st + mnLen] if st != -1 else \"\"",
        },
        {
          id: "min-window-subsequence",
          title: "Minimum Window Subsequence",
          content:
            "Given strings s1 and s2, return the minimum window in s1 which contains s2 as a subsequence.",
          solution: `def minWindowSubsequence(s1, s2):
  m, n = len(s1), len(s2)
  min_len = float('inf')
  start = -1
  i = 0
  while i < m:
    if s1[i] == s2[0]:
      j, k = i, 0
      while j < m:
        if s1[j] == s2[k]:
          k += 1
          if k == n:
            end = j
            while i <= end:
              if s1[i] == s2[0]:
                break
              i += 1
            if (end - i + 1) < min_len:
              min_len = end - i + 1
              start = i
            break
        j += 1
    i += 1
  return s1[start:start + min_len] if start != -1 else ""`,
        },
      ],
    },
  },
  {
    stepTitle: "Step 5: Greedy Algorithm",
    sections: {
      "Lec 1: Medium Problem": [
        {
          id: "assign-cookies",
          title: "Assign Cookies",
          content:
            "You are given two integer arrays representing children's greed and cookie sizes. Return the maximum number of content children.",
          solution:
            "def findContentChildren(g: List[int], s: List[int]) -> int:\n    g.sort()\n    s.sort()\n    j = 0\n    i = 0\n    n1 = len(g)\n    n2 = len(s)\n    cnt = 0\n    while i < n1 and j < n2:\n        if g[i] <= s[j]:\n            cnt += 1\n            i += 1\n        j += 1\n    return cnt",
        },
        {
          id: "fractional-knapsack",
          title: "Fractional Knapsack Problem",
          content:
            "Given weights and values of items, return the maximum value in the knapsack allowing fractional values.",
          solution:
            "import heapq\n\ndef fractionalknapsack(val, wt, cap):\n    n = len(val)\n    lis = []\n    \n    for i in range(n):\n        price = (val[i]*1.0) / wt[i]\n        lis.append((-price, i))\n    heapq.heapify(lis)\n    \n    sm = 0\n    while lis and cap > 0:\n        amt, ind = lis[0]\n        if wt[ind] <= cap:\n            sm = sm + val[ind]\n            cap = cap - wt[ind]\n            heapq.heappop(lis)\n        else:\n            sm = sm + (cap * (amt * -1))\n            cap = 0\n    return sm",
        },
        {
          id: "minimum-coins",
          title: "Greedy Algorithm to Find Minimum Number of Coins",
          content:
            "Given a value V and coin denominations, return the minimum number of coins needed.",
          solution: `def minCoins(coins, V):
  coins.sort(reverse=True)
  count = 0
  for coin in coins:
    if V == 0:
      break
    if coin <= V:
      count += V // coin
      V %= coin
  return count`,
        },
        {
          id: "lemonade-change",
          title: "Lemonade Change",
          content:
            "Customers are buying lemonade for $5. Determine if you can provide correct change.",
          solution:
            "def lemonadeChange(bills: List[int]) -> bool:\n    d = {5: 0, 10: 0, 20: 0}\n    for i in bills:\n        if i == 5:\n            d[i] += 1\n        elif i == 10:\n            if d[5] < 1:\n                return False\n            d[i] += 1\n            d[5] -= 1\n        elif i == 20:\n            if not ((d[10] >= 1 and d[5] >= 1) or (d[5] >= 3)):\n                return False\n            d[20] += 1\n            if d[10] >= 1 and d[5] >= 1:\n                d[10] -= 1\n                d[5] -= 1\n            else:\n                d[5] -= 3\n    return True",
        },
        {
          id: "valid-parenthesis-checker",
          title: "Valid Parenthesis Checker",
          content:
            "Given a string with parentheses, check if it's valid and balanced.",
          solution:
            "def checkValidString(s: str) -> bool:\n    st = []\n    star = []\n    for i in range(len(s)):\n        if s[i] == '(':\n            st.append(i)\n        elif s[i] == '*':\n            star.append(i)\n        else:\n            if st:\n                st.pop()\n            elif star:\n                star.pop()\n            else:\n                return False\n    while st and star:\n        if st[-1] < star[-1]:\n            st.pop()\n            star.pop()\n        else:\n            return False\n    return not st",
        },
      ],
      "Lec 2: Hard Problem": [
        {
          id: "n-meetings-in-one-room",
          title: "N Meetings in One Room",
          content:
            "Given start and end times of meetings, find the maximum number of non-overlapping meetings.",
          solution:
            "def maximumMeetings(start, end):\n    pair = []\n    for i in range(len(start)):\n        pair.append((start[i], end[i]))\n    pair.sort(key=lambda x: x[1])\n    cnt = 0\n    last = -1\n    for s, e in pair:\n        if last < s:\n            last = e\n            cnt += 1\n    return cnt",
        },
        {
          id: "jump-game",
          title: "Jump Game",
          content:
            "Given an array where each element represents jump length, check if you can reach the end.",
          solution:
            "def canJump(nums: List[int]) -> bool:\n    n = len(nums)\n    mx = 0\n    for i in range(n):\n        if i > mx:\n            return False\n        mx = max(mx, i + nums[i])\n    return True",
        },
        {
          id: "jump-game-2",
          title: "Jump Game 2",
          content:
            "Return the minimum number of jumps needed to reach the last index.",
          solution:
            "def jump(nums: List[int]) -> int:\n    l = 0\n    r = 0\n    far = 0\n    ans = 0\n    while r < len(nums) - 1:\n        for i in range(l, r + 1):\n            far = max(far, i + nums[i])\n        l = r + 1\n        r = far\n        ans += 1\n    return ans",
        },
        {
          id: "min-platforms",
          title: "Minimum Number of Platforms Required for a Railway",
          content:
            "Given arrival and departure times, find the minimum number of platforms needed.",
          solution:
            "def minimumPlatform(arr, dep):\n    arr.sort()\n    dep.sort()\n    i = 0\n    j = 0\n    mx = 0\n    cnt = 0\n    while i < len(arr):\n        if arr[i] <= dep[j]:\n            cnt += 1\n            i += 1\n        else:\n            cnt -= 1\n            j += 1\n        mx = max(mx, cnt)\n    return mx",
        },
        {
          id: "job-sequencing",
          title: "Job Sequencing Problem",
          content:
            "Given jobs with deadlines and profits, schedule jobs to maximize total profit.",
          solution:
            "def job_sequencing(id, deadline, profit):\n    n = len(id)\n    jobs = []\n    for i in range(n):\n        jobs.append((profit[i], deadline[i], id[i]))\n    jobs.sort(reverse=True)\n\n    max_deadline = max(deadline)\n    slots = [-1] * (max_deadline + 1)\n    count = 0\n    total_profit = 0\n\n    for p, d, job_id in jobs:\n        for j in range(d, 0, -1):\n            if slots[j] == -1:\n                slots[j] = job_id\n                count += 1\n                total_profit += p\n                break\n\n    return [count, total_profit]",
        },
        {
          id: "candy",
          title: "Candy",
          content:
            "Each child must have at least one candy. Children with higher ratings get more than neighbors. Return the minimum candies needed.",
          solution:
            "def candy(arr: List[int]) -> int:\n    # Method - 2 (Slope Method)\n    n = len(arr)\n    sm = 1\n    curr = 1\n    i = 1\n    while i < n:\n        while i < n and arr[i] > arr[i - 1]:\n            curr += 1\n            sm += curr\n            i += 1\n        curr = 1\n        while i < n and arr[i] == arr[i - 1]:\n            sm += 1\n            i += 1\n        dec = 0\n        while i < n and arr[i] < arr[i - 1]:\n            dec += 1\n            sm += dec\n            i += 1\n        sm -= min(curr, dec)\n        curr = 1\n    return sm\n\n    # Method - 1 (Brute Force)\n    # n = len(arr)\n    # ans = [1] * n\n    # for i in range(1, n):\n    #     if arr[i] > arr[i - 1]:\n    #         ans[i] = ans[i - 1] + 1\n    # sm = ans[-1]\n    # for i in range(n - 2, -1, -1):\n    #     if arr[i] > arr[i + 1]:\n    #         ans[i] = max(ans[i], ans[i + 1] + 1)\n    #     sm += ans[i]\n    # return sm",
        },
        {
          id: "insert-interval",
          title: "Insert Interval",
          content: `Given a set of non-overlapping intervals, insert a new interval into the intervals (merge if necessary).`,
          solution:
            "def insert(intervals: List[List[int]], newInterval: List[int]) -> List[List[int]]:\n    intervals = intervals + [newInterval]\n    intervals.sort()\n    ans = [] \n    for i in intervals:\n        if not ans:\n            ans.append(i)\n            continue\n        if not((ans[-1][1] < i[0]) or (i[1] < ans[-1][0])):\n            mn = min(ans[-1][0], i[0])\n            mx = max(ans[-1][1], i[1])\n            ans.pop()\n            ans.append([mn, mx])\n        else:\n            ans.append(i)\n    return ans",
        },
        {
          id: "merge-intervals",
          title: "Merge Intervals",
          content: `Given a collection of intervals, merge all overlapping intervals.`,
          solution:
            "def merge(intervals: List[List[int]]) -> List[List[int]]:\n    intervals.sort()\n    ans = []\n    for i in range(len(intervals)):\n        if i == 0 or not ans:\n            ans.append(intervals[i])\n            continue\n        last = ans[-1]\n        if last[-1] < intervals[i][0]:\n            ans.append(intervals[i])\n        else:\n            last[-1] = max(last[-1], intervals[i][-1])\n    return ans",
        },
        {
          id: "non-overlapping-intervals",
          title: "Non-overlapping Intervals",
          content: `Given a collection of intervals, find the minimum number of intervals to remove to make the rest of the intervals non-overlapping.`,
          solution:
            "def eraseOverlapIntervals(intervals: List[List[int]]) -> int:\n    intervals.sort(key = lambda x: x[1])\n    last = float('-inf')\n    cnt = 0\n    for i in intervals:\n        if last <= i[0]:\n            last = i[1]\n            cnt += 1\n    return len(intervals) - cnt",
        },
        {
          id: "sjf-scheduling",
          title: "Shortest Job First (SJF) Scheduling",
          content: `Given an array of processes with their burst times, implement the SJF scheduling algorithm (non-preemptive).`,
          solution:
            "import math\n\ndef solve(bt):\n    # Code here\n    bt.sort()\n    sm = 0\n    ans = 0\n    n = len(bt)\n    for i in range(n - 1):\n        sm = sm + bt[i]\n        # print(sm, ans)\n        ans += sm\n    # print(ans)\n    return math.floor(ans / n)",
        },
        {
          id: "lru-page-replacement",
          title: "Least Recently Used (LRU) Page Replacement",
          content: `Given a sequence of pages and cache size, implement LRU page replacement algorithm.`,
          solution:
            "def pageFaults(n, c, pages):\n    arr = []\n    cnt = 0\n    for i in pages:\n        if i in arr:\n            arr.remove(i)\n        else:\n            cnt += 1\n            if len(arr) == c:\n                arr.pop(0)\n        arr.append(i)\n    return cnt",
        },
      ],
    },
  },
  {
    stepTitle: "Step 6: Stack & Queue",
    sections: {
      "Lec 1 : Basic Implementation of Stack and Queue": [
        {
          id: "implement-stack-using-arrays",
          title: "Implement Stack using Arrays",
          content:
            "Implement a basic stack using an array with push, pop, top, and isEmpty operations.",
          solution: `class Stack:
    def __init__(self):
        self.stack = []

    def push(self, x):
        self.stack.append(x)

    def pop(self):
        if not self.is_empty():
            return self.stack.pop()

    def top(self):
        if not self.is_empty():
            return self.stack[-1]

    def is_empty(self):
        return len(self.stack) == 0`,
        },
        {
          id: "implement-queue-using-arrays",
          title: "Implement Queue using Arrays",
          content:
            "Implement a basic queue using an array with enqueue, dequeue, front, and isEmpty operations.",
          solution: `class Queue:
    def __init__(self):
        self.queue = []

    def enqueue(self, x):
        self.queue.append(x)

    def dequeue(self):
        if not self.is_empty():
            return self.queue.pop(0)

    def front(self):
        if not self.is_empty():
            return self.queue[0]

    def is_empty(self):
        return len(self.queue) == 0`,
        },
        {
          id: "implement-stack-using-queue",
          title: "Implement Stack using Queue",
          content: "Implement a stack using one or two queues.",
          solution: `from collections import deque

class StackUsingQueue:
    def __init__(self):
        self.q = deque()

    def push(self, x):
        self.q.append(x)
        for _ in range(len(self.q) - 1):
            self.q.append(self.q.popleft())

    def pop(self):
        if self.q:
            return self.q.popleft()

    def top(self):
        if self.q:
            return self.q[0]

    def is_empty(self):
        return len(self.q) == 0`,
        },
        {
          id: "implement-queue-using-stack",
          title: "Implement Queue using Stack",
          content: "Implement a queue using two stacks.",
          solution: `class QueueUsingStack:
    def __init__(self):
        self.in_stack = []
        self.out_stack = []

    def enqueue(self, x):
        self.in_stack.append(x)

    def dequeue(self):
        if not self.out_stack:
            while self.in_stack:
                self.out_stack.append(self.in_stack.pop())
        if self.out_stack:
            return self.out_stack.pop()

    def front(self):
        if not self.out_stack:
            while self.in_stack:
                self.out_stack.append(self.in_stack.pop())
        if self.out_stack:
            return self.out_stack[-1]

    def is_empty(self):
        return not self.in_stack and not self.out_stack`,
        },
        {
          id: "implement-stack-using-linked-list",
          title: "Implement Stack using Linked List",
          content: "Implement a stack using a singly linked list.",
          solution: `class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class Stack:
    def __init__(self):
        self.top = None

    def push(self, x):
        new_node = Node(x)
        new_node.next = self.top
        self.top = new_node

    def pop(self):
        if self.top:
            val = self.top.data
            self.top = self.top.next
            return val

    def peek(self):
        if self.top:
            return self.top.data

    def is_empty(self):
        return self.top is None`,
        },
        {
          id: "implement-queue-using-linked-list",
          title: "Implement Queue using Linked List",
          content:
            "Implement a queue using a singly linked list with front and rear pointers.",
          solution: `class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class Queue:
    def __init__(self):
        self.front = self.rear = None

    def enqueue(self, x):
        new_node = Node(x)
        if not self.rear:
            self.front = self.rear = new_node
        else:
            self.rear.next = new_node
            self.rear = new_node

    def dequeue(self):
        if self.front:
            val = self.front.data
            self.front = self.front.next
            if not self.front:
                self.rear = None
            return val

    def is_empty(self):
        return self.front is None`,
        },
        {
          id: "check-for-balanced-parenthesis",
          title: "Check for Balanced Parenthesis",
          content:
            "Given an expression, check if the parenthesis are balanced using a stack.",
          solution: `def is_balanced(expr):
    stack = []
    pairs = {')': '(', ']': '[', '}': '{'}
    for ch in expr:
        if ch in '([{':
            stack.append(ch)
        elif ch in ')]}':
            if not stack or stack[-1] != pairs[ch]:
                return False
            stack.pop()
    return not stack`,
        },
        {
          id: "implement-min-stack",
          title: "Implement Min Stack",
          content:
            "Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.",
          solution: `class MinStack:
    def __init__(self):
        self.stack = []
        self.min_stack = []

    def push(self, x):
        self.stack.append(x)
        if not self.min_stack or x <= self.min_stack[-1]:
            self.min_stack.append(x)

    def pop(self):
        if self.stack:
            val = self.stack.pop()
            if val == self.min_stack[-1]:
                self.min_stack.pop()

    def top(self):
        if self.stack:
            return self.stack[-1]

    def get_min(self):
        if self.min_stack:
            return self.min_stack[-1]`,
        },
      ],
      "Lec 2 : Postfix/Prefix Convertion Lec 2: Hard Problem": [
        {
          id: "infix-to-postfix-conversion",
          title: "Infix to Postfix Conversion using Stack",
          content:
            "Convert a given infix expression (e.g., A+B*C) to postfix using a stack.\nOperator precedence and associativity should be considered.",
          solution: `def infix_to_postfix(expression):
    precedence = {'+':1, '-':1, '*':2, '/':2, '^':3}
    stack = []
    result = []
    for char in expression:
        if char.isalnum():
            result.append(char)
        elif char == '(':
            stack.append(char)
        elif char == ')':
            while stack and stack[-1] != '(':
                result.append(stack.pop())
            stack.pop()
        else:
            while stack and stack[-1] != '(' and precedence[char] <= precedence.get(stack[-1], 0):
                result.append(stack.pop())
            stack.append(char)
    while stack:
        result.append(stack.pop())
    return ''.join(result)`,
        },
        {
          id: "prefix-to-infix-conversion",
          title: "Prefix to Infix Conversion",
          content:
            "Convert a given prefix expression to its equivalent infix expression using a stack.",
          solution: `def prefix_to_infix(expression):
    stack = []
    for char in reversed(expression):
        if char.isalnum():
            stack.append(char)
        else:
            a = stack.pop()
            b = stack.pop()
            stack.append(f"({a}{char}{b})")
    return stack[-1]`,
        },
        {
          id: "prefix-to-postfix-conversion",
          title: "Prefix to Postfix Conversion",
          content:
            "Convert a given prefix expression to its equivalent postfix expression using a stack.",
          solution: `def prefix_to_postfix(expression):
    stack = []
    for char in reversed(expression):
        if char.isalnum():
            stack.append(char)
        else:
            a = stack.pop()
            b = stack.pop()
            stack.append(f"{a}{b}{char}")
    return stack[-1]`,
        },
        {
          id: "postfix-to-prefix-conversion",
          title: "Postfix to Prefix Conversion",
          content:
            "Convert a given postfix expression to its equivalent prefix expression using a stack.",
          solution: `def postfix_to_prefix(expression):
    stack = []
    for char in expression:
        if char.isalnum():
            stack.append(char)
        else:
            b = stack.pop()
            a = stack.pop()
            stack.append(f"{char}{a}{b}")
    return stack[-1]`,
        },
        {
          id: "postfix-to-infix-conversion",
          title: "Postfix to Infix Conversion",
          content:
            "Convert a given postfix expression to its equivalent infix expression using a stack.",
          solution: `def postfix_to_infix(expression):
    stack = []
    for char in expression:
        if char.isalnum():
            stack.append(char)
        else:
            b = stack.pop()
            a = stack.pop()
            stack.append(f"({a}{char}{b})")
    return stack[-1]`,
        },
        {
          id: "infix-to-prefix-conversion",
          title: "Convert Infix to Prefix Notation",
          content:
            "Convert a given infix expression to prefix by reversing and adapting the infix-to-postfix logic.",
          solution: `def infix_to_prefix(expression):
    def reverse(expr):
        expr = expr[::-1]
        expr = list(expr)
        for i in range(len(expr)):
            if expr[i] == '(':
                expr[i] = ')'
            elif expr[i] == ')':
                expr[i] = '('
        return ''.join(expr)

    def infix_to_postfix(expression):
        precedence = {'+':1, '-':1, '*':2, '/':2, '^':3}
        stack = []
        result = []
        for char in expression:
            if char.isalnum():
                result.append(char)
            elif char == '(':
                stack.append(char)
            elif char == ')':
                while stack and stack[-1] != '(':
                    result.append(stack.pop())
                stack.pop()
            else:
                while stack and stack[-1] != '(' and precedence[char] <= precedence.get(stack[-1], 0):
                    result.append(stack.pop())
                stack.append(char)
        while stack:
            result.append(stack.pop())
        return ''.join(result)

    reversed_expr = reverse(expression)
    postfix = infix_to_postfix(reversed_expr)
    prefix = postfix[::-1]
    return prefix`,
        },
      ],
      "Lec 3 : Monotonic Stack": [
        {
          id: "next-greater-element",
          title: "Next Greater Element",
          content:
            "Given an array, for each element find the next greater element to its right. If there is none, return -1.",
          solution: `def next_greater_elements(nums):
    stack = []
    res = [-1] * len(nums)
    for i in range(len(nums) - 1, -1, -1):
        while stack and stack[-1] <= nums[i]:
            stack.pop()
        if stack:
            res[i] = stack[-1]
        stack.append(nums[i])
    return res`,
        },
        {
          id: "next-greater-element-2",
          title: "Next Greater Element 2",
          content:
            "Circular version of Next Greater Element. For each element, find the next greater in the array considering circular rotation.",
          solution: `def next_greater_elements_2(nums):
    n = len(nums)
    res = [-1] * n
    stack = []
    for i in range(2 * n - 1, -1, -1):
        while stack and stack[-1] <= nums[i % n]:
            stack.pop()
        if stack:
            res[i % n] = stack[-1]
        stack.append(nums[i % n])
    return res`,
        },
        {
          id: "next-smaller-element",
          title: "Next Smaller Element",
          content:
            "For each element in the array, find the next smaller element to the right.",
          solution: `def next_smaller_elements(nums):
    stack = []
    res = [-1] * len(nums)
    for i in range(len(nums) - 1, -1, -1):
        while stack and stack[-1] >= nums[i]:
            stack.pop()
        if stack:
            res[i] = stack[-1]
        stack.append(nums[i])
    return res`,
        },
        {
          id: "number-of-next-greater-elements-to-the-right",
          title: "Number of Next Greater Elements to the Right",
          content:
            "Find number of elements to the right that are greater for each element in the array.",
          solution: `def count_next_greater(nums):
    stack = []
    res = [0] * len(nums)
    for i in range(len(nums)-1, -1, -1):
        count = 0
        while stack and nums[i] >= stack[-1][0]:
            count += stack[-1][1] + 1
            stack.pop()
        res[i] = count
        stack.append((nums[i], count))
    return res`,
        },
        {
          id: "trapping-rainwater",
          title: "Trapping Rainwater",
          content:
            "Given elevation map, compute how much water it can trap after raining.",
          solution: `def trap(height):
    stack = []
    water = 0
    for i, h in enumerate(height):
        while stack and height[stack[-1]] < h:
            top = stack.pop()
            if not stack:
                break
            dist = i - stack[-1] - 1
            bounded = min(h, height[stack[-1]]) - height[top]
            water += dist * bounded
        stack.append(i)
    return water`,
        },
        {
          id: "sum-of-subarray-minimums",
          title: "Sum of Subarray Minimums",
          content:
            "Return the sum of the minimum of all subarrays. Use monotonic stack to optimize.",
          solution: `def sum_subarray_mins(arr):
    MOD = 10**9 + 7
    stack = []
    res = 0
    for i in range(len(arr)+1):
        cur = 0 if i == len(arr) else arr[i]
        while stack and arr[stack[-1]] > cur:
            j = stack.pop()
            k = stack[-1] if stack else -1
            res += arr[j] * (i - j) * (j - k)
        stack.append(i)
    return res % MOD`,
        },
        {
          id: "asteroid-collision",
          title: "Asteroid Collision",
          content:
            "Simulate asteroid collisions. Use stack to keep track of remaining asteroids after each collision.",
          solution: `def asteroid_collision(asteroids):
    stack = []
    for a in asteroids:
        while stack and a < 0 < stack[-1]:
            if stack[-1] < -a:
                stack.pop()
                continue
            elif stack[-1] == -a:
                stack.pop()
            break
        else:
            stack.append(a)
    return stack`,
        },
        {
          id: "sum-of-subarray-ranges",
          title: "Sum of Subarray Ranges",
          content:
            "Return the sum of ranges (max - min) of all subarrays. Use monotonic stack to optimize.",
          solution: `def sub_array_ranges(nums):
    def get_contribution(nums, is_min):
        stack = []
        res = 0
        for i in range(len(nums)+1):
            cur = float('-inf') if not is_min else float('inf')
            val = nums[i] if i < len(nums) else cur
            while stack and (nums[stack[-1]] > val if is_min else nums[stack[-1]] < val):
                j = stack.pop()
                k = stack[-1] if stack else -1
                res += nums[j] * (i - j) * (j - k)
            stack.append(i)
        return res

    return get_contribution(nums, False) - get_contribution(nums, True)`,
        },
        {
          id: "remove-k-digits",
          title: "Remove K Digits",
          content:
            "Given a number string and an integer k, remove k digits to get the smallest possible number.",
          solution: `def remove_k_digits(num, k):
    stack = []
    for digit in num:
        while stack and k > 0 and stack[-1] > digit:
            stack.pop()
            k -= 1
        stack.append(digit)
    final = stack[:-k] if k else stack
    return ''.join(final).lstrip('0') or '0'`,
        },
        {
          id: "largest-rectangle-in-a-histogram",
          title: "Largest Rectangle in a Histogram",
          content:
            "Given histogram heights, return area of the largest rectangle that can be formed.",
          solution: `def largest_rectangle_area(heights):
    stack = []
    max_area = 0
    heights.append(0)
    for i, h in enumerate(heights):
        while stack and heights[stack[-1]] > h:
            height = heights[stack.pop()]
            width = i if not stack else i - stack[-1] - 1
            max_area = max(max_area, height * width)
        stack.append(i)
    return max_area`,
        },
        {
          id: "maximal-rectangles",
          title: "Maximal Rectangles",
          content:
            "Given a 2D binary matrix filled with 0s and 1s, find the largest rectangle containing only 1s.",
          solution: `def maximal_rectangle(matrix):
    if not matrix:
        return 0
    n = len(matrix[0])
    heights = [0] * n
    max_area = 0

    def largest_rectangle_area(heights):
        stack = []
        max_area = 0
        heights.append(0)
        for i, h in enumerate(heights):
            while stack and heights[stack[-1]] > h:
                height = heights[stack.pop()]
                width = i if not stack else i - stack[-1] - 1
                max_area = max(max_area, height * width)
            stack.append(i)
        heights.pop()
        return max_area

    for row in matrix:
        for i in range(n):
            heights[i] = heights[i] + 1 if row[i] == '1' else 0
        max_area = max(max_area, largest_rectangle_area(heights))
    return max_area`,
        },
      ],
      "Lec 4 : Problems on Stack & Queue": [
        {
          id: "sliding-window-maximum",
          title: "Sliding Window Maximum",
          content:
            "Given an array and an integer k, return the maximum value in each sliding window of size k.",
          solution: `from collections import deque

def max_sliding_window(nums, k):
    q = deque()
    res = []
    for i, num in enumerate(nums):
        while q and nums[q[-1]] < num:
            q.pop()
        q.append(i)
        if q[0] == i - k:
            q.popleft()
        if i >= k - 1:
            res.append(nums[q[0]])
    return res`,
        },
        {
          id: "stock-span-problem",
          title: "Stock Span Problem",
          content:
            "Given an array of stock prices, for each day find the number of consecutive previous days where the price is less than or equal to today's price.",
          solution: `def stock_span(prices):
    stack = []
    span = [0] * len(prices)
    for i, price in enumerate(prices):
        while stack and prices[stack[-1]] <= price:
            stack.pop()
        span[i] = i + 1 if not stack else i - stack[-1]
        stack.append(i)
    return span`,
        },
        {
          id: "celebrity-problem",
          title: "The Celebrity Problem",
          content:
            "In a party of N people, a celebrity is known by everyone but knows no one. Find the celebrity using a stack.",
          solution: `def find_celebrity(M):
    n = len(M)
    stack = list(range(n))
    while len(stack) > 1:
        a = stack.pop()
        b = stack.pop()
        if M[a][b] == 1:
            stack.append(b)
        else:
            stack.append(a)
    if not stack:
        return -1
    candidate = stack.pop()
    for i in range(n):
        if i != candidate and (M[candidate][i] == 1 or M[i][candidate] == 0):
            return -1
    return candidate`,
        },
        {
          id: "lru-cache",
          title: "LRU Cache (IMPORTANT)",
          content:
            "Design a Least Recently Used (LRU) Cache with get and put operations in O(1) time using OrderedDict or Doubly Linked List with HashMap.",
          solution: `from collections import OrderedDict

class LRUCache:
    def __init__(self, capacity):
        self.cache = OrderedDict()
        self.capacity = capacity

    def get(self, key):
        if key not in self.cache:
            return -1
        self.cache.move_to_end(key)
        return self.cache[key]

    def put(self, key, value):
        if key in self.cache:
            self.cache.move_to_end(key)
        self.cache[key] = value
        if len(self.cache) > self.capacity:
            self.cache.popitem(last=False)`,
        },
        {
          id: "lfu-cache",
          title: "LFU Cache",
          content:
            "Design a Least Frequently Used (LFU) Cache with get and put operations in O(1) time.",
          solution: `from collections import defaultdict, OrderedDict

class LFUCache:
    def __init__(self, capacity):
        self.capacity = capacity
        self.key_to_val_freq = {}
        self.freq_to_keys = defaultdict(OrderedDict)
        self.min_freq = 0

    def _update_freq(self, key):
        val, freq = self.key_to_val_freq[key]
        del self.freq_to_keys[freq][key]
        if not self.freq_to_keys[freq]:
            del self.freq_to_keys[freq]
            if self.min_freq == freq:
                self.min_freq += 1
        self.freq_to_keys[freq+1][key] = None
        self.key_to_val_freq[key] = (val, freq+1)

    def get(self, key):
        if key not in self.key_to_val_freq:
            return -1
        self._update_freq(key)
        return self.key_to_val_freq[key][0]

    def put(self, key, value):
        if self.capacity == 0:
            return
        if key in self.key_to_val_freq:
            self.key_to_val_freq[key] = (value, self.key_to_val_freq[key][1])
            self._update_freq(key)
            return
        if len(self.key_to_val_freq) >= self.capacity:
            old_key, _ = self.freq_to_keys[self.min_freq].popitem(last=False)
            del self.key_to_val_freq[old_key]
        self.freq_to_keys[1][key] = None
        self.key_to_val_freq[key] = (value, 1)
        self.min_freq = 1`,
        },
      ],
    },
  },
  {
    stepTitle: "Step 7: Heap",
    sections: {
      "Lec 1 : Implementation of Heap": [
        {
          id: "min-heap-max-heap-implementation",
          title: "Min Heap and Max Heap Implementation",
          content:
            "Implement a Min Heap and Max Heap using Python's `heapq` module. Python provides a min-heap by default. Max-heap can be implemented by negating values.",
          solution: `import heapq

# Min Heap
min_heap = []
heapq.heappush(min_heap, 3)
heapq.heappush(min_heap, 1)
heapq.heappush(min_heap, 2)
min_val = heapq.heappop(min_heap)

# Max Heap
max_heap = []
heapq.heappush(max_heap, -3)
heapq.heappush(max_heap, -1)
heapq.heappush(max_heap, -2)
max_val = -heapq.heappop(max_heap)`,
        },
        {
          id: "check-if-array-is-min-heap",
          title: "Check if an Array Represents a Min-Heap or Not",
          content:
            "Given an array, check if it represents a valid Min-Heap (i.e., for every node i, arr[i] ≤ arr[2i + 1] and arr[i] ≤ arr[2i + 2]).",
          solution: `def is_min_heap(arr):
    n = len(arr)
    for i in range((n - 2) // 2 + 1):
        left = 2 * i + 1
        right = 2 * i + 2
        if left < n and arr[i] > arr[left]:
            return False
        if right < n and arr[i] > arr[right]:
            return False
    return True`,
        },
        {
          id: "convert-min-heap-to-max-heap",
          title: "Convert Min Heap to Max Heap",
          content:
            "Convert a given min-heap array to a max-heap in-place using bottom-up heapify.",
          solution: `def heapify(arr, n, i):
    largest = i
    left = 2 * i + 1
    right = 2 * i + 2
    if left < n and arr[left] > arr[largest]:
        largest = left
    if right < n and arr[right] > arr[largest]:
        largest = right
    if largest != i:
        arr[i], arr[largest] = arr[largest], arr[i]
        heapify(arr, n, largest)

def convert_min_to_max_heap(arr):
    n = len(arr)
    for i in range(n//2 - 1, -1, -1):
        heapify(arr, n, i)
    return arr`,
        },
      ],
      "Lec 2 : Medium Problems": [
        {
          id: "kth-largest-element-in-an-array",
          title: "Kth Largest Element in an Array [Use Priority Queue]",
          content:
            "Find the kth largest element in an array using a min-heap (priority queue) of size k.",
          solution: `import heapq

def find_kth_largest(nums, k):
    min_heap = nums[:k]
    heapq.heapify(min_heap)
    for num in nums[k:]:
        if num > min_heap[0]:
            heapq.heappushpop(min_heap, num)
    return min_heap[0]`,
        },
        {
          id: "kth-smallest-element-in-an-array",
          title: "Kth Smallest Element in an Array [Use Priority Queue]",
          content:
            "Find the kth smallest element using a max-heap of size k (by negating values in Python).",
          solution: `import heapq

def find_kth_smallest(nums, k):
    max_heap = [-num for num in nums[:k]]
    heapq.heapify(max_heap)
    for num in nums[k:]:
        if -num > max_heap[0]:
            heapq.heappushpop(max_heap, -num)
    return -max_heap[0]`,
        },
        {
          id: "sort-k-sorted-array",
          title: "Sort K Sorted Array",
          content:
            "Sort an array where every element is at most k distance away from its sorted position using a min-heap.",
          solution: `import heapq

def sort_k_sorted_array(arr, k):
    heap = arr[:k+1]
    heapq.heapify(heap)
    result = []
    for i in range(k+1, len(arr)):
        result.append(heapq.heappushpop(heap, arr[i]))
    while heap:
        result.append(heapq.heappop(heap))
    return result`,
        },
        {
          id: "merge-m-sorted-lists",
          title: "Merge M Sorted Lists",
          content:
            "Merge M sorted linked lists into a single sorted list using a min-heap.",
          solution: `import heapq

def merge_k_sorted_lists(lists):
    heap = []
    for i, lst in enumerate(lists):
        if lst:
            heapq.heappush(heap, (lst[0], i, 0))
    result = []
    while heap:
        val, list_idx, element_idx = heapq.heappop(heap)
        result.append(val)
        if element_idx + 1 < len(lists[list_idx]):
            next_val = lists[list_idx][element_idx + 1]
            heapq.heappush(heap, (next_val, list_idx, element_idx + 1))
    return result`,
        },
        {
          id: "replace-each-array-element-by-its-rank",
          title: "Replace Each Array Element by Its Corresponding Rank",
          content:
            "Replace each element in an array with its rank when sorted. Equal elements get the same rank.",
          solution: `def array_rank_transform(arr):
    sorted_unique = sorted(set(arr))
    rank_map = {num: i+1 for i, num in enumerate(sorted_unique)}
    return [rank_map[num] for num in arr]`,
        },
        {
          id: "task-scheduler",
          title: "Task Scheduler",
          content:
            "Given a list of tasks with cooldown `n`, return the least number of units of time that the CPU will take to finish all tasks.",
          solution: `from collections import Counter
import heapq

def least_interval(tasks, n):
    freq = Counter(tasks)
    max_heap = [-cnt for cnt in freq.values()]
    heapq.heapify(max_heap)
    time = 0
    while max_heap:
        temp = []
        for _ in range(n+1):
            if max_heap:
                cnt = heapq.heappop(max_heap)
                if cnt + 1 < 0:
                    temp.append(cnt + 1)
            time += 1
            if not max_heap and not temp:
                break
        for item in temp:
            heapq.heappush(max_heap, item)
    return time`,
        },
        {
          id: "hands-of-straights",
          title: "Hands of Straights",
          content:
            "Determine if a hand of cards can be rearranged into groups of consecutive cards of groupSize.",
          solution: `from collections import Counter
import heapq

def is_n_straight_hand(hand, groupSize):
    if len(hand) % groupSize != 0:
        return False
    freq = Counter(hand)
    min_heap = list(freq.keys())
    heapq.heapify(min_heap)
    while min_heap:
        first = min_heap[0]
        for i in range(first, first + groupSize):
            if freq[i] == 0:
                return False
            freq[i] -= 1
            if freq[i] == 0 and i != min_heap[0]:
                heapq.heappop(min_heap)
        if freq[min_heap[0]] == 0:
            heapq.heappop(min_heap)
    return True`,
        },
      ],
      "Lec 3 : Hard Problems": [
        {
          id: "design-twitter",
          title: "Design Twitter",
          content:
            "Design a simplified version of Twitter. Implement postTweet, getNewsFeed, follow, and unfollow. Use heap for efficient news feed retrieval.",
          solution: `import heapq
from collections import defaultdict, deque

class Twitter:
    def __init__(self):
        self.time = 0
        self.tweets = defaultdict(deque)
        self.following = defaultdict(set)

    def postTweet(self, userId, tweetId):
        self.tweets[userId].appendleft((self.time, tweetId))
        self.time -= 1

    def getNewsFeed(self, userId):
        heap = []
        self.following[userId].add(userId)
        for uid in self.following[userId]:
            for t in list(self.tweets[uid])[:10]:
                heapq.heappush(heap, t)
        return [tweetId for time, tweetId in heapq.nlargest(10, heap)]

    def follow(self, followerId, followeeId):
        self.following[followerId].add(followeeId)

    def unfollow(self, followerId, followeeId):
        if followeeId in self.following[followerId] and followeeId != followerId:
            self.following[followerId].remove(followeeId)`,
        },
        {
          id: "connect-n-ropes-with-minimal-cost",
          title: "Connect n Ropes with Minimal Cost",
          content:
            "Given n ropes with different lengths, connect them with minimal total cost. Always connect the two shortest ropes using a min-heap.",
          solution: `import heapq

def connect_ropes(ropes):
    heapq.heapify(ropes)
    total = 0
    while len(ropes) > 1:
        first = heapq.heappop(ropes)
        second = heapq.heappop(ropes)
        cost = first + second
        total += cost
        heapq.heappush(ropes, cost)
    return total`,
        },
        {
          id: "kth-largest-element-in-a-stream",
          title: "Kth Largest Element in a Stream of Running Integers",
          content:
            "Design a class to continuously return the kth largest element from a stream of numbers.",
          solution: `import heapq

class KthLargest:
    def __init__(self, k, nums):
        self.k = k
        self.heap = nums[:]
        heapq.heapify(self.heap)
        while len(self.heap) > k:
            heapq.heappop(self.heap)

    def add(self, val):
        heapq.heappush(self.heap, val)
        if len(self.heap) > self.k:
            heapq.heappop(self.heap)
        return self.heap[0]`,
        },
        {
          id: "maximum-sum-combination",
          title: "Maximum Sum Combination",
          content:
            "Given two arrays A and B of size N, find the N maximum sum combinations from elements of both arrays.",
          solution: `import heapq

def max_sum_combinations(A, B, N):
    A.sort(reverse=True)
    B.sort(reverse=True)
    heap = []
    visited = set()
    heapq.heappush(heap, (-(A[0] + B[0]), 0, 0))
    visited.add((0, 0))
    result = []
    for _ in range(N):
        sum_val, i, j = heapq.heappop(heap)
        result.append(-sum_val)
        if i + 1 < len(A) and (i + 1, j) not in visited:
            heapq.heappush(heap, (-(A[i+1] + B[j]), i+1, j))
            visited.add((i+1, j))
        if j + 1 < len(B) and (i, j + 1) not in visited:
            heapq.heappush(heap, (-(A[i] + B[j+1]), i, j+1))
            visited.add((i, j+1))
    return result`,
        },
        {
          id: "find-median-from-data-stream",
          title: "Find Median from Data Stream",
          content:
            "Design a data structure to continuously add numbers and return the median in O(log n) time using two heaps.",
          solution: `import heapq

class MedianFinder:
    def __init__(self):
        self.small = []  # Max heap
        self.large = []  # Min heap

    def addNum(self, num):
        heapq.heappush(self.small, -num)
        heapq.heappush(self.large, -heapq.heappop(self.small))
        if len(self.small) < len(self.large):
            heapq.heappush(self.small, -heapq.heappop(self.large))

    def findMedian(self):
        if len(self.small) > len(self.large):
            return -self.small[0]
        return (-self.small[0] + self.large[0]) / 2`,
        },
        {
          id: "k-most-frequent-elements",
          title: "K Most Frequent Elements",
          content:
            "Return the k most frequent elements in an array using a frequency map and min-heap.",
          solution: `from collections import Counter
import heapq

def top_k_frequent(nums, k):
    freq = Counter(nums)
    return [item for item, _ in heapq.nlargest(k, freq.items(), key=lambda x: x[1])]`,
        },
      ],
    },
  },
  {
    stepTitle: "Step 8: Binary Tree",
    sections: {
      "Lec 1 : Traversals in Trees": [
        {
          id: "introduction-to-trees",
          title: "Introduction to Trees",
          content: "",
          solution:
            "A binary tree is a hierarchical data structure in which each node has at most two children: left and right. Trees are widely used in hierarchical representations, such as file systems and expression parsing. Below are the key types of binary trees:\n\n1. **Full Binary Tree**:\n   - Every node has either 0 or 2 children.\n   - No node has only one child.\n\n2. **Complete Binary Tree**:\n   - All levels are completely filled except possibly the last.\n   - All nodes in the last level are as far left as possible.\n\n3. **Perfect Binary Tree**:\n   - All internal nodes have 2 children.\n   - All leaf nodes are at the same level.\n   - Number of nodes = `2^h - 1` where h is the height of the tree.\n\n4. **Skewed Binary Tree**:\n   - A tree where all the nodes are either only in the left or right subtree.\n   - Types:\n     - **Left Skewed Tree**: Every node has only a left child.\n     - **Right Skewed Tree**: Every node has only a right child.\n\nThese tree types help in analyzing time and space complexity of different operations in tree-based algorithms.",
        },
        {
          id: "binary-tree-representation-in-python",
          title: "Binary Tree Representation in Python",
          content:
            "Implement a binary tree using classes in Python. Each node contains a value and pointers to its left and right children.",
          solution: `class Node:
    def __init__(self, val):
        self.val = val
        self.left = None
        self.right = None`,
        },
        {
          id: "binary-tree-representation-in-cpp",
          title: "Binary Tree Representation in C++",
          content: "Implement a binary tree using classes and pointers in C++.",
          solution: `struct Node {
    int data;
    Node* left;
    Node* right;
    Node(int val) {
        data = val;
        left = right = nullptr;
    }
};`,
        },
        {
          id: "binary-tree-traversals",
          title: "Binary Tree Traversals in Binary Tree",
          content:
            "Learn about the three main types of depth-first traversal in a binary tree: Inorder (Left, Root, Right), Preorder (Root, Left, Right), and Postorder (Left, Right, Root). These are fundamental operations used in many tree algorithms.",
          solution: `# Define the basic structure for a binary tree node
class Node:
    def __init__(self, val):
        self.val = val
        self.left = None
        self.right = None

# Create a sample tree:
#       1
#      / \\
#     2   3
#    / \\
#   4   5
root = Node(1)
root.left = Node(2)
root.right = Node(3)
root.left.left = Node(4)
root.left.right = Node(5)

# Preorder: Root -> Left -> Right
def preorder(node):
    if node:
        print(node.val, end=' ')
        preorder(node.left)
        preorder(node.right)

# Inorder: Left -> Root -> Right
def inorder(node):
    if node:
        inorder(node.left)
        print(node.val, end=' ')
        inorder(node.right)

# Postorder: Left -> Right -> Root
def postorder(node):
    if node:
        postorder(node.left)
        postorder(node.right)
        print(node.val, end=' ')

# Output each traversal
print("Preorder Traversal:")
preorder(root)      # Output: 1 2 4 5 3

print("\\nInorder Traversal:")
inorder(root)       # Output: 4 2 5 1 3

print("\\nPostorder Traversal:")
postorder(root)     # Output: 4 5 2 3 1`,
        },
        {
          id: "preorder-traversal",
          title: "Preorder Traversal of Binary Tree",
          content:
            "Traverse the binary tree in preorder (Root → Left → Right).",
          solution: `def preorder(root):
    if root:
        print(root.val)
        preorder(root.left)
        preorder(root.right)`,
        },
        {
          id: "inorder-traversal",
          title: "Inorder Traversal of Binary Tree",
          content: "Traverse the binary tree in inorder (Left → Root → Right).",
          solution: `def inorder(root):
    if root:
        inorder(root.left)
        print(root.val)
        inorder(root.right)`,
        },
        {
          id: "postorder-traversal",
          title: "Post-order Traversal of Binary Tree",
          content:
            "Traverse the binary tree in postorder (Left → Right → Root).",
          solution: `def postorder(root):
    if root:
        postorder(root.left)
        postorder(root.right)
        print(root.val)`,
        },
        {
          id: "level-order-traversal",
          title: "Level Order Traversal / Level Order Traversal in Spiral Form",
          content:
            "Print nodes level by level. For spiral order, alternate direction each level.",
          solution: `from collections import deque

def level_order(root):
    if not root: return
    queue = deque([root])
    while queue:
        node = queue.popleft()
        print(node.val)
        if node.left: queue.append(node.left)
        if node.right: queue.append(node.right)

def spiral_order(root):
    if not root: return
    dq = deque([root])
    left_to_right = True
    while dq:
        level = []
        for _ in range(len(dq)):
            if left_to_right:
                node = dq.popleft()
                level.append(node.val)
                if node.left: dq.append(node.left)
                if node.right: dq.append(node.right)
            else:
                node = dq.pop()
                level.append(node.val)
                if node.right: dq.appendleft(node.right)
                if node.left: dq.appendleft(node.left)
        print(level)
        left_to_right = not left_to_right`,
        },
        {
          id: "iterative-preorder-traversal",
          title: "Iterative Preorder Traversal of Binary Tree",
          content: "Implement preorder traversal using a stack.",
          solution: `def iterative_preorder(root):
    if not root: return
    stack = [root]
    while stack:
        node = stack.pop()
        print(node.val)
        if node.right: stack.append(node.right)
        if node.left: stack.append(node.left)`,
        },
        {
          id: "iterative-inorder-traversal",
          title: "Iterative Inorder Traversal of Binary Tree",
          content: "Implement inorder traversal using a stack.",
          solution: `def iterative_inorder(root):
    stack = []
    current = root
    while current or stack:
        while current:
            stack.append(current)
            current = current.left
        current = stack.pop()
        print(current.val)
        current = current.right`,
        },
        {
          id: "postorder-2-stacks",
          title: "Post-order Traversal of Binary Tree using 2 Stacks",
          content: "Use two stacks to simulate postorder traversal.",
          solution: `def postorder_two_stacks(root):
    if not root: return
    s1, s2 = [root], []
    while s1:
        node = s1.pop()
        s2.append(node)
        if node.left: s1.append(node.left)
        if node.right: s1.append(node.right)
    while s2:
        print(s2.pop().val)`,
        },
        {
          id: "postorder-1-stack",
          title: "Post-order Traversal of Binary Tree using 1 Stack",
          content: "Use a single stack to perform postorder traversal.",
          solution: `def postorder_one_stack(root):
    stack = []
    last_visited = None
    current = root
    while stack or current:
        if current:
            stack.append(current)
            current = current.left
        else:
            peek = stack[-1]
            if peek.right and last_visited != peek.right:
                current = peek.right
            else:
                print(peek.val)
                last_visited = stack.pop()`,
        },
        {
          id: "all-three-traversals-one-pass",
          title: "Preorder, Inorder, and Postorder Traversal in One Traversal",
          content:
            "Perform all three traversals in a single traversal using stack and state tracking.",
          solution: `def all_traversals(root):
    if not root: return [], [], []
    pre, ino, post = [], [], []
    stack = [(root, 1)]
    while stack:
        node, num = stack.pop()
        if num == 1:
            pre.append(node.val)
            stack.append((node, 2))
            if node.left: stack.append((node.left, 1))
        elif num == 2:
            ino.append(node.val)
            stack.append((node, 3))
            if node.right: stack.append((node.right, 1))
        else:
            post.append(node.val)
    return pre, ino, post`,
        },
      ],
      "Lec 2 : Medium Problems": [
        {
          id: "height-of-a-binary-tree",
          title: "Height of a Binary Tree",
          content:
            "Find the height (or depth) of a binary tree — the number of nodes along the longest path from the root node down to the farthest leaf node.",
          solution: `def height(root):
    if not root:
        return 0
    return 1 + max(height(root.left), height(root.right))`,
        },
        {
          id: "check-if-binary-tree-is-height-balanced",
          title: "Check if the Binary Tree is Height-Balanced or Not",
          content:
            "A binary tree is height-balanced if, for every node, the height difference of its left and right subtrees is at most 1.",
          solution: `def is_balanced(root):
    def check(node):
        if not node: return 0, True
        lh, lb = check(node.left)
        rh, rb = check(node.right)
        return 1 + max(lh, rh), lb and rb and abs(lh - rh) <= 1
    _, result = check(root)
    return result`,
        },
        {
          id: "diameter-of-binary-tree",
          title: "Diameter of Binary Tree",
          content:
            "The diameter of a binary tree is the length of the longest path between any two nodes in a tree.",
          solution: `def diameter(root):
    res = [0]
    def dfs(node):
        if not node: return 0
        lh = dfs(node.left)
        rh = dfs(node.right)
        res[0] = max(res[0], lh + rh)
        return 1 + max(lh, rh)
    dfs(root)
    return res[0]`,
        },
        {
          id: "maximum-path-sum",
          title: "Maximum Path Sum",
          content:
            "Find the path in the binary tree which yields the maximum sum. The path may start and end at any node.",
          solution: `def max_path_sum(root):
    res = [float('-inf')]
    def dfs(node):
        if not node: return 0
        left = max(0, dfs(node.left))
        right = max(0, dfs(node.right))
        res[0] = max(res[0], left + right + node.val)
        return node.val + max(left, right)
    dfs(root)
    return res[0]`,
        },
        {
          id: "check-if-two-trees-are-identical",
          title: "Check if Two Trees are Identical or Not",
          content:
            "Check if two binary trees are structurally identical and have the same node values.",
          solution: `def is_identical(p, q):
    if not p and not q: return True
    if not p or not q: return False
    return (p.val == q.val and 
            is_identical(p.left, q.left) and 
            is_identical(p.right, q.right))`,
        },
        {
          id: "zigzag-traversal",
          title: "Zig Zag Traversal of Binary Tree",
          content:
            "Traverse the binary tree in a zigzag (spiral) level order: left-to-right then right-to-left alternately.",
          solution: `from collections import deque

def zigzag_level_order(root):
    if not root: return []
    res, dq, left_to_right = [], deque([root]), True
    while dq:
        level = []
        for _ in range(len(dq)):
            node = dq.popleft()
            level.append(node.val)
            if node.left: dq.append(node.left)
            if node.right: dq.append(node.right)
        if not left_to_right:
            level.reverse()
        res.append(level)
        left_to_right = not left_to_right
    return res`,
        },
        {
          id: "boundary-traversal",
          title: "Boundary Traversal of Binary Tree",
          content:
            "Return all boundary nodes in anti-clockwise direction starting from root. Include left boundary, leaves, and right boundary.",
          solution: `def boundary_traversal(root):
    def is_leaf(node): return not node.left and not node.right
    def left_boundary(node, res):
        while node:
            if not is_leaf(node): res.append(node.val)
            node = node.left if node.left else node.right

    def right_boundary(node, res):
        stack = []
        while node:
            if not is_leaf(node): stack.append(node.val)
            node = node.right if node.right else node.left
        while stack: res.append(stack.pop())

    def add_leaves(node, res):
        if is_leaf(node):
            res.append(node.val)
            return
        if node.left: add_leaves(node.left, res)
        if node.right: add_leaves(node.right, res)

    if not root: return []
    res = [root.val] if not is_leaf(root) else []
    left_boundary(root.left, res)
    add_leaves(root, res)
    right_boundary(root.right, res)
    return res`,
        },
        {
          id: "vertical-order-traversal",
          title: "Vertical Order Traversal of Binary Tree",
          content:
            "Group and print tree nodes column by column from left to right.",
          solution: `from collections import defaultdict, deque

def vertical_order(root):
    if not root: return []
    col_table = defaultdict(list)
    queue = deque([(root, 0)])
    while queue:
        node, col = queue.popleft()
        col_table[col].append(node.val)
        if node.left: queue.append((node.left, col - 1))
        if node.right: queue.append((node.right, col + 1))
    return [col_table[i] for i in sorted(col_table)]`,
        },
        {
          id: "top-view-of-binary-tree",
          title: "Top View of Binary Tree",
          content:
            "Print the top view of a binary tree — the first node at each horizontal distance when viewed from the top.",
          solution: `from collections import deque

def top_view(root):
    if not root: return []
    top = {}
    queue = deque([(root, 0)])
    while queue:
        node, hd = queue.popleft()
        if hd not in top:
            top[hd] = node.val
        if node.left: queue.append((node.left, hd - 1))
        if node.right: queue.append((node.right, hd + 1))
    return [top[key] for key in sorted(top)]`,
        },
        {
          id: "bottom-view-of-binary-tree",
          title: "Bottom View of Binary Tree",
          content:
            "Print the bottom view of a binary tree — the last node at each horizontal distance.",
          solution: `from collections import deque

def bottom_view(root):
    if not root: return []
    bottom = {}
    queue = deque([(root, 0)])
    while queue:
        node, hd = queue.popleft()
        bottom[hd] = node.val
        if node.left: queue.append((node.left, hd - 1))
        if node.right: queue.append((node.right, hd + 1))
    return [bottom[key] for key in sorted(bottom)]`,
        },
        {
          id: "left-right-view-of-binary-tree",
          title: "Right/Left View of Binary Tree",
          content:
            "Right View: Last node at each level. Left View: First node at each level.",
          solution: `def left_view(root):
    if not root: return []
    res = []
    queue = deque([root])
    while queue:
        res.append(queue[0].val)
        for _ in range(len(queue)):
            node = queue.popleft()
            if node.left: queue.append(node.left)
            if node.right: queue.append(node.right)
    return res

def right_view(root):
    if not root: return []
    res = []
    queue = deque([root])
    while queue:
        res.append(queue[-1].val)
        for _ in range(len(queue)):
            node = queue.popleft()
            if node.left: queue.append(node.left)
            if node.right: queue.append(node.right)
    return res`,
        },
        {
          id: "symmetric-binary-tree",
          title: "Symmetric Binary Tree",
          content:
            "Check whether a binary tree is a mirror of itself (symmetric around its center).",
          solution: `def is_symmetric(root):
    def is_mirror(t1, t2):
        if not t1 and not t2: return True
        if not t1 or not t2: return False
        return (t1.val == t2.val and
                is_mirror(t1.left, t2.right) and
                is_mirror(t1.right, t2.left))
    return is_mirror(root, root)`,
        },
      ],
      "Lec 3 : Hard Probelms": [
        {
          id: "root-to-node-path-in-binary-tree",
          title: "Root to Node Path in Binary Tree",
          content:
            "Find the path from the root node to a given target node in the binary tree.",
          solution: `def root_to_node_path(root, target, path):
    if not root:
        return False
    path.append(root.val)
    if root.val == target:
        return True
    if (root_to_node_path(root.left, target, path) or
        root_to_node_path(root.right, target, path)):
        return True
    path.pop()
    return False`,
        },
        {
          id: "lca-in-binary-tree",
          title: "LCA in Binary Tree",
          content:
            "Find the Lowest Common Ancestor (LCA) of two nodes in a binary tree.",
          solution: `def lca(root, p, q):
    if not root or root == p or root == q:
        return root
    left = lca(root.left, p, q)
    right = lca(root.right, p, q)
    if left and right:
        return root
    return left if left else right`,
        },
        {
          id: "maximum-width-of-a-binary-tree",
          title: "Maximum Width of a Binary Tree",
          content:
            "Return the maximum width of the binary tree, i.e., the maximum number of nodes at any level.",
          solution: `from collections import deque

def width_of_binary_tree(root):
    max_width = 0
    queue = deque([(root, 0)])
    while queue:
        level_len = len(queue)
        _, start = queue[0]
        for _ in range(level_len):
            node, idx = queue.popleft()
            if node.left: queue.append((node.left, 2 * idx))
            if node.right: queue.append((node.right, 2 * idx + 1))
        max_width = max(max_width, idx - start + 1)
    return max_width`,
        },
        {
          id: "check-for-children-sum-property",
          title: "Check for Children Sum Property",
          content:
            "Check whether every node's value is equal to the sum of its left and right child (if they exist).",
          solution: `def children_sum_property(root):
    if not root or (not root.left and not root.right):
        return True
    left = root.left.val if root.left else 0
    right = root.right.val if root.right else 0
    return (root.val == left + right and
            children_sum_property(root.left) and
            children_sum_property(root.right))`,
        },
        {
          id: "nodes-at-distance-k",
          title: "Print All the Nodes at a Distance of K in a Binary Tree",
          content:
            "Given a target node and integer K, return all nodes that are K distance from the target.",
          solution: `from collections import defaultdict, deque

def distance_k(root, target, k):
    graph = defaultdict(list)
    def build_graph(node, parent):
        if node:
            if parent:
                graph[node.val].append(parent.val)
                graph[parent.val].append(node.val)
            build_graph(node.left, node)
            build_graph(node.right, node)

    build_graph(root, None)
    visited = set()
    queue = deque([(target.val, 0)])
    res = []
    while queue:
        node, dist = queue.popleft()
        if node in visited: continue
        visited.add(node)
        if dist == k:
            res.append(node)
        for nei in graph[node]:
            if nei not in visited:
                queue.append((nei, dist + 1))
    return res`,
        },
        {
          id: "burn-binary-tree",
          title: "Minimum Time Taken to Burn the Binary Tree from a Node",
          content:
            "Given a node, find how much time it takes to burn the entire tree when the fire starts from that node and spreads to adjacent nodes in 1 unit time.",
          solution: `# Similar graph + BFS approach with time tracking
# Implementation is a variant of the above problem with level-by-level BFS`,
        },
        {
          id: "count-total-nodes-in-complete-binary-tree",
          title: "Count Total Nodes in a Complete Binary Tree",
          content:
            "Count the total number of nodes in a complete binary tree in less than O(n) time.",
          solution: `def count_nodes(root):
    def left_height(node):
        h = 0
        while node:
            h += 1
            node = node.left
        return h

    def right_height(node):
        h = 0
        while node:
            h += 1
            node = node.right
        return h

    if not root:
        return 0
    lh, rh = left_height(root), right_height(root)
    if lh == rh:
        return (1 << lh) - 1
    return 1 + count_nodes(root.left) + count_nodes(root.right)`,
        },
        {
          id: "requirements-to-construct-unique-binary-tree",
          title:
            "Requirements Needed to Construct a Unique Binary Tree (Theory)",
          content:
            "You cannot construct a unique binary tree from only inorder or only preorder/postorder. To uniquely construct a binary tree, you need:\n\n- Inorder + Preorder\n- Inorder + Postorder\n\nYou cannot uniquely build a tree with just Preorder + Postorder.\n\nThese help determine left and right subtree structures.",
          solution: "// Theory concept — no code required.",
        },
        {
          id: "construct-binary-tree-from-inorder-preorder",
          title: "Construct Binary Tree from Inorder and Preorder",
          content:
            "Build a binary tree using its inorder and preorder traversal arrays.",
          solution: `def build_tree(preorder, inorder):
    inorder_map = {val: idx for idx, val in enumerate(inorder)}
    pre_idx = [0]

    def helper(in_left, in_right):
        if in_left > in_right:
            return None
        root_val = preorder[pre_idx[0]]
        root = TreeNode(root_val)
        pre_idx[0] += 1
        root.left = helper(in_left, inorder_map[root_val] - 1)
        root.right = helper(inorder_map[root_val] + 1, in_right)
        return root

    return helper(0, len(inorder) - 1)`,
        },
        {
          id: "construct-binary-tree-from-inorder-postorder",
          title: "Construct Binary Tree from Postorder and Inorder Traversal",
          content:
            "Build a binary tree using its postorder and inorder traversal arrays.",
          solution: `def build_tree(postorder, inorder):
    inorder_map = {val: idx for idx, val in enumerate(inorder)}
    post_idx = [len(postorder) - 1]

    def helper(in_left, in_right):
        if in_left > in_right:
            return None
        root_val = postorder[post_idx[0]]
        root = TreeNode(root_val)
        post_idx[0] -= 1
        root.right = helper(inorder_map[root_val] + 1, in_right)
        root.left = helper(in_left, inorder_map[root_val] - 1)
        return root

    return helper(0, len(inorder) - 1)`,
        },
        {
          id: "serialize-deserialize-binary-tree",
          title: "Serialize and Deserialize Binary Tree",
          content:
            "Convert a binary tree to a string (serialization) and rebuild it back (deserialization).",
          solution: `class Codec:
    def serialize(self, root):
        if not root: return 'N'
        return f"{root.val},{self.serialize(root.left)},{self.serialize(root.right)}"

    def deserialize(self, data):
        def build(nodes):
            val = next(nodes)
            if val == 'N': return None
            node = TreeNode(int(val))
            node.left = build(nodes)
            node.right = build(nodes)
            return node
        return build(iter(data.split(',')))`,
        },
        {
          id: "morris-preorder-traversal",
          title: "Morris Preorder Traversal of a Binary Tree",
          content:
            "Traverse binary tree in preorder without recursion and without using a stack (O(1) space).",
          solution: `def morris_preorder(root):
    curr = root
    while curr:
        if not curr.left:
            print(curr.val)
            curr = curr.right
        else:
            pre = curr.left
            while pre.right and pre.right != curr:
                pre = pre.right
            if not pre.right:
                print(curr.val)
                pre.right = curr
                curr = curr.left
            else:
                pre.right = None
                curr = curr.right`,
        },
        {
          id: "morris-inorder-traversal",
          title: "Morris Inorder Traversal of a Binary Tree",
          content:
            "Traverse binary tree in inorder without recursion or stack, using Morris Traversal.",
          solution: `def morris_inorder(root):
    curr = root
    while curr:
        if not curr.left:
            print(curr.val)
            curr = curr.right
        else:
            pre = curr.left
            while pre.right and pre.right != curr:
                pre = pre.right
            if not pre.right:
                pre.right = curr
                curr = curr.left
            else:
                pre.right = None
                print(curr.val)
                curr = curr.right`,
        },
        {
          id: "flatten-binary-tree-to-linked-list",
          title: "Flatten Binary Tree to Linked List",
          content:
            "Flatten the binary tree into a linked list in-place using preorder traversal order.",
          solution: `def flatten(root):
    curr = root
    while curr:
        if curr.left:
            prev = curr.left
            while prev.right:
                prev = prev.right
            prev.right = curr.right
            curr.right = curr.left
            curr.left = None
        curr = curr.right`,
        },
      ],
    },
  },
  {
    stepTitle: "Step 9: Binary Search Tree",
    sections: {
      "Lec 1 : Problems in BST": [
        {
          id: "introduction-to-bst",
          title: "Introduction to Binary Search Tree",
          content:
            "A Binary Search Tree (BST) is a binary tree in which for each node, the left subtree contains values less than the node, and the right subtree contains values greater than the node. BSTs provide efficient search, insertion, and deletion.",
          solution: "// This is a theoretical concept. No code required.",
        },
        {
          id: "search-in-bst",
          title: "Search in a Binary Search Tree",
          content: "Given a value, determine if it exists in the BST.",
          solution: `def search_bst(root, val):
    if not root or root.val == val:
        return root
    if val < root.val:
        return search_bst(root.left, val)
    return search_bst(root.right, val)`,
        },
        {
          id: "find-min-max-in-bst",
          title: "Find Min/Max in BST",
          content:
            "Find the node with the minimum and maximum value in the BST.",
          solution: `def find_min(root):
    while root.left:
        root = root.left
    return root.val

def find_max(root):
    while root.right:
        root = root.right
    return root.val`,
        },
        {
          id: "ceil-in-bst",
          title: "Ceil in a Binary Search Tree",
          content:
            "Find the smallest value in BST that is greater than or equal to the target value.",
          solution: `def find_ceil(root, x):
    ceil = -1
    while root:
        if root.val == x:
            return root.val
        if root.val < x:
            root = root.right
        else:
            ceil = root.val
            root = root.left
    return ceil`,
        },
        {
          id: "floor-in-bst",
          title: "Floor in a Binary Search Tree",
          content:
            "Find the greatest value in BST that is less than or equal to the target value.",
          solution: `def find_floor(root, x):
    floor = -1
    while root:
        if root.val == x:
            return root.val
        if root.val > x:
            root = root.left
        else:
            floor = root.val
            root = root.right
    return floor`,
        },
        {
          id: "insert-node-in-bst",
          title: "Insert a Given Node in Binary Search Tree",
          content:
            "Insert a new value into the BST while maintaining its properties.",
          solution: `def insert_node(root, val):
    if not root:
        return TreeNode(val)
    if val < root.val:
        root.left = insert_node(root.left, val)
    else:
        root.right = insert_node(root.right, val)
    return root`,
        },
        {
          id: "delete-node-in-bst",
          title: "Delete a Node in Binary Search Tree",
          content:
            "Remove a node from the BST while preserving its properties.",
          solution: `def delete_node(root, key):
    if not root: return None
    if key < root.val:
        root.left = delete_node(root.left, key)
    elif key > root.val:
        root.right = delete_node(root.right, key)
    else:
        if not root.left: return root.right
        if not root.right: return root.left
        temp = root.right
        while temp.left:
            temp = temp.left
        root.val = temp.val
        root.right = delete_node(root.right, temp.val)
    return root`,
        },
        {
          id: "kth-smallest-largest-in-bst",
          title: "Find K-th Smallest/Largest Element in BST",
          content:
            "Find the k-th smallest or largest element using in-order traversal.",
          solution: `def kth_smallest(root, k):
    stack = []
    while root or stack:
        while root:
            stack.append(root)
            root = root.left
        root = stack.pop()
        k -= 1
        if k == 0: return root.val
        root = root.right`,
        },
        {
          id: "check-if-bst",
          title: "Check if a Tree is a BST or BT",
          content: "Verify if a binary tree is a valid BST.",
          solution: `def is_bst(root, low=float('-inf'), high=float('inf')):
    if not root:
        return True
    if not (low < root.val < high):
        return False
    return (is_bst(root.left, low, root.val) and
            is_bst(root.right, root.val, high))`,
        },
        {
          id: "lca-in-bst",
          title: "Lowest Common Ancestor (LCA) in Binary Search Tree",
          content: "Find the LCA of two nodes in a BST using BST properties.",
          solution: `def lca_bst(root, p, q):
    while root:
        if p.val < root.val and q.val < root.val:
            root = root.left
        elif p.val > root.val and q.val > root.val:
            root = root.right
        else:
            return root`,
        },
        {
          id: "construct-bst-from-preorder",
          title: "Construct a BST from a Preorder Traversal",
          content: "Build a BST from its preorder traversal using bounds.",
          solution: `def build_bst(preorder):
    idx = [0]
    def helper(bound=float('inf')):
        if idx[0] == len(preorder) or preorder[idx[0]] > bound:
            return None
        root = TreeNode(preorder[idx[0]])
        idx[0] += 1
        root.left = helper(root.val)
        root.right = helper(bound)
        return root
    return helper()`,
        },
        {
          id: "inorder-successor-predecessor-bst",
          title: "Inorder Successor/Predecessor in BST",
          content:
            "Find the next or previous node in in-order traversal for a given node.",
          solution: `def inorder_successor(root, p):
    succ = None
    while root:
        if p.val < root.val:
            succ = root
            root = root.left
        else:
            root = root.right
    return succ

def inorder_predecessor(root, p):
    pred = None
    while root:
        if p.val > root.val:
            pred = root
            root = root.right
        else:
            root = root.left
    return pred`,
        },
        {
          id: "merge-two-bsts",
          title: "Merge Two BSTs",
          content: "Merge two BSTs and return a sorted list of all elements.",
          solution: `def inorder(root, res):
    if root:
        inorder(root.left, res)
        res.append(root.val)
        inorder(root.right, res)

def merge_bsts(root1, root2):
    list1, list2 = [], []
    inorder(root1, list1)
    inorder(root2, list2)
    return sorted(list1 + list2)`,
        },
        {
          id: "two-sum-in-bst",
          title: "Two Sum in BST | Check if There Exists a Pair with Sum K",
          content:
            "Check if there exists two elements in the BST such that their sum equals a given target.",
          solution: `def find_target(root, k):
    seen = set()
    def dfs(node):
        if not node: return False
        if k - node.val in seen:
            return True
        seen.add(node.val)
        return dfs(node.left) or dfs(node.right)
    return dfs(root)`,
        },
        {
          id: "recover-bst",
          title: "Recover BST | Correct BST with Two Nodes Swapped",
          content: "Fix a BST where two nodes have been swapped by mistake.",
          solution: `def recover_tree(root):
    x = y = prev = None
    def inorder(node):
        nonlocal x, y, prev
        if not node: return
        inorder(node.left)
        if prev and node.val < prev.val:
            y = node
            if not x: x = prev
        prev = node
        inorder(node.right)
    inorder(root)
    x.val, y.val = y.val, x.val`,
        },
        {
          id: "largest-bst-in-binary-tree",
          title: "Largest BST in Binary Tree",
          content: "Find the size of the largest subtree which is a BST.",
          solution: `def largest_bst_subtree(root):
    def helper(node):
        if not node:
            return (float('inf'), float('-inf'), 0, True)
        l_min, l_max, l_size, l_bst = helper(node.left)
        r_min, r_max, r_size, r_bst = helper(node.right)
        if l_bst and r_bst and l_max < node.val < r_min:
            size = l_size + r_size + 1
            return (min(node.val, l_min), max(node.val, r_max), size, True)
        return (0, 0, max(l_size, r_size), False)
    return helper(root)[2]`,
        },
      ],
    },
  },
  {
    stepTitle: "Step 10: DP",
    sections: { 
      "Lec 1 : Introduction to DP": [],
      "Lec 2 : DP on Subsequences": [],
      "Lec 3 : DP on Grids": [],
      "Lec 4 : DP on Trees": [],
      "Lec 5 : DP on Stocks": [],
      "Lec 6 : DP on Fibonacci Numbers": [],
      "Lec 7 : DP on Counting": [],
      "Lec 8 : DP on Partitions": [],
    },
  },
];




// ✅ Database config
const dbConfig = {
  host: "localhost",
  user: "root",
  password: "govindaaaa", // change this
  database: "capstone",
};

async function seed() {
  const conn = await mysql.createConnection(dbConfig);

  // Make sure table has enough space for long text
  await conn.query(`
    ALTER TABLE question
      MODIFY description TEXT,
      MODIFY solution TEXT;
  `);

  for (const step of steps) {
    const topic = step.stepTitle;

    for (const [diff, questions] of Object.entries(step.sections)) {
      for (const q of questions) {
        const sql = `
          INSERT INTO question (title, diff, topic, description, solution)
          VALUES (?, ?, ?, ?, ?)
        `;
        const values = [q.title, diff, topic, q.content, q.solution];

        await conn.execute(sql, values);
        console.log(`✅ Inserted: ${q.title}`);
      }
    }
  }

  await conn.end();
  console.log("🎉 All questions inserted successfully!");
}

seed().catch((err) => {
  console.error("❌ Error inserting data:", err);
});
