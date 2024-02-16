import { errorHandler } from "../utils/errorHandler.js";

const data = [
    {
        solution: "https://youtube.com",
        diffculity: "MEDIUM",
        status: "Status",
        title: "Two Sum",
    },
    {
        solution: "https://youtube.com",
        diffculity: "MEDIUM",
        status: "Status",
        title: "Add Two Numbers",
    },
    {
        solution: "https://youtube.com",
        diffculity: "HARD",
        status: "Status",
        title: "Longest Substring Without Repeating Characters",
    },
    {
        solution: "https://youtube.com",
        diffculity: "HARD",
        status: "Status",
        title: "Median of Two Sorted Arrays",
    },
    {
        solution: "https://youtube.com",
        diffculity: "MEDIUM",
        status: "Status",
        title: "Longest Palindromic Substring",
    },
    {
        solution: "https://youtube.com",
        diffculity: "HARD",
        status: "Status",
        title: "Zigzag Conversion",
    },
    {
        solution: "https://youtube.com",
        diffculity: "MEDIUM",
        status: "Status",
        title: "Reverse Integer",
    },
    {
        solution: "https://youtube.com",
        diffculity: "HARD",
        status: "Status",
        title: "String to Integer (atoi)",
    },
    {
        solution: "https://youtube.com",
        diffculity: "EASY",
        status: "Status",
        title: "Palindrome Number",
    },
    {
        solution: "https://youtube.com",
        diffculity: "HARD",
        status: "Status",
        title: "Regular Expression Matching",
    },
    {
        solution: "https://youtube.com",
        diffculity: "MEDIUM",
        status: "Status",
        title: "Container With Most Water",
    },
    {
        solution: "https://youtube.com",
        diffculity: "HARD",
        status: "Status",
        title: "Integer to Roman",
    },
    {
        solution: "https://youtube.com",
        diffculity: "MEDIUM",
        status: "Status",
        title: "Roman to Integer",
    },
    {
        solution: "https://youtube.com",
        diffculity: "MEDIUM",
        status: "Status",
        title: "Longest Common Prefix",
    },
    {
        solution: "https://youtube.com",
        diffculity: "HARD",
        status: "Status",
        title: "3Sum",
    },
    {
        solution: "https://youtube.com",
        diffculity: "HARD",
        status: "Status",
        title: "3Sum Closest",
    },
    {
        solution: "https://youtube.com",
        diffculity: "EASY",
        status: "Status",
        title: "Letter Combinations of a Phone Number",
    },
    {
        solution: "https://youtube.com",
        diffculity: "MEDIUM",
        status: "Status",
        title: "4Sum",
    },
    {
        solution: "https://youtube.com",
        diffculity: "EASY",
        status: "Status",
        title: "Remove Nth Node From End of List",
    },
    {
        solution: "https://youtube.com",
        diffculity: "MEDIUM",
        status: "Status",
        title: "Valid Parentheses",
    },
    {
        solution: "https://youtube.com",
        diffculity: "EASY",
        status: "Status",
        title: "Merge Two Sorted Lists",
    },
    {
        solution: "https://youtube.com",
        diffculity: "HARD",
        status: "Status",
        title: "Generate Parentheses",
    },
    {
        solution: "https://youtube.com",
        diffculity: "MEDIUM",
        status: "Status",
        title: "Merge k Sorted Lists",
    },
    {
        solution: "https://youtube.com",
        diffculity: "EASY",
        status: "Status",
        title: "Swap Nodes in Pairs",
    },
    {
        solution: "https://youtube.com",
        diffculity: "EASY",
        status: "Status",
        title: "Reverse Nodes in k-Group",
    },
    {
        solution: "https://youtube.com",
        diffculity: "MEDIUM",
        status: "Status",
        title: "Remove Duplicates from Sorted Array",
    },
    {
        solution: "https://youtube.com",
        diffculity: "EASY",
        status: "Status",
        title: "Remove Element",
    },
    {
        solution: "https://youtube.com",
        diffculity: "EASY",
        status: "Status",
        title: "Find the Index of the First Occurrence in a String",
    },
    {
        solution: "https://youtube.com",
        diffculity: "MEDIUM",
        status: "Status",
        title: "Divide Two Integers",
    },
    {
        solution: "https://youtube.com",
        diffculity: "HARD",
        status: "Status",
        title: "Substring with Concatenation of All Words",
    },
    {
        solution: "https://youtube.com",
        diffculity: "MEDIUM",
        status: "Status",
        title: "Next Permutation",
    },
    {
        solution: "https://youtube.com",
        diffculity: "EASY",
        status: "Status",
        title: "Longest Valid Parentheses",
    },
    {
        solution: "https://youtube.com",
        diffculity: "HARD",
        status: "Status",
        title: "Search in Rotated Sorted Array",
    },
    {
        solution: "https://youtube.com",
        diffculity: "HARD",
        status: "Status",
        title: "Find First and Last Position of Element in Sorted Array",
    },
    {
        solution: "https://youtube.com",
        diffculity: "MEDIUM",
        status: "Status",
        title: "Search Insert Position",
    },
    {
        solution: "https://youtube.com",
        diffculity: "HARD",
        status: "Status",
        title: "Valid Sudoku",
    },
    {
        solution: "https://youtube.com",
        diffculity: "EASY",
        status: "Status",
        title: "Sudoku Solver",
    },
    {
        solution: "https://youtube.com",
        diffculity: "MEDIUM",
        status: "Status",
        title: "Count and Say",
    },
    {
        solution: "https://youtube.com",
        diffculity: "MEDIUM",
        status: "Status",
        title: "Combination Sum",
    },
    {
        solution: "https://youtube.com",
        diffculity: "MEDIUM",
        status: "Status",
        title: "Combination Sum II",
    },
    {
        solution: "https://youtube.com",
        diffculity: "MEDIUM",
        status: "Status",
        title: "First Missing Positive",
    },
    {
        solution: "https://youtube.com",
        diffculity: "HARD",
        status: "Status",
        title: "Trapping Rain Water",
    },
    {
        solution: "https://youtube.com",
        diffculity: "HARD",
        status: "Status",
        title: "Multiply Strings",
    },
    {
        solution: "https://youtube.com",
        diffculity: "EASY",
        status: "Status",
        title: "Wildcard Matching",
    },
    {
        solution: "https://youtube.com",
        diffculity: "MEDIUM",
        status: "Status",
        title: "Jump Game II",
    },
    {
        solution: "https://youtube.com",
        diffculity: "EASY",
        status: "Status",
        title: "Permutations",
    },
    {
        solution: "https://youtube.com",
        diffculity: "HARD",
        status: "Status",
        title: "Permutations II",
    },
    {
        solution: "https://youtube.com",
        diffculity: "MEDIUM",
        status: "Status",
        title: "Rotate Image",
    },
    {
        solution: "https://youtube.com",
        diffculity: "HARD",
        status: "Status",
        title: "Group Anagrams",
    },
    {
        solution: "https://youtube.com",
        diffculity: "HARD",
        status: "Status",
        title: "Pow(x, n)",
    },
    {
        solution: "https://youtube.com",
        diffculity: "EASY",
        status: "Status",
        title: "N-Queens",
    },
    {
        solution: "https://youtube.com",
        diffculity: "EASY",
        status: "Status",
        title: "N-Queens II",
    },
    {
        solution: "https://youtube.com",
        diffculity: "HARD",
        status: "Status",
        title: "Maximum Subarray",
    },
    {
        solution: "https://youtube.com",
        diffculity: "HARD",
        status: "Status",
        title: "Spiral Matrix",
    },
    {
        solution: "https://youtube.com",
        diffculity: "HARD",
        status: "Status",
        title: "Jump Game",
    },
    {
        solution: "https://youtube.com",
        diffculity: "HARD",
        status: "Status",
        title: "Merge Intervals",
    },
    {
        solution: "https://youtube.com",
        diffculity: "EASY",
        status: "Status",
        title: "Insert Interval",
    },
    {
        solution: "https://youtube.com",
        diffculity: "HARD",
        status: "Status",
        title: "Length of Last Word",
    },
    {
        solution: "https://youtube.com",
        diffculity: "MEDIUM",
        status: "Status",
        title: "Spiral Matrix II",
    },
    {
        solution: "https://youtube.com",
        diffculity: "HARD",
        status: "Status",
        title: "Permutation Sequence",
    },
    {
        solution: "https://youtube.com",
        diffculity: "HARD",
        status: "Status",
        title: "Rotate List",
    },
    {
        solution: "https://youtube.com",
        diffculity: "HARD",
        status: "Status",
        title: "Unique Paths",
    },
    {
        solution: "https://youtube.com",
        diffculity: "HARD",
        status: "Status",
        title: "Unique Paths II",
    },
    {
        solution: "https://youtube.com",
        diffculity: "HARD",
        status: "Status",
        title: "Minimum Path Sum",
    },
    {
        solution: "https://youtube.com",
        diffculity: "HARD",
        status: "Status",
        title: "Valid Number",
    },
    {
        solution: "https://youtube.com",
        diffculity: "MEDIUM",
        status: "Status",
        title: "Plus One",
    },
    {
        solution: "https://youtube.com",
        diffculity: "HARD",
        status: "Status",
        title: "Add Binary",
    },
    {
        solution: "https://youtube.com",
        diffculity: "EASY",
        status: "Status",
        title: "Text Justification",
    },
    {
        solution: "https://youtube.com",
        diffculity: "EASY",
        status: "Status",
        title: "Sqrt(x)",
    },
    {
        solution: "https://youtube.com",
        diffculity: "EASY",
        status: "Status",
        title: "Climbing Stairs",
    },
    {
        solution: "https://youtube.com",
        diffculity: "HARD",
        status: "Status",
        title: "Simplify Path",
    },
    {
        solution: "https://youtube.com",
        diffculity: "MEDIUM",
        status: "Status",
        title: "Edit Distance",
    },
    {
        solution: "https://youtube.com",
        diffculity: "HARD",
        status: "Status",
        title: "Set Matrix Zeroes",
    },
    {
        solution: "https://youtube.com",
        diffculity: "HARD",
        status: "Status",
        title: "Search a 2D Matrix",
    },
    {
        solution: "https://youtube.com",
        diffculity: "EASY",
        status: "Status",
        title: "Sort Colors",
    },
    {
        solution: "https://youtube.com",
        diffculity: "HARD",
        status: "Status",
        title: "Minimum Window Substring",
    },
    {
        solution: "https://youtube.com",
        diffculity: "HARD",
        status: "Status",
        title: "Combinations",
    },
    {
        solution: "https://youtube.com",
        diffculity: "HARD",
        status: "Status",
        title: "Subsets",
    },
    {
        solution: "https://youtube.com",
        diffculity: "MEDIUM",
        status: "Status",
        title: "Word Search",
    },
    {
        solution: "https://youtube.com",
        diffculity: "HARD",
        status: "Status",
        title: "Remove Duplicates from Sorted Array II",
    },
    {
        solution: "https://youtube.com",
        diffculity: "HARD",
        status: "Status",
        title: "Search in Rotated Sorted Array II",
    },
    {
        solution: "https://youtube.com",
        diffculity: "HARD",
        status: "Status",
        title: "Remove Duplicates from Sorted List II",
    },
    {
        solution: "https://youtube.com",
        diffculity: "EASY",
        status: "Status",
        title: "Remove Duplicates from Sorted List",
    },
    {
        solution: "https://youtube.com",
        diffculity: "EASY",
        status: "Status",
        title: "Largest Rectangle in Histogram",
    },
    {
        solution: "https://youtube.com",
        diffculity: "MEDIUM",
        status: "Status",
        title: "Maximal Rectangle",
    },
    {
        solution: "https://youtube.com",
        diffculity: "MEDIUM",
        status: "Status",
        title: "Partition List",
    },
    {
        solution: "https://youtube.com",
        diffculity: "MEDIUM",
        status: "Status",
        title: "Scramble String",
    },
    {
        solution: "https://youtube.com",
        diffculity: "MEDIUM",
        status: "Status",
        title: "Merge Sorted Array",
    },
    {
        solution: "https://youtube.com",
        diffculity: "MEDIUM",
        status: "Status",
        title: "Gray Code",
    },
    {
        solution: "https://youtube.com",
        diffculity: "MEDIUM",
        status: "Status",
        title: "Subsets II",
    },
    {
        solution: "https://youtube.com",
        diffculity: "MEDIUM",
        status: "Status",
        title: "Decode Ways",
    },
    {
        solution: "https://youtube.com",
        diffculity: "MEDIUM",
        status: "Status",
        title: "Reverse Linked List II",
    },
    {
        solution: "https://youtube.com",
        diffculity: "HARD",
        status: "Status",
        title: "Restore IP Addresses",
    },
    {
        solution: "https://youtube.com",
        diffculity: "HARD",
        status: "Status",
        title: "Binary Tree Inorder Traversal",
    },
    {
        solution: "https://youtube.com",
        diffculity: "EASY",
        status: "Status",
        title: "Unique Binary Search Trees II",
    },
    {
        solution: "https://youtube.com",
        diffculity: "MEDIUM",
        status: "Status",
        title: "Unique Binary Search Trees",
    },
    {
        solution: "https://youtube.com",
        diffculity: "HARD",
        status: "Status",
        title: "Interleaving String",
    },
    {
        solution: "https://youtube.com",
        diffculity: "HARD",
        status: "Status",
        title: "Validate Binary Search Tree",
    },
    {
        solution: "https://youtube.com",
        diffculity: "HARD",
        status: "Status",
        title: "Recover Binary Search Tree",
    },
    {
        solution: "https://youtube.com",
        diffculity: "HARD",
        status: "Status",
        title: "Same Tree",
    },
];

export const QuestionsList = (req, res, next) => {
    try {
        // pageSet will have the previous request's last page's index
        const { size, pageSet } = req.query;
        // validation
        // there may be possible error in this condition for array indexing
        if (Number.parseInt(pageSet) + Number.parseInt(size) > data.length) {
            res.status(200).json({
                data: data.slice(
                    data.length - size,
                    Number.parseInt(data.length)
                ),
                end: true,
            });
        } else {
            // we are supposed to save the data in DB and but due to complexity in pagination we will call all data at once from DB in backas end as it starts.
            res.status(200).json({
                data: data.slice(
                    pageSet,
                    Number.parseInt(pageSet) + Number.parseInt(size)
                ),
                end: false,
            });
        }
    } catch (error) {
        errorHandler(res, error);
    }
};
