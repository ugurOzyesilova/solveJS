export const questions = [
    {
        title: "Two Sum",
        content: "Given an array of integers nums and an integer target, return pairs of numbers from the array that add up to the target sum.",
        example: [
            {
                input: "nums = [2, 7, 11, 15], target = 9",
                output: "[[2, 7], [7 , 2]]",
                explanation: "The pair [2, 7] and [7 , 2] adds up to the target sum of 9.",
            },
            {
                input: "nums = [3, 2, 4], target = 6",
                output: "[[3,3],[2,4],[4,2]]",
                explanation: "The pair [2, 4], [3, 3] and [4, 2] adds up to the target sum of 6.",
            },
        ],
    },

    {
        title: "Reverse Integer",
        content: "Given a 32-bit signed integer, reverse digits of an integer.",
        example: [
            {
                input: "x = 123",
                output: "321",
                explanation: "The reverse of 123 is 321.",
            },
            {
                input: "x = -123",
                output: "-321",
                explanation: "The reverse of -123 is -321.",
            },
        ],
    },
    {
        title: "Palindrome Number",
        content: "Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.",
        example: [
            {
                input: "x = 121",
                output: "true",
                explanation: "121 is a palindrome.",
            },
            {
                input: "x = -121",
                output: "false",
                explanation: "-121 is not a palindrome.",
            },
        ],
    },
    {
        title: "Roman to Integer",
        content: "Given a roman numeral, convert it to an integer. Input is guaranteed to be within the range from 1 to 3999.",
        example: [
            {
                input: "s = 'III'",
                output: "3",
                explanation: "III represents 3 in Roman numerals.",
            },
            {
                input: "s = 'IX'",
                output: "9",
                explanation: "IX represents 9 in Roman numerals.",
            },
        ],
    },
    {
        title: "Valid Parentheses",
        content: "Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.",
        example: [
            {
                input: "s = '()'",
                output: "true",
                explanation: "The string contains a valid pair of parentheses.",
            },
            {
                input: "s = '()[]{}'",
                output: "true",
                explanation: "The string contains valid pairs of parentheses, brackets, and braces.",
            },
            {
                input: "s = '(]'",
                output: "false",
                explanation: "The string contains an invalid pair of parentheses.",
            },
        ],
    },
    {
        title: "Longest Common Prefix",
        content: "Write a function to find the longest common prefix string amongst an array of strings. If there is no common prefix, return an empty string ''.",
        example: [
            {
                input: "strs = ['flower','flow','flight']",
                output: "'fl'",
                explanation: "The longest common prefix among the given strings is 'fl'.",
            },
            {
                input: "strs = ['dog','racecar','car']",
                output: "''",
                explanation: "There is no common prefix among the given strings.",
            },
        ],
    },
    {
        title: "Merge Two Sorted Lists",
        content: "Merge two sorted linked lists and return it as a sorted list. The list should be made by splicing together the nodes of the first two lists.",
        example: [
            {
                input: "l1 = [1,2,4], l2 = [1,3,4]",
                output: "[1,1,2,3,4,4]",
                explanation: "The merged sorted list is [1,1,2,3,4,4].",
            },
            {
                input: "l1 = [], l2 = []",
                output: "[]",
                explanation: "Both lists are empty, so the merged list is also empty.",
            },
        ],
    },
    {
        title: "Remove Duplicates from Sorted Array",
        content: "Given a sorted array nums, remove the duplicates in-place such that each element appears only once and returns the new length.",
        example: [
            {
                input: "nums = [1,1,2]",
                output: "2",
                explanation: "After removing the duplicates, the array becomes [1,2] with a length of 2.",
            },
            {
                input: "nums = [0,0,1,1,1,2,2,3,3,4]",
                output: "5",
                explanation: "After removing the duplicates, the array becomes [0,1,2,3,4] with a length of 5.",
            },
        ],
    },
    {
        title: "Valid Anagram",
        content: "Given two strings s and t, return true if t is an anagram of s, and false otherwise.",
        example: [
            {
                input: `s = "anagram", t = "nagaram"`,
                output: "true",
                explanation: "The string 'nagaram' is an anagram of 'anagram'.",
            },
            {
                input: `s = "rat", t = "car"`,
                output: "false",
                explanation: "The string 'car' is not an anagram of 'rat'.",
            },
        ],
    },
    {
        title: "Reverse String",
        content: "Write a function that reverses a string. The input string is given as an array of characters.",
        example: [
            {
                input: `["h","e","l","l","o"]`,
                output: `["o","l","l","e","h"]`,
                explanation: "The string 'hello' is reversed to 'olleh'.",
            },
            {
                input: `["H","a","n","n","a","h"]`,
                output: `["h","a","n","n","a","H"]`,
                explanation: "The string 'Hannah' is reversed to 'hannaH'.",
            },
        ],
    },
    {
        title: "Fizz Buzz",
        content: "Write a program that outputs the string representation of numbers from 1 to n. But for multiples of three, output 'Fizz' instead of the number, and for the multiples of five, output 'Buzz'. For numbers which are multiples of both three and five, output 'FizzBuzz'.",
        example: [
            {
                input: `n = 15`,
                output: `[
          "1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"
        ]`,
                explanation: "The numbers from 1 to 15 are represented according to the Fizz Buzz rules.",
            },
            {
                input: `n = 5`,
                output: `["1","2","Fizz","4","Buzz"]`,
                explanation: "The numbers from 1 to 5 are represented according to the Fizz Buzz rules.",
            },
        ],
    },
    {
        title: "Single Number",
        content: "Given a non-empty array of integers, every element appears twice except for one. Find that single number.",
        example: [
            {
                input: `[2,2,1]`,
                output: `1`,
                explanation: "The single number is 1 as it appears only once in the array.",
            },
            {
                input: `[4,1,2,1,2]`,
                output: `4`,
                explanation: "The single number is 4 as it appears only once in the array.",
            },
        ],
    },
    {
        title: "Reverse Words in a String",
        content: "Given an input string, reverse the order of the words.",
        example: [
            {
                input: "'The sky is blue'",
                output: "'blue is sky The'",
                explanation: "The words in the string are reversed.",
            },
            {
                input: "'Hello World'",
                output: "'World Hello'",
                explanation: "The words in the string are reversed.",
            },
        ],
    },
    {
        title: "Find the Maximum Number",
        content: "Given an array of numbers, find the maximum number in the array.",
        example: [
            {
                input: "[1, 5, 3, 9, 2]",
                output: "9",
                explanation: "The maximum number in the array is 9.",
            },
            {
                input: "[10, 7, 2, 4, 6]",
                output: "10",
                explanation: "The maximum number in the array is 10.",
            },
        ],
    },
    {
        title: "Calculate the Sum",
        content: "Given an array of numbers, calculate the sum of all the numbers.",
        example: [
            {
                input: "[1, 5, 3, 9, 2]",
                output: "20",
                explanation: "The sum of all the numbers in the array is 20.",
            },
            {
                input: "[10, 7, 2, 4, 6]",
                output: "29",
                explanation: "The sum of all the numbers in the array is 29.",
            },
        ],
    },
    {
        title: "Find the Average",
        content: "Given an array of numbers, calculate the average of all the numbers.",
        example: [
            {
                input: "[1, 5, 3, 9, 2]",
                output: "4",
                explanation: "The average of all the numbers in the array is 4.",
            },
            {
                input: "[10, 7, 2, 4, 6]",
                output: "5.8",
                explanation: "The average of all the numbers in the array is 5.8.",
            },
        ],
    },
    {
        title: "Check for Even or Odd",
        content: "Given an integer, check if it is even or odd.",
        example: [
            {
                input: "6",
                output: "'Even'",
                explanation: "The integer 6 is even.",
            },
            {
                input: "9",
                output: "'Odd'",
                explanation: "The integer 9 is odd.",
            },
        ],
    },
    {
        title: "Find the GCD",
        content: "Given two positive integers, find their greatest common divisor (GCD).",
        example: [
            {
                input: "12, 18",
                output: "6",
                explanation: "The GCD of 12 and 18 is 6.",
            },
            {
                input: "24, 36",
                output: "12",
                explanation: "The GCD of 24 and 36 is 12.",
            },
        ],
    },
    {
        title: "Check for Prime Number",
        content: "Given a positive integer, check if it is a prime number.",
        example: [
            {
                input: "7",
                output: "true",
                explanation: "The number 7 is a prime number.",
            },
            {
                input: "10",
                output: "false",
                explanation: "The number 10 is not a prime number.",
            },
        ],
    },
    {
        title: "Reverse an Array",
        content: "Given an array of elements, reverse the order of the elements in the array.",
        example: [
            {
                input: "[1, 2, 3, 4, 5]",
                output: "[5, 4, 3, 2, 1]",
                explanation: "The array [1, 2, 3, 4, 5] is reversed to [5, 4, 3, 2, 1].",
            },
            {
                input: "['a', 'b', 'c', 'd']",
                output: "['d', 'c', 'b', 'a']",
                explanation: "The array ['a', 'b', 'c', 'd'] is reversed to ['d', 'c', 'b', 'a'].",
            },
        ],
    },
    {
        title: "Count Words in a String",
        content: "Given a string, count the number of words in the string. Words are separated by spaces.",
        example: [
            {
                input: "'Hello, world!'",
                output: "2",
                explanation: "The string has 2 words: 'Hello' and 'world'.",
            },
            {
                input: "'This is a sentence with multiple words.'",
                output: "6",
                explanation: "The string has 6 words: 'This', 'is', 'a', 'sentence', 'with', and 'multiple'.",
            },
        ],
    },
    {
        title: "Chunk Array",
        content: "Write a function that takes an array and a chunk size as arguments and splits the array into smaller arrays of the specified chunk size.",
        example: [
            {
                input: "array = [1, 2, 3, 4, 5], chunkSize = 2",
                output: "[[1, 2], [3, 4], [5]]",
                explanation: "The array is split into smaller arrays of size 2: [[1, 2], [3, 4], [5]].",
            },
            {
                input: "array = [1, 2, 3, 4, 5], chunkSize = 3",
                output: "[[1, 2, 3], [4, 5]]",
                explanation: "The array is split into smaller arrays of size 3: [[1, 2, 3], [4, 5]].",
            },
        ],
    },
    {
        title: "Unite Unique Arrays",
        content: "Write a function that takes multiple arrays as arguments and returns a new array containing only the unique elements from all the arrays.",
        example: [
            {
                input: "uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])",
                output: "[1, 3, 2, 5, 4]",
                explanation: "The unique elements from all the arrays are [1, 3, 2, 5, 4].",
            },
            {
                input: "uniteUnique([1, 2, 3], [5, 2, 1])",
                output: "[1, 2, 3, 5]",
                explanation: "The unique elements from all the arrays are [1, 2, 3, 5].",
            },
        ],
    },
    {
        title: "Difference Array",
        content: "Write a function that takes two numbers as arguments and returns an array of numbers between those two numbers (inclusive). Additionally, the function should return an array containing the largest and smallest numbers from the generated array, as well as the difference between the largest and smallest numbers.",
        example: [
            {
                input: "diff(1, 5)",
                output: "[1, 2, 3, 4, 5]",
                explanation: "The numbers between 1 and 5 (inclusive) are [1, 2, 3, 4, 5].",
            },
            {
                input: "diff(-3, 2)",
                output: "[-3, -2, -1, 0, 1, 2]",
                explanation: "The numbers between -3 and 2 (inclusive) are [-3, -2, -1, 0, 1, 2].",
            },
            {
                input: "diff(1, 5)",
                output: "[1, 5, 4]",
                explanation: "The largest number is 5, the smallest number is 1, and the difference is 4.",
            },
        ],
    },
    {
        title: "Seek and Destroy",
        content: "Write a function that takes an initial array and any number of additional arguments. The function should remove all elements from the initial array that are of the same value as the additional arguments and return the modified array.",
        example: [
            {
                input: "seekAndDestroy([1, 2, 3, 1, 2, 3], 2, 3)",
                output: "[1, 1]",
                explanation: "The elements 2 and 3 are removed from the initial array, resulting in [1, 1].",
            },
            {
                input: "seekAndDestroy([1, 2, 3, 4, 5], 3, 5)",
                output: "[1, 2, 4]",
                explanation: "The elements 3 and 5 are removed from the initial array, resulting in [1, 2, 4].",
            },
        ],
    },
    {
        title: "Remove Duplicates",
        content: "Write a function that takes an array and removes all duplicate elements, returning a new array with unique elements only.",
        example: [
            {
                input: "arr = [1, 2, 2, 3, 4, 4, 5]",
                output: "[1, 2, 3, 4, 5]",
                explanation: "The duplicate elements (2, 4) are removed, resulting in [1, 2, 3, 4, 5].",
            },
            {
                input: "arr = [7, 3, 7, 0, 1, 2, 1, 0]",
                output: "[7, 3, 0, 1, 2]",
                explanation: "The duplicate elements (7, 1, 0) are removed, resulting in [7, 3, 0, 1, 2].",
            },
        ],
    },
    {
        title: "Array Rotation",
        content: "Given an array and a positive integer k, rotate the array k times to the right. Elements at the end should wrap around to the beginning of the array.",
        example: [
            {
                input: "arr = [1, 2, 3, 4, 5], k = 3",
                output: "[3, 4, 5, 1, 2]",
                explanation: "The array is rotated 3 times to the right, resulting in [3, 4, 5, 1, 2].",
            },
            {
                input: "arr = [7, 8, 9, 10, 11], k = 2",
                output: "[10, 11, 7, 8, 9]",
                explanation: "The array is rotated 2 times to the right, resulting in [10, 11, 7, 8, 9].",
            },
        ],
    },
    {
        title: "Array Sum",
        content: "Write a function that takes an array of numbers and returns the sum of all the numbers in the array.",
        example: [
            {
                input: "[1, 2, 3, 4, 5]",
                output: "15",
                explanation: "The sum of the numbers in the array is 15.",
            },
            {
                input: "[-1, 0, 1, -10, 5]",
                output: "-5",
                explanation: "The sum of the numbers in the array is -5.",
            },
        ],
    },
    {
        title: "Array Average",
        content: "Write a function that takes an array of numbers and returns the average of all the numbers in the array.",
        example: [
            {
                input: "[2, 4, 6, 8, 10]",
                output: "6",
                explanation: "The average of the numbers in the array is 6.",
            },
            {
                input: "[1, 3, 5, 7, 9]",
                output: "5",
                explanation: "The average of the numbers in the array is 5.",
            },
        ],
    },
    {
        title: "Array Intersection",
        content: "Write a function that takes two arrays and returns a new array containing the common elements between the two arrays.",
        example: [
            {
                input: "[1, 2, 3, 4], [3, 4, 5, 6]",
                output: "[3, 4]",
                explanation: "The common elements between the two arrays are 3 and 4.",
            },
            {
                input: "['apple', 'banana', 'orange'], ['banana', 'grape', 'kiwi']",
                output: "['banana']",
                explanation: "The common element between the two arrays is 'banana'.",
            },
        ],
    },
    {
        title: "Array Flatten",
        content: "Write a function that takes a nested array and returns a new array with all the elements flattened.",
        example: [
            {
                input: "[1, [2, [3, 4], 5], 6]",
                output: "[1, 2, 3, 4, 5, 6]",
                explanation: "The nested array is flattened to [1, 2, 3, 4, 5, 6].",
            },
            {
                input: "[['apple', 'banana'], ['orange', 'grape'], ['kiwi', 'melon']]",
                output: "['apple', 'banana', 'orange', 'grape', 'kiwi', 'melon']",
                explanation: "The nested array is flattened to ['apple', 'banana', 'orange', 'grape', 'kiwi', 'melon'].",
            },
        ],
    },
    {
        title: "Array Difference",
        content: "Write a function that takes two arrays and returns a new array with the elements that are present in the first array but not in the second array.",
        example: [
            {
                input: "[1, 2, 3, 4, 5], [3, 4, 5, 6]",
                output: "[1, 2]",
                explanation: "The elements present in the first array but not in the second array are 1 and 2.",
            },
            {
                input: "['apple', 'banana', 'orange'], ['banana', 'grape', 'kiwi']",
                output: "['apple', 'orange']",
                explanation: "The elements present in the first array but not in the second array are 'apple' and 'orange'.",
            },
        ],
    },
    {
        title: "Title Case Sentence",
        content: "Write a function that takes a sentence and converts it to title case, where the first letter of each word is capitalized and the remaining letters are in lowercase.",
        example: [
            {
                input: "'hello world'",
                output: "'Hello World'",
                explanation: "The sentence 'hello world' is converted to title case as 'Hello World'.",
            },
            {
                input: "'the quick brown fox'",
                output: "'The Quick Brown Fox'",
                explanation: "The sentence 'the quick brown fox' is converted to title case as 'The Quick Brown Fox'.",
            },
        ],
    },
    {
        title: "String Compression",
        content: "Write a function that takes a string and compresses it by replacing repeated characters with the character followed by the count of repetitions.",
        example: [
            {
                input: "'aabcccccaaa'",
                output: "'a2b1c5a3'",
                explanation: "The string 'aabcccccaaa' is compressed to 'a2b1c5a3'.",
            },
            {
                input: "'abc'",
                output: "'abc'",
                explanation: "The string 'abc' remains unchanged as it has no repeated characters.",
            },
        ],
    },
    {
        title: "Longest String Without Repetation",
        content: "Write a function that takes a string and finds the length of the longest substring without repeating characters.",
        example: [
            {
                input: "'abcabcbb'",
                output: "3",
                explanation: "The longest substring without repeating characters is 'abc', which has a length of 3.",
            },
            {
                input: "'pwwkew'",
                output: "3",
                explanation: "The longest substring without repeating characters is 'wke', which has a length of 3.",
            },
        ],
    },
    {
        title: "Find Missing Number",
        content: "Write a function that takes an array of unique numbers from 1 to n, with one number missing, and returns the missing number.",
        example: [
            {
                input: "[1, 2, 4, 5, 6]",
                output: "3",
                explanation: "The missing number in the array [1, 2, 4, 5, 6] is 3.",
            },
            {
                input: "[1, 3, 4, 5]",
                output: "2",
                explanation: "The missing number in the array [1, 3, 4, 5] is 2.",
            },
        ],
    },
    {
        title: "Is Pangram",
        content: "Write a function that takes a string and returns true if it is a pangram (contains every letter of the alphabet at least once), and false otherwise.",
        example: [
            {
                input: "'The quick brown fox jumps over the lazy dog.'",
                output: "true",
                explanation: "The string 'The quick brown fox jumps over the lazy dog.' is a pangram.",
            },
            {
                input: "'Hello, world!'",
                output: "false",
                explanation: "The string 'Hello, world!' is not a pangram.",
            },
        ],
    },
    {
        title: "Hamming Distance",
        content: "Write a function that calculates the Hamming distance between two strings of equal length. The Hamming distance is the number of positions at which the corresponding characters in the two strings are different.",
        example: [
            {
                input: "'karolin', 'kathrin'",
                output: "3",
                explanation: "The strings 'karolin' and 'kathrin' differ at positions 2, 4, and 5.",
            },
            {
                input: "'1011101', '1001001'",
                output: "2",
                explanation: "The strings '1011101' and '1001001' differ at positions 3 and 7.",
            },
        ],
    }, {
        title: "Num Difference in Given Array",
        content: "Write a function that takes an array of numbers as input and returns the difference between the smallest and largest numbers in the array.",
        example: [
            {
                input: "[1, 5, 7, 3, 9]",
                output: "8",
                explanation: "The smallest number is 1 and the largest number is 9. The difference is 8.",
            },
            {
                input: "[10, 20, 30, 40, 50]",
                output: "40",
                explanation: "The smallest number is 10 and the largest number is 50. The difference is 40.",
            },
        ],
    },
    {
        title: "Sorted Unions",
        content: "Write a function that takes two or more arrays as input and returns the sorted union of the arrays, removing any duplicate values.",
        example: [
            {
                input: "[1, 2, 3], [4, 5, 6], [2, 3, 7]",
                output: "[1, 2, 3, 4, 5, 6, 7]",
                explanation: "The sorted union of the arrays is [1, 2, 3, 4, 5, 6, 7].",
            },
            {
                input: "[1, 2, 2], [3, 4, 5], [4, 5, 6]",
                output: "[1, 2, 3, 4, 5, 6]",
                explanation: "The sorted union of the arrays is [1, 2, 3, 4, 5, 6].",
            },
        ],
    },
    {
        title: "Triple Add Function",
        content: "Write a function that takes three numbers as input and returns the sum of the three numbers multiplied by the product of the three numbers.",
        example: [
            {
                input: "2, 3, 4",
                output: "60",
                explanation: "The sum of 2, 3, and 4 is 9. The product of 2, 3, and 4 is 24. The result is 9 * 24 = 60.",
            },
            {
                input: "5, 5, 5",
                output: "375",
                explanation: "The sum of 5, 5, and 5 is 15. The product of 5, 5, and 5 is 125. The result is 15 * 125 = 375.",
            },
        ],
    },
    {
        title: "Sum All Primes",
        content: "Write a function that takes a number as input and returns the sum of all prime numbers less than or equal to that number.",
        example: [
            {
                input: "10",
                output: "17",
                explanation: "The prime numbers less than or equal to 10 are 2, 3, 5, and 7. Their sum is 17.",
            },
            {
                input: "20",
                output: "77",
                explanation: "The prime numbers less than or equal to 20 are 2, 3, 5, 7, 11, 13, 17, and 19. Their sum is 77.",
            },
        ],
    },
    {
        title: "Title Case",
        content: "Write a function that takes a string and converts it to title case (capitalize the first letter of each word).",
        example: [
            {
                input: "'the quick brown fox'",
                output: "'The Quick Brown Fox'",
                explanation: "The string 'the quick brown fox' converted to title case is 'The Quick Brown Fox'.",
            },
            {
                input: "'hello world'",
                output: "'Hello World'",
                explanation: "The string 'hello world' converted to title case is 'Hello World'.",
            },
        ],
    },


];