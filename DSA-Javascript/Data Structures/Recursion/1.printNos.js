class Solution {
  printNos(N) {
    let ans = [];
    function recursive(n) {
      if (n === 0) {
        return;
      }

      recursive(n - 1);
      ans.push(n);
    }

    recursive(N);
    console.log(ans.join(" "));
    //return ans
  }
}

let obj = new Solution();
obj.printNos(5);
