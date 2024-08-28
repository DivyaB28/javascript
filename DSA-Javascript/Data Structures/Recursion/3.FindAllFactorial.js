/**
 * problem: https://www.geeksforgeeks.org/problems/find-all-factorial-numbers-less-than-or-equal-to-n3548/0?problemType=functional&difficulty%255B%255D=-1&page=1&query=problemTypefunctionaldifficulty%255B%255D-1page1
 *
 * reference : https://www.geeksforgeeks.org/find-factorial-numbers-less-equal-n/
 */
class Solution {
  // Function to calculate the factorial of a number.
  factorialNumbers(n) {
    // your code hereif()
    let ans = [];

    function factRecursion(n, fact, i) {
      i += 1;
      if (fact > n) {
        return;
      }
      ans.push(fact);
      factRecursion(n, fact * i, i);
    }

    factRecursion(n, 1, 1);
    return ans;
  }
}
